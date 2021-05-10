import axios from 'axios'
import React from 'react'

function Home() {
    // async function login_func(e:any){
    //     try {

    //         const result = {
    //             url
    //         };
    //         //Requete post au back qui sera changé pour le lien Azure
    //         await axios.get("http://memeton-back.azurewebsites.net/all_meme", result)

    //     } catch (err:any) {
    //         console.error(err)           
    //     }
    // component(){
    //     axios.get("http://memeton-back.azurewebsites.net/all_meme")
    //     .then(res => {
    //         this.setState({url: res.data});
    //     })
    // }
    return (
        <div className="home">
            <h1>Home page</h1>
            
        </div>
    )
}

export default Home
