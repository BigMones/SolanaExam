// MODULE IMPORT
import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
// USE IMPORT
import wallet from "../keys.json"


// VARIABLE DEFINITIONS
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com","finalized");

// AIR DROP
(async () => {

    try {

        const airDropReq = await connection.requestAirdrop(keypair.publicKey, 2* LAMPORTS_PER_SOL);
        console.log(wallet)
        console.log("Air Drop Req: " + airDropReq);
    } catch(error){
        console.error(error)
    }

}
)();