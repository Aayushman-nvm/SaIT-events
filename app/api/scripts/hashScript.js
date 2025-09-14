// one time hash pasword generator script
import bcrypt from "bcrypt";

async function hashGenerator() {
    const password="example" //admin password goes here
    const salt=await bcrypt.genSalt();
    const passwordHash=await bcrypt.hash(password, salt);
    console.log("Hashed Password: ", passwordHash);
    const result = await bcrypt.compare(password, passwordHash);
    console.log("Does it match: ",result);
}

hashGenerator();