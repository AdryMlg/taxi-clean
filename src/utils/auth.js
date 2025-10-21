export const USERS = {
  Director: { username: "Adry", password: "123456", role: "Director" },
  Jefe: { username: "Adry", password: "123456", role: "Jefe" },
  Conductor: { username: "Adry", password: "123456", role: "Conductor" },
};

export function login(username, password, selectedRole) {
  const user = USERS[selectedRole];
  if (user && user.username === username && user.password === password) {
    return { success: true, role: selectedRole };
  }
  return { success: false };
}
