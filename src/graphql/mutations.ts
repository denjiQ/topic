/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
