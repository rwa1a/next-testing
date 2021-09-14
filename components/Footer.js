import tw from "twin.macro";

// This is an example of the `styled-components` method with `tw` macros.
const Footer = () => (
  <StyledFooter>
    <Colophon>&copy; {new Date().getFullYear()} - Your Company</Colophon>
  </StyledFooter>
);

const StyledFooter = tw.footer`px-4 py-8`;
const Colophon = tw.p`text-center text-sm font-semibold uppercase`;

export default Footer;
