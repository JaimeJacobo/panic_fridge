import React from 'react';
import './NavbarF.css';

const Nav = () => {

      return (

      <div className='App nav-fridge'>
        <nav className="navbar navbar-expand-md navbar-expand-lg navbar-expand-xl nav-fridge">
          <div className= 'fridge-logo'></div>
            <a className="navbar-brand" href="#"></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <a className="nav-item nav-link active" href="#">INGREDIENTS <span className="sr-only">(current)</span></a>
                      <a className="nav-item nav-link" href="#">WORLD FOOD</a>
                      <a className="nav-item nav-link" href="#">RECIPE OF THE DAY</a>
                  </div>
              </div>  
        </nav>
      </div>
)
}

export default Nav