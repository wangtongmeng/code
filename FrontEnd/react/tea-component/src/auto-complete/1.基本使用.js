import React, { useState } from "react";
import { AutoComplete, Input } from "@tencent/tea-component";
import ReactDOM from 'react-dom'

const options = [
  { value: "strawberry", text: "草莓", tooltip: "甜甜甜" },
  { value: "apple", text: "红莓", disabled: true },
  { value: "orange", text: "树莓" },
  { value: "coca-cola", text: "可口可乐" },
  {
    value: "pepsi-cola",
    text: "百事可乐",
    tooltip: "百事可乐为什么比可口可乐好喝？",
  },
];

function AutoCompleteExample() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <AutoComplete
      open={!!inputValue && open}
      onOpenChange={open => setOpen(open)}
      options={options.filter(({ text }) => text.includes(inputValue))}
      keyword={inputValue}
      tips="没有匹配的标签"
      onChange={value => {
        const option = options.find(opt => opt.value === value);
        setInputValue(option.text);
        console.log(value);
      }}
      onScrollBottom={event => console.log(event)}
    >
      {ref => (
        <Input
          ref={ref}
          value={inputValue}
          onChange={value => setInputValue(value)}
        />
      )}
    </AutoComplete>
  );
}

ReactDOM.render(<AutoCompleteExample />, document.getElementById('root'))