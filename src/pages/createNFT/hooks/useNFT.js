import { db, storage } from "../../../config";
import { uuidv4 } from '@firebase/util';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, updateDoc, query, setDoc, where } from 'firebase/firestore';
import swal from 'sweetalert';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from "react";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export const useCreateNFT = () => {
    const toast = useToast()
    const [pending, setPending] = useState(false)
    const navigate = useNavigate()

    async function createNFT(img, productName, floorPrice, priceDollar, category, description, userId, user, highestBid = 0) {
        try {
            setPending(true)
            const id = uuidv4()
            const imageRef = ref(storage, `pics/${id}`)
            await uploadBytes(imageRef, img)
            const imgUrl = await getDownloadURL(imageRef)


            await setDoc(doc(db, 'nfts', id), {
                imgUrl,
                productName,
                floorPrice,
                priceDollar,
                userId: userId ? userId : 'test',
                description,
                id,
                category,
                date: Date.now(),
                bids: 0,
                biders: [],
                highestBid: highestBid ? highestBid : 0,
                user,
                highestBid: 0
            });
            toast({
                title: "Creation successful!",
                status: 'success',
                isClosable: true,
                position: "top",
                duration: 5000,
            })
            navigate(`/myNfts/${user.id}`)

        } catch (error) {
            console.log(error)
            toast({
                title: "An error occured!",
                status: 'error',
                isClosable: true,
                position: "top",
                duration: 5000,
            })
        } finally {
            setPending(false);
        }
    }

    return { createNFT, pending }

}




export const useDeleteNFT = async (id) => {
    const [loading, setLoading] = useState(false)
    const deleteNFT = async () => {
        setLoading(true)
        try {
            const docRef = doc(db, 'nfts', id)
            await deleteDoc(docRef)
            console.log('deleted')
        } catch (error) {
            console.log(error)
            swal("success", "post deleted", 'success')
        } finally {
            setLoading(false)
            swal("error", "an error occured", 'error')
            setLoading(false)
        }
    }

    return { deleteNFT, loading }
}



