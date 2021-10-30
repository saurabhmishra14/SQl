import mongoose , { Schema, model} from "mongoose";

interface bookDetails {
  bookName: string;
  authorName: string;
  bookSummary: string;
  bookID: string,
  userID: number
}

const schema = new Schema<bookDetails>({
  bookName: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  bookSummary: {
    type: String,
    required: true,
  },
  bookID:{
    type: String,
  },
  userID:{
    type: Number,
    required: true 
  }
  
});

const bookModel = model<bookDetails>("bookDetails", schema);
export default bookModel;
