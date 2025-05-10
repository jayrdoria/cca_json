import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const handleClick = (label: string) => {
    if (label === "Start") navigate("/menu");
    else if (label === "About") navigate("/about");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage: "url('https://i.imgur.com/twc40fV.png')",
      }}
    >
      {/* Logo */}
      <div className="w-full flex justify-center mt-8">
        <img
          src="https://i.imgur.com/iXSzmnp.png"
          alt="Logo"
          className="w-48 h-auto"
        />
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Buttons */}
      <div className="flex flex-col items-center space-y-5 mb-16">
        {["Start", "About"].map((label, index) => (
          <button
            key={index}
            className="w-64 h-14 bg-white/90 text-gray-900 rounded-xl text-xl font-semibold tracking-wide shadow-md hover:scale-105 hover:bg-white transition-all"
            onClick={() => handleClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
