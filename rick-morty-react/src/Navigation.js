import React from "react";
import { Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Badge from "@mui/material/Badge";
export default function Navigation({curentPage,numberPage}) {





  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button disabled={curentPage<=1 } onClick={()=>  numberPage(false)} variant='contained' startIcon={<NavigateBeforeIcon />}>
            Previous
          </Button>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <Badge badgeContent={curentPage} sx={{ mx: "auto" }} color='primary'>
            <InsertDriveFileIcon color='action' />
          </Badge>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex" }}>
          <Button disabled={curentPage>=34} onClick={()=> numberPage(true)}
            variant='contained'
            endIcon={<NavigateNextIcon />}
            sx={{ ml: "auto" }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
