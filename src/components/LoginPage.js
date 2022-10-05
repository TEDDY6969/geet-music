import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalState";

import { Button, Grid, Typography } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import bgImg from "../images/music-bg.svg";
import gIcon from "../images/google.svg";
import handcraftedText from "../images/google.svg";

// import GoogleSignIn from "./GoogleSignIn";

const bgStyle = {
  background: `url(${bgImg}) no-repeat`,
  backgroundPositionX: "50%",
  width: "100vw",
  height: "46vh"
};



const LoginPage = ({ continueToHome }) => {
  // const showSignIn = () => {
  //   // if user has already closed the popup dont show it
  //   if (localStorage.getItem("signInClosed") !== "true") {
  //     return <GoogleSignIn />;
  //   }
  // };

  return (
    <Grid
      style={{ height: "80vh" }}
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      {/* {showSignIn()} */}

      <div style={bgStyle} />

      <Typography
        variant="h6"
        color="primary"
        align="center"
        style={{ padding: "10px" }}
      >
        Listen to unlimited songs without any ads for free only on Geet Music
      </Typography>
      <img
        style={{
          width: "70vw",
          maxWidth: "350px"
        }}
        src="https://cdn.discordapp.com/attachments/938107328434151475/1022775310388842506/Picsart_22-09-23_13-13-28-261.png"
        alt="Handcrafted by Jatin"
      />
      <Button variant="outlined" color="primary" onClick={continueToHome}>
        Continue
        <NavigateNext />
      </Button>
    </Grid>
  );
};

export default LoginPage;
