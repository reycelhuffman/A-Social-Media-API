const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      unique: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address'],
    },
    thoughts: {
      type: Schema.Types.Array, ref: "thoughtSchema.thoughtId",
    },
    friends: {
      type: Schema.Types.Array, ref: 'users.id', 
  },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
