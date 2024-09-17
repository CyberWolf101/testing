import { db, storage } from "../../../config";
import { uuidv4 } from '@firebase/util';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, updateDoc, query, setDoc, where } from 'firebase/firestore';
import swal from 'sweetalert';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from "react";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export default function useDeleteleNft () {
    const [loading, setLoading] = useState(false)

    const deleteNft = async (id) => {
        setLoading(true)
        try {
            const docRef = doc(db, 'nfts', id);
            await deleteDoc(docRef)
            swal("NFT was deleted.")
        } catch (error) {
            console.log(error)
            swal("An error occured.")
        } finally {
            setLoading(false)
        }
    }

    return { deleteNft, loading }

}