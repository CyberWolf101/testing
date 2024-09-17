import { useState } from "react"
import { db } from "../../../config"
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import swal from "sweetalert";


export default function useGetUserNFTS() {
    const [loading, setLoading] = useState(false)
    const [theNFTs, setTheNFTs] = useState([])

    const getNfts = async (id) => {
        setLoading(true)
        try {
            const q = query(collection(db, "nfts"), where("userId", "==", id))
            // const docRef = doc(db, 'nfts', id);
            const data = await getDocs(q)
            const theDAta = data.docs.map((nft) => ({ ...nft.data(), id: nft.id }))
            console.log(theDAta)
            setTheNFTs(data.docs.map((nft) => ({ ...nft.data(), id: nft.id })))

            console.log(data)
        } catch (error) {
            console.log(error)
            swal("An error occured.")
        } finally {
            setLoading(false)
        }
    }

    return { getNfts, loading, theNFTs }

}