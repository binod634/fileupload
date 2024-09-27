import { useState } from "react";
import { useNavigate } from "react-router-dom";
import penguin from "../../assets/penguin.svg";
import menu from "../../assets/menu.svg";

function TopBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 z-10 text-white fixed inset-x-0 top-0">
      <div className="hidden sm:block">
        <nav className="flex items-center h-16 font-bold text-2xl">
          <div className="p-4">
            <img
              className="cursor-pointer"
              src={penguin}
              height="50"
              onClick={() => navigate("/")}
              width="50"
              alt="Logo"
            />
          </div>
          <ul className="flex items-center justify-center w-screen text-xl font-bold space-x-16">
            <li>
              <div className="cursor-pointer" onClick={() => navigate("/home")}>
                Upload
              </div>
            </li>
            <li>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/listing")}
              >
                Listing
              </div>
            </li>
            <li>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/about")}
              >
                About
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sm:hidden">
        <nav className="flex items-center justify-between h-16 font-bold text-2xl">
          <div className="p-4">
            <img
              src={penguin}
              height="50"
              onClick={() => navigate("/")}
              width="50"
              alt="Logo"
            />
          </div>
          <div className="p-4 flex items-center text-xl font-bold">
            <img src={menu} alt="menu" onClick={toggleDrawer} />
          </div>
        </nav>

        {isOpen && (
          <div
            className="fixed inset-0 pt-16 bg-gray-800 bg-opacity-75 z-20"
            onClick={toggleDrawer}
          >
            <div className="fixed right-0 top-0 w-2/3 h-full bg-gray-900 text-white p-4">
              <h2 className="text-2xl mb-4 font-black">Menu</h2>
              <ul className="flex flex-col space-y-4 font-bold">
                <li>
                  <div onClick={toggleDrawer}>Home</div>
                </li>
                <li>
                  <div onClick={toggleDrawer}>Listing</div>
                </li>
                <li>
                  <a href="/contact" onClick={toggleDrawer}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={toggleDrawer}>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default TopBar;
