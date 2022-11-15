import axios from "axios";
import Card from "../components/card";

export default function Morty(){

    const getCharacters = async() => {
        try {
            const response = axios.get('https://rickandmortyapi.com/api/character')
            console.log("getCharacters: " , response);
        } catch(error) {
            console.log(error);
        
    }}

    getCharacters();

    const characters = axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
       return("response: ", response.data.results[0].name);
      })
      .catch(function (error) {
        console.log(error);
      });

     
    
    

    console.log("charac: " , characters.Promise);
    

    return (
        <div>
            <Card characterName="Alex" />

        </div>
    )
}