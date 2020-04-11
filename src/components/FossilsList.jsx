import React, { useState, useEffect } from 'react';

import fossils from '../database/fossils.json';

import MuseumHeader from './MuseumHeader';
import MuseumSearch from './MuseumSearch';
import MuseumToClipboard from './MuseumToClipboard';

import styles from '../styles/components/FossilsList.module.css';

function FossilsList({ language }) {
  const [ keyword, setKeyword ] = useState('');
  const [ selectedFossils, setSelectedFossils ] = useState([]);

  useEffect(() => {
    let storage = [];
    try {
      storage = localStorage.getItem('fossils');
      storage = JSON.parse(storage) || [];
    } catch (error) {
      storage = [];
    }
    setSelectedFossils(storage);
  }, []);

  function selectFossil(id) {
    let state = [ ...selectedFossils ];

    if (state.includes(id)) {
      state = state.filter(item => item !== id);
    } else {
      state.push(id);
    }

    localStorage.setItem('fossils', JSON.stringify(state));

    setSelectedFossils(state);
  };

  return (
    <div className="fossilsList">
      <MuseumHeader
        language={ language }
        type="fossils"
        currentItems={ 0 }
        totalItems={ fossils.length }
      />
      <MuseumSearch
        language={ language }
        keyword={ keyword }
        setKeyword={ setKeyword }
      />
      <div className={ styles.fossilsListItems }>
        {
          fossils
            .filter(fossil => fossil.name.toLowerCase().includes(keyword.toLowerCase().trim()))
            .map(fossil => {
              const isChecked = selectedFossils.includes(fossil.id);

              const labelClasses = [styles.fossilsListLabel];
              if (isChecked) labelClasses.push(styles.fossilsListLabelActive);

              return (
                <label key={ `fossil-${ fossil.id }` } className={ labelClasses.join(' ') }>
                  <input
                    type="checkbox"
                    className={ `checkbox ${ styles.fossilsListCheckbox }` }
                    checked={ isChecked }
                    onChange={ () => selectFossil(fossil.id) }
                  />
                  <img
                    className="fossilsListImage"
                    src="/items/77.png"
                    alt="fossil"
                    width="64"
                    height="64"
                  />
                  { fossil.name }
                </label>
              );
            })
        }
      </div>
      <MuseumToClipboard
        language={ language }
        type="fossils"
        selected={ selectedFossils }
        list={ fossils }
      />
    </div>
  );
}

export default FossilsList;