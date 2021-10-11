import Characters from "./Characters";
import Navigation from "./Navigation";

import { useState} from "react";
import SingleCharacter from './Characters/Character/SingleCharacter'
import {
    BrowserRouter as Router,
    Switch,
    Route
    
} from "react-router-dom";

function App() {


    const [page, setPage] = useState(1);

  return (
    <div className='App'>
        <Router>
       
        
            <Switch>
                <Route path="/home">
                <Navigation  curentPage={page} setPage={setPage}  />
                    <Characters page={page}  />
                </Route>

                <Route path="/single-character/:id">
              <SingleCharacter />
          </Route>
          <Route exact path="/">
          <Navigation  curentPage={page} setPage={setPage}  />
                    <Characters  page={page}  />
          </Route>
                
            </Switch>


        </Router>
    </div>

  );
}

export default App;
