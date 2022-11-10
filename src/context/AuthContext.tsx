import { createContext, FC, ReactNode, useEffect, useState } from "react";
import useSupabase from "hook/useSupabase";
import LoadingPage from "component/page/LoadingPage";

type Props = {
    children: ReactNode
}

type Context = {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<Context | null>(null);

const AuthProvider: FC<Props> = (props) => {
    const suppabase = useSupabase();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        suppabase.auth.getUser().then(res => {
            if(res.data.user) {
                setIsLoggedIn(true);
            }
            setIsLoading(false);
        })
    }, [isLoggedIn]);

    const value = {
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
    }

    return isLoading ? <LoadingPage />: <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export {AuthContext, AuthProvider}