import React, {Component} from 'react'
import footerImage from '../../public/bookfooter2.svg';

class Footer extends Component {
  render() {
    return(
      <div className="App-footer">
        <img class="footer-image" src={footerImage} />
      </div>
    )
  }

}

export default Footer;
