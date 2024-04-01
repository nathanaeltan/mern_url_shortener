import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./store/store";
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
