var express = require('express');
var router = express.Router();

const author = {
  name: "Daniela",
  lastname: "Villegas"
};

/* GET itens listing. */
router.get('/', async function (req, res, next) {
  let promise;
  console.log('items');
  console.log('entre', `${process.env.API_ML_PRODUCTS_SEARCHER}?q=${req.query.q}`);
  console.log('req.query.q', req.query.q);
  if (req.query.q && req.query.q.trim()) {
    promise = fetch(`${process.env.API_ML_PRODUCTS_SEARCHER}?q=${req.query.q}`).then(response => response.json());
  } else {
    promise = Promise.resolve();
  }
  const data = await promise;
  console.log('data', data);
  let categories = [];
  let items = [];
  if (data) {
    categories = (data.filters || [])
      .filter(category => category.id === "category")
      .map(category_1 => category_1.values
        .map(value_1 => value_1.path_from_root
          .map(path => path.name)
        )
        .find(() => true)
      )
      .find(() => true);

    let results = data.results || [];
    for (let i = 0; i < 4 && i < results.length; i++) {
      let article = results[i];
      items.push({
        id: article.id,
        title: article.title,
        price: {
          currency: article.currency_id,
          amount: article.available_quantity,
          decimals: article.price
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
});

module.exports = router;
