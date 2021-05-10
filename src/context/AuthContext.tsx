//Fichier qui sert a dire si je suis loggé ou non 
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

type AuthContextData = {
  loggedIn: boolean;
  getLoggedIn: (value:any) => void;
}

const AuthContext = createContext<Partial<AuthContextData>>({})

//Retourne la value true ou false si je suis loggé grâce au back
function AuthContextProvider(props:any) {
  const [loggedIn, setLoggedIn] = useState(undefined);

    //demande asynchrone à mon back
  async function getLoggedIn() {
      //requete a mon endpoint logginIn qui va me renvoyer true ou false
      const loggedInRes = await axios.get(
        "http://localhost:3000/loggedIn"
      );

      console.log("loggé ?:", loggedInRes.data)
      setLoggedIn(loggedInRes.data);
  }

      //a chaque fois on run la fonction
  useEffect(() => {
      getLoggedIn();
      console.log('render!');
      
  },[]);

  return (
      <AuthContext.Provider value={{loggedIn, getLoggedIn }}>{props.children}</AuthContext.Provider>
  )
} 

export default AuthContext;
export {AuthContextProvider};