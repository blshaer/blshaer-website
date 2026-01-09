"use client";

import { cn } from "@/shared/lib/utils";
import { MagicCard } from "@/shared/ui/";
import { useContactForm } from "../hooks/useContactForm";
import { ContactFormLayout } from "./ContactFormLayout";
import ClickSpark from "@/shared/ui/effects/click-spark";

export default function ContactForm() {
  const { form, isSubmitting, onSubmit } = useContactForm();

  return (
    <MagicCard
      gradientColor="#7e7e7e12"
      className={cn(
        "container border bg-[var(--card-background)]"
      )} ref={undefined}    >
      <ClickSpark sparkColor="#fff" sparkSize={10}>
        <ContactFormLayout
          form={form}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      </ClickSpark>
    </MagicCard>
  );
}
