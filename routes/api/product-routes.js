const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET ALL products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//==============================================================
// GET ONE product
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//==============================================================
// POST new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      "product_name": "Red T-Shirt",
      "price": 200.00,
      "stock": 3,
      "category_id": 1,
      "tagIds": [2, 4]
    }
  */
  try {
    // creates a new product with the specified req.body
    const product = await Product.create(req.body)
    // checks if there are tags specified in the tagId key = returns true if not zero, false if zero
    if (req.body.tagIds.length) {
      // if true = build an array of objects with the same product_id, but with the different tag_id's
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      // sends that array of objects to the ProductTag class
      await ProductTag.bulkCreate(productTagIdArr);
    };
    //
    res.status(200).json(product);

  }catch (err) {
      console.log(err);
      res.status(400).json(err);
    };
});


//==============================================================
// UPDATE product
router.put('/:id', (req, res) => {
  // update product data

  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});


//==============================================================
// DELETE product
router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }
    // will return a value of true(1) or false if it has been deleted
    res.status(200).json(productData)

  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
