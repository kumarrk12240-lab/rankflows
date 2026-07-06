export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center">
          <span className="text-blue-700">Rank</span>
          <span className="text-orange-500">Flows</span>
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome Back 👋
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?
          <a
            href="/signup"
            className="text-blue-600 font-semibold ml-2"
          >
            Sign Up
          </a>
        </p>

      </div>

    </main>
  );
}