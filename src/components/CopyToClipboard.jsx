import React, { useRef } from "react";

function CopyToClipboard({
  title,
  emoji,
  missingLabel,
  collectedLabel,
  list,
  selected,
}) {
  const missingList = list
    .filter((item) => !selected.includes(item.id))
    .map((item) => `${emoji} · ${item.name}`)
    .join("\n");
  emoji;

  const caughtList = list
    .filter((item) => selected.includes(item.id))
    .map((item) => `${emoji} · ${item.name}`)
    .join("\n");

  const filteredList = {
    missing: missingList,
    caught: caughtList,
  };

  const missing = useRef(null);
  const caught = useRef(null);

  function copyToClipboard(input) {
    input.current.value = filteredList[input.current.name];
    input.current.select();
    document.execCommand("copy");
    alert("Copied");
  }

  return (
    <div className="textCenter">
      <h2>{title}</h2>
      <p>
        <button className="button" onClick={() => copyToClipboard(missing)}>
          {missingLabel}
        </button>
      </p>
      <p>
        <button
          className="button buttonSecondary"
          onClick={() => copyToClipboard(caught)}
        >
          {collectedLabel}
        </button>
        <label
          style={{
            position: "absolute",
            left: "-100vw",
            width: 0,
            height: 0,
            padding: 0,
          }}
        >
          {missingLabel}
          <textarea
            name="missing"
            ref={missing}
            defaultValue={missingList}
            style={{
              position: "absolute",
              left: "-100vw",
              width: 0,
              height: 0,
              padding: 0,
              fontSize: "1em",
            }}
          />
        </label>

        <label
          style={{
            position: "absolute",
            left: "-100vw",
            opactiy: 0,
            width: 0,
            height: 0,
            padding: 0,
          }}
        >
          {collectedLabel}
          <textarea
            name="caught"
            ref={caught}
            style={{
              position: "absolute",
              left: "-100vw",
              opactiy: 0,
              width: 0,
              height: 0,
              padding: 0,
              fontSize: "1em",
            }}
            defaultValue={caughtList}
          />
        </label>
      </p>
    </div>
  );
}

export default CopyToClipboard;
