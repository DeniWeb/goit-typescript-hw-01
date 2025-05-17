type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser: User = {
    name: 'Deni',
    surname: 'Ser',
    email: 'deni_ser@gmail.com',
    password: 'pass1234',
  };
  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
