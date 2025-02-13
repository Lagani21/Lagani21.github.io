"use client";

import { useState } from "react";

const directors = [
  { name: "Christopher Nolan", value: "nolan" },
  { name: "Quentin Tarantino", value: "tarantino" },
  { name: "Wes Anderson", value: "anderson" },
  { name: "Steven Spielberg", value: "spielberg" },
  { name: "Martin Scorsese", value: "scorsese" }
];

export default function DirectorComparison() {
  const [director1, setDirector1] = useState("nolan");
  const [director2, setDirector2] = useState("tarantino");

  return (
    <div className="container mx-auto py-10 px-5 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Compare Directors</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <select
            value={director1}
            onChange={(e) => setDirector1(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          >
            {directors.map((dir) => (
              <option key={dir.value} value={dir.value}>
                {dir.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={director2}
            onChange={(e) => setDirector2(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          >
            {directors.map((dir) => (
              <option key={dir.value} value={dir.value}>
                {dir.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-600 pt-5">
        <div>
          <h2 className="text-xl font-semibold">{director1}'s Filmmaking Style</h2>
          <p>Color Grading: TBD</p>
          <p>Cinematography: TBD</p>
          <p>Frequent Actors: TBD</p>
          <p>Unique Traits: TBD</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{director2}'s Filmmaking Style</h2>
          <p>Color Grading: TBD</p>
          <p>Cinematography: TBD</p>
          <p>Frequent Actors: TBD</p>
          <p>Unique Traits: TBD</p>
        </div>
      </div>
    </div>
  );
}
