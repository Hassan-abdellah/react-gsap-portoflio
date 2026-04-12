import { Button } from "./ui/button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card.tsx";
import FormController from "./Form/FormController.tsx";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useSendEmail } from "@/hooks/useSendEmail.ts";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner.tsx";

const ContactForm = () => {
  const { send, loading, error, success } = useSendEmail();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendMessage = useCallback(
    async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email, name, message } = formData;
      if (!email || !name || !message) return;

      if (!isValidEmail(email)) {
        toast.error("Email not Valid", {
          position: "top-center",
        });
        return;
      }

      await send({
        from_name: name,
        reply_to: email,
        message: message,
      });
    },
    [formData],
  );

  useEffect(() => {
    if (success) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      toast.success("Email Sent Successfully", {
        position: "top-center",
      });
    }
  }, [success]);
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
        {error ? <span className="text-red-500">{error}</span> : null}
        <form id="form-id" onSubmit={handleSendMessage}>
          <div className="flex flex-col gap-6">
            <FormController
              id="name"
              placeholder="Ex: John Doe"
              value={formData.name}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, name: value }))
              }
              label="Name"
            />
            <FormController
              id="email"
              placeholder="m@example.com"
              value={formData.email}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, email: value }))
              }
              label="Email"
            />
            <FormController
              id="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, message: value }))
              }
              label="Message"
              isTextArea
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 bg-[#3a506b]/20 border-ghost-white/50 mt-4">
        <Button
          form="form-id"
          type="submit"
          disabled={loading}
          className="flex items-center justify-center w-full bg-tropical-teal text-ghost-white hover:bg-tropical-teal/90 cursor-pointer py-5 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Fragment>
              <Spinner />
              <span>Sending...</span>
            </Fragment>
          ) : (
            <span>Send Message</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
