import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToListForm: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    profession: '',
    url: '',
    note: '',
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (!input.name || !input.profession || !input.url) return;
    const isAdded = people.find(
      (item) => item.name.toLowerCase() === input.name.toLowerCase()
    );
    if (isAdded) {
      console.log('already added name');
      return;
    }
    if (!input.url.includes('https')) {
      input.url =
        'https://gravatar.com/avatar/f52bd0ae4ac0886d4576d7b001e58f1e?s=200&d=mp&r=x';
    }

    setPeople([...people, { ...input }]);

    setInput({
      name: '',
      profession: '',
      url: '',
      note: '',
    });
  };
  return (
    <div className='AddToList'>
      <input
        type='text'
        value={input.name}
        placeholder='Name'
        className='AddToList-input'
        name='name'
        onChange={handleChange}
      />
      <input
        type='text'
        value={input.profession}
        placeholder='Profession'
        maxLength={20}
        className='AddToList-input'
        name='profession'
        onChange={handleChange}
      />
      <input
        type='text'
        value={input.url}
        placeholder='Your image url'
        className='AddToList-input'
        name='url'
        onChange={handleChange}
      />
      <textarea
        maxLength={20}
        value={input.note}
        placeholder='Dietary requests'
        className='AddToList-input'
        name='note'
        onChange={handleChange}
      />
      <button className='AddToList-btn' onClick={handleSubmit}>
        Add to list
      </button>
    </div>
  );
};

export default AddToListForm;
