import DepartmentCard from "./DepartmentCard";
import { departments } from "@/data/departments";

const DepartmentList = () => {
  return (
    <div className="flex flex-col w-full">
      {departments.map((dept) => (
        <DepartmentCard key={dept.id} name={dept.name} description={dept.desc} />
      ))}
    </div>
  );
};

export default DepartmentList;
