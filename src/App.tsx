import "./App.css";
import Data from "./components/Data";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <Data hasError={false} />
      <ErrorBoundary fallback={<h2>ERROR OCCUR DURING CALL API</h2>}>
        <Data hasError={true} />
      </ErrorBoundary>
      <Data hasError={false} />
    </div>
  );
}

export default App;
