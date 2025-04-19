import { Button } from "@/components/ui/button";

export default function Home() {
  return(
    <div className="flex flex-col gap-y-4 ">
      <div>
        <Button variant={'elevated'}>
          I am a button
        </Button>
      </div>
    </div>
  )
}
