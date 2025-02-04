import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { ChakraProvider } from "@chakra-ui/react";
import SearchcontextProviderfunction from "./Contex/Searchcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SearchcontextProviderfunction>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </SearchcontextProviderfunction>
  </Provider>
);
