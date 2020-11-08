// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
      id
      parentID
      name
      parent {
        id
        parentID
        name
      }
      children {
        nextToken
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
      id
      parentID
      name
      parent {
        id
        parentID
        name
      }
      children {
        nextToken
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
      id
      parentID
      name
      parent {
        id
        parentID
        name
      }
      children {
        nextToken
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      topic {
        id
        parentID
        name
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
      topic {
        id
        parentID
        name
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
      topic {
        id
        parentID
        name
      }
    }
  }
`;
