import {Link, Outlet} from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader";

const App = () => {
  return (
    <div className="App">
      <MainHeader/>
      {/*About - Books*/}
        <Outlet/>
    </div>
  );
};

export default App;
