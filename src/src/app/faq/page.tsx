import type { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
    title: 'FAQs',
    description:
        'Frequently asked questions about cognitive behavioural hypnotherapy, online sessions, safety, suitability and what to expect.',
    alternates: { canonical: '/faq' },
};

export default function FaqPage() {
    return <FaqClient />;
}
