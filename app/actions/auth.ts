import { RegisterFormSchema, RegisterFormState} from '@/app/lib/auth.definitions'
import { signIn } from '@/auth'
import bcrypt from 'bcrypt'

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

  const { email, password, firstname, lastname } = validateFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  console.log('Signup form fields:', {
    email,
    hashedPassword,
    firstname,
    lastname,
  }
  );
  

  // If form fields are valid, proceed with the signup
  return {
    message: 'Signup successful',
  }
}

export async function signInProvider(provider: string) {
  await signIn(provider);
}