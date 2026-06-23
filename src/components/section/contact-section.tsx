"use client";

import { useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-shadow";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="border rounded-xl p-8 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/3 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Have a project, role, or idea you&apos;d like to discuss? Send me a
          message and I&apos;ll get back to you.
        </p>

        {status === "success" ? (
          <div className="mt-2 w-full max-w-md rounded-lg border border-border bg-muted/40 px-4 py-6 text-sm">
            Thanks for reaching out — your message has been sent. I&apos;ll reply
            soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-2 w-full max-w-md flex flex-col gap-3 text-left"
          >
            {/* Honeypot field — hidden from humans */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                aria-label="Your name"
                className={fieldClass}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                aria-label="Your email"
                className={fieldClass}
              />
            </div>
            <textarea
              name="message"
              required
              rows={4}
              maxLength={5000}
              placeholder="What would you like to talk about?"
              aria-label="Your message"
              className={cn(fieldClass, "resize-y min-h-24")}
            />
            {status === "error" && error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
