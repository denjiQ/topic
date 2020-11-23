
import React, { useEffect, useState } from "react";
import {
  Link,
  Breadcrumbs,
} from '@material-ui/core';

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
