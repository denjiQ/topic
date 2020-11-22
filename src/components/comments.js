
import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
} from '@material-ui/core';

import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../graphql/mutations'
import { onCreateComment } from '../graphql/subscriptions'

function Comments({topicId, comments, setComments}) {
  const [comment, setComment] = useState('');
  const [commentsBlock, setCommentsBlock] = useState('')
  const [newComment, setNewComment] = useState('')

  const postComment = async (input) => {
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
    setComments([...comments, ...newComment])
  }, [newComment])
  
  useEffect(()=>{
    console.log(comments)
    const commentsBlock = comments.map((comment) => 
    <p key={comment.id}>{comment.content}</p>
    )
    setCommentsBlock(commentsBlock)
  }, [comments])
  
  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateComment)).subscribe({
      next: (eventData) => {
        console.log(eventData)
        const comment = [eventData.value.data.onCreateComment];
        console.log(comments)
        setNewComment(comment)
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      {commentsBlock}
      <form>
        <TextField id="standard-basic" label="Comment" onChange={event => setComment(event.target.value)}/>
        <Button variant="contained" color="primary" onClick={submit}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Comments;
