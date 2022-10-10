export default function getRolePermissionsData() {
  return [
    {
      id: 1,
      name: "Admin",
      permissions: [
        {
          id: 9,
          name: "view_product",
        },
      ],
    },
    {
      id: 2,
      name: "Super Admin",
      permissions: [
        {
          id: 3,
          name: "view_product",
        },
      ],
    },
    {
      id: 3,
      name: "User",
      permissions: [],
    },
  ];
}
