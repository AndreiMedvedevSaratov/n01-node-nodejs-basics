import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
    function runWorker(value) {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', { workerData: value });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', () => {
                reject(new Error('Worker stopped'));
            });
        });
    }

    const result = [];

    for (let addValue = 0; addValue < cpus().length; addValue++) {
        result.push(runWorker(10 + addValue));
    }

    console.log((await Promise.all(result)).toString().split(','));
};

performCalculations();