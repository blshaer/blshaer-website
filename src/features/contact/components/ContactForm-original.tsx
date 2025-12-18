"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { MagicCard } from "../../../shared/ui/MagicCard";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        console.error("EmailJS configuration is missing");
        return;
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        userId,
      );

      console.log("Email sent successfully:", result.text);
      form.reset();
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div>
      <MagicCard
        gradientColor="#7e7e7e12"
        className={cn(
          "group container overflow-hidden transition-all duration-300",
          "border-[var(--card-border-color)] bg-[var(--card-background)]",
        )}
        ref={undefined}
      >
        <div className="flex flex-col border-none bg-transparent">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 bg-transparent py-[20px] border-none"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--headline)]">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="rounded-[8px] border-[var(--input-border-color)] bg-[var(--input-background)] text-[var(--input-text)]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[var(--paragraph)]">
                      {/* Please provide your full name. */}
                    </FormDescription>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--headline)]">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="rounded-[8px] border-[var(--input-border-color)] bg-[var(--input-background)] text-[var(--input-text)]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[var(--paragraph)]">
                      {/* We will use this email to contact you. */}
                    </FormDescription>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--headline)]">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here"
                        className="h-[200px] rounded-[8px] border-[var(--input-border-color)] bg-[var(--input-background)] text-[var(--input-text)]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[var(--paragraph)]">
                      {/* Please provide a detailed message. */}
                    </FormDescription>
                    <FormMessage className="text-red-500 hoverd" />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </MagicCard>
    </div>
  );
}
