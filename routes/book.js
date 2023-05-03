const bookController = require("../controllers/book.controller");
const router = require("express").Router();

// Add book
router.post("/", bookController.AddBook);

// Get all
router.get("/", bookController.getAllBook);

// get a book
router.get("/:id", bookController.getABook);

// put Update book
router.put("/:id", bookController.updateABook);

// Delete a book
router.delete("/:id", bookController.deleteABook);


module.exports = router;