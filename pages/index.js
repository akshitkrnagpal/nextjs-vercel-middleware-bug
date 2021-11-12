import { useRouter } from "next/router";

export default function Index() {
  const { locale } = useRouter();
  return <div className="">{locale}</div>;
}
