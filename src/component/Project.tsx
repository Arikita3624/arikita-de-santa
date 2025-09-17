import manga from "@/assets/manga.jpg";
import admin from "@/assets/admin.jpg";
import maleshop from "@/assets/maleshop.jpg";
const Project = () => {
  return (
    <div>
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Admin Dashboard
            </h3>
            <img src={admin} alt="err" />
            <p className="text-gray-300 mb-4">
              Dashboard for managing products, categories, and users with React,
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Arikita3624/dashboard-react"
                className="text-purple-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://dashboard-react-virid-eight.vercel.app"
                className="text-purple-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Manga React
            </h3>
            <img src={manga} alt="err" />
            <p className="text-gray-300 mb-4">
              Web app for reading manga with Otruyenapi API, built with React
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Arikita3624/manga-react"
                className="text-purple-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://manga-react-eight.vercel.app/"
                className="text-purple-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Male Shop
            </h3>
            <img src={maleshop} alt="" />
            <p className="text-gray-300 mb-4">
              E-commerce website for men's clothing, built with PHP and MySQL
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Arikita3624/du_an_1"
                className="text-purple-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
