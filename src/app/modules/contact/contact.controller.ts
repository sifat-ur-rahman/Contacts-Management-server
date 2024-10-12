import { NextFunction, Request, Response } from 'express';
import { ContactService } from './contact.service';

const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ContactData = req.body;
    const result = await ContactService.createContactIntoDB(ContactData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Contact created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllContacts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ContactService.getAllContactsFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Contacts retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getOneContact = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { contactId } = req.params;
    const result = await ContactService.getOneContactFromDB(contactId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Contact By ID retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateContact = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.contactId;
    const updatedContactData = req.body;
    const result = await ContactService.updateContactFromDB(
      id,
      updatedContactData,
    );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Contact updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const favoriteContact = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;

    const result = await ContactService.favoriteContactFromDB(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Favorite Contact updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllFavoritesContacts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ContactService.getAllFavoritesContactsFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Favorites Contacts retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deletedContact = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { contactId } = req.params;
    const result = await ContactService.deleteOneContactFromDB(contactId);
    if (result) {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Contact delete successfully',
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

export const ContactControllers = {
  createContact,
  getAllContacts,
  getOneContact,
  updateContact,
  favoriteContact,
  getAllFavoritesContacts,
  deletedContact,
};
