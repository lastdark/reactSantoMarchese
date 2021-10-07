import React ,{useState,useEffect}from 'react'
import axios from 'axios'
export  default  function Books (props){


 const [category,setCategory]=useState('All');
 const  [listbooks,setBooks]=useState([]);







  useEffect(()=>{
    //setLoading(true)
     async function fetchData(){
      const url=`http://localhost:9000/books`;
      const data= await axios.get(url)
        .then(function (response) {


          const myFilter= (category!=='All')?response.data.filter(book=> book.category===category):response.data
          setBooks(myFilter);

        }).finally(()=> console.log('fai qualcosa'))
    }

    fetchData();

  },[category])


   return(
       <section id="books">
       <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center">
               <h2>Books</h2>
               <hr className="star-primary" />
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12">
               <ul className="nav nav-pills text-center">
                 {
                    props.pills.map((element,index)=>(
                     <li  onClick={() =>
                       setCategory(element)

                     } className={category=== element ?'active':'' } key={index}>
                        <a href="#0">{element}</a>
                      </li>
                         
                    )

                    
                    )}
                 
               </ul>
            </div>
         </div>
         <div className="row book-list">LIBRI
           {
             listbooks?.map((book)=>(

               <div className="col-xs-6 col-sm-3" key={book.id}>
                 <div className="thumbnail">
                   <img alt="" className="img-responsive" src={book.cover} />
                 </div>
               </div>

               )


             )}


         </div>
      </div>
   </section>


);

}


