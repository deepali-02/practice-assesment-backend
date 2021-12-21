const { Router } = require("express");
const Space = require("../models").space;
const Story = require("../models").story;
const router = new Router();

//Get all spaces
router.get("/", async (req, res, next) => {
  try {
    const getSpaces = await Space.findAll({ include: [Story] });
    console.log("All spaces: ", getSpaces);
    res.send(getSpaces);
  } catch (e) {
    next(e);
  }
});

//get specific Space
router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = req.params.id;
    const getOneSpace = await Space.findByPk(spaceId, { include: [Story] });
    if (!getOneSpace) {
      res.status(400).send("Space not found");
    } else {
      console.log("One space: ", getOneSpace);
      res.send(getOneSpace);
    }
  } catch (e) {
    next(e);
  }
});
module.exports = router;
