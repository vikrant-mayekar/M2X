import mongoose, { Document, Schema } from "mongoose";

export interface IPayment extends Document {
  user: mongoose.Types.ObjectId;
  listing?: mongoose.Types.ObjectId;
  amount: number;
  currency: string;
  paymentMethod: string;
  status: "pending" | "completed" | "failed" | "refunded";
  transactionId?: string;
  type: "premium" | "featured" | "boost";
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema<IPayment>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: "USD",
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
    transactionId: {
      type: String,
    },
    type: {
      type: String,
      enum: ["premium", "featured", "boost"],
      required: true,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IPayment>("Payment", PaymentSchema);


