const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>

              <div>
                <img src = "\images\joshua-hoehne-HwQVjVum5Go-unsplash.jpg" alt = "an image of a silly cat"/> <br/>
                Photo by <a href="https://unsplash.com/@mrthetrain?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joshua Hoehne</a> on <a href="https://unsplash.com/photos/short-fur-white-cat-HwQVjVum5Go?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404