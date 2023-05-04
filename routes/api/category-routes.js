const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


//==============================================================
// GET ALL category
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [ Product ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//==============================================================
// GET ONE category
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//==============================================================
// POST category
router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});


//==============================================================
// PUT category
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    category.category_name = req.body.category_name || tag.category_name;

    await category.save();

    res.status(200).json(category);
  }catch (err) {
    res.status(500).json(err);
  }
});


//==============================================================
// DELETE category
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
