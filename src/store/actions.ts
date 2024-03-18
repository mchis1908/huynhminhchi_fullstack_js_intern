import axios from "axios";
import { MutationTypes } from "./mutation-types";
import {
  sendPostOnce,
  sendGetOnce,
  sendPutOnce,
  sendDeleteOnce,
} from "@/services/api";

const actions = {

  [MutationTypes.GET_ALL_PRODUCT]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendGetOnce("/api/auth/signin", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
};

export default actions;
