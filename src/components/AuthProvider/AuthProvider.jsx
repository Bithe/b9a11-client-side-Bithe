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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoader(false);
      } else {
        console.log("logout");
        setUser(null);
        setLoader(false);

      }
    });

    return () => {
      unsubscribe();
    };
  }, [reload]);

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
