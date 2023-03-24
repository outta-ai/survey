import { useRouter } from "next/router";

export default function SurveyPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Survey</h1>
      <p>{id}</p>
    </div>
  );
}
