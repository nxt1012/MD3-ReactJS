
import './App.css';
import Button from './components/Button';
function App() {
const text = "Click Me";
const color = "red";
const backgroundColor = "blue";
  return (
    <div className="App">
      <Button buttonText={text} buttonColor={color} buttonBackgroundColor={backgroundColor} />
    </div>
  );
}

export default App;
