import bcrypt from "bcrypt";

interface AuthParameter {
  email: string;
  password: string;
}

export async function authCheck({ email, password }: AuthParameter) {
  console.log("Function parameters: ", email + "\nPassword: ", password);
  console.log("Raw password:", JSON.stringify(password));
  console.log("Password length:", password.length);
  const cleanedPassword = password.trim();
  console.log("cleaned Password:", cleanedPassword);
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  console.log("Hash from env:", process.env.ADMIN_PASSWORD_HASH);
  console.log("Length:", process.env.ADMIN_PASSWORD_HASH?.length);
  console.log("Auth data: ", adminEmail + "\n: ", adminPasswordHash);
  console.log(
    "ENV data: ",
    process.env.ADMIN_EMAIL + "\n: ",
    process.env.ADMIN_PASSWORD_HASH
  );

  if (!adminEmail || !adminPasswordHash) {
    throw new Error("Environment variables are not properly set.");
  }

  const isEmailMatch = email === adminEmail;
  const isPasswordMatch = await bcrypt.compare(
    cleanedPassword,
    adminPasswordHash
  );
  //const isPasswordMatch = password === adminPasswordHash;
  console.log("Match data: ", isEmailMatch + "\n: ", isPasswordMatch);

  return {
    authenticated: isEmailMatch && isPasswordMatch,
    isAdmin: isEmailMatch && isPasswordMatch,
  };
}
