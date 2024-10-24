import './App.css';
import Naglowek from './Naglowek';
import Wiersz from './Wiersz';

const godziny = [
  {nr:1, godzina:"8:00-8:45", pn:"PEN IM 323",
    wt:"EE PJ 325", sr:"J. pol MO 315",
    cz:"zaj. wych SE 102", pt:"biz i zarz SO 314"},

] ;

function App() {
  return (
    <div className="App">
      <h1>plan lekcji</h1>
      <table>
        <Naglowek />
        <Wiersz dane={godziny[0]}/>

      </table>
      
    </div>
  );
}

export default App;
