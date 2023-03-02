import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { Provider } from "react-redux";
import App from "./App";
import RTK from "./RTK";
import { store } from "./store";
const Index = () => {
  const queryClient = new QueryClient();
  return (
    <div style={{ display: "flex" }}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
      <Provider store={store}>
        <RTK />
      </Provider>
    </div>
  );
};
const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(<Index />);
export default Index;
