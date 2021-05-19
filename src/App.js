import './App.css';
import Buecher from './buecher';
import DigitalServices from './digitalServices';

function App() {
  const showCart = () => {
    /* zeigt Inhalte des Kaufswagen */
  }
  return (
    <div className="App">
      <h1 className="headTitel">Johner Institut</h1>
        <Buecher />
        <DigitalServices />
        <footer>
        <button onClick={() => showCart()}>Einkaufswagen('length of Waren')</button>
      </footer> 
    </div>
  );
}
export default App;
