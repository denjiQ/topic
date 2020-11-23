
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function ChildrenTopic({ childrenTopic }: {childrenTopic: any}) {
  const [childrenTopicBlock, setChildrenTopicBlock] = useState([])
  const classes = useStyles();
  useEffect(()=>{
    console.log(childrenTopic)
    const childrenTopicBlock = childrenTopic.map((child:any) => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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