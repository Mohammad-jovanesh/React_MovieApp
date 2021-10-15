


import logo from './logo.svg';
import './App.css';
import {Home} from "./Component/Home/Home"
import {MovieInfo} from "./Component/MovieInfo/MovieInfo"
import {Switch,Route} from "react-router-dom" 
import {Header} from "./Component/Header/Header"

function App() {

  return (
    
      
    <div className="App">
     <Header />
      <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/movieinfo/:id" ><MovieInfo/></Route>
      </Switch>
      </div>
     
      

     
  );
}

export default App;
