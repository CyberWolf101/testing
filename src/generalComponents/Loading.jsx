import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react'
import { animateScroll } from 'react-scroll';
import { Fade } from 'react-reveal';


function LoadingPage() {
    const [text, setText] = useState(false)
    useEffect(() => {
        animateScroll.scrollToTop({ duration: 100, smooth: true, })
        setTimeout(() => {
            setText(true)
        }, 8000);
    }, [])

    return (
        <div className='load-page'>
            <div className="loading">
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                <br />
                <div className='loadTxt'>
                    Loading...
                </div>
                {
                    text ? (
                        <Fade duration={6000}>
                            <small className='mt-4 text-danger'>This is taking longer than expected...</small>
                        </Fade>)
                        :
                        (
                            <span></span>
                        )
                }
            </div>
        </div>
    );
}

export default LoadingPage;