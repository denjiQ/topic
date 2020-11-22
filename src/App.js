
import './App.css';
import React, { useEffect, useState } from "react";
import { getTopic } from './graphql/queries'

import {
  Button,
  TextField,
  Link,
  Breadcrumbs,
  Container,
  Typography,
  CssBaseline,
} from '@material-ui/core';
import Header from './components/header'
import Title from './components/title'
import Comments from './components/comments'

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  const [topicId, setTopicId] = useState((new URL(window.location)).searchParams.get('id'));
  const [topicName, setTopicName] = useState()
  const [comments, setComments] = useState([])
  console.log((new URL(window.location)).searchParams.get('id'))
  // idからtopicを取得
  const getTopicFunc = async (id) => {
    const res = await API.graphql(graphqlOperation(getTopic, {id}));
    console.log(res);
    return res
    // dispatch({ type: type, posts: res.data.listPostsSortedByTimestamp.items })
    // setNextToken(res.data.listPostsSortedByTimestamp.nextToken);
    // setIsLoading(false);
  }
  useEffect(()=>{
    const fn = async ()=>{
      console.log(topicId)
      const res = await getTopicFunc(topicId)
      setTopicName(res.data.getTopic.name)
      console.log(res.data.getTopic.comments.items)
      setComments(res.data.getTopic.comments.items)
    }
    fn()
  }, [])
  // 
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Header />
        <Title topicName={topicName} />
        <Comments topicId={topicId} comments={comments} setComments={setComments}/>
      </Container>
      <TextField id="standard-basic" label="TopicId" onChange={event => setTopicId(event.target.value)} />
    </div>
  );
}

export default App;
