import { Transform } from "stream";

export const transform = async () => {
    const transformedInfo = new Transform({
        transform(chunk, _, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');

            this.push(reversedChunk);

            callback();
        },
    });

    process.stdin.pipe(transformedInfo).pipe(process.stdout); 
};

transform();