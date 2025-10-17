import SideNav from "@/app/ui/dashboard/sidenav";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  _props: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;
  const defaultTitle = `Dashboard | ${parentMetadata?.title?.absolute}`;
  console.log("defaultTitle", defaultTitle);

  return {
    title: {
      template: `%s | ${defaultTitle}`,
      default: defaultTitle,
    },
    description: parentMetadata.description,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
