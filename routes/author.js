const authorController = require("../controllers/author.controller");
const router = require("express").Router();

//ADD Author
router.post("/", authorController.addAuthor);

// Get All author
router.get("/", authorController.getAllAuthor);

// // get an author
router.get("/:id", authorController.getAnAuthor);

// Update an author
router.put("/:id", authorController.UpdateAnAuthor);

//detele author
router.delete("/:id", authorController.daeleteAuthor);

module.exports = router;