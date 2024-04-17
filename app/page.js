import { redirect } from "next/navigation";
import Edition from "./[edition]/page";
import { cookies } from "next/headers";
import { Header } from "./[edition]/Header/Header";
import { SectionNavigator } from "./[edition]/SectionNavigator";

const Main = () => {
  //redirect("/2023H1");
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <>
      <Header defaultTheme={theme?.value} />
      <div className="overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow mt-6">
        <SectionNavigator edition="/2023H1" />
        <div className="px-4 py-5 sm:p-6">
          <Edition />
        </div>
      </div>
    </>
  );
};

export default Main;
export const dynamic = "force-static";
