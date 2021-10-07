import React from 'react'
import Header from './Header'


function NavBar(props){



     return  (
       <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              My Library
            </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li>
              <button  onClick={props.menuToggle} className="btn btn-lg btn-outline">
                <i className="fa fa-graduation-cap" /> <span>Menu</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      );

      }
export default NavBar;