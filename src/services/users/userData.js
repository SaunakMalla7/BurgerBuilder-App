export default function getUserData() {
  return [
    {
      id: 1,
      username: "sam",
      name: "sam",
      password: "123",
      role: null,
    },
    {
      id: 2,
      username: "admin",
      name: "super admin",
      password: "123",
      role: {
        id: 2,
        name: "Super Admin",
      },
    },
    {
      id: 3,
      username: "saunak",
      name: "saunak malla",
      password: "123",
      role: {
        id: 1,
        name: "Admin",
      },
    },
    {
      id: 4,
      username: "ram",
      name: "ram bhadur",
      password: "123",
      role: null,
    },
  ];
}
