import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        hasError: false,
        errorMessage:'' };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({hasError:true, errorMessage:error});
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
      return <h1>{this.state.errorMessage}</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;