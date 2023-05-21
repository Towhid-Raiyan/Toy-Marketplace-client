import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const google_provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [photo,setPhoto]=useState(null);
    const [name,setName]=useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, google_provider);
    };
    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const updateInfo = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,//
            photoURL: url,//
        });
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setPhoto(loggedUser?.photoURL);//
            setName(loggedUser?.displayName);//
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo ={
        user,
        setUser,
        loading,
        createUser,
        updateInfo,
        googleSignIn,
        loginWithEmail,
        logOut,
        name,
        photo
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;