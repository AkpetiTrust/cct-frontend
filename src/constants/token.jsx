export default function token() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) return user.token;
}
