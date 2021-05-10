import axios from 'axios';
import React, {useState} from 'react'

function Register() {
    //Utilisation des variables que mon back connait
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_verified, setPasswordVerify] = useState("");

    // On va creer une fonction asynchrone pour l'envoie de field vers le serveur back => prend du temps donc asynchrone
    async function register_func(e:any){

        e.preventDefault();
        try {
            //Ce sont les variables que mon back connait
            const registerData = {
                username,
                password,
                password_verified
            };

            //Requete post au back qui sera changé pour le lien Azure
            await axios.post("http://localhost:3000/register", registerData)

        } catch (err:any) {
            console.error(err)           
        }

    }

    return (
        <div>
            <div className="register">
                <h1>Register page</h1>                
            </div>
            <div>
                {/* Quand je trigger le type submit => button REGISTER  cela lance la fonction register */}
                <form onSubmit={register_func}>
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
                    <input 
                        type="password" 
                        placeholder="Type again your password" 
                        onChange={(e) => setPasswordVerify(e.target.value)}
                        value={password_verified}                       
                    />
                    <button type="submit">REGISTER</button>

                </form>
            </div>
        </div>
    )
}

export default Register;