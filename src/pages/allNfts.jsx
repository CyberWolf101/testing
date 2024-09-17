import React from 'react';
import useGetNfts from './myNFTs/hooks/useGetNFTs';
import { Spinner, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import NftModal from '../generalComponents/nftModal';
import MapNft from '../generalComponents/mapNft';
import { useState } from 'react';
import useDeleteleNft from './myNFTS/hooks/useDeleteNFT';

function AllNfts(props) {
    const { getNfts, loading, theNFTs } = useGetNfts()
    const { onOpen, isOpen, onClose } = useDisclosure()
    const [clickedItem, setClickedItem] = useState({})
    const { deleteNft, loading: deletingNft } = useDeleteleNft()

    useEffect(() => {
        getNfts()
    }, [])


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
    if (loading) return <center className='mt-5'> <Spinner size='lg' thickness='3px' emptyColor='slategrey' /></center>
    return (
        <div>
            <div className="heading text-center mt-3">
                ALL NFTs
            </div>

            <div className="mt-4">

                {
                    theNFTs && theNFTs.length > 0 ? theNFTs?.map((item, index) => (
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
                        <div className='text-center'>
                        </div>
                }




            </div>
            <NftModal
                onClose={onClose} onOpen={onOpen}
                isOpen={isOpen}
                setClickedItem={setClickedItem}
                clickedItem={clickedItem}
            />
        </div>
    );
}

export default AllNfts;