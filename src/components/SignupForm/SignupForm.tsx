import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../serviceWorker";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

const SignupForm = () => {
  const navigate = useNavigate();

  const gotoDashboard = useCallback(() => {
    navigate("./dashboard");
  }, [navigate]);
  return (
    <>
      <Card sx={{ width: "30%", height: "50%", minWidth: "400px" }}>
        <CardHeader
          title="World of Arguments"
          subheader="Let's Debate!"
        ></CardHeader>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <TextField></TextField>
          <TextField type="password"></TextField>
          <CustomDatePicker></CustomDatePicker>
          <FormControl sx={{display:"flex",flexDirection:"row"}}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{display:"flex",flexDirection:"row"}}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={gotoDashboard}>
             Sign Up
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default SignupForm;

// React Material (  will manage the look and feel of the form)
// React Final Form (will manage logic of form)
