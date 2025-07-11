export interface IDepartment {
  departmentName: string;
  shortDesc: string;
  slug: string;
  description: string;
  division: string[];
  work: any;
}

export type DepartmentList = Pick<IDepartment, 'departmentName' | 'shortDesc' | 'slug'>;
