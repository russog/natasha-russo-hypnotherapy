import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
    title: "Hypnotherapy in Putney, South West London | Natasha Russo",
    description:
        "Calm, evidence-based cognitive behavioural hypnotherapy for anxiety, overthinking, confidence and emotional wellbeing.",
    alternates: { canonical: "/" },
};

export default function Home() {
    return <HomeClient />;
}
