const { Book, Author } = require("../model/model");

const bookController = {
  // Add book
  AddBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const saveBook = await newBook.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: saveBook._id } });
      }
      res.status(200).json(saveBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Get All book
  getAllBook: async (req, res) => {
    try {
      const allBook = await Book.find();
      res.status(200).json(allBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // get a book
  getABook: async (req, res) => {
    try {
      const abook = await Book.findById(req.params.id).populate("author");
      res.status(200).json(abook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Update abook
  updateABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Update successfully!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Delete abook
  deleteABook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Book.findOneAndDelete(req.params.id);
      res.status(200).json("Delete book successfully!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
