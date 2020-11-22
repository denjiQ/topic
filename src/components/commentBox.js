
import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography
} from '@material-ui/core';

import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '../graphql/mutations'
import { onCreateComment } from '../graphql/subscriptions'

function CommentBox({ content, createdAt, children }) {

  return (
    <div>
      {children}
      {createdAt}
    </div>
  );
}

export default CommentBox;
