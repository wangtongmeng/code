/* 
class Component {
    constructor() {
        this.age = 1;
    }
}
class ClassComponent extends Component {
    constructor() {
        super();
        this.name = 2;
    }
    render() {
        return <h1>hello</h1>;
        return React.createElement('h1', null, 'hello');
    }
}
 */

function FunctionComponent() {
    console.log(this);
    return 1;
}
//let element = <ClassComponent| FunctionComponent />
//let element = React.createElement(ClassComponent | FunctionComponent);

//let helloElement = React.createElement('h1');
//编译的时候，也会把类组件的render方法，改成createElement形式吧？
//babel只转jsx 
FunctionComponent();