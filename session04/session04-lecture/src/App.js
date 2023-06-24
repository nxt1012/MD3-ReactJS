import './App.css';
import DemoUseRef from './components/DemoUseContext/DemoUseRef';
import ParentContext from './components/DemoUseContext/ParentContext';
import DemoUseEffect from './components/DemoUseEffect';
import DemoUseReducer from './components/DemoUseReducer';
import DemoUseState from './components/DemoUseState';

function App() {
  return (
    <div className="App">
      {/* <DemoUseState /> */}
      {/* <DemoUseEffect /> */}
      {/* <ParentContext /> */}
      {/* <DemoUseReducer /> */}
      <DemoUseRef />
    </div>
  );
}

export default App;
