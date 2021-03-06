import { gql } from 'apollo-server-express'

const typeDefs = gql`
  enum Templates {
    paragraph,
    list,
    tabel,
    image,
    subtitle,
  }

  type Text {
    data: String
  }

  type List {
    list: [String]
  }

  type Images {
    image: String,
    description: String
  }

  union ContentData = Text | List | Images
  
  type Content {
    template: Templates,
    data: ContentData
  }

  type ShortPublication {
    _id: ID,
    title: String,
    user: User,
    text: String,
    image: String,
    createdAt: String,
    views: Int,
    topic: Topic,
  }

  type Publication {
    _id: ID,
    title: String,
    user: User,
    content: String,
    createdAt: String,
    views: Int,
    saved: Boolean,
    topic: Topic,
  }

  input PublicationInput {
    title: String,
    user: String,
    content: String,
    topic: String,
  }

  input UpdatePublicationInput {
    title: String,
    content: String,
    createdAt: String,
    views: Int,
    topic: String,
    user: String,
  }

  extend type Query {
    latestPublications: [ShortPublication],
    profilePublications(userID: String): [ShortPublication],
    publication(id: String): Publication,
  }

  extend type Mutation {
    publish(data: PublicationInput): String,
    updatePublish(id: String, data: UpdatePublicationInput): Boolean,
    addViews(id: String): Int,
    removePublication(id: String): Boolean,
  }
`
export default typeDefs
