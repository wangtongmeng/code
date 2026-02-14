// MentionList.jsx
import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';

const MentionList = forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index) => {
    const item = props.items[index];
    if (item) {
      props.command({ id: item.id, label: item.name });
    }
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === 'ArrowUp') {
        upHandler();
        return true;
      }

      if (event.key === 'ArrowDown') {
        downHandler();
        return true;
      }

      if (event.key === 'Enter') {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className="mention-list">
      {props.items.length ? (
        props.items.map((item, index) => (
          <div
            className={`mention-item ${index === selectedIndex ? 'is-selected' : ''}`}
            key={item.id}
            onClick={() => selectItem(index)}
          >
            <img src={item.avatar} alt={item.name} className="avatar" />
            <div className="user-info">
              <div className="name">{item.name}</div>
              <div className="role">{item.role}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="mention-item">未找到用户</div>
      )}
    </div>
  );
});

export default MentionList;
