import fs from "fs";
import crypto from "crypto";

export const calculateHash = async () => {
    const temp = await fs.promises.readFile('src/hash/files/fileToCalculateHashFor.txt');

    const hashSum = crypto.createHash("sha256").update(temp).digest("hex");

    console.log(hashSum);
};

calculateHash();