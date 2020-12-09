import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ming",
    email: "ming@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Alex",
    email: "alex@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
