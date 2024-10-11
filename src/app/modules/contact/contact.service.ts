/* eslint-disable @typescript-eslint/no-explicit-any */

import { TContact } from './contact.interface';
import { Contact } from './contact.model';

const createContactIntoDB = async (productData: TContact) => {
  const result = await Contact.create(productData);
  return result;
};

const getAllContactsFromDB = async () => {
  const Contacts = await Contact.find();
  return Contacts;
};

const getOneContactFromDB = async (id: string) => {
  const result = await Contact.findById(id);
  return result;
};

const updateContactFromDB = async (
  id: string,
  updatedProductData: Partial<TContact>,
): Promise<TContact | null> => {
  const result = await Contact.findByIdAndUpdate(id, updatedProductData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteOneContactFromDB = async (id: string) => {
  const result = await Contact.findByIdAndDelete(id);
  return result;
};

export const ContactService = {
  createContactIntoDB,
  getAllContactsFromDB,
  getOneContactFromDB,
  updateContactFromDB,
  deleteOneContactFromDB,
};
