import axios from "axios";
import { MutationTypes } from "./mutation-types";
import {
  sendPostOnce,
  sendGetOnce,
  sendPutOnce,
  sendDeleteOnce,
} from "@/services/api";

const actions = {
  
  [MutationTypes.GET_ALL_PRODUCTS]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendGetOnce("/products", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.CREATE_PRODUCT]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendPostOnce("/products", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.GET_PRODUCT_BY_ID]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendGetOnce(`/products/${payload?._id}`, payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.UPDATE_PRODUCT]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendPutOnce(`/products/${payload?._id}`, payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },

  [MutationTypes.DELETE_PRODUCT]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendDeleteOnce(`/products/${payload?._id}`, payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
};

export default actions;
