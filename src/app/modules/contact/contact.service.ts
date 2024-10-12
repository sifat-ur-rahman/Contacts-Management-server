/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
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
const favoriteContactFromDB = async (id: string): Promise<TContact | null> => {
  const contact = await Contact.findById(id);
  if (!contact) {
    throw new AppError(httpStatus.NOT_FOUND, 'Contact not found');
  }
  contact.isFavorite = !contact.isFavorite;
  const result = await contact.save();
  return result;
};
const getAllFavoritesContactsFromDB = async () => {
  const favoriteContacts = await Contact.find({ isFavorite: true });
  return favoriteContacts;
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
  favoriteContactFromDB,
  getAllFavoritesContactsFromDB,
  deleteOneContactFromDB,
};
