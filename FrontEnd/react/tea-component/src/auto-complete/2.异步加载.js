import React, { useState, useEffect, useRef } from "react";
import { AutoComplete, StatusTip, Input } from "@tencent/tea-component";
import ReactDOM from 'react-dom'

function AutoCompleteAsyncExample() {
  const [options, setOptions] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef("");
  const timerRef = useRef(null);

  useEffect(() => {
    fetchOptions();
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, []);

  async function fetchOptions(keyword = "") {
    try {
      const options = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.85) {
            reject(new Error());
            return;
          }
          resolve([
            { value: `1-${keyword}`, text: `${keyword}1` },
            { value: `2-${keyword}`, text: `${keyword}2` },
          ]);
        }, 800);
      });
      if (inputRef.current !== keyword) {
        return;
      }
      setOptions(options);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <AutoComplete
      options={options}
      keyword={inputValue}
      tips={
        <StatusTip
          status={loading ? "loading" : error ? "error" : "empty"} // eslint-disable-line no-nested-ternary
          onRetry={() => {
            setError(false);
            setLoading(true);
            fetchOptions(inputValue);
          }}
        />
      }
      onChange={value => {
        const option = options.find(opt => opt.value === value);
        setInputValue(option.text);
        console.log(value);
      }}
    >
      {ref => (
        <Input
          size="full"
          ref={ref}
          value={inputValue}
          onChange={value => {
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }
            inputRef.current = value;
            timerRef.current = setTimeout(() => fetchOptions(value), 500);
            setLoading(true);
            setOptions([]);
            setInputValue(value);
          }}
        />
      )}
    </AutoComplete>
  );
}

ReactDOM.render(<AutoCompleteAsyncExample />, document.getElementById('root'))