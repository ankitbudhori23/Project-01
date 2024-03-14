import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./app/Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <GoogleOAuthProvider clientId="98813572747-f6fj5ro0bg179q1pmkvscrk7oge8df7h.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </Router>
);

reportWebVitals();
