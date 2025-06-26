// Centered.jsx
import styled from "@emotion/styled";

const Centered = styled("div")({
  margin: "0 auto",
  maxWidth: "800px",
  "@media (max-width: 800px)": {
    margin: "0 12px",
  },
});

export default Centered;
