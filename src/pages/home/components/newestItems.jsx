import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { TbArrowsExchange } from "react-icons/tb";
import { Fade } from 'react-reveal'
import { Link, useNavigate } from 'react-router-dom';
import { Spinner, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import NftModal from '../../../generalComponents/nftModal';
import { useState } from 'react';
import useDeleteleNft from '../../myNFTS/hooks/useDeleteNFT';
import useGetNfts from '../../myNFTs/hooks/useGetNFTs';
import MapNft from '../../../generalComponents/mapNft';
import Swal from 'sweetalert2';

function NewestItems(props) {
    const { getNfts, loading, theNFTs } = useGetNfts()
    const { onOpen, isOpen, onClose } = useDisclosure()
    const [clickedItem, setClickedItem] = useState({})
    const { deleteNft, loading: deletingNft } = useDeleteleNft()
    const nav = useNavigate()

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
        <div className='px-2 mt-5'>
            <div className='flex_spaced'>
                <div className="heading">
                    Newest Items
                </div>

                <div className='small-1 flex' onClick={()=> nav('/all-nfts')}>
                    <div className="me-1">
                        View all
                    </div>
                    <div className="small">
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>


            <div className="mt-4">

                {
                    theNFTs && theNFTs.length > 0 ? theNFTs?.slice(0, 8)?.map((item, index) => (
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

                {/* <Fade left>

                    <div className="items-links shadow-1 px-2 py-2 rounded">
                        <div className="item">
                            <Link to={`single-item/`}>
                                <img src="/portfolio-05.jpg" alt="" className="item-img" />
                            </Link>
                            <div className="item-bidders">
                                <img src="/client-1.png" alt="" className="item-bidderimg" />
                                <img src="/client-3.png" alt="" className="item-bidderimg" />
                                <img src="/client-4.png" alt="" className="item-bidderimg" />
                                <p className='faint' style={{ fontSize: 12 }}>9+ Place bit</p>
                            </div>
                            <div className="item-name ls small-1 fw-bold">Jubilee</div>
                            <div className="item-bids my-1 ls small-1">Highest bid $20</div>
                            <div className="item-price text-primary ls small-1 flex_left">
                                <div className='me-2'>
                                    3ETH
                                </div>
                                <TbArrowsExchange />
                                <div className='ms-2'>
                                    $30
                                </div>

                            </div>
                            <br />
                        </div>
                    </div>
                </Fade> */}


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

export default NewestItems;