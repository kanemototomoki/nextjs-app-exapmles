import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Code({ children }: Props) {
  return (
    <pre className='bg-gray-900 p-2 rounded-lg'>
      <code className='text-white font-mono'>{children}</code>
    </pre>
  );
}
