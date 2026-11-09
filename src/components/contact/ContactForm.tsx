"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { sendEmail as sendEmailAction } from "@/app/[locale]/actions";
import SubmitButton from "@/components/contact/SubmitButton";
import { cn } from "@/lib/utils";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LABEL = "flex flex-col gap-1.5 font-mono text-xs text-text-muted";
const ERROR = "font-sans text-xs text-danger";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<"sent" | "failed" | null>(null);

  function onSubmit(data: ContactFormValues) {
    setResult(null);
    startTransition(async () => {
      try {
        await sendEmailAction(data);
        setResult("sent");
        form.reset();
      } catch {
        setResult("failed");
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="flex min-w-0 flex-[1_1_420px] flex-col gap-4 self-start rounded-2xl border border-border-card bg-surface p-[clamp(20px,3vw,28px)]"
      >
        <h3 className="sr-only">{t("title")}</h3>
        {result && (
          <p
            role={result === "sent" ? "status" : "alert"}
            className={cn(
              "animate-fade rounded-[10px] border px-3.5 py-3 font-mono text-[13px]",
              result === "sent"
                ? "border-accent text-accent"
                : "border-danger text-danger",
            )}
          >
            {t(result)}
          </p>
        )}
        <div className="flex flex-wrap gap-4">
          <FormField
            control={form.control}
            name="name"
            rules={{ required: t("validation.name") }}
            render={({ field }) => (
              <FormItem className={`${LABEL} flex-[1_1_180px]`}>
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <input
                    className="field"
                    type="text"
                    autoComplete="name"
                    placeholder={t("namePlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage className={ERROR} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: t("validation.email"),
              pattern: {
                value: EMAIL_PATTERN,
                message: t("validation.emailInvalid"),
              },
            }}
            render={({ field }) => (
              <FormItem className={`${LABEL} flex-[1_1_180px]`}>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <input
                    className="field"
                    type="email"
                    autoComplete="email"
                    placeholder={t("emailPlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage className={ERROR} />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          rules={{ required: t("validation.message") }}
          render={({ field }) => (
            <FormItem className={LABEL}>
              <FormLabel>{t("message")}</FormLabel>
              <FormControl>
                <textarea
                  className="field resize-y py-3"
                  rows={5}
                  placeholder={t("messagePlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage className={ERROR} />
            </FormItem>
          )}
        />
        <SubmitButton sending={isPending} />
      </form>
    </Form>
  );
}
