import React, { useState } from 'react';
import './App.css';
import { List } from './components/List';
import AddToListForm from './components/AddToListForm';

export interface IState {
  people: {
    name: string;
    profession: string;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Sabina Dhaugoda',
      profession: 'Software developer',
      url: 'https://robohash.org/4d4dcdea98ac471473dd60404e10dfda?set=set4&bgset=&size=200x200',
      note: 'No red meat',
    },
    {
      name: 'Adeoyo Bokulapen',
      profession: 'Product owner',
      url: 'https://robohash.org/0f0311feefa45f7e8cb1bb914e624aea?set=set4&bgset=&size=200x200',
      note: 'Gluten free',
    },
  ]);

  return (
    <div className='App container'>
      <h1>RSVP to tech recruitment day</h1>
      <div className='row'>
        <div className='col-sm-5 col-xs-12'>
          <AddToListForm people={people} setPeople={setPeople} />
        </div>
        <div className='col-sm-7 col-xs-12'>
          <List people={people} />
        </div>
      </div>
    </div>
  );
}

export default App;
