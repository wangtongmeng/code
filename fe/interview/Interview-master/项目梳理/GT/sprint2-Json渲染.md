####1.用 dom 渲染出一个 json 并且 key 值有点击事件
显示在页面上的变量，不一定都要用state，也可以放在常规变量里。
但是这个变量变化后要是显示在一个新出现的dom上，比如Modal，否则会有数据刷新的问题。

```javascript
  private checkIfAdded = (existArr: any[], path: string[]) => {
    return existArr.some((arr: string[]) => arr.every((item, index) => item === path[index]));
  };

  // data是要渲染的数据，deep是层级，path是key路径
  // renderJson本质上是一个函数式组件，以函数式组件看待
  private renderJson(data: Object, deep = 1, path: string[] = []) {
    // exist: path[]
    const { exist } = this.state;
    return (
      <div>
        {mobx.keys(data).map((item: string) => {
          const curPath: string[] = [...path];
          curPath.push(item);
          const hasAdded = this.checkIfAdded(exist, curPath);
          const isObj = Object.prototype.toString.call(data[item]) === '[object Object]';
          if (isObj) {
            const newDeep = deep + 1;
            return (
              <div key={JSON.stringify(curPath)}>
                <div style={{ paddingLeft: `${deep * 20}px` }}>
                  <span>&quot;</span>
                  {hasAdded ? (
                    <span>{item}</span>
                  ) : (
                    <a
                      onClick={() => {
                        this.onAttributeClick(curPath);
                      }}
                      type="link"
                    >
                      {item}
                    </a>
                  )}
                  <span>{'": {'}</span>
                </div>
                <div>{this.renderJson(_.get(data, item), newDeep, curPath)}</div>
                <div style={{ paddingLeft: `${deep * 20}px` }}>{'},'}</div>
              </div>
            );
          }
          return (
            <div key={JSON.stringify(curPath)}>
              <span style={{ paddingLeft: `${deep * 20}px` }}>
                <span>&quot;</span>
                {hasAdded ? (
                  <span>{item}</span>
                ) : (
                  <a
                    onClick={() => {
                      this.onAttributeClick(curPath);
                    }}
                    type="link"
                  >
                    {item}
                  </a>
                )}
                <span>&quot;</span>
              </span>
              <span>: {JSON.stringify(_.get(data, item))},</span>
            </div>
          );
        })}
      </div>
    );
  }
```


