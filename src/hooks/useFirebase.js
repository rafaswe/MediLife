import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init"



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const processLogin = (email, passowrd) => {
        signInWithEmailAndPassword(auth, email, passowrd)
            .then(result => {
                setError("Logged in")
            })
            .catch(error => setError(error.message));
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('Registration DOne');
                varifyEmail();
                setUserName();
            }).catch(error => {
                setError(error.message);
            })
    }
    const setUserName = (userName) => {
        updateProfile(auth.currentUser, {
            displayName: userName
        })
            .then(result => { })
    }
    const varifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => console.log(result))
    }

    const handleResetPassord = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log("email sent");
                setError("email sent");
            })
    }


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        user,
        processLogin,
        createNewUser,
        handleResetPassord,
        signInUsingGoogle,
        setError,
        error,
        logOut

    }
}
export default useFirebase;