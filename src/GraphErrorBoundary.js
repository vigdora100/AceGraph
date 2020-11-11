import React from "react";
import { isEqual } from 'lodash'

export default class GraphErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidUpdate(prevProps)  {
        if (!isEqual(this.props.graphJson,prevProps.graphJson)) {
            this.setState({ hasError: false })
        }
      }
  
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
  
    render() {
      if ( this.state.hasError) {
        // You can render any custom fallback UI
        return (<div><h1>Something went wrong.</h1>
                <button onClick={this.reset}>Try again</button></div>
                )
      }
      return this.props.children;
    }
  }