// import logo from "./logo.svg";
import "./App.css";
import Activities from "./components/Activities/Activities";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/Blog/Blog";
function App() {
  return (
    <div className="App">
      <Activities></Activities>
      <Blog></Blog>
    </div>
  );
}

export default App;
