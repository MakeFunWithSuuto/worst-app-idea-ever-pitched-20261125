import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "MuteStream is a $12.99/month hi-fi streaming app for audiophiles that delivers 4GB per hour of studio-mastered, 24-bit uncompressed silence over cellular data straight to your Bluetooth headphones.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
