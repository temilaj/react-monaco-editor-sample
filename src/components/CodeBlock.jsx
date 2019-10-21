import React from 'react';
import * as monaco from 'monaco-editor';


export default class CodeBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.initializeEditor();
  }

  initializeEditor() {
    this.editor = monaco.editor.create(
      this.codeContainer,
      {
        value: `
        import React from 'react';
        export default class ErrorBoundary extends React.Component {
          constructor(props) {
            super(props);
            this.state = { hasError: false };
          }

          static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
          }

          componentDidCatch(error, errorInfo) {
            // You can also log the error to an error reporting service
            console.log('componentDidCatch');
            console.log({ error })
            console.log({ errorInfo })
          }

          render() {
            if (this.state.hasError) {
              // You can render any custom fallback UI
              return <h1>Something went wrong.</h1>;
            }

            return this.props.children; 
          }
        }`,
      language: 'javascript',
      }
    );
  }

  render() {
    return(
      <div>
        <div ref={container => { this.codeContainer = container; }} className="monaco-editor-container" style={{
          width: "80vw",
          height: "80vh",
        }}></div>
      </div>
    );
  }
}