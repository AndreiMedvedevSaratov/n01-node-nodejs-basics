import * as fs from 'fs';

export const list = async () => {
    fs.readdir('src/fs/files/', (error, files) => {
        if (error) {
            throw new Error("FS operation failed");
        } else {
            console.log(files);
        }
    });
};

list();