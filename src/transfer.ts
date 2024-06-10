import { Keypair, Connection, LAMPORTS_PER_SOL, SystemProgram, Transaction, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";

import wallet from '../keys.json';
import publick from '../public.json'

const from = Keypair.fromSecretKey(new Uint8Array(wallet));
const to = new PublicKey(publick);

const connect = new Connection("https://api.devnet.solana.com", "confirmed");

//TRANSACTION CREATE

(async ()=> {
    console.log("debug1")
    try{
        const tranferInstruction = SystemProgram.transfer({
            fromPubkey:     from.publicKey, 
            toPubkey:       to, 
            lamports:       0.1*LAMPORTS_PER_SOL
        
        })
        console.log("Debug2")

        const transaction = new Transaction().add(tranferInstruction);
        //transaction.feePayer = from.publicKey;

        const txMash = await sendAndConfirmTransaction(connect,transaction,[from],{ commitment: "finalized", skipPreflight : true});
                // Attendiamo la conferma della transazione e poi logghiamao il link alla transazione sull'explorer di Solana
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txMash}?cluster=devnet`);

    } catch(error){
        console.error(error);
    }
})();