import React from 'react';
import useGetSingleNft from './myNFTs/hooks/useGetSingleNft';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingPage from '../generalComponents/Loading';
import MapNft from '../generalComponents/mapNft';
import { userContext } from '../userContext';
import { useContext } from 'react';
import { useState } from 'react';
import useDeleteleNft from './myNFTS/hooks/useDeleteNFT';
import Swal from 'sweetalert2';
import NftModal from '../generalComponents/nftModal';
import { useDisclosure } from '@chakra-ui/react';
import { TbArrowsExchange } from 'react-icons/tb';

function SingleNft(props) {
    const { id } = useParams()
    const { getSingleNft, loading, theNFT } = useGetSingleNft()
    const navigate = useNavigate()
    const [user, setUser] = useContext(userContext)
    const { onOpen, isOpen, onClose } = useDisclosure()
    const [clickedItem, setClickedItem] = useState({})
    const { deleteNft, loading: deletingNft } = useDeleteleNft()

    useEffect(() => {
        getSingleNft(id)
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
    if (loading) return <LoadingPage />
    return (
        <div>
            {
                theNFT &&
                <div >
                    <MapNft
                        item={theNFT}
                        onClose={onClose}
                        onOpen={onOpen}
                        isOpen={isOpen}
                        setClickedItem={setClickedItem}
                        clickedItem={clickedItem}
                        deletingNft={deletingNft}
                        handleDelete={handleDelete}
                    />
                </div>

            }
       <center>
       <div className='grid-3 small shadow-1 py-3'>
                <div className='flex_column'>
                    <div className='text-primary'>Category</div>
                    <div className='small-1'>
                        {theNFT.category}
                    </div>
                </div>
                <div className='flex_colum'>
                    <div className='text-primary'>Owner</div>
                    <div className='small-1'>
                        {theNFT.user.name}
                    </div>
                </div>
                <div className='flex_column'>
                    <div className='text-primary'>Starting Price</div>
                    <div className="item-price ls small flex_left">
                        <div className='me-2'>
                            {theNFT.floorPrice}ETH
                        </div>
                        {Number(theNFT.priceDollar) > 0 && <TbArrowsExchange />}

                        {
                            Number(theNFT.priceDollar) > 0 &&
                            <div className='ms-2'>
                                ${Number(theNFT.priceDollar)?.toLocaleString()}
                            </div>
                        }


                    </div>
                </div>
            </div>
       </center>



            <NftModal
                onClose={onClose} onOpen={onOpen}
                isOpen={isOpen}
                setClickedItem={setClickedItem}
                clickedItem={clickedItem}
            />
        </div>
    );
}

export default SingleNft;