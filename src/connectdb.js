// import the tools we need from libraries
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
// import secret credentials

import { creds } from "./creds.js";

//connect to firebase project with our creds
initializeApp ({
    credential: cert(creds),
});

//once connected connect to firestore database
export const db = getFirestore();

