import * as fs from 'fs';

export const rename = async () => {
    try {
        if (fs.existsSync('src/fs/files/properFilename.md') || !fs.existsSync('src/fs/files/wrongFilename.txt')) {
            throw console.log(new Error('FS operation failed'));
        } else {
            fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', () => {
                console.log('File is renamed successfully.');
            });
        }
    } catch (err) { }

};

rename();