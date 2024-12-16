import { useState } from 'react';
import { z } from 'zod';
import type { ContactFormData } from '../types/contact';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleSubmit = async (data: ContactFormData) => {
    setErrors({});
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(data);
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', validatedData);
      // Reset form or show success message
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting,
    errors,
  };
}