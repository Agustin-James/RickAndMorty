import style from './card.module.css';
import { Link } from 'react-router-dom';
export default function Card(props) {
   return (
      
      <div className={style.container}>
          <button className={style.boton} onClick={()=>{props.onClose(props.id)}}>X</button>
         <img className={style.image} src={props.image} alt="" />
         <Link to={`/detail/${props.id}`}>
             <h2>Name: {props.name}</h2>
         </Link>
         

         <h2>Status: {props.status}</h2>
         <h2>Especie: {props.species}</h2>
         <h2>Genero: {props.gender}</h2>
         <h2>Origen: {props.origin}</h2>
         
         
      </div>
   );
}
