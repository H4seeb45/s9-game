import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DownloadButton from "@/components/DownloadButton";

type Stat = {
  label: string;
  value: string;
};

type CardItem = {
  title: string;
  text: string;
  icon?: ReactNode;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function ElitePageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#05030d] text-white">
      {children}
    </div>
  );
}

export function EliteHero({
  badge,
  title,
  subtitle,
  image,
  imageAlt,
  cta,
  stats,
}: {
  badge: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
  imageAlt: string;
  cta: string;
  stats: Stat[];
}) {
  return (
    <section className="relative isolate px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.25),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(147,51,234,0.24),_transparent_36%),linear-gradient(135deg,_#080414_0%,_#12061f_48%,_#05030d_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[url('/s9-game-banner.webp')] bg-cover bg-center opacity-20 mix-blend-screen" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-yellow-200">
            {badge}
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <DownloadButton title={cta} />
            <p className="text-sm text-slate-300">
              Fast access, secure play, and a lobby built for serious gamers.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20 backdrop-blur"
              >
                <p className="text-2xl font-black text-yellow-200">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-yellow-950/30 backdrop-blur">
            <Image
              src={image}
              alt={imageAlt}
              className="mx-auto h-auto w-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function EliteSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-4 py-14 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function FeatureGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-yellow-300/50 hover:bg-white/[0.09]"
        >
          {item.icon ? (
            <div className="mb-5 inline-flex rounded-2xl bg-yellow-300/15 p-3 text-yellow-200 ring-1 ring-yellow-300/25">
              {item.icon}
            </div>
          ) : null}
          <h3 className="text-xl font-black text-white">{item.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <li
          key={step}
          className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-slate-200"
        >
          <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 text-sm font-black text-slate-950">
            {index + 1}
          </span>
          <p className="leading-7">{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqBlock({ items }: { items: FaqItem[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.06] px-5"
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-white">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="leading-7 text-slate-300">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function CtaBand({
  title,
  text,
  cta,
}: {
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <div className="rounded-[2rem] border border-yellow-300/20 bg-gradient-to-r from-yellow-300/20 via-fuchsia-500/10 to-cyan-400/10 p-8 text-center shadow-2xl shadow-yellow-950/30 sm:p-12">
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-200">
        {text}
      </p>
      <div className="mt-8">
        <DownloadButton title={cta} />
      </div>
    </div>
  );
}
