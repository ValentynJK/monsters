import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('App render')

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('Monsters Rolodex');

  const onSearchChange = ({ target }) => {
    const searchFieldString = target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = ({ target }) => {
    const searchFieldString = target.value
    setTitle(searchFieldString);
  }

  const getMonsters = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJSON => {
        setMonsters(responseJSON)
      },
      )
  };

  useEffect(getMonsters, []);

  const filterMonsters = () => {
    const newFilteredMonsters = monsters.filter(monster => {
      return (
        monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
      )
    });
    setFilteredMonsters(newFilteredMonsters)
  };

  useEffect(filterMonsters, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monster-search-box'
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder='set Title'
        className='title-change-box'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
}


export default App;
