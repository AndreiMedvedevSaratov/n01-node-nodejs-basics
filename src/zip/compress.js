import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
    const stream = createReadStream('src/zip/files/fileToCompress.txt');

    stream
        .pipe(createGzip())
        .pipe(createWriteStream('src/zip/files/archive.gz'))
        .on('finish', () => {
            console.log('Compression completed!');
        })
};

compress();