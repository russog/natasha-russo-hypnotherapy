import React from "react";
import {Card} from "@/app/components/card";
import Link from "next/link";

export default function FeesCancellation() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="absolute inset-0  bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-bottom"
                 aria-hidden/>
            <div className="absolute inset-0 bg-white/35" aria-hidden/>
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                    Fees & Cancellation Policy
                </h1>

            </div>
        </section>
        <section className="relative pb-12 overflow-hidden isolate">
            <div
                aria-hidden
                className="absolute inset-0 -z-20 bg-[url('/bkg.png')] bg-cover bg-center bg-no-repeat fade-top"
            />
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-linear-to-b via-stone-50 to-emerald-50/40"
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10">
                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Session fees</strong>
                    </h2>
                    <p>Standard hypnotherapy sessions last <strong>60</strong> minutes and are charged at <strong>£60.</strong></p>
                    <p>
                        The first session lasts approximately <strong>90</strong> minutes and is charged at <strong>£90</strong>,
                        allowing additional time for assessment and conceptualisation.
                    </p>
                    <p><strong>A block of four</strong> sessions is available at <strong>£220.</strong></p>
                    <p>
                        Fees are reviewed periodically, and any changes will be discussed in
                        advance.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Payment</strong>
                    </h2>
                    <p>Fees are payable in advance of each session, unless otherwise agreed.</p>
                    <p>
                        Payment can be made via bank transfer or online payment. Full details
                        will be provided when sessions are booked.
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
                        Sessions cancelled with less than 48 hours’ notice, or missed sessions,
                        are charged in full. This is because the session time has been reserved
                        specifically for you and is unlikely to be filled at short notice.
                    </p>
                    <p>
                        If something unexpected happens, you’re welcome to get in touch and we
                        can discuss the situation.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Ending therapy</strong>
                    </h2>
                    <p>You are free to end therapy at any time.</p>
                    <p>
                        If you choose to do so, it’s often helpful (though not required) to use
                        a final session to review the work and discuss next steps.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="font-medium">
                        <strong>Questions</strong>
                    </h2>
                    <p>
                        If you have any questions about fees, payments, or cancellations, please
                        feel free to ask. Transparency is important, and I’m happy to clarify
                        anything before we begin.
                    </p>

                    <p className="mt-2 font-medium">
                        <Link
                            className="font-bold underline underline-offset-2 hover:no-underline"
                            href="mailto:contact@natasharussohypnotherapy.co.uk"
                        >
                            contact@natasharussohypnotherapy.co.uk
                        </Link>
                    </p>
                </section>
            </div>
        </section>
    </>);
}
