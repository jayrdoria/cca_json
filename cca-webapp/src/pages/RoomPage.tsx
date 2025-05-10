import { useNavigate } from "react-router-dom";

const floorImages = [
  { label: "1st Floor", src: "https://i.imgur.com/gip5Xnc.jpeg", id: "1" },
  { label: "2nd Floor", src: "https://i.imgur.com/PzD2pJl.jpeg", id: "2" },
  { label: "3rd Floor", src: "https://i.imgur.com/hAtq3G7.jpeg", id: "3" },
  { label: "4th Floor", src: "https://i.imgur.com/Y89sT2s.jpeg", id: "4" },
];

function RoomPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: "url('https://i.imgur.com/twc40fV.png')" }}
    >
      <div className="max-w-5xl mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto text-center text-black mb-8">
        <h1 className="text-3xl font-bold">Main Building</h1>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {floorImages.map((floor) => (
          <button
            key={floor.id}
            onClick={() => navigate(`/floor/${floor.id}`)}
            className="bg-white/90 rounded-xl overflow-hidden shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={floor.src}
              alt={floor.label}
              className="w-full h-auto object-contain"
            />
            <div className="mt-3 text-lg font-semibold text-center text-gray-800">
              {floor.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomPage;
