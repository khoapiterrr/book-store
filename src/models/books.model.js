const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    require: true,
  },
  sale: {
    type: Boolean,
    default: false,
  },
  photos: [String],
  hidden: {
    type: Boolean,
    default: false,
  },
  meta: {
    votes: Number,
    favs: Number,
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      text: {
        type: String,
        required: true,
      },
      photos: [String],
      date: {
        type: Date,
        default: Date.now,
      },
      reply: [
        {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          text: {
            type: String,
            required: true,
          },
          photos: [String],
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
});
module.exports = Books = mongoose.model('Books', booksSchema);
