//For save users username and passwords
const FILEPATH = "files";
const FILENAME_USERS = "users.txt";
const FILENAME_TEACHERS = "teachers.txt";
const FILENAME_SUBJECTS = "subjects.txt";
const FILENAME_ADMIN ="admins.txt";

//Max users count generating in database
const MAX_USERS = 30;

//Count of teacher = count of classes (1 teacher = 1 class)
const MAX_TEACHERS = 5;

//Admin User
const ADMIN_USERNAME = "root";
const ADMIN_PASSWORD = "root";

export { FILENAME_ADMIN, ADMIN_USERNAME, ADMIN_PASSWORD, MAX_USERS, FILEPATH, FILENAME_USERS, FILENAME_TEACHERS, MAX_TEACHERS, FILENAME_SUBJECTS }