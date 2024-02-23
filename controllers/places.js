const router = require('express').Router()
const express = require('express')
const app = express()

app.post('/places', (req, res) => {
  console.log(req.body)
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/ryan-kwok-KXUiorQdlkI-unsplash.jpg',
        artist: 'Ryan Kwok',
        artistLink: 'https://unsplash.com/@milkbox?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        site: 'https://unsplash.com/photos/KXUiorQdlkI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/jaqueline-pelzer-Zt-0gWKodXk-unsplash.jpg',
        artist: 'Jaqueline Pelzer',
        artistLink: 'https://unsplash.com/@jaqui123456?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
        site: 'https://unsplash.com/photos/Zt-0gWKodXk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
      }]
      
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router

  
  