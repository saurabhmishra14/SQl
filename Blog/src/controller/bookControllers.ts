import { Request, Response } from "express";
import { Message as message } from "../constant/message";
import bookModel from "../model/bookModel";
import bookServices from "../services/bookServices";
import { v4 as uuidv4 } from "uuid";

async function insertBookDetails(req: Request, res: Response) {
  try {
    const user = req.body.user;
    const docs = new bookModel({
      bookName: req.body.bookName,
      authorName: req.body.authorName,
      bookSummary: req.body.bookSummary,
      bookID: uuidv4(),
      userID: user.userID,
    });

    await bookServices.insertBookDetails(docs);
    res.status(200).send(message.bookDetails);
  } catch (err) {
    res.send(err);
  }
}

async function getBookDetails(req: Request, res: Response) {
  try {
    const bookDetails = await bookServices.getBookDetails();
    res.send(bookDetails);
  } catch (error) {
    res.send(error);
  }
}
async function deleteBookDetails(req: Request, res: Response) {
  try {
    const user = req.body.user;
    if (!user) {
      throw new Error(message.notFound);
    }
    const userID = user.userID;
    const bookID = req.params.bookID;
    const book: any = await bookServices.findBook(bookID);
    if (!book) {
      throw new Error(message.bookNotPresent);
    }
    const userID1 = book.userID;
    if (userID1 === userID) {
      const result = await bookServices.deleteBookDetails(req.params.bookID);
      if (!result) {
        throw new Error(message.bookNotDeleted);
      }
      res.send(message.bookDetailsDeleted);
    }
  } catch (error) {
    res.send(`${error}`);
  }
}

async function updateBookDetails(req: Request, res: Response) {
  try {
    const user = req.body.user;
    if (!user) {
      throw new Error(message.notFound);
    }
    const userID = user.userID;
    const bookID = req.params.bookID;
    const book: any = await bookServices.findBook(bookID);
    if (!book) {
      throw new Error(message.bookNotPresent);
    }
    const userID1 = book.userID;
    if (userID1 === userID) {
      bookServices.updatedBookDetails(
        req.params.bookID,
        req.body.bookName,
        req.body.authorName,
        req.body.bookSummary
      );
      res.send(message.bookEdited);
    } else {
      throw new Error(message.bookNotDeleted);
    }
  } catch (err) {
    res.send(`Error ${err}`);
  }
}

export default {
  insertBookDetails,
  getBookDetails,
  deleteBookDetails,
  updateBookDetails,
};
