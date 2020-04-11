import React, { useState, useEffect } from 'react';

import bugs from '../database/bugs.json';
import fishes from '../database/fishes.json';

import MuseumHeader from './MuseumHeader';
import MuseumSearch from './MuseumSearch';
import MuseumToClipboard from './MuseumToClipboard';

import styles from '../styles/components/CreaturesList.module.css';

function CreaturesList({ language, type }) {
  const [ keyword, setKeyword ] = useState('');
  const [ selectedCreatures, setSelectedCreatures ] = useState({
    bugs: [],
    fishes: []
  });
  const creatures = { bugs, fishes };

  useEffect(() => {
    let storage = [];
    try {
      storage = localStorage.getItem(type);
      storage = JSON.parse(storage) || [];
    } catch (error) {
      storage = [];
    }
    const state = { ...selectedCreatures };
    state[type] = storage;
    setSelectedCreatures(state);
  }, []);

  function selectCreature(id) {
    let state = { ...selectedCreatures };

    if (state[type].includes(id)) {
      state[type] = state[type].filter(item => item !== id);
    } else {
      state[type].push(id);
    }

    localStorage.setItem(type, JSON.stringify(state[type]));

    setSelectedCreatures(state);
  };

  return (
    <div className={ styles.creaturesList }>
      <MuseumHeader
        language={ language }
        type={ type }
        currentItems={ selectedCreatures[type].length }
        totalItems={ creatures[type].length }
      />
      <MuseumSearch
        language={ language }
        keyword={ keyword }
        setKeyword={ setKeyword }
      />
      {
        creatures[type]
          .filter(creature => creature.name.toLowerCase().includes(keyword.toLowerCase().trim()))
          .map((creature) => {
            const isSelected = selectedCreatures[type].includes(creature.id);
            const labelClasses = [ styles.creaturesListLabel ];
            if (isSelected) labelClasses.push(styles.creaturesListLabelActive);
            return (
              <div
                key={ `${ type }-${ creature.id }` }
                className={ styles.creaturesListItem }
              >
                <label className={ labelClasses.join(' ') }>
                  <input
                    type="checkbox"
                    className={ [ styles.creaturesListCheckbox, 'checkbox' ].join(' ') }
                    checked={ isSelected }
                    onChange={ () => selectCreature(creature.id) }
                  />
                  <img
                    className={ styles.creaturesListImage }
                    src={ `/${ type }/compressed/${ creature.id }.png` }
                    alt={ creature.name }
                    loading="lazy"
                    width="64"
                    height="64"
                  />
                </label>
                { creature?.name }
              </div>
            );
          })
      }
      <MuseumToClipboard
        language={ language }
        type={ type }
        selected={ selectedCreatures[type] }
        list={ creatures[type] }
      />
    </div>
  );
};

export default CreaturesList;