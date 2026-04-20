import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId); 
export const auth = getAuth(app);

// Connectivity check
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Firestore connection check failed: client is offline or permissions issue.");
    }
  }
}

testConnection();

export interface WarrantyRecord {
  id: string;
  customerName: string;
  customerEmail: string;
  vehicleVin: string;
  vehicleModel: string;
  installationDate: string;
  expiryDate: string;
  productName: string;
  installerName: string;
  status: 'Active' | 'Expired' | 'Void';
}
