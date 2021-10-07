import React,{useState}  from 'react'

const Menu = (props) =>
{




    return (

  <div className="overlay-menu">
    <h4>
      Close menu
      <button onClick={props.menuToggle}   className="btn-link" style={{ cursor: 'pointer' }}>
        <i className="fa fa-close pull-right" />
      </button>
    </h4>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>

    )


}

export default Menu
