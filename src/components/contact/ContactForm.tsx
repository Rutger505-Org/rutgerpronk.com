"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { sendEmail as sendEmailAction } from "@/app/[locale]/actions";
import SubmitButton from "@/components/contact/SubmitButton";
import { useToast } from "@/components/ui/use-toast";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  function onSubmit(data: ContactFormValues) {
    startTransition(async () => {
      try {
        await sendEmailAction(data);
        setIsSuccess(true);
        toast({
          title: t("toast.success"),
        });
        form.reset();
      } catch {
        toast({
          title: t("toast.error"),
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-y-7 rounded-md bg-secondary p-8 xs:max-w-[380px]"
      >
        <h3 className="text-2xl text-textPrimary">{t("title")}</h3>
        <FormField
          control={form.control}
          name="name"
          rules={{ required: t("validation.name") }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  className={
                    "w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none outline-1 focus:outline-accent"
                  }
                  type="text"
                  placeholder={t("name")}
                  {...field}
                />
              </FormControl>
              <FormMessage className={"text-red"} />
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
            <FormItem>
              <FormControl>
                <input
                  className={`w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none outline-1 focus:outline-accent`}
                  type="text"
                  placeholder={t("email")}
                  {...field}
                />
              </FormControl>
              <FormMessage className={"text-red"} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          rules={{ required: t("validation.message") }}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  className={`min-h-[150px] w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none outline-1 focus:outline-accent`}
                  placeholder={t("message")}
                  {...field}
                ></textarea>
              </FormControl>
              <FormMessage className={"text-red"} />
            </FormItem>
          )}
        />
        <SubmitButton sending={isPending} sent={isSuccess} />
      </form>
    </Form>
  );
}
