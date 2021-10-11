
 import * as React from "react";
 import { useParams } from "react-router-dom";
 import { useEffect, useState } from "react";
 import axios from "axios";
 import { Link } from "react-router-dom";
 import Button from "@mui/material/Button";
 import Character from "./index";
 
 export default  function SingleCharacter (){
    const [post, setPost] = useState({});
   
    const { id } = useParams();
    

   

    useEffect(() => {
        async function fetchPosts() {
          
         const url=`https://rickandmortyapi.com/api/character/${id}`
          const response = await axios.get(
              url
          );
          setPost(response.data);
        }
    
        fetchPosts();
      }, [id]);

    
     return( 

      <Link to={`/`} >
          <Button key={id} size="large"> Back



     </Button>
          <Character isToggle={false} {...post}/>
      </Link>

   
)

 }