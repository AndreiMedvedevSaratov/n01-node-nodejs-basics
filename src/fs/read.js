import * as fs from 'fs';

export const read = async () => {

    fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(new Error('FS operation failed'));
            return;
        }
        console.log(data);
    });
};

read();