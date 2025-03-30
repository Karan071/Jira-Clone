import { Button } from "@/components/ui/button";
import Test from "@/features/Test";
export default function Home() {
  return (
    <div>
      <Button variant='default'>Default</Button>
      <Button variant='destructive'>destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant='link'>link</Button>
      <Button variant='outline'>outline</Button>
      <Button variant='secondary'>secondary</Button>
      <Test/>
    </div>
  );
}
