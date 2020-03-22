interface User {
  id: string;
  email: string;
}

type UserWithHashedPassword = User & {
  hashedPassword: string;
};
