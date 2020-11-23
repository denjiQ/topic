import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTopic } from "../graphql/mutations";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { API, graphqlOperation } from "aws-amplify";

function CreateChildTopic({ parentTopicId }: {parentTopicId: string|null}) {
  // console.log(props)
  const classes = useStyles();
  const [newTopicName, setNewTopicName] = useState("");
  const history = useHistory();
  const postTopic = async (input: any) => {
    const res:any = await API.graphql(graphqlOperation(createTopic, input));
    console.log(res.data.createTopic);
    return res;
    // dispatch({ type: type, posts: res.data.listPostsSortedByTimestamp.items })
    // setNextToken(res.data.listPostsSortedByTimestamp.nextToken);
    // setIsLoading(false);
  };
  const submit = async () => {
    // console.log(topic)
    const input = {
      input: {
        id: null,
        parentID: parentTopicId,
        name: newTopicName,
      },
    };
    const res = await postTopic(input);
    console.log(history);
    history.push({
      pathname: "/",
      search: `?id=${res.data.createTopic.id}`,
    });
    window.location.reload();
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textPrimary">
          新しく子供のトピックを作成する
        </Typography>
        <form>
          <TextField
            variant="outlined"
            fullWidth
            className={classes.textField}
            id="standard-basic"
            label="New Topic"
            onChange={(event) => setNewTopicName(event.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={submit}
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    textAlign: "left",
  },
  textField: {
    margin: 5,
  },
});

export default CreateChildTopic;
