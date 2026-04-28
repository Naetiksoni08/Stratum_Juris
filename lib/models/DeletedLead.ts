import mongoose, { Schema, Document } from "mongoose";

export interface IDeletedLead extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  source: string;
  tags: string[];
  starred: boolean;
  notes: { content: string; createdAt: Date }[];
  deletedAt: Date;
  originalCreatedAt: Date;
}

const DeletedLeadSchema = new Schema<IDeletedLead>({
  name: String,
  email: String,
  phone: String,
  message: String,
  status: String,
  source: String,
  tags: [String],
  starred: Boolean,
  notes: { type: Array, default: [] },
  deletedAt: { type: Date, default: Date.now },
  originalCreatedAt: Date,
});

export const DeletedLead =
  (mongoose.models.DeletedLead as mongoose.Model<IDeletedLead>) ||
  mongoose.model<IDeletedLead>("DeletedLead", DeletedLeadSchema);
