import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import { Layout } from "../components";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
