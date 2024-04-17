import { fetchList } from "../fetchData";
import { FilterBy } from "./FilterBy";

const List = async ({  }) => {
  const data = await fetchList('/2023H1');
  return (
    <div className="container mx-auto -mt-20">
      <FilterBy data={data} edition={'/2023H1'} />
    </div>
  );
};

export default List;
export const dynamic = "force-static";