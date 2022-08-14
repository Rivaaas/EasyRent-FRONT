import Layout from '../components/Layout'
import '../styles/globals.css'
import { getSession} from "next-auth/react";

function MyApp({ Component, pageProps, session,  }) {

  return (
    <Layout session={session} >
      <Component {...pageProps} />
    </Layout>
  )
}
MyApp.getInitialProps = async ({ctx: {req}}) => {
  
  const session = await getSession({ req });
  return {
    session: session || {}
  }
}



export default MyApp
