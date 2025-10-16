interface AuthParameter {
  email: string;
  password: string;
}

export async function authCheck({ email, password }: AuthParameter) {
  console.log("Function parameters: ", email + "\nPassword: ", password);
  const cleanedPassword = password.trim();
  console.log("cleaned Password:", cleanedPassword);
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error("Environment variables are not properly set.");
  }

  const isEmailMatch = email === adminEmail;
  const isPasswordMatch = cleanedPassword === adminPassword;
  console.log("Match data: ", isEmailMatch + "\n: ", isPasswordMatch);

  return {
    authenticated: isEmailMatch && isPasswordMatch,
    isAdmin: isEmailMatch && isPasswordMatch,
  };
}
