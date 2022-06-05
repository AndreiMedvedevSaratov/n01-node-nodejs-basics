import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async () => {
    const stream = createReadStream('src/zip/files/archive.gz');

    stream
        .pipe(createUnzip())
        .pipe(createWriteStream('src/zip/files/fileToCompress.txt'))
        .on('finish', () => {
            console.log('Decompression completed!')
        })
};

decompress();