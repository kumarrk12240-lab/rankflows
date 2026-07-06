export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center min-h-[80vh] px-8">

        <div>
          <h1 className="text-6xl font-extrabold text-gray-900">
            Crack Every Exam
          </h1>

          <h2 className="text-6xl font-extrabold text-blue-700 mt-2">
            With RankFlows
          </h2>

          <p className="text-xl text-gray-600 mt-6">
            India's Smart Exam Preparation Platform
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl">
              Get Started
            </button>

            <button className="border border-gray-400 px-8 py-4 rounded-xl">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Students"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}