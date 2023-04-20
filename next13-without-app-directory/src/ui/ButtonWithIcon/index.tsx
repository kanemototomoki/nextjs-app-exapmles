import { ChevronRight } from 'lucide-react';

import { Button } from '@/ui/shadcn/button';

export function ButtonWithIcon() {
  return (
    <Button>
      <ChevronRight className='mr-2 h-4 w-4' /> Login with Email
    </Button>
  );
}
