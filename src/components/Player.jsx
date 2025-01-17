import { useState } from "react";

export default function Player({ name, symbol }) {
  // useState used to know whether we are editing or not
  const [isEditing, setIsEditing] = useState(false);

  // Text of the Edit button (Initially "Edit")
  const [editButtonText, seteditButtonText] = useState("Edit");

  // function to handle the edit button click event
  function handleEditClick() {
    // reverse isEditing useState
    setIsEditing(!isEditing);
    // Set Edit button's text on isEditing state
    seteditButtonText(isEditing ? "Edit" : "Save");
  }

  // A playerName element with name passed as a prop
  let playerName = <span className="player-name">{name}</span>;

  // if we are editing then the playerName that is being updated should be a new input field
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
      />
    );
  }

  return (
    <li>
      {/* player name and player symbol are taken using props */}
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      {/* An edit button */}
      <button onClick={handleEditClick}>{editButtonText}</button>
    </li>
  );
}
