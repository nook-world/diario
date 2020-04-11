import React from 'react';

import styles from '../styles/components/MuseumSearch.module.css';

function MuseumSearch({
  language,
  keyword,
  setKeyword
}) {
  return (
    <div className={ styles.museumSearch }>
      <label>
        { language.filterByName }:
        <span className={ styles.museumSearchForm }>
          <input
            className={ `input ${ styles.museumSearchInput }`}
            type="search"
            placeholder={ language.typeYourSearchHere }
            value={ keyword }
            onChange={ (e) => setKeyword(e.currentTarget.value) }
          />
          <button
            className="button"
            onClick={ () => setKeyword('') }
          >
            { language.clear }
          </button>
        </span>          
      </label>
    </div>
  );
}

export default MuseumSearch;