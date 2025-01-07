import { SvgIcon } from "@mui/material";
import AdminIconProps from "./type";

export default function AdminIcon({ className, children }: AdminIconProps) {
  return <SvgIcon className={className}>{children}</SvgIcon>;
}
