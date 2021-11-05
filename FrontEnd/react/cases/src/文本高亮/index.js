import React from 'react';
import ReactDOM from 'react-dom';

function Text(){
    return (
        <span>{getHighlightedText('abababababa', 'a')}</span>
    )
}


function getHighlightedText(text, highlight) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <span style={{color: 'red'}}>{part}</span> : part)}</span>;
}
ReactDOM.render(<Text />, document.getElementById('root'))