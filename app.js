// script src="os"
const os = require('os')
// const diskusage = require('diskusage');

console.log('Total memory: ' + os.totalmem() / 1024 / 1024 / 1024, 'GB');
console.log('Total memory: ' + os.freemem() / 1024 / 1024 / 1024, 'GB');

console.log('CPUs: ', os.cpus().length, ' cores');
os.cpus().forEach((cpu, index) => {
    console.log(`CPU #${index + 1}:`, cpu.model);
});
// (async () => {
// // Disk space information for drives C and D (for Windows)
// const drives = ['C:', 'D:']; // Adjust for other OS or drive letters as needed
// for (const drive of drives) {
//     const { available, total } = await diskusage.check(drive);
//     console.log(`${drive} Free Space:`, available / 1024 / 1024 / 1024, 'GB');
//     console.log(`${drive} Total Space:`, total / 1024 / 1024 / 1024, 'GB');
// }
// })()

// OS information
console.log('OS Platform:', os.platform());
console.log('OS Release:', os.release()); // only windows
console.log('OS Type:', os.type()); // only windows

// Other cool stuff
console.log('System Uptime:', os.uptime() / 60 / 60, 'hours');
console.log('Home Directory:', os.homedir());
console.log('Temporary Directory:', os.tmpdir());