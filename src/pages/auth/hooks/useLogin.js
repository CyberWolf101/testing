import { useToast } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../config';
import { useContext } from 'react';
import { userContext } from '../../../userContext';
import { doc, getDoc } from 'firebase/firestore';

export function UseLogin() {

    const navigate = useNavigate()
    const toast = useToast()        //used for alerts
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useContext(userContext)

    async function login({ email, password, redirectTo = '/' }) {
        setLoading(true);

        try {
            const data = await signInWithEmailAndPassword(auth, email, password)
            const rawData = await getDoc(doc(db, 'users', data.user.uid))
            const theUser = rawData.data()
            setUser(theUser)
            localStorage.setItem('user', JSON.stringify(theUser))

            // const raw = await getDoc(docRef)
            // const theUser = raw.data()
            // localStorage.setItem('user', theUser)
            toast({
                title: "You are logged in!",
                status: "success", //for green
                isClosable: true,
                position: "top",
                duration: 3000,
                variant: 'subtle',

            });
            navigate(redirectTo)

        } catch (error) {
            console.log(error.message)
            console.log('code', error.code)
            const errorCode = error.code
            if (errorCode === 'auth/user-not-found') {
                // The provided email doesn't exist in the Firebase system.
                console.log('Please sign up.');
                toast({
                    title: "Error",
                    description: "Email not found!",
                    status: "error",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                    variant: 'subtle'
                });
            }
            else if (errorCode === 'auth/wrong-password') {
                console.log('Please sign up.');
                toast({
                    title: "Error",
                    description: "Incorrect password!",
                    status: "error",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                    variant: 'subtle'
                });
            } else {
                toast({
                    title: "Login Failed",
                    description: "Please check that you are connected to the internet!",
                    status: 'error',
                    isClosable: true,
                    position: "top",
                    duration: 3000,
                    variant: 'subtle'

                })
            }

            setLoading(false);
            return false;
        }

    }


    return { login, isLoading };

}

