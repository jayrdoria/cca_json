import { useNavigate } from "react-router-dom";

function UnderConstructionPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 text-center"
      style={{
        backgroundImage: "url('https://i.imgur.com/twc40fV.png')",
      }}
    >
      <div className="bg-black/80 p-8 rounded-2xl text-white max-w-md w-full space-y-4 shadow-xl">
        <div className="text-5xl">🚧</div>
        <h1 className="text-3xl font-bold">Page Under Construction</h1>
        <p className="text-lg">
          This section is still being built. Please check back again soon!
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-3 bg-gray-700 text-white rounded-md text-sm font-semibold hover:bg-gray-600 transition"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}

export default UnderConstructionPage;
