import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: "url('https://i.imgur.com/twc40fV.png')",
      }}
    >
      <div className="w-full max-w-3xl bg-black/80 text-white px-6 py-8 md:py-12 rounded-2xl shadow-xl space-y-6 text-center">
        <p>
          The study introduces <strong>eMap</strong>, a mobile-based 2D mapping
          application designed to assist students in locating ICSLIS (Institute
          of Computing Studies, Library, and Information Science) instructors
          within the City College of Angeles. In a typical college environment,
          students often experience difficulty finding where their instructors
          are located or knowing their consultation hours, especially when
          schedules change frequently. eMap addresses this issue by providing a
          user-friendly interface that displays updated instructor schedules
          along with their assigned rooms in a visual, interactive format.
        </p>

        <p>
          The system integrates location mapping and scheduling features,
          allowing students to search for instructors by name, subject, or time
          availability. The application's 2D digital map highlights specific
          rooms or locations where instructors are present, using color
          indicators and real-time updates to show availability status. This not
          only helps students save time but also minimizes disruptions caused by
          miscommunication or unclear schedules. Administrators can easily
          manage schedule data through a secure backend system, ensuring
          accuracy and consistency of the information displayed on the app.
        </p>

        <p>
          Overall, <strong>eMap</strong> aims to enhance the student experience
          by providing a modern and efficient solution to instructor
          accessibility within ICSLIS. By combining mobile technology with
          real-time data visualization, the application promotes better
          communication between students and instructors, improves academic
          coordination, and supports a more organized school environment. This
          study focuses on the system’s design, development, and implementation
          to demonstrate its potential impact in a small college setting like
          CCA.
        </p>

        <div className="pt-4">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
