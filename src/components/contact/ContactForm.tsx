"use client";

import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { sendEmail as sendEmailAction } from "@/app/[locale]/actions";
import { useMutation } from "react-query";
import SubmitButton from "@/components/contact/SubmitButton";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const formSchema = z.object({
    name: z.string().min(1, { message: t("validation.name") }),
    email: z
      .string()
      .min(1, { message: t("validation.email") })
      .email({ message: t("validation.emailInvalid") }),
    message: z.string().min(1, { message: t("validation.message") }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    mutate: sendEmail,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: sendEmailAction,
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    sendEmail(data);
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
        <SubmitButton sending={isLoading} sent={isSuccess} />
        {isError && <p className="-mt-4 text-red">{t("error")}</p>}
      </form>
    </Form>
  );
}
