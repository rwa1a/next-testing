import tw from "twin.macro";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = (props) => (
  <SiteWrap>
    <Header />
    <Main>{props.children}</Main>
    <Footer />
  </SiteWrap>
);

const SiteWrap = tw.div`flex flex-col h-screen`;
const Main = tw.main`flex-1`;

export default PageLayout