import { db, storage } from "../../../config";
import { uuidv4 } from '@firebase/util';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, updateDoc, query, setDoc, where } from 'firebase/firestore';
import swal from 'sweetalert';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from "react";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";


export const useUpdateNFT = () => {
    const toast = useToast()
    const [pending, setPending] = useState(false)
    const navigate = useNavigate()


    async function updateNFT(
        productName,
        floorPrice,
        priceDollar,
        category,
        description,
        highestBid,
        totalBids,
        id,
        run
    ) {
        try {
            setPending(true)


            await updateDoc(doc(db, 'nfts', id), {
                productName,
                floorPrice,
                priceDollar,
                description,
                category,
                date: Date.now(),
                bids: 0,
                biders: [],
                highestBid: highestBid ? highestBid : 0,
                totalBids,
            });
            toast({
                title: "update successful!",
                status: 'success',
                isClosable: true,
                position: "top",
                duration: 5000,
            })
            if(run){
                run()
            }
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

    return { updateNFT, pending }

}
