var express = require('express');
require('dotenv').config()
var router = express.Router();
var fetch = require('fetch').fetchUrl;

const author = {
  name: "Daniela",
  lastname: "Villegas"
};

/* GET items listing. */
router.get('/', function (req, res, next) {
  if (req.query.q && req.query.q.trim()) {
    fetch(
      `${process.env.API_ML_PRODUCTS_SEARCHER}?q=${req.query.q}`, function (error, meta, body) {
        if (error) res.send({ error: error });
        const bodyString = body.toString();
        const jsonBody = JSON.parse(bodyString);
        const { results, filters } = jsonBody;
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

          let Allresults = results || [];
          for (let i = 0; i < 4 && i < Allresults.length; i++) {
            let article = Allresults[i];
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
      }
    );
  }
});

module.exports = router;
