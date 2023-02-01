import React, { useEffect, useState, createRef } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import MedicationIcon from "@mui/icons-material/Medication";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const [px, setPx] = useState(0);
  const myRef = createRef();

  useEffect(() => {
    const barHeight = myRef.current.clientHeight;
    setPx(window.innerHeight - barHeight - 25);
  }, []);

  return (
    <Box ref={myRef} sx={{ top: px, position: "absolute", width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        <BottomNavigationAction label="History" icon={<NoteAddIcon />} />
        <BottomNavigationAction label="Medication" icon={<MedicationIcon />} />
        <BottomNavigationAction label="Calendar" icon={<CalendarMonthIcon />} />
      </BottomNavigation>
    </Box>
  );
}
