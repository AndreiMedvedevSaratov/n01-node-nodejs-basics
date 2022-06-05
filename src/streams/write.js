import * as fs from 'fs';

export const write = async () => {
    const writeStream = fs.createWriteStream('src/streams/files/fileToWrite.txt', { encoding: "utf-8" });

    process.stdin.pipe(writeStream);
};

write();