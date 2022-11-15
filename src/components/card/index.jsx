import "./index.css";

export default function Card({characterName}){
    console.log("props: ", characterName); 
    return (
        <div className="card">
            {/* <img
            className="image"
            src={image}
            alt={altImage}
            /> */}
            <h2 className="characterName">Nombre:{characterName}</h2>
        </div>
    )
}

