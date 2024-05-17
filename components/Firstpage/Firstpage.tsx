import Link from 'next/link';
import { Button } from '../ui/button';

export function ButtonDemo() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Link href="/Login">
      <Button>Button</Button>
    </Link>
    </div>
  );
}
