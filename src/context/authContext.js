import axios from "axios";
import { createContext, useState,useEffect } from "react";

//we will need the user info in multiple components like navbar,writepage,post page so we are going to store info in this context
//so if we create a context provider and wrap our appln with this provider we will able to use userstate anywhere in this appln


export const AuthContext = createContext()

//children:- It represents our components that we want to wrap with our context provider in our case this will be our App component
export const AuthContextProvider = ({children}) =>{

    //here we will check the localstorage first if there is user inside the localstorage that means we are logged in 
    //and we will use that user, If there is no user in the local storage that means we are not logged in
    //note:- here everything we store in Localstorage is a string, So we will transform  into object by JSON.parse()
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async(inputs)=>{
        const res = await axios.post("http://localhost:8800/api/auth/login",inputs,{ withCredentials: true,credentials: 'include' })
        setCurrentUser(res.data);
    }

    const logout = async (inputs) =>{
        await axios.post("http://localhost:8800/api/auth/logout");
        setCurrentUser(null);
    }

    //Update the localstorage each time when we change this user
    // so here whenever we change the current user we will update the local storage
    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(currentUser))

      
    }, [currentUser])

    //basically we can can use this functions and state everywhere in our app

    return (<AuthContext.Provider value = {{currentUser,login,logout}}>
        {children}
        </AuthContext.Provider>);
    

};

//1.36.44