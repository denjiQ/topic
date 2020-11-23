
import React, { useEffect, useState } from "react";
import {
  Button,
  CardContent,
  TextField,
  Card
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../graphql/mutations'
import { onCreateComment } from '../graphql/subscriptions'
import Comment from './comment';

function Comments({topicId, comments, setComments}: {topicId: string|null, comments: any, setComments: any}) {
  const [comment, setComment] = useState('');
  const [commentsBlock, setCommentsBlock] = useState('')
  const [newComment, setNewComment] = useState('')
  const classes = useStyles();
  const postComment = async (input: any) => {
    const res = await API.graphql(graphqlOperation(createComment, input));
    console.log(res);
  }

  const submit = () => {
    const input = {
      input: {
        id: null,
        content: comment,
        commentTopicId: topicId,
      } 
    }
    postComment(input)
  }
  
  useEffect(()=>{
    console.log(comments)
    setComments([...comments, newComment])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newComment])
  
  useEffect(()=>{
    console.log(comments)
    // TODO: devide pages at next token
    const commentsBlock = comments.map((comment:any) => 
      <Comment key={comment.id} createdAt={comment.createdAt}>{comment.content}</Comment>
    )
    setCommentsBlock(commentsBlock)
  }, [comments])
  
  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateComment)).subscribe({
      next: (eventData) => {
        console.log(eventData)
        const comment = eventData.value.data.onCreateComment;
        console.log(comments)
        setNewComment(comment)
      }
    });
    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Card>
        <CardContent>
          Comments
          {commentsBlock}
          <form>
            <TextField fullWidth variant="outlined" className={classes.textField} id="standard-basic" label="Comment" onChange={event => setComment(event.target.value)}/>
            <Button fullWidth variant="contained" color="primary" onClick={submit}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 20
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
  textField: {
    margin: 5,
  },
});


export default Comments;
