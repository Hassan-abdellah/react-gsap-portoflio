import { Input } from "@/Components/ui/input.tsx";
import { Textarea } from "./ui/textarea.tsx";
import { Button } from "./ui/button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card.tsx";
import { Label } from "./ui/label.tsx";
import FormController from "./Form/FormController.tsx";

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
            <FormController
              id="name"
              placeholder="Ex: John Doe"
              value=""
              onChange={() => {}}
              label="Name"
            />
            <FormController
              id="email"
              placeholder="m@example.com"
              value=""
              onChange={() => {}}
              label="Email"
            />
            <FormController
              id="message"
              placeholder="Your message here..."
              value=""
              onChange={() => {}}
              label="Message"
              isTextArea
            />
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
