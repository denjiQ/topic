
import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../graphql/mutations'
import { onCreateComment } from '../graphql/subscriptions'

function ChildrenTopic({ childrenTopic }) {
  const [childrenTopicBlock, setChildrenTopicBlock] = useState([])
  const classes = useStyles();
  useEffect(()=>{
    console.log(childrenTopic)
    const childrenTopicBlock = childrenTopic.map((child) => {
      const url = `/?id=${child.id}`
      return (
        <Card key={child.id} className={classes.root}>
          <CardContent>
            <Link className={classes.title} href={url}>
              {child.name}  
            </Link>
          </CardContent>
        </Card>
      )
    })
    setChildrenTopicBlock(childrenTopicBlock)
  }, [childrenTopic])
  return (
    <Card>
      <CardContent>
        このトピックの子供のトピック
        {childrenTopicBlock}
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    textAlign: 'left'
  },
  pos: {
    fontSize: 5,
    marginTop: 5,
    textAlign:'right'
  },
});

export default ChildrenTopic;