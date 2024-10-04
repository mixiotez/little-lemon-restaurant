import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Container from "@/components/Container/Container";

import dayjs from "dayjs";

const steps = ["Book with us!", "Your Details", "Check Out"];
const defaultFormData = {
  guests: { value: "", error: true },
  date: { value: null, error: true },
  time: { value: null, error: true },
  fullName: { value: "", error: true },
  email: { value: "", error: true },
  phone: { value: "", error: true },
  specialInstructions: { value: "", error: true },
};

const Reservations = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [activeStep, setActiveStep] = useState(0);
  const isMd = useMediaQuery("(min-width:900px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const updateForm = (e) => {
    setFormData((form) => ({
      ...form,
      [e.target.name]: {
        error: !e.target.value,
        value: e.target.value,
        isDirty: true,
      },
    }));
  };

  const displayError = {
    guests: formData.guests.error && formData.guests.isDirty,
    date: formData.date.error && formData.date.isDirty,
    time: formData.time.error && formData.time.isDirty,
    fullName: formData.fullName.error && formData.fullName.isDirty,
    email: formData.email.error && formData.email.isDirty,
    phone: formData.phone.error && formData.phone.isDirty,
  };

  const isDisabled = [
    formData.guests.error || formData.date.error || formData.time.error,
    formData.fullName.error || formData.email.error || formData.phone.error,
  ];

  const firstStep = (
    <>
      <Typography
        textAlign="center"
        variant="h4"
        fontFamily="Karla"
        component="h1"
      >
        Book with us!
      </Typography>
      <Typography textAlign="center" variant="subtitle1">
        Please complete the table reservation form.
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="guests-select-label">Number of Guests *</InputLabel>
        <Select
          required
          labelId="guests-select-label"
          name="guests"
          value={formData.guests.value}
          label="Number of Guests *"
          onChange={updateForm}
          onBlur={updateForm}
          error={displayError.guests}
        >
          {[undefined, 1, 2, 3, 4, 5, 6, 8, 9].map((value, i) => (
            <MenuItem key={i} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
        {formData.guests.error && formData.guests.isDirty && (
          <FormHelperText error>Required field</FormHelperText>
        )}
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControl fullWidth>
          <DatePicker
            disablePast
            closeOnSelect
            maxDate={dayjs().add(1, "month")}
            label="Date *"
            name="date"
            value={formData.date.value}
            onChange={(value) =>
              updateForm({ target: { value, name: "date" } })
            }
            slotProps={{
              textField: {
                error: displayError.date,
                helperText: displayError.date && "Required field",
                onBlur: (e) =>
                  setFormData((form) => {
                    const current = form.date;

                    return {
                      ...form,
                      date: {
                        error: e.target.value === "MM/DD/YYYY",
                        value: current.value,
                        isDirty: true,
                      },
                    };
                  }),
              },
            }}
          />
        </FormControl>
        <FormControl fullWidth>
          <TimePicker
            label="Time *"
            name="time"
            minutesStep={15}
            value={formData.time.value}
            onChange={(value) =>
              updateForm({ target: { value, name: "time" } })
            }
            slotProps={{
              textField: {
                error: displayError.time,
                helperText: displayError.time && "Required field",
                onBlur: (e) =>
                  setFormData((form) => {
                    const current = form.time;

                    return {
                      ...form,
                      time: {
                        error: e.target.value === "hh:mm aa",
                        value: current.value,
                        isDirty: true,
                      },
                    };
                  }),
              },
            }}
          />
        </FormControl>
      </LocalizationProvider>
    </>
  );

  const secondStep = (
    <>
      <Typography
        textAlign="center"
        variant="h4"
        fontFamily="Karla"
        component="h1"
      >
        Your Details
      </Typography>
      <Typography textAlign="center" variant="subtitle1">
        Share your contact information with us to stay informed about your
        reservation.
      </Typography>
      <TextField
        required
        id="full-name"
        label="Full Name"
        name="fullName"
        value={formData.fullName.value}
        onChange={updateForm}
        onBlur={updateForm}
        error={displayError.fullName}
        helperText={displayError.fullName && "Required field"}
      />
      <TextField
        required
        id="email"
        label="Email"
        name="email"
        value={formData.email.value}
        onChange={updateForm}
        onBlur={updateForm}
        error={displayError.email}
        helperText={displayError.email && "Required field"}
      />
      <TextField
        required
        type="number"
        id="phone"
        label="Phone"
        name="phone"
        value={formData.phone.value}
        onChange={updateForm}
        onBlur={updateForm}
        error={displayError.phone}
        helperText={displayError.phone && "Required field"}
      />
      <TextField
        label="Special Instructions"
        name="specialInstructions"
        value={formData.specialInstructions.value}
        onChange={updateForm}
      />
    </>
  );

  const lastStep = (
    <>
      <Typography variant="h4" fontFamily="Karla" component="h1">
        Check Out
      </Typography>
      <TextField
        label="Number of Guests"
        defaultValue={formData.guests.value}
        variant="filled"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
      <TextField
        label="Date"
        defaultValue={dayjs(formData.date.value).format("MMM/DD/YYYY")}
        variant="filled"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
      <TextField
        label="Time"
        defaultValue={dayjs(formData.time.value).format("hh:mm:A")}
        variant="filled"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
    </>
  );

  return (
    <Container component="section" sx={{ py: 4 }}>
      <Stepper sx={{ pb: 4 }} activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>

      <Stack mx="auto" maxWidth="500px" spacing={2}>
        {activeStep === 0
          ? firstStep
          : activeStep === 1
          ? secondStep
          : lastStep}
      </Stack>
      <Box
        sx={{
          display: "flex",
          py: isMd ? 8 : 4,
          px: isMd ? "70px" : 3,
          position: "absolute",
          width: "100%",
          bottom: 0,
          left: 0,
        }}
      >
        <Button
          size="large"
          color="secondary"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          disabled={!!isDisabled[activeStep]}
          size="large"
          variant="contained"
          onClick={handleNext}
        >
          {activeStep === steps.length - 1 ? (
            <Link color="inherit" href="success" underline="none">
              Confirm
            </Link>
          ) : (
            "Next"
          )}
        </Button>
      </Box>
    </Container>
  );
};

export default Reservations;
