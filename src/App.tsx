import { useRef, useState } from "react";
import useOutsideClick from "./hooks/useOutsideClick";

const App = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => setOpenDropdown(false));

  const toggleDropDown = () => {
    setOpenDropdown((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div style={{ position: "relative" }}>
        <div className="dropdown" onClick={toggleDropDown} ref={ref}>
          Select Country
        </div>

        {openDropdown && (
          <div className="dropList">
            <ul>
              <li>India</li>
              <li>UAE</li>
              <li>USA</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
