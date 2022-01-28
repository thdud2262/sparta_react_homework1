import './App.css';
import MainPage from './components/MainPage';
import EmptyPage from './components/EmptyPage';
import DetailPage from './components/DetailPage';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path ='/detail/:day'>
          <DetailPage/>
        </Route>
        <Route>
          <EmptyPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
