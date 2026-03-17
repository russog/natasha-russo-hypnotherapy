import Link from "next/link";
import { Card } from "@/app/components/card";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smoking Cessation | Natasha Russo",
  description:
    "Smoking cessation support using Cognitive Behavioural Hypnotherapy, combining evidence-based psychological strategies with hypnosis.",
  alternates: { canonical: "/smoking-cessation" },
};

export default function SmokingCessationPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
          <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
            Smoking Cessation with Cognitive Behavioural Hypnotherapy
          </h1>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10 mb-20">
          <Card>
            <p className="text-stone-700 leading-relaxed">
              Many people want to stop smoking yet find that the habit can be difficult to change. Over time, smoking often becomes linked to daily routines, emotional cues, and expectations about relief or reward. Because of this, the habit can persist even when someone feels strongly motivated to stop.
            </p>

            <p className="text-stone-700 leading-relaxed mt-4">
              Cognitive Behavioural Hypnotherapy approaches smoking cessation by looking at the patterns that maintain the behaviour and helping people develop new responses. Rather than relying on suggestion alone, this approach combines cognitive-behavioural strategies with hypnotic techniques to support meaningful habit change.
            </p>

            <p className="text-stone-700 leading-relaxed mt-4">
              The aim is to help individuals understand the triggers and expectations connected with smoking, strengthen their motivation to stop, and build practical ways of responding differently in situations where smoking would previously have occurred.
            </p>
          </Card>

          <Card className="bg-emerald-50/50">
            <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
              How the approach works
            </h2>

            <p className="text-stone-700 leading-relaxed">Work around smoking cessation may include:</p>

            <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0" />
                <span>identifying the situations, routines, or emotional cues associated with smoking</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0" />
                <span>examining beliefs and expectations about smoking</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0" />
                <span>strengthening motivation and commitment to change</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0" />
                <span>developing practical strategies for responding to triggers</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0" />
                <span>using hypnotic techniques to reinforce new patterns of behaviour</span>
              </li>
            </ul>

            <p className="text-stone-700 leading-relaxed mt-6">
              Hypnosis in this context is used as a way of focusing attention and supporting behavioural change, helping individuals rehearse and reinforce new responses to situations where smoking previously occurred.
            </p>
          </Card>

          <Card className="bg-emerald-50/50">
            <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
              Who this may be suitable for
            </h2>
            <p className="text-stone-700 leading-relaxed">
              This approach is most suitable for people who feel ready to stop smoking and would like structured psychological support in changing the habit.
            </p>
          </Card>

          <Card className="bg-emerald-50/50">
            <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
              Training
            </h2>
            <p className="text-stone-700 leading-relaxed">
              I have completed additional professional training in smoking cessation through the UK College of Hypnosis and Hypnotherapy, which focuses on evidence-based cognitive-behavioural methods integrated with hypnosis.
            </p>
          </Card>

          <Card className="bg-emerald-50/50">
            <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
              Smoking Cessation Programme &amp; Fee
            </h2>

            <p className="text-stone-700 leading-relaxed">
              This is offered as a structured two-session programme:
            </p>

            <ul className="mt-6 space-y-4 text-stone-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0" />
                <span><strong>Main session:</strong> 2 hours</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-500 shrink-0" />
                <span><strong>Follow-up session:</strong> 1 hour (one week later)</span>
              </li>
            </ul>

            <p className="mt-6 text-stone-700 leading-relaxed">
              <strong>Total programme fee: £230</strong>
            </p>

            <p className="mt-4 text-stone-700 leading-relaxed">
              This structure allows for focused initial work and a planned follow-up to reinforce progress and address any remaining difficulties.
            </p>
          </Card>

          <Card className="bg-emerald-50/50">
            <h2 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
              Getting started
            </h2>
            <p className="text-stone-700 leading-relaxed italic">
              If you are considering stopping smoking and would like to explore whether this approach may be helpful, you are welcome to get in touch for a <Link href="/contact" className="font-bold">free 20-minute chat</Link>.
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
