import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./index.css";

const TransitionGroupDemo = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Buy eggs" },
    { id: 2, text: "Pay bills" },
    { id: 3, text: "Invite friends over" },
    { id: 4, text: "Fix the TV" },
  ]);

  const [items2, setItems2] = useState([
    { id: 5, text: "test5" },
    { id: 6, text: "test6" },
  ]);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container">
      <TransitionGroup className="todo-list">
        {toggle
          ? items.map(({ id, text }) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames="show"
                unmountOnExit
              >
                <div className="todo-list-item">
                  <button
                    className="cancel"
                    onClick={() => {
                      setItems(items.filter((item) => item.id !== id));
                    }}
                  >
                    &times;
                  </button>
                  <span className="item-text">{text}</span>
                </div>
              </CSSTransition>
            ))
          : items2.map(({ id, text }) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames="show"
                unmountOnExit
              >
                <div className="todo-list-item">
                  <button
                    className="cancel"
                    onClick={() => {
                      setItems(items2.filter((item) => item.id !== id));
                    }}
                  >
                    &times;
                  </button>
                  <span className="item-text">{text}</span>
                </div>
              </CSSTransition>
            ))}
      </TransitionGroup>
      <button
        className="add"
        onClick={() => {
          setItems([...items, { id: Math.random(), text: "" + Math.random() }]);
        }}
      >
        Add Item
      </button>
      <button onClick={() => setToggle(!toggle)}>切换</button>
    </div>
  );
};

export default TransitionGroupDemo;
