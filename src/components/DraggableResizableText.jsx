import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";

export default function DraggableResizableBox({
  id,
  type,
  content,
  onUpdate,
  onDelete,
  initialPosition = { x: 0, y: 0 },
  initialSize = { width: 200, height: 60 },
  onPositionChange,
  onSizeChange,
}) {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);

  // Drag handlers
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleDragStop = (e, data) => {
    onPositionChange?.(id, { x: data.x, y: data.y });
  };

  // Resize handlers
  const handleResize = (event, { size }) => {
    setSize(size);
  };

  const handleResizeStop = (event, { size }) => {
    setSize(size);
    onSizeChange?.(id, size);
  };

  // Calculate font size based on box size
  const minFontSize = 12;
  const maxFontSize = 72;
  const minSize = 40;
  const maxSize = 300;
  const baseSize = Math.min(size.width, size.height);
  const fontSize =
    baseSize <= minSize
      ? minFontSize
      : baseSize >= maxSize
      ? maxFontSize
      : ((baseSize - minSize) / (maxSize - minSize)) * (maxFontSize - minFontSize) +
        minFontSize;

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      position={position}
      onDrag={handleDrag}
      onStop={handleDragStop}
    >
      <div
        ref={nodeRef}
        className="absolute z-10 group"
        style={{ left: 0, top: 0, userSelect: "none" }}
      >
        <ResizableBox
          width={size.width}
          height={size.height}
          minConstraints={[40, 40]}
          maxConstraints={[1000, 1000]}
          resizeHandles={["se", "n", "s", "e", "w", "ne", "nw", "sw"]}
          onResize={handleResize}
          onResizeStop={handleResizeStop}
          className="bg-transparent relative border border-transparent group-hover:border-blue-500 transition-all duration-200 ease-in-out"
        >
          <button
            onClick={onDelete}
            className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 hidden group-hover:flex items-center justify-center"
          >
            ✕
          </button>

          {type === "text" ? (
            <input
              type="text"
              value={content}
              onChange={(e) => onUpdate(e.target.value)}
              style={{ fontSize: `${fontSize}px` }}
              className="w-full h-full p-2 text-black focus:outline-none bg-transparent"
            />
          ) : (
            <img
              src={content}
              alt="signature"
              className="w-full h-full object-contain"
              style={{ userSelect: "auto" }}
            />
          )}
        </ResizableBox>
      </div>
    </Draggable>
  );
}

