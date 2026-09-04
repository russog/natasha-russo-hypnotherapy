import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fees & Cancellation Policy",
    description:
        "Session fees and cancellation policy for Natasha Russo Hypnotherapy.",
    alternates: { canonical: "/fees-cancellation" },
};

export default function FeesCancellation() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                    Fees & Cancellation Policy
                </h1>

            </div>
        </section>
        <section className="relative pb-12 overflow-hidden isolate">
            <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10">
                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Session fees</strong>
                    </h2>
                    <p>
                        Standard Cognitive Behavioural Hypnotherapy sessions usually last
                        approximately <strong>60</strong> minutes and are charged at{" "}
                        <strong>£60</strong> per session.
                    </p>
                    <p>
                        The first session usually lasts approximately <strong>90</strong> minutes
                        and is charged at <strong>£90</strong>,
                        allowing additional time for assessment and conceptualisation.
                    </p>
                    <p>A block of four standard 60-minute sessions is available for <strong>£220</strong>.</p>
                    <p>
                        Fees may be reviewed periodically. Any changes to fees will apply to new
                        clients and will not affect the fee already agreed with you for your
                        current course of therapy.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Payment</strong>
                    </h2>
                    <p>
                        Session fees must be paid in advance and received at least 48 hours before
                        the scheduled appointment, unless otherwise agreed.
                    </p>
                    <p>
                        Payment can be made by bank transfer. Payment details will be provided
                        when the appointment is arranged.
                    </p>
                    <p>
                        If payment has not been received by the 48-hour deadline, the appointment
                        may be released and will not be considered confirmed unless otherwise
                        agreed.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Cancellations and rescheduling</strong>
                    </h2>
                    <p>
                        If you need to cancel or reschedule a session, please provide at least
                        48 hours’ notice.
                    </p>
                    <p>
                        Cancellations or requests to reschedule made with less than 48 hours’
                        notice, and missed appointments, will normally be charged at the full
                        session fee, as the appointment time has been reserved for you and may not
                        be possible to offer to another client at short notice.
                    </p>
                    <p>
                        I understand that unexpected circumstances can arise, and these will be
                        considered on an individual basis.
                    </p>
                    <p>
                        If I need to cancel or reschedule a session, I will give you as much
                        notice as reasonably possible. Any payment already made for that session
                        will either be transferred to the rearranged appointment or refunded in
                        full if the session cannot be rearranged.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Ending therapy</strong>
                    </h2>
                    <p>You are free to end therapy at any time.</p>
                    <p>
                        Where possible, it can be helpful to discuss ending therapy so that we can
                        review the work completed and consider any next steps, but a final session
                        is not required.
                    </p>
                    <p>
                        I may also recommend ending or pausing therapy if I believe that another
                        form of support would be more appropriate, or if continuing would fall
                        outside my professional scope of practice. Where appropriate, I will
                        discuss this with you and may suggest that you seek support from another
                        suitably qualified professional.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Questions</strong>
                    </h2>
                    <p>
                        If you have any questions about fees, payments, cancellations or any other
                        practical arrangements, please contact me at:
                    </p>

                    <p className="mt-2 font-medium">
                        <Link
                            className="font-bold underline underline-offset-2 hover:no-underline"
                            href="mailto:contact@natasharussohypnotherapy.co.uk"
                        >
                            contact@natasharussohypnotherapy.co.uk
                        </Link>
                    </p>
                    <p>
                        Transparency is important, and I’m happy to clarify anything before we
                        begin.
                    </p>
                    <p className="mt-2 text-sm text-neutral-600">Last updated: 02.09.2026</p>
                </section>
            </div>
        </section>
    </>);
}
