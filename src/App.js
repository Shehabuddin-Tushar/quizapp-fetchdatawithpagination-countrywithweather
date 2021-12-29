import React,{useState,useEffect} from "react"
import Datafetchandpagination from "./Components/Datafetchandpagination";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Quiz from "./Pages/Quiz";
import Secondpagequestionandans from "./Pages/Secondpagequestionandans";
import Countryandweather from "./Components/Countryandweather";
import Authprovider from "./hooks/Context";
function App(){
 
  return (
    <>
      <Authprovider>
        <Router>
        <nav>
          <Link to="/">country search and weather</Link><br/>
          <Link to="/datafetch">every time 10 data fetch after 3 second</Link><br/>
          <Link to="/quizapp">quiz app</Link><br/>
       </nav>
       <br/><br/><br/>
          <Switch>
              <Route exact path="/">
                <Countryandweather/>
              </Route>

              <Route path="/datafetch">
                   <Datafetchandpagination/>
              </Route>

              <Route path="/quizapp">
                   <Quiz/>
              </Route>
             
          </Switch>
        </Router> 



      </Authprovider>  
    

    





    </>
  )
}
export default App;
