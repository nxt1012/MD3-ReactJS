import './App.css';
import Baitap1 from './Baitap/Baitap1';
import Baitap2 from './Baitap/Baitap2';
import Baitap3 from './Baitap/Baitap3';
import ParentComp from './components/ParentComp';
function App() {
  return (
    <div>
      <Baitap1 />
      <Baitap2 />
      <Baitap3 />
      <ParentComp />
    </div>
  );
}
export default App;
