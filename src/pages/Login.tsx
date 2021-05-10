import axios from 'axios';
import React, {useState} from 'react'

function Login() {
    
    //Utilisation des variables que mon back connait
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    // On va creer une fonction asynchrone pour l'envoie de field vers le serveur back => prend du temps donc asynchrone
    async function login_func(e:any){

        e.preventDefault();
        try {
            //Ce sont les variables que mon back connait
            const loginData = {
                username,
                password,
            };

            //Requete post au back qui sera changé pour le lien Azure
            await axios.post("http://localhost:3000/login", loginData)

        } catch (err:any) {
            console.error(err)           
        }
    }
    
    return (
        <div>
            <div className="login">
                <h1>Login page</h1>                
            </div>
            <div>
                {/* Quand je trigger le type submit => button login  cela lance la fonction login */}
                <form onSubmit={login_func}>
                    <input 
                        type="username" 
                        placeholder="Username" 
                        //Quand je change l'état de mon champs, la fonction setUsername se lance
                        onChange={(e) => setUsername(e.target.value)}
                        //Je met la value dans une variable "username" qui a été déclaré plus haut
                        value={username}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} 
                    />
                    <button type="submit">LOGIN</button>

                </form>
            </div>
        </div>
    )
}

export default Login;