import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Markdown = styled(ReactMarkdown)`
  flex: 1;
  display: flex;
  flex-flow: row;
  flex-direction: column;
  word-break: break-word;

  & img {
    max-width: 100%;
    max-height: 100%;
  }

  & p {
    margin: 0;
    white-space: pre-wrap;
  }

  & code {
    white-space: pre-wrap;
    border-radius: 4px;
    padding: 2px;
    font-size: 12px;
  }
  & h1 {
    font-size: 1.5em;
    margin: 0;
  }
  & h2 {
    font-size: 1.3em;
    margin: 0;
  }
  & h3 {
    font-size: 1.1em;
    margin: 0;
  }
  & h4 {
    margin: 0;
  }
  & h5 {
    margin: 0;
  }
  & h6 {
    margin: 0;
  }
    & ul {
    display: flex;
  }
`;

export default {
  Markdown,
};
