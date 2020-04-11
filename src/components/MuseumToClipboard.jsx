import React, { useRef } from 'react';

function MuseumToClipboard({
  language,
  type,
  list,
  selected
}) {
  const typeEmoji = {
    bugs: '🐜',
    fishes: '🐟',
    fossils: '🦴'
  }[type];

  const missingList = list
    .filter(item => !selected.includes(item.id))
    .map(item => `${ typeEmoji } · ${ item.name }`)
    .join('\n');

  const caughtList = list
    .filter(item => selected.includes(item.id))
    .map(item => `${ typeEmoji } · ${ item.name }`)
    .join('\n');

  const filteredList = {
    missing: missingList,
    caught: caughtList
  }

  const missing = useRef(null);
  const caught = useRef(null);

  function copyToClipboard(input) {
    input.current.value = filteredList[input.current.name];
    input.current.select();
    console.log('missing', missingList);

    document.execCommand("copy");
    alert('Copied');
  }

  return (
    <div className="textCenter">
      <h2>{ language.copyToClipboard }</h2>
      <p>
        <button className="button" onClick={ () => copyToClipboard(missing) }>
          {
            language.copyMissingItems?.replace(
              '{museumType}',
              language[type].toLowerCase()
            )
          }
        </button> 
        <button className="button" onClick={ () => copyToClipboard(caught) }>
          {
            language.copyCaughtItems?.replace(
              '{museumType}',
              language[type].toLowerCase()
            )
          }
        </button>
        <textarea
          name="missing"
          ref={ missing }
          defaultValue={ missingList }
          style={{
            position: 'absolute',
            left: '-100vw',
            opactiy: 0,
            width: 0,
            height: 0,
            padding: 0,
          }}
        />

        <textarea
          name="caught"
          ref={ caught }
          style={{
            position: 'absolute',
            left: '-100vw',
            opactiy: 0,
            width: 0,
            height: 0,
            padding: 0,
          }}
          defaultValue={ caughtList }
        />
      </p>
    </div>
  );
}

export default MuseumToClipboard;