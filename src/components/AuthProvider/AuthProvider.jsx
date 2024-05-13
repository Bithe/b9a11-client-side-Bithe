import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";

import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebaseConfiq";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // AFTER LOGIN SHOW THE USER IN NAVBAR
  const [user, setUser] = useState(null);

  //   LOADER
  const [loader, setLoader] = useState(true);

  //   AT FIRST AFTER UPDATING ITS NOT COMING FOR THAT WE NEED A DEPENDENCY RELOAD, BY USING IT WHEN WE WILL UPDATE THE PROFILE IT WILL UPDATE AND WE WILL NOT NEED TO RELOAD THE PAGE
  const [reload, setReload] = useState(false);

  //   SOCIAL PROVIDER
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // FOR REGISTRATION
  const registerUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // FOR LOGIN
  const loginUser = (email, password) => {
    setLoader(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //   FOR GOOGLE LOGIN
  const googleLogin = () => {
    setLoader(true);

    return signInWithPopup(auth, googleProvider);
  };

  //   FOR GITHUB LOGIN
  const githubLogin = () => {
    setLoader(true);

    return signInWithPopup(auth, githubProvider);
  };

  //   TWITTER LOGIN
  const twitterLogin = () => {
    setLoader(true);

    return signInWithPopup(auth, twitterProvider);
  };

  // LOGOUT FUNC
  const logout = () => {
    return signOut(auth);
  };

  //PASSING FUNC AS OBJECT
  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    googleLogin,
    githubLogin,
    twitterLogin,
    logout,
    loader,
    setReload,
  };

  // ONCHANGE SETUP
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

  //     const userEmail = currentUser?.email || user?.email;
  //     const loggedUser = { email: userEmail };

  //     setUser(null);
  //     setLoader(false);
  //     if (currentUser) {
  //       console.log(currentUser);
  //       axios.post('http://localhost:5000/jwt' ,loggedUser, {withCredentials: true})
  //       .then((res) => {
  //         console.log('token response', res.data);
  //       });
  //       setUser(currentUser);
  //       setLoader(false);
  //     } else {
  //       console.log("logout");
  //       axios.post('http://localhost:5000/logout', loggedUser,{
  //         withCredentials: true
  //       })
  //       .then(res=>{
  //         console.log(res.data);
  //       })
     
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [reload]);
  // ONCHANGE SETUP
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    try {
      if (currentUser) {
        const userEmail = currentUser.email;
        const loggedUser = { email: userEmail };

        console.log(currentUser);
        const response = await axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true });
        console.log('Token response', response.data);

        setUser(currentUser);
        setLoader(false);
      } else {
        console.log("Logout");
        const response = await axios.post('http://localhost:5000/logout', null, { withCredentials: true });
        console.log(response.data);

        setUser(null);
        setLoader(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  // Cleanup function
  return () => unsubscribe();
}, []); // Empty dependency array to run effect only once on mount


  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
