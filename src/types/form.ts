export interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  export interface FormState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
  }