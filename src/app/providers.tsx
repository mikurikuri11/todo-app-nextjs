'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../styles/theme'
import { HeaderLayout } from '@/components/templates/HeaderLayout';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <HeaderLayout>
                    {children}
                </HeaderLayout>
            </ChakraProvider>
        </CacheProvider>
    )
}
