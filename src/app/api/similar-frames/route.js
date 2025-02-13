import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Locate the JSON file
    const filePath = path.join(process.cwd(), "public", "processed_frames", "top_similar_frames.json");

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Read and parse JSON
    const fileData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileData);

    // ✅ Fix: Remove both "public/" and "processed_frames/" from paths
    const processedData = Object.fromEntries(
      Object.entries(jsonData).map(([key, value]) => [
        key,
        value.replace(/^public\/processed_frames\//, "").replace(/^processed_frames\//, ""), // Removes incorrect prefixes
      ])
    );

    return NextResponse.json(processedData, { status: 200 });

  } catch (error) {
    console.error("❌ Error loading similar frames:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
