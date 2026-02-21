const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["credit", "debit"],
      required: true,
    },
    reason: String,
    balanceAfter: Number,
  },
  {
    timestamps: true,
  },
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
