import DepartmentCard from "./DepartmentCard";
import { departments } from "@/components/data/departments";

const DepartmentList = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center ">
      {departments.map((dept) => (
        <DepartmentCard key={dept.id} id={dept.id} name={dept.name} description={dept.desc} />
      ))}
    </div>
  );  
};

export default DepartmentList;
