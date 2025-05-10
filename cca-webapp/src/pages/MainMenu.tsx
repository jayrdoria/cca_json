import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Room",
    image: "https://i.imgur.com/TeyTSCJ.png",
    path: "/rooms",
  },
  {
    label: "Instructors Schedule (ICSLIS ONLY)",
    image: "https://i.imgur.com/hZo6tG3.png",
    path: "/schedule",
  },
  {
    label: "Faculty",
    image: "https://i.imgur.com/PiXLWae.png",
    path: "/faculty",
  },
  {
    label: "Laboratory",
    image: "https://i.imgur.com/SCU3Zkj.png",
    path: "/laboratory",
  },
];

function MainMenu() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-6 py-10"
      style={{
        backgroundImage: "url('https://i.imgur.com/twc40fV.png')",
      }}
    >
      {/* Back Button */}
      <div className="w-full max-w-md flex justify-start mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
        >
          ← Back
        </button>
      </div>

      {/* Menu Items */}
      <div className="w-full max-w-md flex flex-col items-center space-y-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="w-full bg-white/90 rounded-2xl px-6 py-4 shadow-lg hover:scale-105 transition-all flex flex-col items-center"
          >
            <img src={item.image} alt={item.label} className="w-16 h-16 mb-3" />
            <span className="text-lg font-semibold text-gray-800 text-center">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;
