import React ,{useState} from 'react'
import Header from './Header'
import NavBar from './NavBar';
import Books from './Books'
import About from './About'
import Footer from './Footer'
import Menu from './Menu';
import books from '../mocks/books'

const pills=['All', 'Design', 'Mobile', 'DevOps', 'Essentials'];
function App() {



  const [open, setIsOpen] = useState(false);


  function toggle(){

     setIsOpen(!open);
  }
  return (

    <div id="page-wrap">

     <NavBar menuToggle={toggle} />
      { open &&  < Menu menuToggle={toggle}/>}
      <Header title={"Welcome to React"} date={ new Date().toLocaleDateString()}/>
      <Books pills={pills}/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
