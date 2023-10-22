import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("====>", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "red", marginBottom: "30px" }}>
            Something went wrong!
          </h2>
          <a
            href="/"
            style={{
              color: "blue",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Back to Counter
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
