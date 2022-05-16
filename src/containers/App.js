import { Provider } from "react-redux";
import Carousel from "../components/Carousel";
import Profile from "../components/Profile";
import { store } from "../redux/store/store";

export default function App() {
  return (
    <Provider store={ store }>
      <Profile/>
      <Carousel/> 
    </Provider>
  )
}
