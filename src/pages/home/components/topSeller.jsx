import React from 'react';
import { topSellers } from '../../../data';
import { Fade } from 'react-reveal';

function TopSeller(props) {
    return (
        <div className='px-2 mt-5'>
            <div className='flex_spaced'>
                <div className="heading">
                    Top Sellers
                </div>
            </div>
            {/* <div className='grid-2 bg-danger' style={{width:'100%'}}> */}
            <Fade bottom>
                {
                    topSellers.map((seller, index) => (
                        <div className="sellers shadow-1 my-3 rounded mx-2" key={index}>
                            <div className="seller">
                                <img src={seller.imgUrl} alt={`seller ` + (index + 1)} />
                                <div className="seller-details">
                                    <p className="seller-name small">Anthony Smith</p>
                                    <p className="seller-price small-1">156 ETH</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Fade>
            {/* </div> */}


        </div>
    );
}

export default TopSeller;