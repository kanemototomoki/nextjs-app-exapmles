import Code from '@/ui/Code';
import Link from 'next/link';

// getStaticProps
export function getStaticProps() {
  return {
    props: {
      path: [],
    },
  };
}

export default function Sg() {
  return (
    <>
      <Code>src/pages/Sg/index.tsx</Code>
      <Link href="/">/</Link>
    </>
  );
}
