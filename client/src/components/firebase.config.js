import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDRepfWoYuGoix1b_fdu3PFZraXpsPJJEM",
  authDomain: "job-portal-162c9.firebaseapp.com",
  projectId: "job-portal-162c9",
  storageBucket: "job-portal-162c9.appspot.com",
  messagingSenderId: "900307327593",
  appId: "1:900307327593:web:35ee78efcdc5f8bf8f20f8",
  measurementId: "G-GGRJ7RTRKC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const storage = getStorage(app);

export {
    auth,
    storage,
};