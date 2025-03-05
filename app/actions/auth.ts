import { RegisterFormSchema, RegisterFormState} from '@/app/lib/auth.definitions'

export async function signup(state: RegisterFormState, formData: FormData) {

  // Validate form fields
  const validateFields = RegisterFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
  })

  // If form fields are invalid, return the errors
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    }
  }

  // If form fields are valid, proceed with the signup
  return {
    message: 'Signup successful',
  }
}