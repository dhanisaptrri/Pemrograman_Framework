import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC50QNQ54SxzLQ-X63M-PZSuQauNMblUes",
  authDomain: "framework-next-c7ed3.firebaseapp.com",
  projectId: "framework-next-c7ed3",
  storageBucket: "framework-next-c7ed3.firebasestorage.app",
  messagingSenderId: "886587621997",
  appId: "1:886587621997:web:559ec1bd30808b79613564"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
