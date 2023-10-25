import estilos from './App.module.css'

//importamos los componentes
import CompShowTurnos from './Templates/ShowTurnos';
import CompCreateTurno from './Templates/CreateTurnos';
import CompEditTurno from './Templates/EditTurnos';
import Login from './Templates/Login';
import CompShowTurnosLogeado from './Templates/ShowTurnosLogeado';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={estilos.App}>
      <header className={estilos["AppHeader"]}>
        <h1>Ticket Turno</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowTurnos />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/turnosLogeado' element={ <CompShowTurnosLogeado />}/>
          <Route path='/create' element={ <CompCreateTurno />}/>
          <Route path='/edit/:id' element={ <CompEditTurno />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
