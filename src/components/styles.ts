import { makeStyles } from "@mui/material";

export const useStyles = makeStyles(() => ({
  customButton: {
    backgroundColor: "#C57B57",
    padding: "10px 20px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#585B56",
    },
  },
}));

export const customStyle = useStyles;
