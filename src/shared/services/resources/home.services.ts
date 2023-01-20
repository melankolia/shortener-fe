import MainInstance from "../main.instance";
import type { AxiosResponse } from "axios";
import { CREATE_SHORTENER } from "@/shared/constants/api";
interface MainServiceType {
  postData(params: string): Promise<AxiosResponse>;
}

const MainService: MainServiceType = {
  postData(real_link): Promise<AxiosResponse> {
    return MainInstance.post(CREATE_SHORTENER, { real_link }, undefined);
  },
};

export default MainService;
