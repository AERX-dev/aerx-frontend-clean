import React from "react";
import IconButtonsGroup from "../../UI/IconButtonsGroup";
import IconButton from "../../UI/IconButton";
import { FcSearch, FcPlus } from "react-icons/fc";
import { FaPlus } from "react-icons/fa";

const FloatingIconButtons = () => {
  return (
    <IconButtonsGroup>
      <IconButton>
        <FcSearch />
      </IconButton>
      <IconButton>
        <FaPlus />
      </IconButton>
    </IconButtonsGroup>
  );
};

export default FloatingIconButtons;

<IconButtonsGroup>
  <IconButton>
    <FcSearch />
  </IconButton>
  <IconButton>
    <FaPlus />
  </IconButton>
</IconButtonsGroup>;
