/* eslint-disable prettier/prettier */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../service/FirebaseService";
import { IFile } from "./Interfaces";

export async function addMedia(file: string, fileName: string) {

    const storageRef = ref(storage, `/addOn/${fileName}`);
    let downloadLink = "";

    await uploadString(storageRef, file, "data_url").then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((link: string) => {
            downloadLink = link;
        })
    })

    return downloadLink;
}

export async function addDocument(documentId: string, file: IFile) {
    try {
        await setDoc(doc(firestore, "addOnData", documentId), { file: file });
        return true;
    } catch (err) {
        return false;
    }
}

export async function getDocument(documentId: string, setMedia: CallableFunction) {
    try {
        const docRef = doc(firestore, "addOnData", documentId);
        const docSnap = await getDoc(docRef);
        setMedia(docSnap.data()?.file);

        return true;
    } catch (err) {
        return false;
    }
}
