import * as fs from 'fs';

export const read = async () => {

    const readStream = fs.createReadStream('src/streams/files/fileToRead.txt', { encoding: "utf-8" });

    readStream
        .on("data", (chunk) => {
            process.stdout.write(chunk);
        })
        .on("error", (error) => {
            process.stdout.write(error);
        })
        .on("end", () => {
            readStream.destroy();
        });

};

read(); 