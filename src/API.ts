/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTopicInput = {
  id?: string | null,
  parentID: string,
  name: string,
};

export type ModelTopicConditionInput = {
  parentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTopicInput = {
  id: string,
  parentID?: string | null,
  name?: string | null,
};

export type DeleteTopicInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  content?: string | null,
  commentTopicId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  commentTopicId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  parentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic:  {
    __typename: "Topic",
    id: string,
    parentID: string,
    name: string,
    parent:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
    children:  {
      __typename: "ModelTopicConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic:  {
    __typename: "Topic",
    id: string,
    parentID: string,
    name: string,
    parent:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
    children:  {
      __typename: "ModelTopicConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic:  {
    __typename: "Topic",
    id: string,
    parentID: string,
    name: string,
    parent:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
    children:  {
      __typename: "ModelTopicConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    topic:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    topic:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    topic:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic:  {
    __typename: "Topic",
    id: string,
    parentID: string,
    name: string,
    parent:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
    children:  {
      __typename: "ModelTopicConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    topic:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic:  {
    __typename: "Topic",
    id: string,
    parentID: string,
    name: string,
    parent:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
    children:  {
      __typename: "ModelTopicConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic:  {
    __typename: "Topic",
    id: string,
    parentID: string,
    name: string,
    parent:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
    children:  {
      __typename: "ModelTopicConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic:  {
    __typename: "Topic",
    id: string,
    parentID: string,
    name: string,
    parent:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
    children:  {
      __typename: "ModelTopicConnection",
      nextToken: string | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    topic:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    topic:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    topic:  {
      __typename: "Topic",
      id: string,
      parentID: string,
      name: string,
    } | null,
  } | null,
};
