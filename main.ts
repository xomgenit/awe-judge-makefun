const fs = require("node:fs");

const entry =
  "The tide comes in over the flat rocks at dusk, filling each pool one by one, slow as the moon draws it in. " +
  "Gulls rest on the stone. " +
  "The water settles in the lowest places, dark and still, holding the last light. " +
  "The stars come out one by one, and the water takes them in.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
