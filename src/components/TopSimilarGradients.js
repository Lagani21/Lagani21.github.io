"use client";

import { useEffect, useState } from "react";

export default function TopSimilarGradients() {
  const [gradientData, setGradientData] = useState(null);

  useEffect(() => {
    fetch("/api/similar-gradients")
      .then((res) => res.json())
      .then((data) => setGradientData(data))
      .catch((error) => console.error("Error fetching similar gradients:", error));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Top 5 Visually Similar Gradients</h2>
      {gradientData ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(gradientData).map(([filename, path]) => (
            <div key={filename} className="shadow-lg rounded-lg p-2">
              <img
                src={`/${path}`}
                alt={filename}
                className="w-full rounded-lg"
              />
              <p className="text-center mt-2">{filename}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading color gradients...</p>
      )}
    </div>
  );
}
