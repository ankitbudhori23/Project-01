import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/input/Button";
function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useSelector((state: any) => state.initial);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center sticky top-0 left-0 right-0">
      <div
        className="flex items-center group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={user?.picture}
          alt="User Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-sm">{user?.name}</span>
        {isHovered && <Button label="Logout" onClick={logout} color="red" />}
      </div>
    </header>
  );
}

export default Header;
