
import './App.css';
import React, { useEffect, useState } from "react";
import { getTopic } from './graphql/queries'
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
import CreateChildTopic from './components/create-child-topic'
import ChildrenTopic from './components/children-topic'

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  const [topicId, setTopicId] = useState((new URL(window.location)).searchParams.get('id'));
  const [topicName, setTopicName] = useState()
  const [comments, setComments] = useState([])
  const [parents, setParents] = useState([])
  const [childrenTopic, setChildrenTopic] = useState([])
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
  const getParent = (topic)=>{
    const obj = {
      id: topic.id,
      name: topic.name
    }
    if(!topic.parent){
      return [obj]
    }
    return [obj, ...getParent(topic.parent)]
  }
  useEffect(()=>{
    const fn = async ()=>{
      console.log(topicId)
      const res = await getTopicFunc(topicId)
      setTopicName(res.data.getTopic.name)
      const parents = getParent(res.data.getTopic)
      console.log(parents)
      setParents(parents)
      setChildrenTopic(res.data.getTopic.children.items)
      console.log(res.data.getTopic.comments.items)
      setComments(res.data.getTopic.comments.items)
    }
    fn()
  }, [])
  const loop = (topic)=>{

  }
  // 
  return (
    <Router>
      <Route path="/">
        <div className="App">
          <CssBaseline />
          <Container maxWidth="sm">
            <Header parents={parents}/>
            <Title topicName={topicName} />
            <Comments topicId={topicId} comments={comments} setComments={setComments}/>
            <ChildrenTopic childrenTopic={childrenTopic} />
            <CreateChildTopic parentTopicId={topicId}/>
          </Container>
        </div>
      </Route>
    </Router>
  );
}

export default App;
