import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <Card className="sm:w-xl w-sm max-w-2xl bg-[#3a506b]/20">
      <CardHeader className="border-ghost-white/50 border-b">
        <CardTitle className="text-tropical-teal font-bold text-2xl">
          Have a project in mind?
        </CardTitle>
        <CardDescription className="text-ghost-white">
          Enter your email below to get in touch with me.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name" className="text-ghost-white">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="border-ghost-white border-2 placeholder:text-ghost-white/50 text-ghost-white
                focus-visible:ring-ghost-white focus-visible:border-none
                "
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email" className="text-ghost-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="border-ghost-white border-2 placeholder:text-ghost-white/50 text-ghost-white focus-visible:ring-ghost-white focus-visible:border-none"
                required
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="message" className="text-ghost-white">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="border-ghost-white border-2 placeholder:text-ghost-white/50 text-ghost-white focus-visible:ring-ghost-white focus-visible:border-none"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 bg-[#3a506b]/20 border-ghost-white/50 mt-4">
        <Button
          type="submit"
          className="w-full bg-tropical-teal text-ghost-white hover:bg-tropical-teal/90 cursor-pointer py-5"
        >
          Send Message
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
