import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingPage from '../../generalComponents/Loading';
import useGetUserNFTS from './hooks/useGetUserNFTS';
import MapNft from '../../generalComponents/mapNft';
import { useContext } from 'react';
import { userContext } from '../../userContext';
import { useDisclosure } from '@chakra-ui/react';
import NftModal from '../../generalComponents/nftModal';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useDeleteleNft from './hooks/useDeleteNFT';
import { useRedirectIfNotAuthenticated } from '../auth/hooks/useRedirectIfNotAuthenticated';

function MyNFTs(props) {
    const navigate = useNavigate()
    const { id } = useParams()
    const { getNfts, loading, theNFTs } = useGetUserNFTS()
    const [user, setUser] = useContext(userContext)
    const { onOpen, isOpen, onClose } = useDisclosure()
    const [clickedItem, setClickedItem] = useState({})
    const { deleteNft, loading: deletingNft } = useDeleteleNft()
    useRedirectIfNotAuthenticated()

    useEffect(() => {
        getNfts(id)
    }, [deletingNft])


    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Delte this NFT.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(item)
                deleteNft(item.id)
            }
        });
    };
    if (loading) return <LoadingPage />

    return (
        <div>
            <center>

            </center>
            {
                theNFTs.length > 0 ? theNFTs?.map((item, index) => (
                    <div >
                        <MapNft
                            key={index}
                            item={item}
                            onClose={onClose}
                            onOpen={onOpen}
                            isOpen={isOpen}
                            setClickedItem={setClickedItem}
                            clickedItem={clickedItem}
                            deletingNft={deletingNft}
                            handleDelete={handleDelete}
                        />
                    </div>
                ))

                    :
                    <div className='text-center mt-5'>
                        <div>
                            You have not created any NFTs
                        </div>
                        <button
                            onClick={() => navigate('/create-nft')}
                            className='btn btn-primary mt-2'>
                            Create NFT
                        </button>
                        <br />
                    </div>
            }

            <NftModal
                onClose={onClose} onOpen={onOpen}
                isOpen={isOpen}
                setClickedItem={setClickedItem}
                clickedItem={clickedItem}
            />
        </div>
    );
}

export default MyNFTs;