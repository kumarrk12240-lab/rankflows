export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          <span className="text-blue-700">Rank</span>
          <span className="text-orange-500">Flows</span>
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Mock Tests</a>
          <a href="#">Current Affairs</a>
          <a href="#">Contact</a>
        </nav>

        <div className="flex gap-3">
          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            Login
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}