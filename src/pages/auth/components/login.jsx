import React, { useState } from 'react';
import { auth } from '../../../config';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { UseLogin } from '../hooks/useLogin';
import { useToast } from '@chakra-ui/react';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { login, isLoading } = UseLogin();
    // const { user, isLoading: authLoading } = useAuth();
    // const [authUser, error] = useAuthState(auth);
    const { login, isLoading } = UseLogin()
    const nav = useNavigate();
    const toast = useToast()

    const hadleLogin = async () => {
        if (email.length < 6 || password.length < 4) {

            toast({
                title: "Login Failed",
                description: "Please enter a valid email and password!",
                status: 'error',
                isClosable: true,
                position: "top",
                duration: 3000,
                variant: 'subtle'

            })
            return
        }

        await login({ email, password })
    }

    return (

        <div>
            <form autoComplete="off">
                <input
                    type="email"
                    className=" mt-3 form-control "
                    placeholder="email"
                    autoComplete="false"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type="password"
                    className=" mt-3 form-control "
                    placeholder="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

                {!isLoading &&
                    <div
                        className="btn btn dark_bg text-white w-100 mt-3"
                        onClick={() => hadleLogin(email, password)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        LOGIN
                    </div>
                }

                {isLoading &&
                    <div className=" mt-3">
                        <Spinner />
                    </div>
                }


            </form>
            {/* <div className="mt-4 ">
                <small>Don't have an account?</small>
            </div>
            <div className="mt-1 ">
                <small style={{}}>SIGN UP</small>
            </div> */}
        </div>
    );
}

export default Login;