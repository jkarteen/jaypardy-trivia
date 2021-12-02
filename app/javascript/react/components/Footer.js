import React from 'react'

import creatorImage from '../../../assets/images/jk2.jpeg'

const Footer = props => {
  return (
    <footer>
      <div className="grid-container" id="footer">
        <div className="grid-x">
          <a className="footer-link" href="https://github.com/jkarteen/jaypardy-trivia">Github</a>
          <a className="footer-link" href="https://www.linkedin.com/in/jason-korwek/">LinkedIn</a>
          <h4 id="footer-creator">Created by Jason Korwek</h4>
          <img src={creatorImage} id="photo"></img>
        </div>
      </div>

    </footer>
  )
}

export default Footer