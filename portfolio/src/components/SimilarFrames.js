"use client";

import { useEffect, useState } from "react";

export default function SimilarFrames() {
  const [frameData, setFrameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/similar-frames")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("✅ API Response:", data);
        if (data && Object.keys(data).length > 0) {
          setFrameData(data);
        } else {
          setError("No similar frames found.");
        }
      })
      .catch((error) => {
        console.error("❌ Error fetching similar frames:", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Most Visually Similar Frames</h2>

      {loading ? (
        <p>Loading similar frames...</p>
      ) : error ? (
        <p className="text-red-500">❌ {error}</p>
      ) : (
        Object.entries(frameData).map(([frame, processedPath]) => (
          <div key={frame} className="my-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{frame}</h3>
            <img
              src={`/processed_frames/${processedPath}`} // ✅ Ensure correct path
              alt={frame}
              className="w-full max-w-lg mx-auto rounded-lg shadow-md"
              onError={(e) => {
                console.error(`❌ Image failed to load: ${e.target.src}`);
                e.target.style.display = "none";
              }}
            />
          </div>
        ))
      )}
    </div>
  );
}
