// const URL = "https://school-book-production.up.railway.app";
const URL = "http://localhost:5000";

const Path = {
  Roles: "roles",
  RoleUpdate: "users/role/update",
  Register: "auth/register",
  Login: "auth/login",
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
  Info: "info",
  Grades: "grades",
}

export { URL, Path }