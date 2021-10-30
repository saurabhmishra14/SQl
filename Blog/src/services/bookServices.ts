import bookModel from "../model/bookModel";
import schemas from "../validator/schema";

function validateBookSchema(bookName: string, authorName: string, bookSummary: string) {
  const post = {
    bookName: bookName,
    authorName: authorName,
    bookSummary: bookSummary
  };
  return schemas.bookINFO.validateAsync(post);
}

function validateChangedBookSchema(bookName: string, authorName: string, bookSummary: string) {
  const post = {
    bookName: bookName,
    authorName: authorName,
    bookSummary: bookSummary
  };
  return schemas.bookINFO1.validateAsync(post);
}

function insertBookDetails(docs: any){
  return docs.save();
}

function getBookDetails(){
return bookModel.find();
}

function deleteBookDetails(bookID: string){
  return bookModel.deleteOne({
    bookID: bookID
  });
}

function findBook(bookID: string){
  return bookModel.findOne({
      bookID: bookID
    }
  )
}

async function updatedBookDetails(bookID: string,bookName?: string,authorName?: string, bookSummary?: string){

if(typeof bookName != undefined){
  await bookModel.updateOne({ bookID: bookID },{bookName:bookName})
}
if(typeof authorName != undefined){
  await bookModel.updateOne({ bookID: bookID },{authorName:authorName})
}
if(typeof bookSummary != undefined){
  await bookModel.updateOne({ bookID: bookID },{bookSummary: bookSummary})
}
}
export default{
  validateBookSchema,
  validateChangedBookSchema,
  insertBookDetails,
  getBookDetails,
  deleteBookDetails,
  findBook,
  updatedBookDetails
}