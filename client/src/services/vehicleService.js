import { db } from "../firebase";
import { collection, doc, getDocs, getDoc, addDoc, setDoc, deleteDoc, query, orderBy, Timestamp } from "firebase/firestore";

const vehiclesRef = collection(db, "vehicles");

export const getAll = async () => {
    const q = query(vehiclesRef, orderBy("creationDate", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        _id: doc.id,
        ...(doc.data()),
    }));
}

export const getOne = async (id) => {
    const docRef = doc(db, 'vehicles', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...(docSnap.data()), _id: docSnap.id };
    } else {
        // doc.data() will be undefined in this case
        return "No such document!";
    }
}

export const create = async (data, ownerId) => {
    const decoratedData = { ...data, likes: [], comments: [], creationDate: Timestamp.now(), ownerId };

    const docRef = await addDoc(vehiclesRef, decoratedData);

    return ({ ...decoratedData, _id: docRef.id });
}

export const edit = async (id, newData, oldData) => {
    const decoratedData = {
        ...newData,
        likes: oldData.likes,
        comments: oldData.comments,
        creationDate: oldData.creationDate,
        updatedOn: Timestamp.now(),
        ownerId: oldData.ownerId,
    };

    const docRef = doc(db, 'vehicles', id);
    const docSnap = await setDoc(docRef, decoratedData);

    return { ...decoratedData, _id: docRef.id };
}

export const updateLikes = async (id, oldData, likes) => {
    const decoratedData = {
        ...oldData,
        likes,
    };

    const docRef = doc(db, 'vehicles', id);
    const docSnap = await setDoc(docRef, decoratedData);

    return { ...decoratedData, _id: docRef.id };
}

export const updateComments = async (id, oldData, comments) => {
    const decoratedData = {
        ...oldData,
        comments
    };

    const docRef = doc(db, 'vehicles', id);
    const docSnap = await setDoc(docRef, decoratedData);

    return { ...decoratedData, _id: docRef.id };
}

export const remove = async (id) => {
    const docRef = doc(db, 'vehicles', id);

    await deleteDoc(docRef);

    return id;
}