import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import "pdfjs-dist/web/pdf_viewer.css";
import "react-resizable/css/styles.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

export default function PDFViewer({ PDFpath, children }) {
  const canvasRef = useRef(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState(null);
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    if (!PDFpath) return;

    let isMounted = true;
    const loadingTask = pdfjsLib.getDocument(PDFpath);

    loadingTask.promise
      .then((pdf) => {
        if (!isMounted) return;
        setNumPages(pdf.numPages);

        return pdf.getPage(pageNum).then((page) => {
          if (!isMounted) return;

          const viewport = page.getViewport({ scale: 1 });
          setViewport(viewport);

          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport,
          };

          return page.render(renderContext).promise;
        });
      })
      .catch((err) => {
        console.error("Error loading PDF:", err);
        if (isMounted) setError(err.message);
      });

    return () => {
      isMounted = false;
    };
  }, [PDFpath, pageNum]);

  const goPrevPage = () => setPageNum((prev) => Math.max(prev - 1, 1));
  const goNextPage = () => setPageNum((prev) => Math.min(prev + 1, numPages));

  if (error) {
    return (
      <div className="text-red-600 p-4">
        <p>Error loading PDF: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center max-w-screen  bg-gray-50 p-4 relative w-full">
      <div
        className="relative"
        style={{
          width: viewport ? viewport.width : "auto",
          height: viewport ? viewport.height : "auto",
        }}
      >
        <canvas
          ref={canvasRef}
          className="shadow-lg border border-gray-300 max-w-full"
        />

        {/* Render draggable boxes absolutely over the canvas */}
        <div className="absolute top-0 left-0 w-full h-full">
          {children}
        </div>
      </div>

      <div className="mt-4 flex gap-4 items-center">
        <button
          onClick={goPrevPage}
          disabled={pageNum <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {pageNum} of {numPages}
        </span>
        <button
          onClick={goNextPage}
          disabled={pageNum >= numPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
