import React from 'react';

function Footer(props) {
    return (
        <div className='mt-5'>
            <br />
            <div class="footer flex_left shadow-lg">
                <div class="derubeis">
                    <p class="webname-footer flex_left normalText TILT">
                        DERUBEIS MARKETPLACE
                    </p>
                    <p class="word small-1">
                        The best private digital Marketplace for non-fungible tokens(NFTs).

                    </p>
                    <hr />
                </div>

                <div class="artsnft flex_spaced">
                    <div>
                        <p class="normalText">
                            ArtsNftMarket
                        </p>
                        <a href="/">About us</a> <br />
                        <a href="/">Terms of Services</a> <br />
                        <a href="/">FAQ</a>
                    </div>

                    <div className='ms-3'>
                        <p class="markettitle normalText">
                            Marketplace
                        </p>
                        <a href="/">Moonpay</a> <br />
                        <a href="/">Mercuryo</a> <br />
                        <a href="/">Ramp</a> <br />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;