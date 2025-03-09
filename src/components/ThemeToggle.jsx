import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme(); // Get dark mode state

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
    >
      {darkMode ? (
        <FaSun className="text-yellow-500 dark:text-yellow-400" size={24} />
      ) : (
        <FaMoon className="text-gray-900 dark:text-gray-300" size={24} />
      )}
    </button>
  );
}

export default ThemeToggle;
