const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    flatId: {
      type: String,
    },

    OwnerEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    ClientEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    ClientMobile: {
      type: String,
      required: true,
    },
    ClientMessage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
