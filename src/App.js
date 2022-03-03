// import spinner from './loading.gif';
import './App.css';
import Select from "./components/Select";
import Header from "./components/Header";
import Stats from './components/Stats';
import FormContainer from './components/FormContainer';

function App() {
  // const loading = false;

  return (
    <div className="App">
      {/* {loading ? <img src={spinner} alt="Loading spinner" className="spinner" /> : <h1>Fertility Calculator</h1>} */}
      {/* <Header /> */}
      <FormContainer />
      <Stats />
      {/* <Select /> */}
    </div>
  );
}

export default App;
