import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./details.module.css"

export default function Detail(){
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);
    return (
        <div className={style.container}>

            <div>
                <img src={character.image} alt="" />
            </div>
            <div>
                <h2>{character.name}</h2>
                <h3>{character.status}</h3>
                <h3>{character.species}</h3>
                <h3>{character.gender}</h3>
            </div>
           
        </div>
    )
}