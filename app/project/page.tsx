import Image from "next/image";
import projectImg from "@/public/jogeumarket.png";
import { projectList } from "./item";
import RecentProjects from "@/components/RecentProjects";

export default function Project() {
  return (
    <div>
      <div>
        <RecentProjects />
      </div>
    </div>

  )
}
