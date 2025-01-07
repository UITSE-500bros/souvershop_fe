import { SvgIcon } from "@mui/material";
import AdminIconProps from "./type";
import { Icons } from "./Icon";

type IconsType = {
  [key: string]: JSX.Element;
};

const icons: IconsType = Icons;

export default function AdminIcon({ className, icon }: AdminIconProps) {
  return <SvgIcon className={className}>{icons[icon]}</SvgIcon>;
}
