import React from 'react'
import { getSession } from "next-auth/react";

const catalogo = ({ session }) => {
  return (
    <div>
      <h1>{session.user.name}</h1>
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default catalogo