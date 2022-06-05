import * as fs from 'fs';

export const create = async () => {

    try {
        if (fs.existsSync('src/fs/files/fresh.txt')) {
            throw console.log(new Error('FS operation failed'));
        } else {
            fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', function (err) {
                if (err) throw console.log(new Error('FS operation failed'));
                console.log('File is created successfully.');
            });
        }
    } catch (err) { }
    
};

create();