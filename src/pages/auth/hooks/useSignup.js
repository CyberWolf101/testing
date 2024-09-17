import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../config";
import { userContext } from "../../../userContext";
import { useContext } from "react";



export function UseSignup() {

  const navigate = useNavigate();
  const toast = useToast();
    const [user, setUser] = useContext(userContext)
    const [isLoading, setLoading] = useState(false);
  async function signup({ name, password, email }) {
    setLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = doc(db, "users", res.user.uid)
      await setDoc(docRef, {
        id: res.user.uid,
        name,
        // name: name.charAt(0).toUpperCase() + name.slice(1),
        wallet: 0,
        email,
        password,
        date: Date.now(),
        posts: 0
      });
      const raw = await getDoc(docRef)
      const theUser = raw.data()
      localStorage.setItem('user', JSON.stringify(theUser))
      setUser(theUser)

      toast({
        title: "Account Created!",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 5000,
        variant: "subtle",
      });

      navigate("/");
    } catch (error) {
      console.log(error)
      const errorCode = error.code
      if (errorCode === 'auth/email-already-in-use') {
        toast({
          title: "Signed up Failed",
          description: "This email is already in use!",
          status: "error",
          isClosable: true,
          position: "top",
          duration: 5000,
          variant: 'subtle'

        });
      } else {
        toast({
          title: "Signed up Failed",
          description: "Check that you are properly connected to yhe internet!",
          status: "error",
          isClosable: true,
          position: "top",
          duration: 5000,
          variant: 'subtle'

        })
      }
    } finally {
      setLoading(false);
    }
  }

  return { signup, isLoading };
}
