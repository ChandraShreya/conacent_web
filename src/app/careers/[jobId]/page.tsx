

import JobDetails from "@/src/features/careers/components/JobDetails";
import { jobs } from "@/src/features/careers/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return jobs.map((job) => ({
    jobId: String(job.id),
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  const job = jobs.find(
    (item) => item.id === Number(jobId)
  );

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
}