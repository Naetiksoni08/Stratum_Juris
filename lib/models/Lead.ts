import mongoose, { Schema, Document } from "mongoose";

interface INote {
  _id?: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
}

export interface ILead extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "pending" | "contacted" | "closed" | "spam";
  source: string;
  tags: string[];
  starred: boolean;
  enquiryDate: string;
  notes: INote[];
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new Schema<INote>({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "contacted", "closed", "spam"],
      default: "pending",
    },
    source: { type: String, default: "website" },
    tags: { type: [String], default: [] },
    starred: { type: Boolean, default: false },
    enquiryDate: { type: String, default: "" },
    notes: { type: [NoteSchema], default: [] },
  },
  { timestamps: true }
);

export const Lead =
  (mongoose.models.Lead as mongoose.Model<ILead>) ||
  mongoose.model<ILead>("Lead", LeadSchema);
