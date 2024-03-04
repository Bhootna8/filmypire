"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export const QueryProvider = ({children})=> {
    const queryClient = useState(()=> QueryClient());
    
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        {children}
    </QueryClientProvider>
}