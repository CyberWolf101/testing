import { useState } from "react"
import { db } from "../../../config"
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import swal from "sweetalert";

export const useGetNfts = async (id) => {
    const [loading, setLoading] = useState(false)
    const [theNFTs, setTheNFTs] = useState([])

    const getNfts = async () => {
        setLoading(true)
        try {
            const collectionRef = collection(db, 'nfts');

            // onSnapshot(collectionRef, (data) => {
            //     setTheNFTs(data.docs.map((nft) => ({ ...nft.data(), id: nft.id })))
            // })

            const data = await getDocs(collectionRef)
            setTheNFTs(data.docs.map((nft) => ({ ...nft.data(), id: nft.id })))

            console.log(theNFTs)

        } catch (error) {
            console.log(error)
            swal("An error occured.")
        } finally {
            setLoading(false)
        }
    }

    return { getNfts, loading, theNFTs }

}





