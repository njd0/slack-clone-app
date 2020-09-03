import React from "react";
import SideNav from "../components/sideNav";
import MessageBoard from "../components/messageBoard";
import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
  {
    getUsers {
    id
    username
    email
  }}
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: 1 },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  console.log("DATA", data);

  return (
    <React.Fragment>
      <SideNav />
      <MessageBoard />
    </React.Fragment>
  );
}

export default Home;