import { FormData, FormErrors } from '../types/form';

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  // Name validation
  if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }
  if (/[^a-zA-Z\s]/.test(data.name)) {
    errors.name = 'Name should only contain letters and spaces';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Message validation
  if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  if (data.message.length > 1000) {
    errors.message = 'Message must not exceed 1000 characters';
  }
  // Basic HTML/script tag detection
  if (/<[^>]*>/.test(data.message)) {
    errors.message = 'Message contains invalid characters';
  }

  return errors;
};