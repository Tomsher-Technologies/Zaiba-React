import React, { ReactNode } from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            select: (data: any) => {
                return data;
            },
            retry: 0,
        },
    },
});

interface ReactQueryProviderProps {
    children: ReactNode;
}

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default ReactQueryProvider;