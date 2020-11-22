
import React, { useEffect, useState } from "react";
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

function Header({parents}) {
  const [linkBlock, setLinkBlock] = useState('')
  useEffect(()=>{
    const parentBlock = parents.reverse().map((parent)=>{
      const url = `/?id=${parent.id}`
      return (
        <Link key={parent.id} color="inherit" href={url}>
          {parent.name}
        </Link>
      )
    })
    console.log(parents)
    setLinkBlock(parentBlock)
  },[parents])
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {linkBlock}
    </Breadcrumbs>
  );
}

export default Header;
