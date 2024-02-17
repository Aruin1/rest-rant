const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
          <div>
            <img src = "\images\brenda-godinez-MsTOg6rhRVk-unsplash.jpg"/> <br/>
            Photo by <a href="https://unsplash.com/@cravethebenefits?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brenda Godinez</a> on <a href="https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </div>
    
      </Def>
      
    
    )
  }
  

module.exports = home