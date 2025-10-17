import mongoose, { Document, Schema } from "mongoose";

export interface IListing extends Document {
  title: string;
  description: string;
  price: number;
  category: mongoose.Types.ObjectId;
  condition: "new" | "used" | "refurbished";
  images: string[];
  location: {
    city: string;
    state: string;
    country: string;
  };
  seller: mongoose.Types.ObjectId;
  status: "active" | "sold" | "inactive";
  isFeatured: boolean;
  isPremium: boolean;
  views: number;
  specifications?: {
    brand?: string;
    model?: string;
    year?: number;
    [key: string]: any;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ListingSchema = new Schema<IListing>(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      maxlength: [5000, "Description cannot exceed 5000 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Please select a category"],
    },
    condition: {
      type: String,
      enum: ["new", "used", "refurbished"],
      required: [true, "Please specify the condition"],
    },
    images: [
      {
        type: String,
      },
    ],
    location: {
      city: {
        type: String,
        required: [true, "Please provide a city"],
      },
      state: {
        type: String,
        required: [true, "Please provide a state"],
      },
      country: {
        type: String,
        default: "USA",
      },
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "sold", "inactive"],
      default: "active",
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    specifications: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

// Index for search
ListingSchema.index({ title: "text", description: "text" });
ListingSchema.index({ category: 1, status: 1 });
ListingSchema.index({ seller: 1 });

export default mongoose.model<IListing>("Listing", ListingSchema);


