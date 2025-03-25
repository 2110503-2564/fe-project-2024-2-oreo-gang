export default async function userRegister(
  userName: string,
  userEmail: string,
  userPassword: string,
  userPhone: string
) {
  const response = await fetch(
    "https://proj-oreo-backend.vercel.app/api/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
        phone: userPhone,
        role: "user",
      })
    }
  );

  if (!response.ok) {
    if (response.status == 406) {
      throw new Error("Email already registered");
    } else {
      throw new Error("Failed to Register");
    }
  }

  return await response.json();
}
