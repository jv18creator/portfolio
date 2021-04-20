import React, { useEffect, useState } from "react";

const BackText = (props) => {
  const mediaMatch = window.matchMedia("(max-width: 992px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  const TextStyle = {
    container: (isVanished) => ({
      fontFamily: `"Oleo Script", cursive`,
      position: "absolute",
      bottom: "0%",
      //   right: "-121px",
      right: "0",
      zIndex: "1",
      fontSize: "144px",
      color: `rgba(0, 0, 0, 0.2)`,
      userSelect: "none",
      transform: `translate(0, 0%) `,
      display: isVanished ? "none" : "block",
    }),
  };
  return (
    <>
      <h1 style={TextStyle.container(matches)}>{props.backname}</h1>
    </>
  );
};

export default BackText;
