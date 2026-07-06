const exams = [
  "SSC",
  "Railway",
  "Banking",
  "Defence",
  "Police",
  "REET",
  "CET",
  "UPSC",
  "CUET",
  "Agriculture",
];

export default function PopularExams() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center">
          Popular Exams
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Start preparing for your dream exam today.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {exams.map((exam) => (
            <div
              key={exam}
              className="bg-blue-50 hover:bg-blue-600 hover:text-white transition rounded-2xl p-8 text-center shadow"
            >
              <h3 className="text-xl font-semibold">{exam}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}