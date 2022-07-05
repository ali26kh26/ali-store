import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import style from "./loading.module.scss";
const Loading = () => {
  return (
    <Grid container wrap="wrap" sx={{ width: "90%", margin: "auto" }}>
      {Array.from(new Array(6)).map((item, index) => (
        <Box
          key={index}
          sx={{ width: "30%", minWidth: 150, marginRight: 1.5, my: 5 }}
        >
          <Skeleton
            className={style.color}
            variant="rectangular"
            width="100%"
            height={218}
          />

          <Box sx={{ pt: 0.5 }}>
            <Skeleton className={style.color} />
            <Skeleton className={style.color} width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default Loading;
