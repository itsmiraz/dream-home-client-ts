import MainLayout from "@/Layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "@/Context/userContext";

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <UserContext>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </UserContext>
      </QueryClientProvider>
    </CookiesProvider>
  );
}
