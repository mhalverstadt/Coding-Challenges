const fs = require("fs");
const input = fs.readFileSync("input.txt", { encoding: "utf-8" })

let guide = input.toString()
	             .trim()
	             .split('\n')
	             .map((v) => v.split(' '))



