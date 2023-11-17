import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.scss";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
