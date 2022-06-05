import * as fs from 'fs';

export const copy = async () => {
    try {
        await fs.promises.mkdir('src/fs/files_copy');
        await fs.promises.access('src/fs/files/');
    } catch {
        throw new Error("FS operation failed");
    }

    fs.cp('src/fs/files/', 'src/fs/files_copy/', { recursive: true }, (error) => {
        if (error) {
            throw new Error("FS operation failed");
        }
    });
};

copy();