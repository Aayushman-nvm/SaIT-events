// one time hash pasword generator script
import bcrypt from "bcrypt";

// run only in development or when explicitly allowed
const isDev = process.env.NODE_ENV === "development";
const isLocal = process.env.RUN_LOCAL === "true";

if (!isDev && !isLocal) {
  // dont run this in production
  process.exit(1);
}

async function hashGenerator() {
  const password = "example"; // replace with admin password to be hashed
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  console.log("✅ Hashed Password:", passwordHash);

  // verify
  const result = await bcrypt.compare(password, passwordHash);
  console.log("✅ Does it match?", result);
}

hashGenerator().catch((err) => {
  console.error("❌ Error in hash-generator:", err);
  process.exit(1);
});
