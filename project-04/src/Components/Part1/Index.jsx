import { useState } from "react";
import data from "./data";

export default function Index() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, SetMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingle(getId) {

    setSelected(getId === selected ? null : getId);
  }

  function handleMulti(getID) {
    let cpyMulti = [...multiple];
    let currentID = cpyMulti.indexOf(getID);

    currentID === -1
      ? cpyMulti.push(getID)
      : cpyMulti.splice(currentID, 1);

    setMultiple(cpyMulti)
  }

  return (
    <div>
      <button
        className="px-4 py-2 bg-green-500 rounded-lg mt-8 ml-4 hover:bg-green-700 transition-colors "
        onClick={() => SetMultiSelect(!multiSelect)}
      >
        Enable MultiSelection
      </button>
      {data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <h1
              className="px-4 pt-6 text-xl cursor-pointer transition-all 1s"
              onClick={
                multiSelect
                  ? () => handleMulti(dataItem.id)
                  : () => handleSingle(dataItem.id)
              }
            >
              {" "}
              {dataItem.question}
            </h1>

            <h1 className="px-4 ">
              {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? dataItem.answer : null}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
