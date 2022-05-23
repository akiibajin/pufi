import { Typography } from "@mui/material";

export default function Logo({color}:{color:string}){
    return (
        <>
        <Typography
              className="title"
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1.7,
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: color,
                textDecoration: "none",
              }}
            >
              PUFI
            </Typography>
        </>
    )
}