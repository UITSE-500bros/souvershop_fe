import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#153060", // Change the border color when focused
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#153060", // Change the label color when focused
            },
          },
        },
      },
    },
  },
});

export default customTheme;
