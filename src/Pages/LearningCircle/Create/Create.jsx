import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const Create = ({
  interest,
  setInterest,
  interests,
  college,
  setCollege,
  colleges,
  create,
  setCreate,
  districts,
  district,
  setDistrict,
}) => {
  const changeHandler = (event) => {
    setCreate((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log(create);
  };

  const leadchangeHandler = (event) => {
    setCreate((prevState) => ({
      ...prevState,
      lead: { ...prevState.lead, [event.target.name]: event.target.value },
    }));
  };

  return (
    <>
      <Navbar />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="code"
          id="outlined-basic"
          label="Circle Code"
          variant="outlined"
          value={create.code}
          onChange={changeHandler}
        />
        <TextField
          name="name"
          id="outlined-basic"
          label="Lead Name"
          variant="outlined"
          value={create.name}
          onChange={leadchangeHandler}
        />
        <TextField
          name="email"
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          value={create.email}
          onChange={leadchangeHandler}
        />
        <TextField
          name="discord_id"
          id="outlined-basic"
          label="Discord ID"
          variant="outlined"
          value={create.discord_id}
          onChange={leadchangeHandler}
        />
        <TextField
          name="karma"
          id="outlined-basic"
          label="Karma Points"
          variant="outlined"
          value={create.karma}
          onChange={leadchangeHandler}
        />

        <TextField
          name="phone"
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={create.phone}
          onChange={changeHandler}
        />

        <TextField
          name="passcode"
          id="outlined-basic"
          label="Passcode"
          variant="outlined"
          value={create.passcode}
          onChange={changeHandler}
        />
        {districts && (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select District
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select District"
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              >
                {districts.map((district) => (
                  <MenuItem value={district}>{district}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        {colleges && (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select College
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select College"
                name="college"
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value);
                  setCreate((prevState) => ({
                    ...prevState,
                    college: e.target.value,
                  }));
                }}
              >
                {colleges.map((college) => (
                  <MenuItem value={college.code}>{college.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        {interests && college && (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Interest Group
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select College"
                name="interest"
                value={interest}
                onChange={(e) => {
                  setInterest(e.target.value);
                  setCreate((prevState) => ({
                    ...prevState,
                    interest: e.target.value,
                  }));
                }}
              >
                {interests.map((interest) => (
                  <MenuItem value={interest.id}>{interest.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Create;
