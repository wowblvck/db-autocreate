import adminLogin from "../api/admin.js";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../config/params.js";
import store from "../components/store.js";

const adminAuth = async () => {
  const data = { username: ADMIN_USERNAME, password: ADMIN_PASSWORD }
  const login = await adminLogin(data);
  store.Token = login.token;
}

export default adminAuth;