import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='grid min-h-screen place-content-center place-items-center'>
      <Component {...pageProps} />
    </main>
  );
}
