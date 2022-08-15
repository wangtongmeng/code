import StoreContext from "./context";
import store from "./store";
import Todos from "./Todos";
import User from "./User";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <User />
      <hr />
      <Todos />
    </StoreContext.Provider>
  );
};

export default App;
