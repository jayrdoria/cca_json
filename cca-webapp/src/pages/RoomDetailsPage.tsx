import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const RoomDetailsPage = () => {
  const { roomName } = useParams();
  const navigate = useNavigate();
  const [showPathToR201, setShowPathToR201] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | {
    title: string;
    src: string;
  }>(null);

  const isSelected = (room: string) =>
    room.toLowerCase() === roomName?.toLowerCase();

  const cellClass =
    "bg-white border h-20 flex items-center justify-center text-center text-[10px] p-1 cursor-pointer hover:bg-gray-100 transition";

  const handleClick = (target: string) => {
    let title = "";
    let src = "";

    if (target === "R205") {
      title = "R205";
      src = "https://i.imgur.com/woIyEqn.png";
    } else if (target === "Stairs1") {
      title = "Stairs 1";
      src = "https://i.imgur.com/P61FiRq.png";
    } else if (target === "Stairs2") {
      title = "Stairs 2";
      src = "https://i.imgur.com/6lqJY1V.png";
    }

    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setSelectedImage({ title, src });
      };
    }
  };

  const [mustRotate, setMustRotate] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobileWidth = width < 576;
      const isPortrait = height > width;

      setMustRotate(isMobileWidth && isPortrait);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (mustRotate) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50 text-center p-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Rotate Your Device</h2>
          <p className="text-sm">
            This app works best in landscape mode on smaller screens.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-[100vh] bg-gray-100 p-6 overflow-y-auto relative">
      <div className="max-w-5xl mx-auto mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition"
        >
          ← Back
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">
        Room Details: {roomName}
      </h1>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col text-center">
          {/* Title - 10% height */}
          <div className="h-[10vh] flex items-center justify-center px-4">
            <h2 className="text-white text-lg font-semibold">
              {selectedImage.title} to R201
            </h2>
          </div>

          {/* Image - 80% height */}
          <div className="h-[80vh] flex items-center justify-center px-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Close Button - 10% height */}
          <div className="h-[10vh] flex items-center justify-center px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="px-6 py-2 bg-white rounded text-black text-sm hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {roomName === "R201" ? (
        <div className="grid grid-cols-5 gap-4 font-medium max-w-7xl mx-auto">
          <div className="flex h-20 mr-3">
            <div
              onClick={() => handleClick("L206")}
              className="bg-white border p-1 w-[70%] flex justify-center items-center text-[10px] text-center cursor-pointer hover:bg-gray-100"
            >
              <div>
                Speech Lab
                <br />
                L206
              </div>
            </div>
            <div
              onClick={() => handleClick("Storage Room")}
              className="bg-white border p-1 w-[30%] flex justify-center items-center text-[10px] text-center cursor-pointer hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center leading-tight">
                Storage Room
              </div>
            </div>
          </div>

          <div className="flex gap-1 h-20">
            <div
              onClick={() => handleClick("Sink A")}
              className="bg-white border flex items-center justify-center w-1/2 cursor-pointer hover:bg-gray-100"
            >
              <img
                src="https://i.imgur.com/NEIFhfd.png"
                alt="Sink A"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="bg-white border relative w-1/2 h-20 flex items-center justify-center">
              <div className="absolute top-1/2 left-0 w-full border-t border-gray-300"></div>
            </div>
          </div>

          <div className="h-20"></div>

          <div className="flex gap-1 h-20 mr-3">
            <div className="bg-white border relative w-1/2 h-20 flex items-center justify-center">
              <div className="absolute top-1/2 left-0 w-full border-t border-gray-300"></div>
            </div>
            <div
              onClick={() => handleClick("Sink B")}
              className="bg-white border flex items-center justify-center w-1/2 cursor-pointer hover:bg-gray-100"
            >
              <img
                src="https://i.imgur.com/NEIFhfd.png"
                alt="Sink B"
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>

          <div onClick={() => handleClick("R206")} className={cellClass}>
            Faculty Room 2
            <br />
            R206
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div
            onClick={() => handleClick("L207")}
            className={`${cellClass} mr-3`}
          >
            Computer Lab 5<br />
            L207
          </div>
          <div onClick={() => handleClick("L205")} className={cellClass}>
            Computer Lab 4<br />
            L205
          </div>
          <div></div>
          <div
            onClick={() => handleClick("R205")}
            className={`${cellClass} mr-3`}
          >
            R205
          </div>
          <div onClick={() => handleClick("R207")} className={cellClass}>
            Hardware Lab
            <br />
            R207
          </div>

          <div
            onClick={() => handleClick("L208")}
            className={`${cellClass} mr-3`}
          >
            Computer Lab 6<br />
            L208
          </div>
          <div onClick={() => handleClick("L204")} className={cellClass}>
            Computer Lab 3<br />
            L204
          </div>
          <div className="flex h-20">
            <div
              onClick={() => handleClick("Elevator Left")}
              className="w-1/3 flex items-center justify-center border-r cursor-pointer hover:bg-gray-100"
            >
              <img
                src="https://i.imgur.com/eulbIdE.png"
                alt="Elevator Left"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="w-1/3 flex items-center justify-center"></div>
            <div
              onClick={() => handleClick("Elevator Right")}
              className="w-1/3 flex items-center justify-center border-l cursor-pointer hover:bg-gray-100"
            >
              <img
                src="https://i.imgur.com/eulbIdE.png"
                alt="Elevator Right"
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
          <div
            onClick={() => handleClick("R204")}
            className={`${cellClass} mr-3`}
          >
            Contact Center
            <br />
            R204
          </div>
          <div onClick={() => handleClick("R208")} className={cellClass}>
            Accounting Lab
            <br />
            R208
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div
            onClick={() => handleClick("L209")}
            className={`${cellClass} mr-3`}
          >
            Cisco Lab
            <br />
            L209
          </div>
          <div onClick={() => handleClick("L203")} className={cellClass}>
            Computer Lab 2<br />
            L203
          </div>
          <div></div>
          <div
            onClick={() => handleClick("R203")}
            className={`${cellClass} mr-3`}
          >
            Proposed Com Lab 8<br />
            R203
          </div>
          <div onClick={() => handleClick("R209")} className={cellClass}>
            TRC
            <br />
            R209
          </div>

          <div
            onClick={() => handleClick("L210")}
            className={`${cellClass} mr-3`}
          >
            Faculty Room 1<br />
            L210
          </div>
          <div onClick={() => handleClick("L202")} className={cellClass}>
            Computer Lab 1<br />
            L202
          </div>
          <div className="bg-gray-200 border grid grid-cols-4 grid-rows-2 h-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                onClick={() =>
                  handleClick(
                    i === 0 || i === 3
                      ? "Sink"
                      : i === 4
                      ? "Stairs1"
                      : i === 7
                      ? "Stairs2"
                      : ""
                  )
                }
                className="bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400"
              >
                {(i === 0 || i === 3) && (
                  <img
                    src="https://i.imgur.com/NEIFhfd.png"
                    alt="Sink"
                    className="w-4 h-4 object-contain"
                  />
                )}
                {(i === 4 || i === 7) && (
                  <img
                    src="https://i.imgur.com/8LWoEy1.jpeg"
                    alt={`Stairs ${i === 4 ? "1" : "2"}`}
                    className="w-9 h-9 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
          <div
            onClick={() => handleClick("R202")}
            className={`${cellClass} mr-3`}
          >
            Proposed Com Lab 7<br />
            R202
          </div>
          <div onClick={() => handleClick("R210")} className={cellClass}>
            Mock Travel
            <br />
            R210
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div
            onClick={() => handleClick("Comfort Room")}
            className="bg-white border h-20 text-[10px] flex flex-col mr-3 cursor-pointer hover:bg-gray-100"
          >
            <div className="h-1/2 border-b border-gray-300 flex items-center justify-center">
              Comfort Room
            </div>
            <div className="h-1/2 flex items-center justify-center">
              Comfort Room
            </div>
          </div>

          <div className="flex h-20 w-full">
            <div
              onClick={() => handleClick("MISSO Storage")}
              className="bg-white border p-1 w-[30%] flex justify-center items-center text-[10px] text-center cursor-pointer hover:bg-gray-100"
            >
              <div>MISSO Storage</div>
            </div>
            <div
              onClick={() => handleClick("L201")}
              className="bg-white border p-1 w-[70%] flex justify-center items-center text-[10px] text-center cursor-pointer hover:bg-gray-100"
            >
              <div>
                MISSO
                <br />
                L201
              </div>
            </div>
          </div>

          <div></div>

          <div
            onClick={() => handleClick("R201")}
            className={`flex h-20 w-full cursor-pointer ${
              isSelected("R201") ? "animate-pulse" : ""
            }`}
          >
            <div
              className={`border p-1 text-white w-[70%] font-bold text-center flex justify-center items-center text-[10px] ${
                isSelected("R201") ? "bg-red-600" : "bg-gray-700"
              }`}
            >
              R201
            </div>
            <div
              onClick={() => handleClick("Phoenix Pub")}
              className="bg-white border p-1 w-[30%] flex justify-center items-center text-[10px] mr-3 hover:bg-gray-100"
            >
              Phoenix Pub
            </div>
          </div>

          <div onClick={() => handleClick("R211")} className={cellClass}>
            Psyche Lab
            <br />
            R211
          </div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto text-center text-gray-700">
          <p>
            This is where you can show information about{" "}
            <strong>{roomName}</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default RoomDetailsPage;
