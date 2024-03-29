const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div class = "col-sm-6">
          <h2>{place.name}</h2>
          <p className="text-center">{place.cuisines}</p>
          <img src={place.pic} alt={place.name}/><br/>
          photo by <a href={place.artistLink}>{place.artist}</a> on <a href={place.site}>usplash</a><br/>
          <p className='text-center'>Located in {place.city}, {place.state}</p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Resturaunts to rant about!</h1>
              <div className = "row">
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
  
module.exports = index