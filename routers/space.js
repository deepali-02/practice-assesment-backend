const { Router } = require("express");
const auth = require("../auth/middleware");
const Space = require("../models").space;
const Story = require("../models").story;
const router = new Router();

//Get all spaces
router.get("/", async (req, res, next) => {
  try {
    const getSpaces = await Space.findAll({
      include: [Story],
      order: [[Story, "createdAt", "DESC"]],
    });
    //console.log("All spaces: ", getSpaces);
    res.send(getSpaces);
  } catch (e) {
    next(e);
  }
});

//get specific Space
router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = req.params.id;
    const getOneSpace = await Space.findByPk(spaceId, {
      include: [Story],
      order: [[Story, "createdAt", "DESC"]],
    });
    if (!getOneSpace) {
      res.status(400).send("Space not found");
    } else {
      //console.log("One space: ", getOneSpace);
      res.send(getOneSpace);
    }
  } catch (e) {
    next(e);
  }
});

//PATCH - update space details
router.patch("/:id", auth, async (req, res) => {
  const updateSpace = await Space.findByPk(req.params.id);
  if (!Space.userId === req.params.id) {
    return res
      .status(403)
      .send({ message: "You are not authorizes to update this space" });
  }

  const { title, description, backgroundColor, color } = req.body;
  await updateSpace.update({ title, description, backgroundColor, color });
  return res.status(200).send({ updateSpace });
});

//Post a new story-POST
router.post("/:id/stories", auth, async (req, res, next) => {
  try {
    const spaceId = req.params.id;
    const { name, content, imageUrl } = req.body;

    console.log("Body", req.body);

    if (!name || !content || !imageUrl) {
      return res.status(400).send({ message: "Somethis is missing." });
    }
    const story = await Story.create({ name, content, imageUrl, spaceId });
    return res.status(201).send({ message: "Story created", story });
  } catch (e) {
    console.log(e.message);
  }
});

//delete story
router.delete("/stories/:id", async (req, res, next) => {
  try {
    const storyId = req.params.id;
    const story = await Story.findByPk(storyId);
    console.log("Got story: ", story);
    if (!story) {
      return res.status(404).send("Story not found");
    }
    await story.destroy();

    res.send({ message: "Ok", storyId });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
