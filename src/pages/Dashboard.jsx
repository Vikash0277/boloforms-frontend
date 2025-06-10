import React, { useRef, useState } from "react";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [docName, setDocName] = useState('');
  const [signers, setSigners] = useState([{ id: Date.now(), name: '', email: '' }]);

  const handleBoxClick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    setFileName(e.target.files.length > 0 ? e.target.files[0].name : '');
  };

  const handleSamplePDF = async () => {
            try {
                const response = await fetch("/assets/dummy.pdf"); // relative to public/
                const blob = await response.blob();
                const file = new File([blob], "dummy.pdf", { type: blob.type });

                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);

                const input = fileInputRef.current;
                input.files = dataTransfer.files;

                setFileName(file.name); // Update displayed file name
            } catch (error) {
                console.error("Failed to load sample PDF", error);
            }
        };


    const handleAddSigner = () => {
        setSigners([...signers, { id: Date.now(), name: '', email: '' }]);
    };

    const handleRemoveSigner = (id) => {
        setSigners(signers.length === 1 ? signers : signers.filter(signer => signer.id !== id));
    };

    const handleSignerChange = (id, field, value) => {
        setSigners(signers.map(signer => signer.id === id ? { ...signer, [field]: value } : signer));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fileInputRef.current?.files[0]) {
            alert("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", fileInputRef.current.files[0]);
        formData.append("docName", docName);
        formData.append("signers", JSON.stringify(signers.map(({ name, email }) => ({ name, email })))); // no `id` field

        try {
            const response = await axiosInstance.post("/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
            });

            console.log("Upload success:", response.data);
            const documentId = response.data.document._id || response.data.documentId;

            const success = await axiosInstance.post("/sendMail",{documentId});
            
            if(success){
              alert("Mail send Successfully");
              console.log("email sent sucessfully");
            }
            else{
              alert("mail not sent");
            }
            
            const loginEmail = localStorage.getItem("userEmail");
            const matchedSigner = signers.find(signer => signer.email === loginEmail);

            if (matchedSigner) {
              navigate(`/sign/${documentId}/${encodeURIComponent(loginEmail)}`);
            } else {
              alert("You're not a signer for this document.");
            }


        } catch (error) {
            console.log("Upload error:", error.response?.data || error.message || error);
            alert("File upload failed.");
        }
    };


  return (
    <div className="bg-gray-50 min-h-screen overflow-y-scroll">
      <Navbar />

      <div className="ml-80 mr-80">
        <div className="flex flex-col items-center justify-center">
          <div
            className="flex items-center justify-center h-60 bg-gray-100 w-4xl mt-20 rounded-md border-2 border-gray-300 border-dashed cursor-pointer"
            onClick={handleBoxClick}
          >
            <input
              type="file"
              name="file"
              accept=".pdf, .doc, .docx, .txt"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center">
              <FontAwesomeIcon icon={faUpload} className="text-4xl text-gray-400" />
              <p className="text-sm text-gray-500 italic">
                {fileName || 'No file chosen'}
              </p>
            </div>
          </div>
        </div>

        <div
            className="bg-white rounded-md shadow-md mt-2 h-10 w-60 text-purple-500 pt-2 pl-2 cursor-pointer"
            onClick={handleSamplePDF}
            >
            <FontAwesomeIcon icon={faPlusSquare} className="text-2xl mr-2" />
            Add sample pdf
        </div>


        <form onSubmit={handleSubmit} encType="multipart/form-data" className="pt-10">

          <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
            Document Name
          </label>
          <input
            type="text"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            placeholder="Enter document name"
            className="border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-bold">
              Add Signer
            </label>
            <p className="text-sm text-gray-500 pb-4">Add signer to your document</p>

            {signers.map((signer, index) => (
              <div key={signer.id} className="flex mb-2 items-center space-x-4">
                <input
                  type="text"
                  value={signer.name}
                  onChange={(e) => handleSignerChange(signer.id, "name", e.target.value)}
                  placeholder="Enter Name"
                  className="border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <input
                  type="email"
                  value={signer.email}
                  onChange={(e) => handleSignerChange(signer.id, "email", e.target.value)}
                  placeholder="Enter Email"
                  className="border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                {signers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveSigner(signer.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                    title="Remove signer"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                )}
              </div>
            ))}

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddSigner}
                className="bg-purple-500 w-40 h-10 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
                Add signer
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-500 w-80 h-10 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send for Signature
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
