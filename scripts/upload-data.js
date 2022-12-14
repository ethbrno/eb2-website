import Arweave from "arweave";
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const arweave = Arweave.init({
    host: "arweave.net", // Hostname or IP address for a Arweave host
    port: 443, // Port
    protocol: "https", // Network protocol http or https
    timeout: 20000, // Network request timeouts in milliseconds
    logging: false, // Enable network request logging
});

const datajson = fs.readFileSync('./static/data.json', 'utf8');
const datamarkdown = fs.readFileSync('./static/hacker-manual.md', 'utf8');
const { AR_KEY } = process.env;

if (!datajson || !datamarkdown || !AR_KEY) { console.error("datafiles or AR_KEY missing"); }


let uploadJSON = await arweave.createTransaction({
    data: datajson
}, AR_KEY);

uploadJSON.addTag('Content-Type', 'application/json');
uploadJSON.addTag("AppName", "ETHBrno");
uploadJSON.addTag("DataTag", "json");
await arweave.transactions.sign(uploadJSON, AR_KEY);
//console.log(uploadJSON);

let uploader = await arweave.transactions.getUploader(uploadJSON);

while (!uploader.isComplete) {
    await uploader.uploadChunk();
    console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
}

console.log("Data JSON uploaded in transaction:", uploadJSON.id);

let uploadMD = await arweave.createTransaction({
    data: datamarkdown
}, AR_KEY);

uploadMD.addTag('Content-Type', 'text/plain');
uploadMD.addTag('charset', 'UTF-8');
uploadMD.addTag("AppName", "ETHBrno");
uploadMD.addTag("DataTag", "markdown");
await arweave.transactions.sign(uploadMD, AR_KEY);
//console.log(uploadJSON);

let uploader2 = await arweave.transactions.getUploader(uploadMD);

while (!uploader2.isComplete) {
    await uploader2.uploadChunk();
    console.log(`${uploader2.pctComplete}% complete, ${uploader2.uploadedChunks}/${uploader2.totalChunks}`);
}

console.log("Content markdown uploaded in transaction:", uploadMD.id);