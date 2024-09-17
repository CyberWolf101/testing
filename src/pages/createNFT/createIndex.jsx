import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineCloudUpload } from "react-icons/ai";
import Swal from 'sweetalert2';
import { CiCircleRemove } from "react-icons/ci";
import { useCreateNFT } from './hooks/useNFT';
import { userContext } from '../../userContext';
import { useContext } from 'react';
import { useRedirectIfNotAuthenticated } from '../auth/hooks/useRedirectIfNotAuthenticated';

function CreateIndex() {

    const [user, setUser] = useContext(userContext)
    const { createNFT, pending } = useCreateNFT()

    // State for form inputs
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [floorPrice, setFloorPrice] = useState('');
    const [priceDollar, setPriceDollar] = useState(0);

    // State for image file
    const [image, setImage] = useState(null);
    const [theNft, setTheNft] = useState(null);

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 5242880) { // Max file size 5MB
            setImage(URL.createObjectURL(file));
            setTheNft(file)
        } else {
            alert('File size should be less than 5MB');
        }
    };

    // Handle image removal
    const handleRemoveImage = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Remove this image.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                setImage(null);
                // Swal.fire('Removed!', 'Your image has been removed.', '');
            }
        });
    };

    const handleMint = async () => {
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

        // Check if an image has been uploaded
        if (!image) {
            alert("Please upload an image.");
            return;
        }
        await createNFT(theNft, productName, floorPrice, priceDollar, category, description, user.id, user )
    }
    useRedirectIfNotAuthenticated()

    
    return (
        <div>
            <center>
                <h5 className='mt-4'>Create new NFT</h5>
            </center>
            <div>
                <div className="imagebox">
                    <p>Choose your File to upload</p>
                    <br />
                    {!image ? (
                        <div className="filebox faint small-1" onClick={() => document.getElementById('fileInput').click()}>
                            <center style={{ fontSize: '30px' }}>
                                <AiOutlineCloudUpload />
                            </center>
                            <p>Choose a File</p>
                            <p>PNG, GIF, JPG, JPEG</p>
                            <p>Max 5mb</p>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                accept="image/png, image/gif, image/jpg, image/jpeg"
                            />
                        </div>
                    ) : (
                        <div>
                            <div className='px-4 shadow-1 py-3 mx-3 rounded'>
                                <img src={image} alt="Uploaded" style={{ width: '100%', height: 'auto', borderRadius: '7px' }} />
                                <center className='mt-4'>
                                    <Button colorScheme="red" size='sm' onClick={handleRemoveImage}>
                                        <CiCircleRemove />
                                    </Button>
                                </center>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex_center px-5">
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
                    <br />
                    <center>
                        <Button
                            style={{ width: '96%' }}
                            colorScheme='black'
                            background='#000427'
                            onClick={handleMint}
                            isLoading={pending}
                            
                        >
                            Mint
                        </Button>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default CreateIndex;
