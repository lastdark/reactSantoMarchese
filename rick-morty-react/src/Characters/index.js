import React from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import { useState ,useEffect } from "react";
 import axios from 'axios'


export default function Characters({page}) {

 const [data,setData]=useState([]);





 useEffect(()=>{
  async function  fetchData(){

      const url=`https://rickandmortyapi.com/api/character/?page=${page}`;

      const response=await axios.get(url)
       if( response.status===200){
         setData(response.data.results);
        
       }
      
  }
  fetchData()


},[page])





  return (
    <Container fixed sx={{ mt: 4 }}>
     <Grid  container spacing={2}>
{
  data.map((element)=>(
      <Grid key={element.id} item xs={3}>

        < Character isToggle={true}  {...element}  />
      </Grid>
      )

  )}
</Grid>
   
    </Container>
  );
}
