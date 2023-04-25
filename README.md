# How to use ErrorBoundary inside a react app

Thanks to this [video](https://www.youtube.com/watch?v=_FuDMEgIy7I) and [React doc](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary), that help me a lot.

This is a simple React TSX component that you can easily copy and paste into your project.

```tsx
import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here.
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

and wrap your component like this :

```tsx
<ErrorBoundary fallback={<h2>ERROR </h2>}>
  <MyComponent />
</ErrorBoundary>
```
