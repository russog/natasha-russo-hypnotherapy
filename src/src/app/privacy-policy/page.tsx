import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy policy for Natasha Russo Hypnotherapy, including how personal data is collected, used and protected.",
    alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
    return (<>
        <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
                <h1 className="mb-6 text-2xl font-medium leading-snug text-neutral-800 sm:text-3xl">
                    Privacy Policy
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
                    This privacy notice explains how I collect, use, and protect your personal information when you
                    contact me or work with me.
                </p>
            </div>
        </section>
        <section className="relative pb-12 overflow-hidden isolate">
            <div className="relative z-10 mx-auto max-w-5xl px-6 space-y-10">
                <section>
                    <h2 className="font-medium"><strong>Who am I</strong></h2>
                    <p>
                        I am Natasha Russo, a Cognitive Behavioural Hypnotherapist, trading as
                        Natasha Russo Hypnotherapy. I work with adult clients (18+) and offer
                        online hypnotherapy sessions.
                    </p>
                    <p>
                        I am registered with the Information Commissioner’s Office (ICO) as a
                        data controller.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>The information I collect</strong></h2>
                    <p>
                        The information I collect depends on whether you are making an initial
                        enquiry or working with me as a therapy client.
                    </p>

                    <div className="mt-2 space-y-2">
                        <p>
                            If you make an initial enquiry, I may collect your name, email
                            address, optional telephone number, and the information you choose
                            to include in your message. Please keep website contact-form
                            messages brief and avoid including detailed medical, psychological
                            or other sensitive personal information at this stage.
                        </p>

                        <p>
                            If you become a therapy client, I may collect further information
                            that is relevant to working with you safely and professionally. This
                            may include contact details, intake and consent information,
                            therapy-related information you choose to share, notes relating to
                            sessions, and information about appointments, payments or practical
                            arrangements.
                        </p>
                    </div>

                    <p className="mt-2">
                        I only collect information that is relevant to the purpose for which it
                        is provided and necessary for providing a professional service.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>How I collect your information</strong></h2>
                    <p>
                        I may collect information when:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>You contact me by email or through the website contact form</li>
                        <li>You arrange or attend an initial consultation</li>
                        <li>You complete intake, consent, assessment or feedback forms</li>
                        <li>We work together during sessions</li>
                        <li>
                            You correspond with me about appointments, payments or
                            therapy-related matters
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Website contact form</strong></h2>
                    <p>
                        When you submit the website contact form, the information you provide is sent to me by email through Resend, an email-delivery service. The website itself does not save contact-form submissions in a database, file, spreadsheet or content-management system.
                    </p>
                    <p>
                        Resend processes the information required to deliver the email, which may include your name, email address, optional telephone number, message content and relevant delivery information. Resend may retain email data for up to 30 days in accordance with its service arrangements and data-processing terms.
                    </p>
                    <p>
                        Enquiries sent through the contact form, and enquiries sent to me
                        directly by email, are retained in my business email account for as
                        long as reasonably needed to respond to and manage your enquiry, after
                        which they are securely deleted when no longer required.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>How I use your information</strong></h2>
                    <ul className="list-disc pl-5">
                        <li>Provide hypnotherapy sessions</li>
                        <li>
                            Communicate with you about appointments and practical arrangements
                        </li>
                        <li>Maintain appropriate professional records</li>
                        <li>
                            Support safe, ethical, and effective therapeutic work
                        </li>
                    </ul>
                    <p className="mt-2">
                        Your information is not used for marketing purposes without your
                        explicit consent.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Lawful basis for processing</strong></h2>
                    <p>
                        Under UK GDPR, your data is processed on the basis of:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Your consent</li>
                        <li>The provision of therapeutic services</li>
                        <li>Professional and legal obligations</li>
                    </ul>
                    <p className="mt-2">
                        You may withdraw your consent at any time, subject to relevant legal
                        and professional record-keeping requirements.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>How your data is stored and protected</strong></h2>
                    <p>
                        Your information is stored securely and accessed only by me.
                        Reasonable technical and organisational measures are in place to
                        protect your data from unauthorised access, loss, or misuse.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>How long your data is kept</strong></h2>
                    <p>
                        Client records are retained in line with professional and legal
                        guidance and are securely deleted when they are no longer required.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Sharing your information</strong></h2>
                    <p>
                        Your personal information is treated as confidential. It is not sold or used for unrelated purposes. It may be processed by trusted service providers acting on my behalf, such as providers used to deliver website contact-form emails and operate my business email. These providers may process information only for the relevant service and under their applicable data-protection terms.
                    </p>
                    <ul className="list-disc pl-5">
                        <li>You give explicit consent, or</li>
                        <li>
                            There is a legal or safeguarding obligation to do so (for example,
                            where there is a serious risk of harm)
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Your data protection rights</strong></h2>
                    <ul className="list-disc pl-5">
                        <li>Access the personal data I hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your data where appropriate</li>
                        <li>Raise concerns about how your data is handled</li>
                    </ul>
                    <p className="mt-2">
                        You also have the right to make a complaint to the Information
                        Commissioner’s Office (ICO).
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Links to other websites</strong></h2>
                    <p>
                        My website may contain links to external websites. I am not
                        responsible for the privacy practices or content of those sites.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Changes to this privacy notice</strong></h2>
                    <p>
                        This privacy notice may be updated from time to time to reflect
                        changes in practice or legal requirements.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Contact</strong></h2>
                    <p>
                        If you have any questions about this privacy notice or how your data
                        is handled, you are welcome to contact me at:
                    </p>
                    <p className="mt-1 font-medium">
                        <Link className="font-bold"
                            href="mailto:contact@natasharussohypnotherapy.co.uk">
                            contact@natasharussohypnotherapy.co.uk
                        </Link>
                    </p>
                </section>


            </div>
        </section>
    </>);
}
