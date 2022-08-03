import db from '../firebase';

import { collection, doc, getDocs, addDoc, getDoc, deleteDoc } from "firebase/firestore";

export const getAll = async () => {
    const snapshot = await getDocs(collection(db, 'vehicles'), );

    const q = query(citiesRef, orderBy("name"), limit(3));


    return snapshot.docs.map(doc => ({
        _id: doc.id,
        ...(doc.data())
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
    const docRef = await addDoc(collection(db, 'vehicles'), data);

    return `Document written with ID: ${docRef.id}`;
}

export const edit = async (id, data) => {

}

export const remove = async (id) => {
    const docRef = doc(db, 'vehicles', id);

    const res = await deleteDoc(docRef);

    return res;
}