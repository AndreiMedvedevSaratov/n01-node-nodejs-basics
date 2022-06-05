import { fork } from 'child_process'

export const spawnChildProcess = async (args) => {
    fork('src/cp/files/script.js', args)

    process.stdin.on('info',
        (info) => process.stdout.write(`Recieved from child process: ${info.toString()}`));
}

spawnChildProcess(process.argv)