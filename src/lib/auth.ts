export type UserRole = "vendor" | "admin" | "pending";

export interface User {
  name: string;
  businessName: string;
  email: string;
  password?: string;
  category: string;
  role: UserRole;
}

export const auth = {
  // Simulate a database of all users
  getAllUsers: (): User[] => {
    if (typeof window === "undefined") return [];
    const users = localStorage.getItem("vendox_all_users");
    return users ? JSON.parse(users) : [
      // Default Admin Account
      { name: "Super Admin", businessName: "Vendox HQ", email: "admin@vendox.com", password: "admin123", category: "admin", role: "admin" }
    ];
  },

  login: (user: User) => {
    localStorage.setItem("vendox_user", JSON.stringify(user));
    // Set cookie for middleware
    document.cookie = `vendox_session=${user.role}; path=/; max-age=86400`; 
  },

  logout: () => {
    localStorage.removeItem("vendox_user");
    document.cookie = "vendox_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },

  getUser: (): User | null => {
    if (typeof window === "undefined") return null;
    const user = localStorage.getItem("vendox_user");
    return user ? JSON.parse(user) : null;
  },

  // Register a new vendor (sets role to 'pending')
  register: (newUser: User) => {
    const users = auth.getAllUsers();
    if (users.find(u => u.email === newUser.email)) {
      throw new Error("Email already exists");
    }
    users.push({ ...newUser, role: "pending" });
    localStorage.setItem("vendox_all_users", JSON.stringify(users));
  },

  // Authenticate user
  authenticate: (email: string, password: string): User => {
    const users = auth.getAllUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error("Invalid email or password");
    }
    if (user.role === "pending") {
      throw new Error("Your account is pending approval by the admin.");
    }
    
    return user;
  },

  // Admin approves user
  approveUser: (email: string) => {
    const users = auth.getAllUsers();
    const updated = users.map(u => u.email === email ? { ...u, role: "vendor" as UserRole } : u);
    localStorage.setItem("vendox_all_users", JSON.stringify(updated));
  },

  getPendingUsers: (): User[] => {
    return auth.getAllUsers().filter(u => u.role === "pending");
  }
};