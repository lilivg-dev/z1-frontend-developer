import { Status } from "../../App";

export type Props = {
  changeStatus: (status:Status) => void;
  status: Status;
  image: string;
}