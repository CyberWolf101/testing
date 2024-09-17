import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { useState } from 'react';
import { useUpdateNFT } from '../pages/myNFTs/hooks/useUpdate';
import { useEffect } from 'react';


function NftModal({ isOpen, onClose, clickedItem, setClickedItem }) {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [floorPrice, setFloorPrice] = useState('');
    const [highestBid, setHigestBid] = useState('');
    const [totalBids, setTotalBids] = useState('');
    const [priceDollar, setPriceDollar] = useState('');
    const [image, setImage] = useState(null);
    const [theNft, setTheNft] = useState(null);
    const { updateNFT, pending } = useUpdateNFT()

    const handleUpdate = async () => {
        if (!productName.trim()) {
            alert("Product name is required.");
            return;
        }

        // Check if description is empty
        if (!description.trim()) {
            alert("Description is required.");
            return;
        }

        // Check if category is empty
        if (!category.trim()) {
            alert("Category is required.");
            return;
        }

        // Check if floor price is a valid number greater than 0
        if (!floorPrice || isNaN(floorPrice) || parseFloat(floorPrice) <= 0) {
            alert("Floor price must be a valid number greater than 0.");
            return;
        }

        await updateNFT(productName, floorPrice, priceDollar, category, description, highestBid, totalBids, clickedItem.id)
    }


    useEffect(() => {
        console.log(clickedItem)
        if (clickedItem) {
            setProductName(clickedItem.productName || '')
            setDescription(clickedItem.description || '')
            setCategory(clickedItem.category || '')
            setFloorPrice(clickedItem.floorPrice || '')
            setHigestBid(clickedItem.highestBid || '')
            setTotalBids(clickedItem.totalBids || '')
            setPriceDollar(clickedItem.priceDollar || '')
        }
    }, [clickedItem])

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent style={{ marginTop: '10px', marginLeft: '10px', marginRight: '10px' }}>
                    <center className='modalHeader'>
                        <ModalHeader>
                            <div className='small'>EDIT NFT</div>
                        </ModalHeader>
                        <ModalCloseButton />
                    </center>
                    <ModalBody>

                        <div className="flex_center px-5">
                            {image &&
                                <img src={image} alt="Uploaded" style={{ width: '100%', height: 'auto', borderRadius: '7px' }} />
                            }

                            <label className='mt-3'>Product name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />

                            <label className='mt-3'>Description:</label>
                            <textarea
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>

                            <label className='mt-3'>Category:</label>
                            <input
                                type="text"
                                className='form-control'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />

                            <label className='mt-3'>Floor price in Eth:</label>
                            <input
                                type="number"
                                className='form-control'
                                value={floorPrice}
                                onChange={(e) => setFloorPrice(e.target.value)}
                            />
                            <label className='mt-3'>Floor price in dollar:</label>
                            <input
                                type="number"
                                className='form-control'
                                value={priceDollar}
                                onChange={(e) => setPriceDollar(e.target.value)}
                            />
                            <label className='mt-3'>Highest bid:</label>
                            <input
                                type="number"
                                className='form-control'
                                value={highestBid}
                                onChange={(e) => setHigestBid(e.target.value)}
                            />
                            <label className='mt-3'>Total bids:</label>
                            <input
                                type="number"
                                className='form-control'
                                value={totalBids}
                                onChange={(e) => setTotalBids(e.target.value)}
                            />
                            <br />
                            <center>
                                <Button
                                    style={{ width: '96%' }}
                                    colorScheme='black'
                                    background='#000427'
                                    onClick={handleUpdate}
                                    isLoading={pending}

                                >
                                    Update
                                </Button>
                            </center>
                            <br />

                        </div>



                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default NftModal;