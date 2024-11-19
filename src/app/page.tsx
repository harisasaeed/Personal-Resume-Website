
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        {/* About Section */}
        <section
          id="about"
          className="bg-gradient-to-r from-teal-100 to-pink-300 text-gray-800 min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold">Harisa Saeed</h1>
            <p className="text-2xl mt-4">Aspiring Web Developer</p>
            <p className="mt-6 text-lg">
              I am a passionate developer with a love for creating engaging and
              dynamic web applications. I have skills in HTML, CSS, JavaScript,
              and React, aiming to build efficient solutions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gradient-to-r from-blue-300 to-pink-100 text-gray-800 min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-semibold">Contact Information</h2>
            <div className="mt-8 space-y-4 text-lg">
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:harsasaeed753@gmail.com"
                  className="text-blue-500 underline"
                >
                  harsasaeed753@gmail.com
                </a>
              </p>
              <p>📞 Phone: 03363066942</p>
              <p>
                🔗 LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/harisa-saeed-2217642b5/"
                  className="text-blue-500 underline"
                >
                  linkedin.com/in/harisa-saeed
                </a>
              </p>
              <p>
                🐱 GitHub:{" "}
                <a href="https://github.com/harisasaeed" className="text-blue-500 underline">
                  github.com/harisasaeed
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-gradient-to-r from-green-100 to-yellow-200 text-gray-800 min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-semibold">Skills</h2>
            <div className="mt-10 grid grid-cols-2 gap-6 text-xl">
              <p>✅ HTML & CSS</p>
              <p>✅ JavaScript & TypeScript</p>
              <p>✅ React & Next.js</p>
              <p>✅ Tailwind CSS</p>
              <p>✅ Problem Solving</p>
              <p>✅ Teamwork & Collaboration</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="bg-gradient-to-r from-blue-300 to-pink-200 text-gray-800 min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-semibold">Education</h2>
            <div className="mt-6">
              <p className="text-2xl">🎓 DAE Computer Information Technology</p>
              <p className="text-lg mt-2">Muhammad Shafi polytechnic Institute, Karachi, Graduated in 2021</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="bg-gradient-to-r from-purple-200 to-pink-300 text-gray-800 min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-semibold">Experience</h2>
            <div className="mt-10">
              <h3 className="text-2xl font-bold">Intern at ABC Tech</h3>
              <p className="text-lg mt-2">Summer 2023</p>
              <p className="mt-4">
                Developed responsive features using React and Tailwind CSS.
                Focused on improving the user interface and optimizing site
                performance.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-800 text-white text-center py-6">
        <p>Created by Harisa Saeed &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
