import process from 'node:process';

console.log('waiting one second...');

await new Promise((resolve) => setTimeout(resolve, 1000));

console.log('process.argv is:');
console.log(process.argv);
