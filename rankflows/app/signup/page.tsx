export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-blue-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center">
          <span className="text-blue-700">Rank</span>
          <span className="text-orange-500">Flows</span>
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Create Your Account
        </p>

        <form className="space-y-4 mt-8">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl p-4"
          />

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?
          <a
            href="/login"
            className="text-blue-600 font-semibold ml-2"
          >
            Login
          </a>
        </p>

      </div>

    </main>
  );
}