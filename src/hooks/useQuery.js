import { useNavigate } from "react-router-dom";

export const useQuery = () => {
  return new URLSearchParams(useNavigate().search);
};
