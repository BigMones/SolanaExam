import { Keypair } from "@solana/web3.js";

const fs = require("fs");
//Generaye Keys

const keypair = Keypair.generate();

let json = JSON.stringify(Array.from(keypair.secretKey));
fs.writeFile("keys.json", json, "utf8", (err: NodeJS.ErrnoException | null) => {
    if (err) {
        console.error("An error occurred while writing JSON Object to File.");
        return console.error(err);
    }
    console.log("JSON file has been saved.");
});

let publick = JSON.stringify(keypair.publicKey.toBase58().toString());

fs.writeFile(
    "public.json",
    publick,
    "utf8",
    (err: NodeJS.ErrnoException | null) => {
        if (err) {
            console.error("An error occurred while writing JSON Object to File.");
            return console.error(err);
        }
        console.log("JSON file has been saved.");
    }
);

console.log("Public Key: " + keypair.publicKey.toBase58().toString());
console.log("Private Key Key: " + keypair.secretKey.toString());
