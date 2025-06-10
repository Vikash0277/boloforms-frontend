import { useState ,useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "../components/Sidebar";
import PDFViewer from "../components/PDFViewer";
import DraggableResizableBox from "../components/DraggableResizableText";

import { PDFDocument, rgb } from "pdf-lib";
import axiosInstance from "../../utils/axiosInstance";
import { useParams } from "react-router-dom";

export default function SignDocument() {
  const { documentId, email } = useParams();
  const [elements, setElements] = useState([]);
  const [documentData, setDocumentData] = useState(null);
  const [signerInfo, setSignerInfo] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const res = await axiosInstance.get(`/sign/${documentId}/${email}`);
        const data = res.data;

        setDocumentData(data.document);
        setSignerInfo(data.signer);
      } catch (err) {
        console.error("❌ Failed to load document:", err.message);
        alert("You are not authorized or the document does not exist.");
      }
    };

    fetchDocument();
  }, [documentId, email]);

  

  const handleAddElement = ({ type, content }) => {
    setElements((prev) => [
      ...prev,
      {
        id: uuidv4(),
        type,
        content,
        position: { x: 50, y: 50 },
        size: { width: 200, height: 60 },
        assignedTo: signerInfo?.name || "Signer",

      },
    ]);
  };

  const handleUpdate = (id, newContent) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, content: newContent } : el))
    );
  };

  const handlePositionChange = (id, newPosition) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, position: newPosition } : el))
    );
  };

  const handleSizeChange = (id, newSize) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, size: newSize } : el))
    );
  };

  const handleDelete = (id) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };

  const handleSave = async () => {
    try {
      const existingPdfBytes = await fetch(documentData.url).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const page = pdfDoc.getPages()[0];
      const { height: pageHeight } = page.getSize();

      for (const el of elements) {
        let { x, y } = el.position || {};
        let { width, height } = el.size || {};

        // Ensure all values are numbers
        x = Number(x);
        y = Number(y);
        width = Number(width);
        height = Number(height);

        if ([x, y, width, height].some((val) => Number.isNaN(val))) {
          console.warn("Skipping element with invalid values:", el);
          continue;
        }

        const pdfY = pageHeight - y - height;

        if (el.type === "text") {
          page.drawText(el.content || "", {
            x,
            y: pdfY,
            size: 14,
            color: rgb(0, 0, 0),
          });
        } else if (el.type === "image") {
          try {
            const base64 = el.content;
            const mimeType = base64.split(";")[0].split(":")[1];
            const imageBytes = Uint8Array.from(
              atob(base64.split(",")[1]),
              (char) => char.charCodeAt(0)
            );

            let embeddedImage;
            if (mimeType === "image/png") {
              embeddedImage = await pdfDoc.embedPng(imageBytes);
            } else if (mimeType === "image/jpeg" || mimeType === "image/jpg") {
              embeddedImage = await pdfDoc.embedJpg(imageBytes);
            } else {
              console.warn("Unsupported image type:", mimeType);
              continue;
            }

            page.drawImage(embeddedImage, {
              x,
              y: pdfY,
              width,
              height,
            });
          } catch (err) {
            console.error("Failed to embed image:", err);
          }
        }
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "signed-document.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to save document:", err);
    }
  };
  if (!documentData || !signerInfo) {
    return <div className="p-8 text-gray-600">Loading document...</div>;
  }

return (
  <div className="flex h-screen overflow-hidden">
    {/* Sidebar - fixed width and non-scrollable */}
    

    <div className="w-[250px] bg-gray-200 p-4 shrink-0 flex flex-col h-screen">
  <Sidebar onAddElement={handleAddElement} />
  
  <div className="mt-4 bg-gray-100 p-4 overflow-y-auto flex-1 rounded">
      <h1>Assigned to :</h1>
      <h1 className="text-sm font-bold bg-blue-300 rounded-md pl-3">{signerInfo.name}</h1>
      <h1>File name :</h1>
      <h2 className="text-sm font-bold bg-blue-300 rounded-md pl-3 mb-2">{documentData.fileName}</h2>
      

      <h2 className="text-lg font-semibold mb-2">Fields</h2>
      <ul className="space-y-2">
        {elements.length === 0 && <li>No fields added yet</li>}
        {elements.map((el) => (
          <li key={el.id} className="text-sm border rounded p-2 bg-white">
        <h1>{signerInfo.name}</h1>
          <div><strong>Type:</strong> {el.type}</div>
            <div><strong>Pos:</strong> x: {Math.round(el.position?.x)}, y: {Math.round(el.position?.y)}</div>
            <div><strong>Size:</strong> w: {Math.round(el.size?.width)}, h: {Math.round(el.size?.height)}</div>
            <div><strong>Signer:</strong> {el.assignedTo || "Unassigned"}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>

    {/* Main content - scrollable */}
    <main className="flex-1 overflow-y-auto bg-white p-4 relative">
      <div className="flex justify-center">
        {documentData?.url ? (
          <PDFViewer PDFpath={documentData.url}>
            {elements.map((el) => (
            <DraggableResizableBox
              key={el.id}
              id={el.id}
              type={el.type}
              content={el.content}
              onUpdate={(newContent) => handleUpdate(el.id, newContent)}
              onDelete={() => handleDelete(el.id)}
              initialPosition={el.position}
              initialSize={el.size}
              onPositionChange={(id, pos) => handlePositionChange(id, pos)}
              onSizeChange={(id, size) => handleSizeChange(id, size)}
            />
          ))}
          </PDFViewer>
        ) : (
          <div className="text-red-500">Unable to load PDF document.</div>
        )}

      </div>

      <button
        onClick={handleSave}
        className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-2 rounded shadow"
      >
        Save Document
      </button>
    </main>
  </div>
);

}
