import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#153060", // Change the border color when focused
              transition: "border-color 0.3s ease-in-out", // Preserve the default transition
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#153060", // Change the label color when focused
              transition: "color 0.3s ease-in-out", // Preserve the default transition
            },
          },
        },
      },
    },
  },
});

export default customTheme;