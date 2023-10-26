import { toast } from "react-toastify";

export const errorNotify = (title) => {
  toast.error(title);
};
export const warnNotify = (title) => {
  toast.warn(title);
};
export const infoNotify = (title) => {
  toast.info(title);
};
export const successNotify = (title) => {
  toast.success(title);
};
