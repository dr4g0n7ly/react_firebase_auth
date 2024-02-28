import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "../firebase";

interface AuthProviderProps {
    children?: React.ReactNode;
}

interface AuthContextType {
    user: User | null | undefined;
    loading: boolean;
}

export const Context = createContext<AuthContextType>({
    user: undefined,
    loading: true
});

export const AuthContext = ({ children }: AuthProviderProps) => {
    const auth = getAuth(app);
    const [user, setUser] = useState<User | null | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        });

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, [auth]);

    const contextValues: AuthContextType = { user, loading };

    return (
        <Context.Provider value={contextValues}>
            {!loading && children}
        </Context.Provider>
    );
};
