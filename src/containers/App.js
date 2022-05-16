import { Provider } from "react-redux";
import Profile from "../components/Profile";
import { store } from "../redux/store/store";

function App() {
  return (
    <Provider store={ store }>
      <Profile/>
      </Provider>
  );
}

export default App;
