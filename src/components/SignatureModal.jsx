// src/components/SignatureModal.jsx
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";

const fontOptions = [
  { name: "Pacifico", font: "'Pacifico', cursive" },
  { name: "Great Vibes", font: "'Great Vibes', cursive" },
  { name: "Dancing Script", font: "'Dancing Script', cursive" },
];

export default function SignatureModal({ onClose, onSave }) {
  const canvasRef = useRef(null);
  const [drawMode, setDrawMode] = useState(true);
  const [typedSignature, setTypedSignature] = useState("");
  const [selectedFont, setSelectedFont] = useState(fontOptions[0].font);

  const isDrawing = useRef(false);

  const startDrawing = (e) => {
    if (!drawMode) return;
    isDrawing.current = true;
    const ctx = canvasRef.current.getContext("2d");
    const pos = getMousePos(canvasRef.current, e.nativeEvent);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const getMousePos = (canvas, evt) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  };

  const draw = (e) => {
    if (!drawMode || !isDrawing.current) return;
    const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });
    const pos = getMousePos(canvasRef.current, e.nativeEvent);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const handleSaveDraw = () => {
    const dataUrl = canvasRef.current.toDataURL("image/png");
    onSave(dataUrl, "image");
    onClose();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      onSave(reader.result, "image");
      onClose();
    };
    reader.readAsDataURL(file);
  };

  const handleSaveTyped = async () => {
    if (!typedSignature.trim()) return;
    const previewEl = document.getElementById("typed-preview");
    if (!previewEl) return;

    const canvas = await html2canvas(previewEl, {
      backgroundColor: "#ffffff",
    });
    const dataUrl = canvas.toDataURL("image/png");

    onSave(dataUrl, "image");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded p-6 w-full max-w-lg space-y-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-2">Add Signature</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setDrawMode(true)}
            className={`px-3 py-1 rounded border ${
              drawMode ? "bg-purple-600 text-white" : "bg-gray-100"
            }`}
          >
            Draw
          </button>

          <button
            onClick={() => setDrawMode(false)}
            className={`px-3 py-1 rounded border ${
              !drawMode ? "bg-purple-600 text-white" : "bg-gray-100"
            }`}
          >
            Type
          </button>

          <label className="px-3 py-1 rounded border cursor-pointer bg-gray-100">
            Upload
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
          </label>
        </div>

        {drawMode ? (
          <>
            <canvas
              ref={canvasRef}
              width={400}
              height={150}
              className="border border-gray-400 rounded w-full"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            />
            <div className="flex justify-between mt-2">
              <button
                onClick={clearCanvas}
                className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Clear
              </button>
              <button
                onClick={handleSaveDraw}
                className="px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-2">
            <input
              type="text"
              value={typedSignature}
              onChange={(e) => setTypedSignature(e.target.value)}
              placeholder="Type your signature"
              className="w-full p-2 border rounded"
            />

            <select
              className="w-full p-2 border rounded"
              onChange={(e) => setSelectedFont(e.target.value)}
              value={selectedFont}
            >
              {fontOptions.map((font) => (
                <option key={font.name} value={font.font}>
                  {font.name}
                </option>
              ))}
            </select>
            <div className="flex flex-col space-y-4">
              <div
                id="typed-preview"
                className="w-full h-14 rounded text-2xl overflow-hidden flex items-center justify-center"
                style={{
                  fontFamily: selectedFont,
                  color: "#000000",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                {typedSignature || "Preview"}
              </div>

              <button
                onClick={handleSaveTyped}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 self-start"
              >
                Save Typed Signature
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
