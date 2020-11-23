
import React from "react";
import {
  Typography,
  Card,
  CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import dayjs from 'dayjs'

function CommentBox({ createdAt, children }: {createdAt: any, children:any}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          {children}  
        </Typography>
        <Typography color="textSecondary" className={classes.pos}>
          {dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}
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