import express from 'express';
import { ContactControllers } from './contact.controller';
import validateRequest from '../../middlewares/validateRequest';
import { contactValidation } from './contact.validation';

const router = express.Router();

router.post(
  '/api/contact',
  validateRequest(contactValidation.ContactValidationSchema),
  ContactControllers.createContact,
);

router.get('/api/contacts', ContactControllers.getAllContacts);

router.get('/api/contact/:contactId', ContactControllers.getOneContact);

router.delete('/api/contact/:contactId', ContactControllers.deletedContact);

router.put('/api/contact/:contactId', ContactControllers.updateContact);

export const ContactRoute = router;
