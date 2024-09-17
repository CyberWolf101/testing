import { useState } from "react"
import { db } from "../../../config"
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import swal from "sweetalert";

export default function useGetSingleNft() {
    const [loading, setLoading] = useState(false)
    const [theNFT, setTheNFT] = useState()

    const getSingleNft = async (id) => {
        setLoading(true)
        try {
            const docRef = doc(db, 'nfts', id);
            const raw = await getDoc(docRef)
            const data = raw.data()
            setTheNFT(data)
            console.log(data)
        } catch (error) {
            console.log(error)
            swal("An error occured.")
        } finally {
            setLoading(false)
        }
    }

    return { getSingleNft, loading, theNFT }

}
