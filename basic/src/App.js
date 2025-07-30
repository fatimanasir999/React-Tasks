
// import './App.css';
import Welcome from "./components/welcome";
import StudentCard from "./components/StudentCard";
import List1 from "./components/List1";
import Counter from "./components/Counter";
import QuoteGenerator from "./components/QuoteGenerator";
import WeatherApp from "./components/WeatherApp";
function App() {
  return (
    <div className='App'>
      <h1 >Hello React</h1>
      <p>this is my first react app</p>
      <h2>About me:</h2>
      <StudentCard name="fatima" sem="5th" degree="BSCS"/>
      <List1/>
      <Welcome/>
      <Counter/>
      {/* <QuoteGenerator/> */}
      <WeatherApp/>
    </div>
    
  );
}

export default App;
