import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-5">
      <Input />
      <Button variant="primary" size="lg">
        primary
      </Button>
      <Button variant="secondary">
        secondary
      </Button>
      <Button variant="destructive" size="xs">
        destructive
      </Button>
      <Button variant="ghost">
        ghost
      </Button>
      <Button variant="muted">
        muted
      </Button>
      <Button variant="outline">
        outline
      </Button>
      <Button variant="teritary">
        teritary
      </Button>
      <Button disabled>
        disabled
      </Button>
    </div>
  );
}
