import React from 'react';
import { Fade } from "react-reveal"

function CreateNSell(props) {
    return (
        <div className='px-2 mt-5'>
            <div className='flex_spaced'>
                <div className="heading px-2">
                    Create and sell your NFTs
                </div>
            </div>


            <div className="section create">
                <br />
                <div className="steps">
                    <Fade bottom>
                        <a className="step" href="#">
                            <p className="stepno">STEP -01</p>
                            <br /><br />
                            <p className="steptitle">Set up your wallet</p>
                            <br />
                            <p className="stepdetails">
                                Powerful features and inclusions, which makes Derubeis marketplace Block standout, easily customizable and scalable.
                            </p>
                            <br />
                            {/* <p className="steptitle">►</p> */}
                            <img className="logo" src="/shape-7.png" alt="" />
                        </a>
                    </Fade>


                    <Fade bottom>
                        <a className="step" href="#">
                            <p className="stepno">STEP -02</p>
                            <br /><br />
                            <p className="steptitle">Create your collection</p>
                            <br />
                            <p className="stepdetails">
                                A great collection of beautiful website templates for your need. Choose the best suitable templates.
                            </p>
                            <br />
                            {/* <p className="steptitle">►</p> */}
                            <img className="logo" src="/shape-1.png" alt="" />
                        </a>
                    </Fade>
                    <Fade bottom>

                        <a className="step" href="#">
                            <p className="stepno">STEP -03</p>
                            <br /><br />
                            <p className="steptitle">Add your NFTs</p>
                            <br />
                            <p className="stepdetails">
                                We've made the template fully responsive, so it looks great on all devices: desktop, tablets, and mobile.
                            </p>
                            <br />
                            {/* <p className="steptitle">►</p> */}
                            <img className="logo" src="/shape-5.png" alt="" />
                        </a>
                    </Fade>
                    <Fade bottom>

                        <a className="step" href="#">
                            <p className="stepno">STEP -04</p>
                            <br /><br />
                            <p className="steptitle">Sell your NFTs</p>
                            <br />
                            <p className="stepdetails">
                                Finally, sell your NFTs and make cool money.
                            </p>
                            <br />
                            {/* <p className="steptitle">►</p> */}
                            <img className="logo" src="/shape-6.png" alt="" />
                        </a>
                    </Fade>
                </div>

            </div>

        </div >
    );
}

export default CreateNSell;