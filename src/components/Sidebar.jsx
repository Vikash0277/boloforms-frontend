import React, {  useState } from "react";
import SignatureButton from "./SignatureButton";

export default function Sidebar({ onAddElement }) {
  const [textInput, setTextInput] = useState("");
  const [showTextInput, setShowTextInput] = useState(false);

  const handleTextClick = () => setShowTextInput(true);

  const handleTextSubmit = () => {
    if (textInput.trim()) {
      onAddElement({
        type: "text",
        content: textInput.trim(),
      });
      setTextInput("");
      setShowTextInput(false);
    }
  };

  return (
    <div className="bg-gray-200 w-56 p-4 space-y-4 text-purple-800">
      <h2 className="text-2l font-bold">Sign Document</h2>
       
      <button
        onClick={handleTextClick}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full"
      >
        Add Text
      </button>

      {showTextInput && (
        <div className="space-y-2">
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter text"
            className="w-full px-2 py-1 border rounded"
          />
          <button
            onClick={handleTextSubmit}
            className="bg-purple-500 text-white px-3 py-1 rounded w-full hover:bg-purple-600"
          >
            Add
          </button>
        </div>
      )}

      {/* SignatureButton replaces the old signature upload button */}
      <SignatureButton onAddSignature={onAddElement} />

      
    </div>
  );
}


