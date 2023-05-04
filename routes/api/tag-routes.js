const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


//==============================================================
// GET ALL tag
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [ Product ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//==============================================================
// GET ONE tag
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//==============================================================
// POST tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});


//==============================================================
// PUT tag
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.findOne({
      where: {
        id: req.params.id,
      }
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    tag.tag_name = req.body.tag_name || tag.tag_name;

    await tag.save();

    res.status(200).json(tag);
  }catch (err) {
    res.status(500).json(err);
  }
});


//==============================================================
// DELETE tag
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
