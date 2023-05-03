const express = require("express");
const app = express();
const port = 5000;

app.use(cors())

const categories = require("./data/category.json");
const recipes = require("./data/food.json");

app.get("/", (req, res) => {
  res.send("gello World!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/recipes", (req, res) => {
    res.send(recipes);
  });
  
  app.get("/recipes/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedNews = recipes.find((nw) => nw._id === id);
    res.send(selectedNews);
  });

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if(id===0){
    res.send(recipes)
  }

  else{
  const selectedCategory = recipes.filter(
    (category) => parseInt(category.category_id) === id
  );
  res.send(selectedCategory);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
