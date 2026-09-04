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
                    This privacy policy explains how I collect, use, and protect your personal information when you
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
                        Natasha Russo Hypnotherapy. I work with adult clients aged 18 and over
                        and offer Cognitive Behavioural Hypnotherapy online and, where available,
                        in person.
                    </p>
                    <p>
                        I am registered with the Information Commissioner’s Office (ICO) as a
                        data controller.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>The information I collect</strong></h2>
                    <p>
                        In order to provide my service safely, appropriately and effectively, I may
                        collect and process the following types of personal information:
                    </p>
                    <p className="mt-2 font-medium">Personal and contact information</p>
                    <ul className="list-disc pl-5">
                        <li>Your name</li>
                        <li>Email address and telephone number</li>
                        <li>Age</li>
                        <li>Country in which you are currently based</li>
                        <li>Emergency contact details, where provided</li>
                    </ul>
                    <p className="mt-2 font-medium">Therapy and health-related information</p>
                    <ul className="list-disc pl-5">
                        <li>Information you choose to share about your experiences, difficulties and therapeutic goals</li>
                        <li>Relevant information about your physical or mental health, medication, and current or previous therapeutic or healthcare support</li>
                        <li>Information relevant to assessing whether my service is appropriate for you</li>
                        <li>Notes relating to sessions and therapeutic work</li>
                    </ul>
                    <p className="mt-2">
                        I only collect information that is relevant and reasonably necessary for
                        providing my service safely and professionally.
                    </p>
                    <p className="mt-2">
                        You are not required to provide information that is not relevant to the
                        service. However, if information necessary to assess suitability or provide
                        therapy safely and appropriately is not provided, I may be unable to begin
                        or continue working with you.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>How I collect your information</strong></h2>
                    <p>Your information may be collected when:</p>
                    <ul className="list-disc pl-5">
                        <li>You contact me via email, telephone, or my website contact form</li>
                        <li>You take part in an introductory consultation or other initial communication with me</li>
                        <li>You complete intake, consent, or feedback forms</li>
                        <li>We work together during therapy sessions, whether online or in person</li>
                        <li>You correspond with me about appointments or therapy-related matters</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-medium"><strong>How I use your information</strong></h2>
                    <ul className="list-disc pl-5">
                        <li>Assess whether my service is appropriate for you</li>
                        <li>Provide Cognitive Behavioural Hypnotherapy sessions</li>
                        <li>Communicate with you about appointments and practical arrangements</li>
                        <li>Maintain appropriate professional records</li>
                        <li>Support safe, ethical, and effective therapeutic work</li>
                    </ul>
                    <p className="mt-2">
                        Your information is not used for marketing purposes without your
                        explicit consent.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Lawful basis for processing</strong></h2>
                    <p>
                        Under UK GDPR, I need a lawful reason to collect and use your personal
                        information.
                    </p>
                    <p>
                        I process the personal information needed to assess whether my service is
                        appropriate for you and to provide the therapeutic service we agree under
                        the lawful basis of contract.
                    </p>
                    <p className="mt-2">
                        Some of the information you choose to share with me, such as information
                        about your physical or mental health, is classed as special category data
                        and receives additional protection under UK GDPR. I process this
                        information with your explicit consent where it is needed to assess
                        suitability and provide therapy safely and appropriately.
                    </p>
                    <p className="mt-2">
                        You can withdraw this consent at any time by contacting me. If I need this
                        information in order to assess suitability or work with you safely and
                        appropriately, withdrawing consent may mean that I am unable to begin or
                        continue therapy.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>How your data is stored and protected</strong></h2>
                    <p>
                        Your personal information is stored securely, and access is restricted to
                        me. I take appropriate measures to protect your information from
                        unauthorised access, accidental loss, disclosure or misuse.
                    </p>
                    <p>
                        I regularly review how personal information is stored and protected to
                        ensure that appropriate security measures remain in place.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>How long your data is kept</strong></h2>
                    <p>
                        I keep personal information only for as long as it is reasonably necessary
                        for the purposes for which it was collected, including any professional,
                        insurance or legal requirements that apply to my practice.
                    </p>
                    <p>
                        Records are reviewed periodically and securely deleted when they are no
                        longer required.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Sharing your information</strong></h2>
                    <p>
                        Your personal information is treated as confidential and is not shared
                        unnecessarily.
                    </p>
                    <p>
                        I may use trusted third-party services to support the secure operation of
                        my practice, such as email, data storage, online communication and payment
                        services. Where these services process personal information, I take
                        appropriate steps to ensure that your information is handled in accordance
                        with data protection requirements.
                    </p>
                    <p>
                        I may also disclose information where you have given your consent, where I
                        am required to do so by law, or where there is a serious safeguarding
                        concern or risk of harm.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Your data protection rights</strong></h2>
                    <p>Depending on the circumstances, you may have the right to:</p>
                    <ul className="list-disc pl-5">
                        <li>Access the personal information I hold about you</li>
                        <li>Ask me to correct information that is inaccurate or incomplete</li>
                        <li>Ask me to delete your personal information in certain circumstances</li>
                        <li>Ask me to restrict how your personal information is used in certain circumstances</li>
                        <li>Object to certain uses of your personal information</li>
                        <li>Ask for certain personal information to be transferred to you or another organisation, where the right to data portability applies</li>
                        <li>Withdraw your consent at any time where I rely on consent to process your information</li>
                    </ul>
                    <p className="mt-2">
                        These rights do not apply in every circumstance, and some may be subject
                        to legal or professional requirements.
                    </p>
                    <p className="mt-2">
                        If you have concerns about how your personal information is handled, you
                        can contact me directly. You also have the right to make a complaint to
                        the Information Commissioner’s Office (ICO).
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
                    <h2 className="font-medium"><strong>Changes to this privacy policy</strong></h2>
                    <p>
                        This privacy policy may be updated from time to time to reflect changes in
                        my practice, the services I use, or legal and regulatory requirements.
                    </p>
                </section>

                <section>
                    <h2 className="font-medium"><strong>Contact</strong></h2>
                    <p>
                        If you have any questions about this privacy policy, wish to exercise your
                        data protection rights, or have concerns about how your personal
                        information is handled, please contact me at:
                    </p>
                    <p className="mt-1 font-medium">
                        <Link className="font-bold"
                            href="mailto:contact@natasharussohypnotherapy.co.uk">
                            contact@natasharussohypnotherapy.co.uk
                        </Link>
                    </p>
                    <p className="mt-2 text-sm text-neutral-600">Last updated: 02.09.2026</p>
                </section>


            </div>
        </section>
    </>);
}
