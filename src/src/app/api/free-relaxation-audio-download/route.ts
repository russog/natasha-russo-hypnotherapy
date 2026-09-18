import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const audioFilename = "natasha-russo-relaxation-audio-louder.mp3";

export async function GET() {
    const audioPath = path.join(process.cwd(), "public", "audio", audioFilename);
    const audio = await readFile(audioPath);

    return new Response(audio, {
        headers: {
            "Content-Type": "audio/mpeg",
            "Content-Length": String(audio.byteLength),
            "Content-Disposition": `attachment; filename="${audioFilename}"`,
            "Cache-Control": "public, max-age=31536000, immutable",
        },
    });
}
