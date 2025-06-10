// src/components/SignatureButton.jsx
import { useState } from "react";
import SignatureModal from "./SignatureModal";

export default function SignatureButton({ onAddSignature }) {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (data, type) => {
    onAddSignature({ type: type === "text" ? "text" : "image", content: data });
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-purple-500 text-white px-4 py-2 rounded w-full hover:bg-purple-600"
      >
        Add Signature
      </button>

      {showModal && <SignatureModal onClose={() => setShowModal(false)} onSave={handleSave} />}
    </>
  );
}
