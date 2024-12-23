const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//const { title } = require('process')
 

  //console.log(__dirname)
  //console.log(path.join(__dirname , '../public'))

 const app = express()
 const publicDirectoryPath = path.join(__dirname , '../public')
 const viewsPath = path.join(__dirname , '../template/views')
 const partialsPath = path.join(__dirname , '../template/partials')

  app.set('view engine' , 'hbs')
  app.set('views' , viewsPath )
  hbs.registerPartials(partialsPath)

 app.use(express.static(publicDirectoryPath))


//  app.get('' , (req , res)=>{
//    res.send('<h1>weather</h1>')

//  })



//  app.get('/help' , (req , res)=>{
//     res.send({
//         name: "vanshika",
//         age:21
//     })
 
//   })

//   app.get('/about' , (req , res)=>{
//     res.send('<h1>About</h1>')
//  ther
//   })

 
app.get('',(req , res) => {
    res.render('index' ,{
       title: "weather",
       name : "vanshika"
    })
 })

 app.get('/about',(req , res) => {
  res.render('about',{
    title:"about me ",
    name: 'vanshi'
  })
})

app.get('/help',(req , res) => {
  res.render('help',{
    title:"helping page ",
    name: 'vanshikaa'
  })
})


  app.get('/weather' , (req , res)=>{
    if(!req.query.address){
      return res.send({
        error: 'you must provide search term'
       })

    }

  //  geocode(req.query.address,  (error , {latitude, longtitude , location } = {}) => {
  //    if (error){
  //     return res.send({error})
  //    }

  //    forecast (latitude , longtitude , (error , forecastData) => {
  //     if (error){
  //       return res.send({error})
  //      }

  //      res.send({
  //        forecast: forecastData,
  //        location,
  //        address: req.query.address

  //      })

  //    })
  //  })
    res.send({
       forecast:"it is snowing",
       location: "kashmir",
       address: req.query.address
   })
 
  })

  app.get('/product', (req ,res) => {
    if(!req.query.search){
      return res.send({
      error: 'you must provide search term'
     })
    }
    console.log(req.query.search)
    res.send({
      products :[]
    })
  })
   
  app.get('/help/*' , (req , res)=>{
    res.render("404" , {
      title: "404",
      name: 'vanshika' , 
      errorMsg: "help article  not found"
    })
  })

  app.get('*' , (req , res)=>{
    res.render("404" , {
      title: "404",
      name: 'vanshika' , 
      errorMsg: "page not found"
    })
  })
 
 app.listen(3000 , () => {
    console.log("server is up on the port 3000")
 })