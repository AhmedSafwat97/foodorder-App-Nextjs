const express = require("express");
const cors = require("cors");
const app = express();
const foodMenu = require("./foodMenu");
const offers = require("./offers");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/offers", (req, res) => {
  res.send(offers);
});

app.get("/foodMenu", (req, res) => {
  res.send(foodMenu);
});

app.get("/foodMenu/Pizza", (req, res) => {
  res.send(foodMenu.filter((item) =>{
    return item.category == "Pizza"
  }));
});

app.get("/foodMenu/Burger", (req, res) => {
  res.send(foodMenu.filter((item) =>{
    return item.category == "Burger"
  }));
});

app.get("/foodMenu/Pasta", (req, res) => {
  res.send(foodMenu.filter((item) =>{
    return item.category == "Pasta"
  }));
})

;app.get("/foodMenu/Fries", (req, res) => {
  res.send(foodMenu.filter((item) =>{
    return item.category == "Fries"
  }));
});


const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));