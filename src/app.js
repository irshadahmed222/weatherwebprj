const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.port || 4000;
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials")
//console.log(path.join(__dirname,"../public"))
// public static path
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// Routing
app.get("", (req,res) =>{
    res.render("index");
});

app.get("/about", (req,res) =>{
    res.render("about");
});

app.get("/weather", (req,res) =>{
    res.render("weather");
});

app.get("*", (req,res) =>{
    res.render("404",{
        errorMsg : "Oops error! page not found"
    });
});

app.listen(port, ()=>{
    console.log(`your are connected with port num ${port}`);
});;