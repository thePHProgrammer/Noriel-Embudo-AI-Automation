"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { siteConfig } from "@/content/site";
import {
  contactFormSchema,
  projectTypes,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: projectTypes[0],
      budget: "",
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong.");
      }

      toast.success("Message sent — I'll get back to you soon.");
      reset();
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong.";
      setSubmitError(msg);
      toast.error(msg);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      {/* Honeypot — hidden from real users, catches simple bots */}
      <div className="absolute left-[-9999px] top-auto" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Jane Doe" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="projectType">What do you need?</Label>
          <select
            id="projectType"
            className="flex h-11 w-full rounded-lg border border-input bg-white/[0.03] px-3.5 text-sm text-foreground outline-none focus-visible:border-accent-blue focus-visible:ring-2 focus-visible:ring-ring/40"
            {...register("projectType")}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-background">
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="budget">Budget (optional)</Label>
          <Input id="budget" placeholder="e.g. $500–1,500" {...register("budget")} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Project details</Label>
        <Textarea
          id="message"
          placeholder="What are you trying to automate, and what's the current process today?"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="sm:self-start">
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>

      {submitError && (
        <p className="text-sm text-muted-foreground">
          {submitError} You can also reach me directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent-blue underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      {isSubmitSuccessful && !submitError && (
        <p className="text-sm text-muted-foreground">
          Thanks — I usually reply within a day or two.
        </p>
      )}
    </form>
  );
}
