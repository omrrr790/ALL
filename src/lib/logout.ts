import { auth } from "./auth";

export function handleLogout() {
  // 1. Clear local storage
  auth.logout();
  
  // 2. Clear the middleware cookie
  document.cookie = "vendox_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
  // 3. Redirect to home
  window.location.href = "/";
}