import Characters from "./Characters";
import Navigation from "./Navigation";
import axios from 'axios'
import {useEffect, useState} from "react";
function App() {

    const [rickandmorty, setrickandmort]=useState([]);
    const [page, setPage] = useState(1);


    function numberPage(nextPage){

        console.log(nextPage);
        return ( nextPage&& page<rickandmorty?.info.pages) ?  setPage(page+1):setPage(page-1)





    }





    useEffect(()=>{
        async function  fetchData(){

            const url=`https://rickandmortyapi.com/api/character/?page=${page}`;

             await axios.get(url)
                .then(function (response) {


                    setrickandmort(response.data);

                })
        }
        fetchData()

    },[page])

  return (
    <div className='App'>
      <Navigation  curentPage={page} numberPage={numberPage}  />
      <Characters  rickandmorty={rickandmorty.results}  />
    </div>
  );
}

export default App;
