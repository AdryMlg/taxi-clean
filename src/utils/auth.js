export const USERS = {
  Director:  { username: "Adry", password: "123456", role: "Director" },
  Jefe:      { username: "Adry", password: "123456", role: "Jefe" },
  Conductor: { username: "Adry", password: "123456", role: "Conductor" },
};
export function login(username, password, role) {
  const u = USERS[role];
  if (u && u.username === username && u.password === password) return { success: true, role };
  return { success: false };
}
