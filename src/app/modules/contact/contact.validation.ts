import { z } from 'zod';

//Create Validation Schema------

const ContactValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    img: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
  }),
});

//Update Validation Schema------

const contactUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    img: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});
export const contactValidation = {
  ContactValidationSchema,
  contactUpdateValidationSchema,
};
