import React, {Component} from 'react'
import footerImage from '../../public/bookfooter2.svg';

class Footer extends Component {
  render() {
    return(
      <div className="App-footer">
        <img className="footer-image" src={footerImage} alt="a bunch of books"/>
      </div>
    )
  }

}

export default Footer;
