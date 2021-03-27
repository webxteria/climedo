import { Schema, Document } from 'mongoose';

export const tabsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  dataOptions: { type: Array, required: true }
});

export interface Tab extends Document {
  _id: string;
  name: string;
  description: string;
  dataOptions: Array<Object>;
}
