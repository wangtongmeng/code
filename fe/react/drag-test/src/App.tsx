import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import AppScss from './test.module.scss'

interface ItemType {
  id: number;
  name: string;
}

const BasicFunction: FC = (props) => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
    { id: 3, name: "sfs" },
    { id: 4, name: "sd" },
    { id: 5, name: "fizxcvona" },
  ]);

  return (
    <ReactSortable list={state} setList={setState} dragClass={AppScss.dragItem} >
      {state.map((item) => (
        <div style={{width: '200px', height: '50px', border: '1px solid red'}} key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
  );
};

export default BasicFunction