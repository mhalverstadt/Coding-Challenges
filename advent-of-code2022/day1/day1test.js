import * as fs from "node:fs";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();

const YEAR = 2022;
const DAY = 1;
const SESSION_VALUE = process.env.SESSION_VALUE;

fetch(`https://adventofcode.com/${YEAR}/day/${DAY}/input`, {
  headers: {
    cookie: `session=${SESSION_VALUE}`,
  },
})
  .then((response) => response.text())
  .then((data) => {
    fs.writeFileSync(`./day-${DAY}-input.txt`, data);
    console.log(`Created input file for day ${DAY} of ${YEAR}.`);
  });