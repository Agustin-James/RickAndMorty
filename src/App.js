import style from './App.module.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/search/SearchBar';
import { useState } from 'react';
import  axios  from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Detail from './components/details/details';
import Form from './components/form/form';

function App() {
   const [characters, setCharacters] = useState([]);

    function onClose(id){   
      let deleted = characters.filter(character => character.id !== id)
      setCharacters(deleted); 
}
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   return (
      <div className={style.App}>
         <div>
            <SearchBar onSearch={onSearch} />
         </div>

         <Routes>
            
            <Route path='/' element={ <Cards onClose={onClose} className={style.card} characters={characters} />}> </Route>
            <Route path='/form' element={<Form/>}></Route>
            <Route path='/about' element={<About/>}> </Route>
            <Route path='/detail/:id' element={<Detail/>}> </Route>
            <Route path='/error404'></Route>
            
         </Routes>

         
            
         
      </div>
      
   );
}

export default App;
