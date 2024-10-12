/* eslint-disable no-unused-vars */
//import { Schema, model, connect } from 'mongoose';

import { Model } from 'mongoose';

export type TContact = {
  name: string;
  img: string;
  email: string;
  phone: string;
  address: string;
  isFavorite: boolean;
};

export type ContactMethods = {
  isProductExits(id: string): Promise<TContact | null>;
};

export type ContactModel = Model<
  TContact,
  Record<string, never>,
  ContactMethods
>;
