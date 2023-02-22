// const URL = "https://school-book-production.up.railway.app";
const URL = "http://localhost:5000";

const Path = {
  Roles: "roles",
  RoleUpdate: "users/role/update",
  Register: "auth/register",
  Class: "classes",
  Users: "users",
  Childrens: "childrens",
  News: "news",
  UserPic: "users/edit/profile",
  ChildrenPic: "childrens/edit/profile",
  Teachers: "users?role=teacher",
  Parents: "users?role=parent",
  Quarters: "quarters",
  Subjects: "subjects",
  Info: "info"
}

export { URL, Path }