export async function auth(username: string, password: string) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error(`auth failed with status: ${res.status}`);
  }

  const data = res.json();
  console.log(data);
  return data;
}
