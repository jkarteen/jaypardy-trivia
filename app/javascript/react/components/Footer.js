import React from 'react'

const Footer = props => {
  return (
    <footer>
      <div className="grid-container" id="footer">
        <div className="grid-x footer-links">
          <a className="repo-link" href="https://github.com/jkarteen/jaypardy-trivia">Github</a>
          <a className="repo-link" href="https://github.com/jkarteen/jaypardy-trivia">Heroku</a>
          <a className="repo-link" href="https://www.linkedin.com/in/jason-korwek/">LinkedIn</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer