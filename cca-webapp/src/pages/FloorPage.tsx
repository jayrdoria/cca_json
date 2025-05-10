import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const floorImages: { [key: string]: string } = {
  "1": "https://i.imgur.com/FlFRloX.png",
  "2": "https://i.imgur.com/FlFRloX.png",
  "3": "https://i.imgur.com/FlFRloX.png",
  "4": "https://i.imgur.com/FlFRloX.png",
};

const floorNames: { [key: string]: string } = {
  "1": "1st Floor",
  "2": "2nd Floor",
  "3": "3rd Floor",
  "4": "4th Floor",
};

const floorRooms: { [key: string]: string[] } = {
  "1": [
    "BFO",
    "HUMAN RESOURCES",
    "ACADEMIC OFFICE",
    "REGISTRAR",
    "CDSO",
    "OVPA",
    "OFFICE OF PRESIDENT",
    "BOARD ROOM",
    "CGFO",
    "CLINIC",
    "SASO",
    "COLD KITCHEN LAB",
    "HOT KITCHEN LAB",
    "APAG",
    "DANCE STUDIO",
    "SCIENCE LAB",
    "CANTEEN",
  ],
  "2": [
    "MISSO",
    "FACULTY ROOM",
    "CLAB1",
    "CLAB2",
    "CLAB3",
    "CLAB4",
    "CLAB5",
    "SPEECH LAB",
    "STORAGE ROOM",
    "COMFORT ROOM",
    "R201",
    "R202",
    "R203",
    "R204 (CONTACT CENTER)",
    "R205",
    "R206 (FACULTY ROOM 2)",
    "R207 (HARDWARE LAB)",
    "R208 (ACCOUNTING LAB)",
    "R209 (TRC)",
    "R210 (MOCK TRAVEL)",
    "R211 (PSYCHE LAB)",
    "PHEONIX PUBLICATION",
  ],
  "3": [
    "LIBRARY",
    "BLIS LAB",
    "L302",
    "L303",
    "L304",
    "L305",
    "L306",
    "L307",
    "L308",
    "L309",
    "L310",
    "COMFORT ROOM",
    "R301 (INTERNET ROOM)",
    "R302",
    "R303",
    "R304",
    "R305",
    "R306",
    "R307",
    "R308",
    "R309",
    "R310",
    "R311 (AUDIO VISUAL ROOM)",
  ],
  "4": [
    "MULTI-PURPOSE HALL",
    "L401",
    "L402",
    "L403",
    "L404",
    "L405",
    "L406",
    "L407",
    "L408",
    "L409",
    "L401",
    "COMFORT ROOM",
    "MUSIC ROOM",
    "R401",
    "R402",
    "R403",
    "R404",
    "R405",
    "R406",
    "R407",
    "R408",
    "R409",
    "R410",
    "R411",
  ],
};

function FloorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const image = floorImages[id ?? "1"];
  const title = floorNames[id ?? "1"];
  const rooms = floorRooms[id ?? "1"] || [];

  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      return;
    }
    const filtered = rooms.filter((room) =>
      room.toLowerCase().includes(search.toLowerCase())
    );
    const exactMatch = filtered.filter(
      (room) => room.toLowerCase() === search.toLowerCase()
    );
    setSuggestions(exactMatch.length ? exactMatch : filtered.slice(0, 5));
  }, [search, rooms]);

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: "url('https://i.imgur.com/twc40fV.png')" }}
    >
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
        >
          ← Back
        </button>
      </div>

      {/* Floor Title */}
      <div className="max-w-4xl mx-auto text-center text-black mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto w-full mb-2 relative">
        <input
          type="text"
          placeholder="Search room or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute z-10 bg-white mt-2 rounded-md shadow-md w-full border border-gray-300 divide-y divide-gray-200">
            {suggestions.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-2 text-sm hover:bg-purple-100 cursor-pointer"
                onClick={() => setSearch(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Floor Image */}
      <div className="max-w-4xl mx-auto mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Navigate Button */}
      <div className="max-w-4xl mx-auto text-center">
        <button
          onClick={() => {}}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
        >
          Navigate
        </button>
      </div>
    </div>
  );
}

export default FloorPage;
