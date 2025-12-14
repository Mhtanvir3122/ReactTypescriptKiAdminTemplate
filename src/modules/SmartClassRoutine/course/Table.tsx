import { FC, ReactNode } from "react";
import { Card } from "react-bootstrap";

import {
  ITableHeadColumn,
  Table,
} from "@/components/myComponant/TableFor/Table";
import { TableCell } from "@/components/myComponant/TableFor/TableCell";
import { TableRow } from "@/components/myComponant/TableFor/TableRow";

const columns: ITableHeadColumn[] = [
  { title: "Id", width: 20 },
  { title: "Name", width: 200 },
  { title: "Position", minWidth: 150 },
  { title: "Office", minWidth: 150 },
  { title: "Status", minWidth: 120 },
  { title: "Salary", minWidth: 120 },
];
interface CourseTableProps {
  children?: ReactNode;
  tableData?: any[];
  title?: string;
  handleUpdate: (data) => void;
}
const CourseTable: FC<CourseTableProps> = ({
  tableData,
  children,
  handleUpdate,
}) => {
  if (!tableData?.length) return null;

  return (
    <Card>
      <Card.Header>
        <h5>Course Table</h5>
      </Card.Header>
      <Card.Body className="p-0">
        <Table columns={columns}>
          {tableData?.map((item: any, i: number) => (
            <TableRow key={item?.id || i}>
              <TableCell text={item?.id} />

              <TableCell text={item?.name || "dfdf"} />
              <TableCell text={item?.department?.name || "dfdf"} />

              <TableCell text={item?.createdOn || "dfdf"} />

              <TableCell text={item?.department?.name || "dfdf"} />
            </TableRow>
          ))}
        </Table>
        {children}
      </Card.Body>
    </Card>
  );
};

export default CourseTable;
