import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

export async function GET() {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(process.cwd(), "scripts/extract_color_palette.py");

    console.log("Executing Python script at:", scriptPath);

    exec(`python3 ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error("Script execution error:", stderr);
        return resolve(NextResponse.json({ error: "Script execution failed", details: stderr }, { status: 500 }));
      }

      try {
        console.log("Raw script output:", stdout);
        const jsonResponse = JSON.parse(stdout);
        return resolve(NextResponse.json(jsonResponse));
      } catch (parseError) {
        console.error("JSON Parsing Error:", parseError);
        return resolve(NextResponse.json({ error: "Invalid JSON response" }, { status: 500 }));
      }
    });
  });
}
