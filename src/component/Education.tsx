import education from "@/assets/education.jpg";

const Education = () => {
  return (
    <section id="education" className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <div className="flex flex-col items-center gap-8">
        {/* Ảnh */}
        <img
          src={education}
          alt="FPT Polytechnic"
          className="w-full md:w-2/3 lg:w-1/2 rounded-xl shadow-lg border border-white/10"
        />

        {/* Nội dung */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-purple-400">
            FPT Polytechnic College
          </h3>
          <p className="text-lg text-gray-300">Major: Frontend Developer</p>
          <span className="text-md text-gray-400">2022 - Present</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
