import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { editProfile } from "../../../api/FirestoreAPI";
import "./index.scss";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CountrySelect from "./Countryselect";
export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="profile-edit-card">
      <div className="edit-btn">
        <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
      </div>

      <div className="profile-edit-inputs">
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '98%' },
        }}
        noValidate
        autoComplete="off"
        >
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Name" 
         variant="outlined"
         name="name"
         value={editInputs.name} />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Headline" 
         variant="outlined"
         value={editInputs.headline}
         name="headline" /> 
         <TextField
         onChange={getInput}
         id="filled-basic" 
         label="Country"
         value={editInputs.country}
         variant="outlined"
         />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="City" 
         variant="outlined"
         name="city"
         value={editInputs.city} />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Education Board" 
         variant="outlined"
         name="EducationBoard"
         value={editInputs.EducationBoard} />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="School" 
         variant="outlined"
         name="school"
         value={editInputs.school} />
         <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Website" 
         variant="outlined"
         name="website"
         value={editInputs.website} />
         <TextField
          id="filled-multiline-static"
          label="About"
          multiline
          rows={5}
          defaultValue="About Me"
          variant="outlined"
          onChange={getInput}
          name="aboutMe"
          value={editInputs.aboutMe}
        />
        <TextField 
         onChange={getInput}
         id="filled-basic" 
         label="Skills" 
         variant="outlined"
         name="skills"
         value={editInputs.skills} />
        </Box>
        <Box>
        <div className="save-container">
        <Button
        variant="outlined"
        className="save-btn" 
        onClick={updateProfileData}
        >Submit</Button>
        </div>
        </Box>
      </div>
    </div>
  );
}