/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth, provider } from './../Firebase/Firebase.config'; // Make sure to import the Firebase config

// Create context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store the authenticated user
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signin = async (email, password) => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error logging in:", error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const register = async (email, password) => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error registering:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error logging out:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const loginWithGoogle = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user); // Update the user state
        } catch (error) {
            console.error("Error with Google login:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateUserProfile = async (newName, newPhotoURL) => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: newName,
                photoURL: newPhotoURL,
            });
            setUser({
                ...auth.currentUser,
                displayName: newName,
                photoURL: newPhotoURL,
            });
        } catch (err) {
            console.error("Error updating profile:", err.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, updateUserProfile, signin, loginWithGoogle, logout, register, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
