import React from 'react';
import { useContext } from 'react';
import { Fade } from 'react-reveal'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../userContext';

function Header(props) {
    const nav = useNavigate()
    const [user] = useContext(userContext)
    return (
        <div className='home-header text-white px-3 text-center'>
            <div
                className=''
                style={{ fontSize: 18 }}
            >
                <br />
                <div >
                    Explore Create and Sell Unique NFTs.
                </div>
            </div>


            <div className='faint mt-3' style={{ fontSize: 13 }}>
                Partner with one of the world’s largest retailers to showcase your brand and products.
            </div>

            <Fade bottom>
                <div className='py-3  mt-2'>
                    <button
                        onClick={() => nav(`/myNfts/${user.id}`)}
                        className='btn btn-outline-light'
                        style={{ width: '120px', height: '38px', fontSize: '13px' }}
                    >
                        Get started
                    </button>
                    <button
                        onClick={() => nav(`/myNfts/${user.id}`)}
                        className='btn btn-light ms-3'
                        style={{ width: '120px', height: '38px', fontSize: '13px' }}
                    >
                        Mint
                    </button>
                </div>
            </Fade>
            <br />
        </div>
    );
}

export default Header;