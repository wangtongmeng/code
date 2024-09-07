import { startTransition, useEffect, useState } from "react";

function getSuggestion(keyword) {
  let items = new Array(10000).fill(keyword);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 1000 * keyword.length);
  });
}

function Suggestion(props) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (props.keyword && props.keyword.length > 0) {
      getSuggestion(props.keyword).then((suggestions) => {
        startTransition(() => {
          setSuggestions(suggestions);
        });
      });
    }
  }, [props.keyword]);

  return (
    <ul>
      {suggestions.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function StartTransitionPage() {
  const [keyword, setKeyword] = useState("");
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div>
      <div>
        关键字 <input value={keyword} onChange={handleChange} />
      </div>
      <Suggestion keyword={keyword} />
    </div>
  );
}

export default StartTransitionPage;
