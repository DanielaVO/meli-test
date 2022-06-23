var express = require('express');
require('dotenv').config()
var router = express.Router();
const fetch = require('node-fetch');

const author = {
  name: "Daniela",
  lastname: "Villegas"
};

/* GET items listing. */
router.get('/', async function (req, res) {
  if (req.query.q && req.query.q.trim()) {
    const response = await fetch(`${process.env.API_ML_PRODUCTS_SEARCHER}?q=${req.query.q}`)
    const { filters, results } = await response.json()
    let categories = [];
    let items = [];

    if (results) {
      categories = (filters || [])
        .filter(category => category.id === "category")
        .map(category_1 => category_1.values
          .map(value_1 => value_1.path_from_root
            .map(path => path.name)
          )
          .find(() => true)
        )
        .find(() => true);

      let all_results = results || [];
      for (let i = 0; i < 4 && i < all_results.length; i++) {
        let article = all_results[i];
        items.push({
          id: article.id,
          title: article.title,
          price: {
            currency: article.currency_id,
            amount: article.price,
            decimals: article.available_quantity
          },
          picture: article.thumbnail,
          condition: article.condition,
          free_shipping: (article.shipping && article.shipping.free_shipping === true),
          location: {
            state: article.address.state_name,
            city: article.address.city_name
          }
        });
      }
    }
    res.send({
      author,
      categories,
      items
    });
  } else {
    res.send("Ha ocurrido un error");
  }
});

/* GET item/:id listing. */
router.get('/:id', async function (req, res) {
  const response = await fetch(`${process.env.API_ML_PRODUCT_INFO}/items/${req.params.id}`)
  const article = await response.json()
  const category_response = await fetch(`${process.env.API_ML_PRODUCT_INFO}/categories/${article.category_id}`)
  const description_response = await fetch(`${process.env.API_ML_PRODUCT_INFO}/items/${article.id}/description`)
  const category_json = await category_response.json()
  const description_json = await description_response.json()

  let categories = (category_json.path_from_root || [])
    .map(path => path.name);

  let item = {
    id: article.id,
    title: article.title,
    price: {
      currency: article.currency_id,
      amount: article.price,
      decimals: article.available_quantity
    },
    picture: article.pictures && article.pictures.length > 0 ? article.pictures[0].url : article.thumbnail,
    condition: article.condition,
    free_shipping: (article.shipping && article.shipping.free_shipping === true),
    sold_quantity: article.sold_quantity,
    description: description_json.plain_text
  };
  res.send({
    author,
    categories,
    item
  });
});

module.exports = router;
