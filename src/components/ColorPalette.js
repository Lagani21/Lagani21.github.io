"use client";

import { useEffect, useState } from "react";

export default function ColorPalette() {
  const [colorData, setColorData] = useState(null);

  useEffect(() => {
    fetch("/api/extract-colors")
      .then((res) => res.json())
      .then((data) => setColorData(data))
      .catch((error) => console.error("Error fetching color data:", error));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Color Palette Analysis</h2>
      {colorData ? (
        Object.entries(colorData).map(([frame, { colors, proportions }]) => (
          <div key={frame} className="my-6 text-center">
            {/* Movie Frame Image */}
            <img
              src={`/${frame}`} // Ensure frame images are inside /public/
              alt="Movie Frame"
              className="w-full max-w-lg mx-auto rounded-lg shadow-md"
            />

            {/* Color Palette */}
            <div className="flex justify-center mt-3 border border-gray-700 rounded overflow-hidden">
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                    width: `${proportions[index] * 100}%`,
                    height: "50px",
                  }}
                  className="transition hover:opacity-80"
                  title={`RGB(${color[0]}, ${color[1]}, ${color[2]})`}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading color data...</p>
      )}
    </div>
  );
}
