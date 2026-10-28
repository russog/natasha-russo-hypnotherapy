import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
    title: "Hypnotherapy in Putney, South West London | Natasha Russo",
    description:
        "Cognitive Behavioural Hypnotherapy for anxiety, overthinking and self-doubt. Sessions in person in Putney, South West London, and online in the UK and internationally.",
    alternates: { canonical: "/" },
};

export default function Home() {
    return <HomeClient />;
}
