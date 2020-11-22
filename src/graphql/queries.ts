/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      parentID
      name
      parent {
        id
        parentID
        name
        parent {
          id
          parentID
          name
          parent {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          children {
            items {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        children {
          items {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        comments {
          items {
            id
            content
            topic {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      children {
        items {
          id
          parentID
          name
          parent {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          children {
            items {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          topic {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parentID
        name
        parent {
          id
          parentID
          name
          parent {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          children {
            items {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        children {
          items {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        comments {
          items {
            id
            content
            topic {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      topic {
        id
        parentID
        name
        parent {
          id
          parentID
          name
          parent {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          children {
            items {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        children {
          items {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        comments {
          items {
            id
            content
            topic {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        topic {
          id
          parentID
          name
          parent {
            id
            parentID
            name
            parent {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            children {
              nextToken
            }
            comments {
              nextToken
            }
            createdAt
            updatedAt
          }
          children {
            items {
              id
              parentID
              name
              createdAt
              updatedAt
            }
            nextToken
          }
          comments {
            items {
              id
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
