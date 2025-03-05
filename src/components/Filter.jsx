import { useState } from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md focus:outline-none"
            >
                Select an Option
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
