import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import './randomIcon.css';

function RandomIcon() {
  const [iconList, setIconList] = useState([]);
  const [icon, setIcon] = useState(faImage);

  useEffect(() => {
    setIconList(Object.values(fas));
  }, []);

  const getRandomIcon = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * iconList.length);
    return iconList[randomIndex];
  }, [iconList]);

  const handleClick = () => {
    setTimeout(() => {
      setIcon(getRandomIcon());
    }, 3000);
    
  };

  return (
    <>
      <FontAwesomeIcon icon={icon} size="7x" />

      <button
        onClick={handleClick}
      >
        Click me!
      </button>
    </>
  );
}

export default RandomIcon;