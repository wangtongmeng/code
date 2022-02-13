
//还是不太理解那个类，怎么静态属性赋值完，直接就是this.context了
let ThemeContext = {
    _currentValue: null
};

class Header {
    static contextType = ThemeContext
}
//渲染Provider
ThemeContext._currentValue = { color: 'red' };

//然后再挂载类组件Header
let classInstance = new Header();
classInstance.context = ThemeContext._currentValue;