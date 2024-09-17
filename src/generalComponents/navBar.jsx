import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosMenu, IoMdClose, IoMdHome, IoMdLogIn, IoMdLogOut, IoIosCreate } from "react-icons/io";
import { Button, useToast } from '@chakra-ui/react';
import { Fade } from 'react-reveal';
import { PiBank } from "react-icons/pi";
import { BsFilePost } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { GiBank } from "react-icons/gi";
import { userContext } from '../userContext';
import { useContext } from 'react';
import { auth } from '../config';
import { useSignOut } from 'react-firebase-hooks/auth';

function NavBar(props) {
    const navigate = useNavigate()
    const [user, setUser] = useContext(userContext)
    const toast = useToast()
    const [signout, isLoading, error] = useSignOut(auth);
    const styles = {
        logo: {
            letterSpacing: "1px",
            fontSize: "14px",
        },
    };

    const logout = async () => {
        try {
            await signout()
            localStorage.removeItem('user')
            toast({
                title: "You're logged out!",
                status: 'error',
                isClosable: true,
                position: "top",
                duration: 5000,
            })
            setUser({})
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="thenavbar">
                <Fade top duration={1500}>
                    <div className='flex_spaced w-100'>
                        <Link to="/">
                            <div>
                                <div className="TILT py-2 text-white" style={styles.logo}>
                                    DUREBEIS MARKETPLACE
                                </div>
                            </div>
                        </Link>

                        <div
                            className="text-white btn"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample"
                        >
                            {/* <Menu fontSize="large" /> */}
                            <div style={{ fontSize: '24px' }}>
                                <IoIosMenu />
                            </div>
                        </div>
                    </div>
                </Fade>

                <div
                    className="offcanvas offcanvas-start offNav"
                    tabindex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                    style={{ width: "70%" }}
                >
                    <div className="offcanvas-header dark_bg flex_spaced">
                        <div className="TILT py-2 text-white" style={styles.logo}>
                            DUREBEIS MARKETPLACE
                        </div>
                        <button
                            type="button"
                            className="btn"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            style={{ color: "white" }}
                        >
                            <IoMdClose />
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="nav-contents" data-bs-dismiss="offcanvas">
                            <Link to="/">
                                <div>
                                    <div className="nav-links flex_left">
                                        <IoMdHome /> &nbsp;Home{" "}
                                    </div>
                                </div>
                            </Link>
                            <Link to="/create-nft">
                                <div>
                                    <div className="nav-links flex_left">
                                        <IoIosCreate />
                                        &nbsp;Create NFT{" "}
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/myNfts/${user.id}`}>
                                <div>
                                    <div className="nav-links flex_left">
                                        <BsFilePost />
                                        &nbsp; My NFTs
                                    </div>
                                </div>
                            </Link>

                            <Link to="/profile">
                                <div className="nav-links flex_left">
                                    <GiBank />
                                    &nbsp;Withdrawals{" "}
                                </div>
                            </Link>
                            {
                                user.isAdmin && (
                            <Link to="/profile">
                                
                                <div className="nav-links flex_left">
                                    <IoIosSettings />
                                    &nbsp;Users{" "}
                                </div>
                            </Link>

                                )
                            }


                            <div className="mt-4">
                                {user.id && (
                                    <Button
                                        colorScheme="blackAlpha"
                                        size="sm"
                                        onClick={logout}
                                        isLoading={isLoading}
                                        rightIcon={<IoMdLogOut />}
                                    >
                                        Logout
                                    </Button>
                                )}

                                {!user.id && (
                                    <Button
                                        colorScheme="blackAlpha"
                                        size="sm"
                                        onClick={() => navigate("/login")}
                                    //   isLoading={isLoading}
                                    //   rightIcon={<IoMdLogInn />}
                                    >
                                        Login
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;