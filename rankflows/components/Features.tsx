const features = [
  {
    title: "Mock Tests",
    desc: "Full syllabus & chapter-wise mock tests.",
    icon: "📝",
  },
  {
    title: "PDF Notes",
    desc: "Easy-to-read handwritten notes.",
    icon: "📚",
  },
  {
    title: "Current Affairs",
    desc: "Daily updated current affairs.",
    icon: "📰",
  },
  {
    title: "Performance Analysis",
    desc: "Track your progress with analytics.",
    icon: "📊",
  },
  {
    title: "Doubt Support",
    desc: "Ask doubts and get expert help.",
    icon: "💬",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center">
          Why Choose RankFlows?
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Everything you need to prepare for competitive exams.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="text-2xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}