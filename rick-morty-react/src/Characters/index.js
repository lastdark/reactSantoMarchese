import React from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";



export default function Characters(props) {




  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid  container spacing={2}>
        {
          props.rickandmorty?.map((element)=>(
              <Grid key={element.id.toString()} item xs={3}>

                < Character status={element.status} image={element.image} species={element.species}  name={element.name}  />
              </Grid>
              )

          )}
      </Grid>
    </Container>
  );
}
