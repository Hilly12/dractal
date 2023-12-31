import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY } from "$env/static/private";
import pkg from "firebase-admin";

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: "dractal-site",
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY,
    }),
  });
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase admin initialization error: ", err.stack);
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
