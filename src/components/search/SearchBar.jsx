import style from "./search.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SearchBar({onSearch}) {
   const [Id, setId] = useState([]);
   function handleChange(event){
      event.preventDefault()
      setId(event.target.value)
   }
   return (
      <div className={style.container}>

         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>

          <input className={style.search} onChange={handleChange} placeholder="Ingrese el ID" type='search' />
         <button className={style.button} onClick={()=>{onSearch(Id); setId('')}}>Buscar</button> 
      </div>
   );
}
