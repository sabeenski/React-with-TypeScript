import React from 'react';
import { IState as IProps } from '../App';

export const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List row' key={person.name}>
          <div className='col-sm-1 col-xs-6'>
            <img
              src={person.url}
              alt='avatar for the person'
              className='List-img'
            />
          </div>
          <div className='col-sm-3 col-xs-6'>
            <h4>{person.name}</h4>
          </div>
          <div className='col-sm-4 col-xs-6'>
            <p>{person.profession}</p>
          </div>
          <div className='col-sm-4 col-xs-6'>
            <p>{person.note}</p>
          </div>
        </li>
      );
    });
  };
  /* export const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List' key={person.name}>
          <div className='List-header'>
            <img
              src={person.url}
              alt='avatar for the person'
              className='List-img'
            />
            <h4>{person.name}</h4>
          </div>
          <p>{person.profession} years old</p>
          <p>{person.note}</p>
        </li>
      );
    });
  };
 */ return (
    <div className='List-container'>
      <h4>List of participants</h4>
      <ul>{renderList()}</ul>
    </div>
  );
};
