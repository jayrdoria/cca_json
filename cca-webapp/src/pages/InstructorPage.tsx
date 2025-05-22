import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ScheduleItem {
  time: string;
  subject: string;
  room: string;
}

interface Instructor {
  name: string;
  image: string;
  schedule: {
    [day: string]: ScheduleItem[] | null;
  };
}

function InstructorPage() {
  const navigate = useNavigate();
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [selected, setSelected] = useState<Instructor | null>(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/instructors.json`)
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((err) => console.error("Failed to load instructor data:", err));
  }, []);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-8"
      style={{
        backgroundImage: "url('https://i.imgur.com/twc40fV.png')",
      }}
    >
      {/* Back */}
      <div className="max-w-5xl mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
        >
          ← Back
        </button>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center text-black mb-8">
        <h1 className="text-3xl font-bold">Instructor Schedule</h1>
      </div>

      {/* Instructor Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {instructors.map((instructor, index) => (
          <button
            key={index}
            onClick={() => setSelected(instructor)}
            className="bg-white/90 rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition-all"
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-32 h-32 object-cover rounded-full mb-3"
            />
            <div className="text-center text-lg font-semibold text-gray-800">
              {instructor.name}
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-6">
            {/* Close Button - always visible and mobile-friendly */}
            <div className="sticky top-0 z-10 bg-white pb-2 flex justify-end">
              <button
                onClick={() => setSelected(null)}
                className="text-xl font-bold text-gray-700 hover:text-red-600 focus:outline-none"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Instructor Info */}
            <div className="flex flex-col items-center">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-28 h-28 object-cover rounded-full mb-3"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {selected.name}
              </h2>
            </div>

            {/* Schedule Table (same as before) */}
            {/* Responsive Schedule */}
            <div className="w-full space-y-4 sm:space-y-0 sm:overflow-x-auto sm:block">
              <table className="hidden sm:table w-full text-left text-sm">
                <thead>
                  <tr>
                    <th className="py-2 px-3 bg-gray-800 text-white">Day</th>
                    <th className="py-2 px-3 bg-gray-800 text-white">Time</th>
                    <th className="py-2 px-3 bg-gray-800 text-white">
                      Subject
                    </th>
                    <th className="py-2 px-3 bg-gray-800 text-white">Room</th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((day) => {
                    const schedule = selected.schedule[day];
                    if (!schedule || schedule.length === 0) {
                      return (
                        <tr key={day}>
                          <td className="py-2 px-3 font-semibold">{day}</td>
                          <td
                            colSpan={3}
                            className="py-2 px-3 italic text-gray-500"
                          >
                            No classes
                          </td>
                        </tr>
                      );
                    }
                    return schedule.map((entry, i) => (
                      <tr key={`${day}-${i}`}>
                        <td className="py-2 px-3 font-semibold">
                          {i === 0 ? day : ""}
                        </td>
                        <td className="py-2 px-3">{entry.time}</td>
                        <td className="py-2 px-3">{entry.subject}</td>
                        <td className="py-2 px-3">
                          <button
                            onClick={() =>
                              navigate(
                                `/rooms/${encodeURIComponent(entry.room)}`
                              )
                            }
                            className="text-blue-600 underline hover:text-blue-800 transition font-medium"
                          >
                            {entry.room}
                          </button>
                        </td>
                      </tr>
                    ));
                  })}
                </tbody>
              </table>

              {/* Mobile Card Layout */}
              {/* Mobile Card Layout */}
              <div className="sm:hidden flex flex-col gap-4">
                {days.map((day) => {
                  const schedule = selected.schedule[day];

                  return (
                    <div key={day} className="bg-gray-100 rounded p-3">
                      <div className="font-bold text-gray-800 mb-2">{day}</div>

                      {!schedule || schedule.length === 0 ? (
                        <div className="italic text-gray-500 text-sm">
                          No classes
                        </div>
                      ) : (
                        schedule.map((entry, i) => (
                          <div
                            key={i}
                            className="mb-3 border-b pb-2 last:border-b-0 last:pb-0"
                          >
                            <div className="text-sm">
                              <strong>Time:</strong> {entry.time}
                            </div>
                            <div className="text-sm">
                              <strong>Subject:</strong> {entry.subject}
                            </div>
                            <div className="text-sm">
                              <strong>Room:</strong>{" "}
                              <button
                                onClick={() =>
                                  navigate(
                                    `/rooms/${encodeURIComponent(entry.room)}`
                                  )
                                }
                                className="text-blue-600 underline hover:text-blue-800 transition font-medium"
                              >
                                {entry.room}
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstructorPage;
