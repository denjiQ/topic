import React from "react";
import { Typography } from "@material-ui/core";

function Title({ topicName }: {topicName:string}) {
  return (
    <div>
      <div>
        <Typography variant="h4">{topicName}</Typography>
      </div>
    </div>
  );
}

export default Title;
