import { useDeferredValue, useEffect, useState } from "react";
function getSuggestions(keyword) {
  let items = new Array(10000).fill(0).map((item, index) => keyword + index);
  return Promise.resolve(items);
}

function Suggestion(props) {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    getSuggestions(props.keyword).then((suggestions) => {
      setSuggestions(suggestions);
    });
  }, [props.keyword]);

  return (
    <ul>
      {suggestions.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function StartTransitionPage() {
  const [keyword, setKeyword] = useState("");
  const deferredText = useDeferredValue(keyword);
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div>
      <div>
        关键字
        <input value={keyword} onChange={handleChange} />
      </div>
      <Suggestion keyword={deferredText} />
    </div>
  );
}
export default StartTransitionPage;
