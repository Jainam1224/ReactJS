import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Heading>The Jainam Sanghvi</Heading>
    </div>
  );
};

export default App;
