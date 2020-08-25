import gql from "graphql-tag";

export const ALL_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

export const CATEGORIES = gql`
  query {
    allCategories {
      id
      name
      image
    }
  }
`;

export const ALL_PRODUCTS = gql`
  query {
    allProducts {
      id
      name
      image
      description
    }
  }
`;

export const CATEGORY = gql`
  query($id: ID!) {
    category(id: $id) {
      id
      name
      image
      products {
        id
        name
        price
        image
        description
      }
    }
  }
`;
