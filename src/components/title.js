
import React, { useState } from "react";
import { createTopic } from '../graphql/mutations'
import { getTopic } from '../graphql/queries'
import {
  Button,
  TextField,
  Link,
  Breadcrumbs,
  Container,
  Typography,
  CssBaseline,
} from '@material-ui/core';

import Amplify, { API, graphqlOperation } from 'aws-amplify';

function Title(props) {
  console.log(props)
  const [topic, setTopic] = useState('');
  const postTopic = async (input) => {
    const res = await API.graphql(graphqlOperation(createTopic, input));
    console.log(res);
    // dispatch({ type: type, posts: res.data.listPostsSortedByTimestamp.items })
    // setNextToken(res.data.listPostsSortedByTimestamp.nextToken);
    // setIsLoading(false);
  }
  const submit = () => {
    console.log(topic)
    const input = {
      input: {
        id: null,
        parentID: "abc", //default = 10
        name: topic,
      } 
    }
    postTopic(input)
  }
  
  // const getTopicFunc = async (id) => {
  //   const res = await API.graphql(graphqlOperation(getTopic, id));
  //   console.log(res)
  // }

  // return (
  //   <div>
  //     given: {props.topicId}
  //     <form>
  //       <TextField id="standard-basic" label="Standard" onChange={event => setTopic(event.target.value)}/>
  //       <Button variant="contained" color="primary" onClick={submit}>
  //         Submit
  //       </Button>
  //     </form>
  //     <div>
  //       <Typography variant="h4">{topic}</Typography>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <div>
        <Typography variant="h4">{props.topicName}</Typography>
      </div>
    </div>
  );
}

export default Title;
