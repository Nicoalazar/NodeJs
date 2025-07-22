import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

const collectionRef = collection(db, "products");

export const getAll = async () => {
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getById = async (id) => {
  const productRef = doc(db, "products", id);
  const productSnap = await getDoc(productRef);
  if (!productSnap.exists()) return null;
  return { id: productSnap.id, ...productSnap.data() };
};

export const createProduct = async (data) => {
  const newDoc = await addDoc(collectionRef, data);
  return newDoc.id;
};

export const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);
  await deleteDoc(productRef);
};
