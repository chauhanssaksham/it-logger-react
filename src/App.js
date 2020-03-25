import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import './App.css';

function App() {
    useEffect(()=>{
        //initializes Materialize.js (Modals)
        M.AutoInit();
    });
    return (
        <Fragment>
            <SearchBar/>
        </Fragment>
    );
}

export default App;
