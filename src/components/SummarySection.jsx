import { summary } from "@/constant";
import Title from "./Title";

export default function SummarySection() {
  return (
    <section className="space-y-1">
      <Title>
        Summary
      </Title>
      <p className="text-gray-700 leading-relaxed text-xs font-bold">
        {summary.summaryEN}
      </p>
    </section>
  );
}

