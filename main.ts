const fortune = "Fortune: your leverage exceeded your wisdom; wisdom, unlike margin, cannot be called.";

const fs = require("node:fs");
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", fortune + "\n");
