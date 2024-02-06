import { signIn } from "next-auth/react";

function LoginPage() {
  const handleLogin = async (provider) => {
    try {
      await signIn(provider);
    } catch (error) {
      console.error(error);
      // Handle any login errors here
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <button
        onClick={() => handleLogin("github")}
        className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md mb-4"
      >
        Sign in with GitHub
      </button>
      <button
        onClick={() => handleLogin("google")}
        className="bg-white border hover:border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginPage;
