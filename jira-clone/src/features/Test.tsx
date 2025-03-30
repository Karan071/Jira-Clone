import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    <div>
      <div className="flex gap-4 p-5">
        <Button variant="primary" size="xs">Primary</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="muted">muted</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="teritary">teritrary</Button>
      </div>
    </div>
  );
}
