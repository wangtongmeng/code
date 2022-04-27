import React from "react";
import ReactDOM from "react-dom";
import { useVirtual } from "react-virtual";
import "./reactVirtual.css";
function List() {
  const parentRef = React.useRef();

  const rowVirtualizer = useVirtual({
    size: 10000,
    parentRef,
    estimateSize: React.useCallback(() => 35, []),
  });
  return (
    <div
      ref={parentRef}
      className="List"
      style={{
        height: `150px`,
        width: `300px`,
        overflow: "auto",
      }}
    >
      <div
        className="ListInner"
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => (
          <div
            key={virtualRow.index}
            className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            Row {virtualRow.index}
          </div>
        ))}
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <List />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
