import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, where } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAeC-aiHWkwhXY6s1BPNDn2AnVDWDeUqPE",
    authDomain: "datamoba-bfee7.firebaseapp.com",
    projectId: "datamoba-bfee7",
    storageBucket: "datamoba-bfee7.appspot.com",
    messagingSenderId: "317221937634",
    appId: "1:317221937634:web:bb3b147da946801348d9bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getUsuario = async () => {


    const citiesCol = collection(db, 'usuarios');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
export const getLogin = async (email, clave) => {
    const citiesCol = collection(db, 'usuarios');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    const filtrarData = cityList.filter(obj => obj.email == email && obj.clave == clave);
    return filtrarData;

}
export const getProfile = async (email) => {
    const citiesCol = collection(db, 'usuarios');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    const filtrarData = cityList.filter(obj => obj.email == email);
    return filtrarData;
}
export const addUsuarios = async (data) => {
    await addDoc(collection(db, "usuarios"), data);
    return true;
}

