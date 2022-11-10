import { useContext } from "react";
import { AuthError } from "@supabase/supabase-js";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import useSupabase from "hook/useSupabase";

interface UseAuth {
    isLoggedIn?: boolean;
    signIn: (email: string, password: string) => Promise<AuthError | void>;
    signUp: (email: string, password: string) => Promise<AuthError | void>;
    signOut: () => Promise<AuthError | void>;
}


const useAuth = (): UseAuth => {

    const authContext = useContext(AuthContext);

    const supabase = useSupabase();
    const navigate: NavigateFunction = useNavigate();
    

    const isLoggedIn = authContext?.isLoggedIn;

    const signUp = async (email: string, password: string): Promise<AuthError | void> => { 
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        
        if (error) {
            return error
        }

        authContext?.setIsLoggedIn(true);

        const url: string = '/';
        navigate(url);
    }

    const signIn = async (email: string, password: string): Promise<AuthError | void> => { 
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        
        if (error) {
            return error
        }

        authContext?.setIsLoggedIn(true);

        const url: string = '/';
        navigate(url);
    }

    const signOut = async (): Promise<AuthError | void> => {

        const { error } = await supabase.auth.signOut()

        if (error) {
            return error
        }

        authContext?.setIsLoggedIn(false);

        const url: string = '/login';
        navigate(url);
    }

    return { isLoggedIn, signUp, signIn, signOut}
}

export default useAuth;