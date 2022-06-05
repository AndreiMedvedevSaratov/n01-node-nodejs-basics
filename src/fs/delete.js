import * as fs from 'fs';

export const remove = async () => {
    fs.rm('src/fs/files/fileToRemove.txt', { recursive: true }, (error) => {
        if (error) {
            console.log(new Error('FS operation failed'));
        }
    });
};

remove();