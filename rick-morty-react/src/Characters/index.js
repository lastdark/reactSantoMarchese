import React from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";



export default function Characters({rickandmorty}) {

//fecth data
// dentro un useEffect


  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid  container spacing={2}>
        {
          rickandmorty?.map((element)=>(
              <Grid key={element.id} item xs={3}>

                < Character {...element}  />
              </Grid>
              )

          )}
      </Grid>
    </Container>
  );
}
