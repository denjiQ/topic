
import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../graphql/mutations'
import { onCreateComment } from '../graphql/subscriptions'

function CommentBox({ createdAt, children }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          {children}  
        </Typography>
        <Typography color="textSecondary" className={classes.pos}>
          {createdAt}  
        </Typography>
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

export default CommentBox;