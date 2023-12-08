const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port  = process.env.PORT || 3000

const staticPath = path.join(__dirname, "../public")
const temPath = path.join(__dirname , "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
console.log(staticPath);

hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", temPath)
app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/about", (req , res)=>{
       res.render("about")
})
app.get("/weather", (req, res)=>{
    res.render("weather")
})
app.get("*" , (req, res)=>{
    res.render("404error" ,{
        message: "No Such Page was found"
    })
})

app.listen(port, ()=>{
    console.log("listening to the request")
})