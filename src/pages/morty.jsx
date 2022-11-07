import axios from "axios";

export default function Morty(){
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    return (
        <div>

        </div>
    )
}