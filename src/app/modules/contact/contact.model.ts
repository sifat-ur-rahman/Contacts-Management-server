import { Schema, model } from 'mongoose';
import {
  ContactMethods,
  ContactModel as ContactModel,
  TContact as TContact,
} from './contact.interface';

const contactSchema = new Schema<TContact, ContactModel, ContactMethods>(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    email: { type: String, default: 'It has no email' },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    isFavorite: { type: Boolean, default: false },
  },
  { timestamps: true },
);

contactSchema.methods.isProductExits = async function (id: string) {
  const existingProduct = await Contact.findById(id);
  return existingProduct;
};

export const Contact = model<TContact, ContactModel>('Contact', contactSchema);
