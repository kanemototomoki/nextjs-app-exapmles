import { ReactNode } from "react";


type Props = {
  path: string;
  children: ReactNode;
}
export default function PageMoveButton({ path, children }: Props) {
  return (
    <Button>
      {children}
    </Button>
  );
}
