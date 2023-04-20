import Code from '@/ui/Code';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Code>src/pages/index.tsx</Code>
      <Link href='/sg'>/sg</Link>
    </>
  );
}
