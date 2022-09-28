const router = require('express').Router();
const {
  Product, SmellName, Volume, Category, Wick, Price, Discount,
} = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const productsFindAll = await Product.findAll({
        include: [
          { model: SmellName },
          { model: Volume },
          { model: Category },
          { model: Wick },
          { model: Price },
          { model: Discount },
        ],
        raw: true,
      });
      res.json(productsFindAll);
    } catch (e) {
      console.error(e);
    }
  });
router.route('/volume')
  .get(async (req, res) => {
    try {
      const allVolume = await Volume.findAll();
      res.json(allVolume);
    } catch (e) {
      console.error(e);
    }
  });
router.route('/wick')
  .get(async (req, res) => {
    try {
      const allWick = await Wick.findAll();
      res.json(allWick);
    } catch (e) {
      console.error(e);
    }
  });
module.exports = router;
