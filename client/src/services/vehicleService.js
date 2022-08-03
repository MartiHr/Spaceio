import db from '../firebase';

import { collection, doc, getDocs, getDoc, addDoc, setDoc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";

const vehiclesRef = collection(db, "vehicles");

export const getAll = async () => {
    const q = query(vehiclesRef, orderBy("creationDate"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        _id: doc.id,
        ...(doc.data()),
        // a: doc.data().creationDate.toDate()
    }));
}

export const getOne = async (id) => {
    const docRef = doc(db, 'vehicles', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        return "No such document!";
    }
}

export const create = async (data) => {
    const docRef = await addDoc(vehiclesRef, data);

    return `Document written with ID: ${docRef.id}`;
}

export const edit = async (id, data) => {
    const docRef = doc(db, 'vehicles', id);
    const docSnap = await setDoc(docRef, data);

    return 'Document updated!';
}

export const remove = async (id) => {
    const docRef = doc(db, 'vehicles', id);

    const res = await deleteDoc(docRef);

    return res;
}