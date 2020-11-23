import React from "react";
import { Typography } from "@material-ui/core";

function Title({ topicName }) {
  return (
    <div>
      <div>
        <Typography variant="h4">{topicName}</Typography>
      </div>
    </div>
  );
}

export default Title;
