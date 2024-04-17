import { TechRadarChart } from "./Radar/Radar";
import { fetchGraph } from "./fetchData";

const Edition = async ({  }) => {
  const data = await fetchGraph("/2023H1");
  return <TechRadarChart data={data} edition={"/2023H1"} />;
};

export default Edition;
export const dynamic = "force-static";