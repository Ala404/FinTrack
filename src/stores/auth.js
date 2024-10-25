import { apiUrl } from "../main";
import { defineStore } from "pinia";
import { useSellerApi } from "../api/seller";
const { sellerApi : sapi } = useSellerApi();

import router from "../router/index.js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    
  }),
  getters: {
    accessToken: (state) => state.token,
  },

  actions: {
    async login(data) {
      try {
        const axiosInstance = await sapi.raw();
        const response = await axiosInstance.post(
          `${apiUrl}/seller/login`,
          data
        );
        if (response.status == 200) {
          this.token = response.data.seller.token;

          router.push("/orders");
        }
      } catch (e) {
        if (e.response.status == 404) {
          this.ErrorMsg = e.response.data.message[0];
        }
        console.log(e);
      }
    },
    async register(data) {
      try {
        const axiosInstance = await sapi.raw();
        const response = await axiosInstance.post(
          `${apiUrl}/seller/register`,
          data
        );
        if (response.status == 200) {
          this.token = response.data.seller.token;

          router.push("/orders");
        }
      } catch (e) {
        console.log(e);
      }
    },

    async logout() {
      try {
        const axiosInstance = await sapi.raw();
        const response = await axiosInstance.post(`${apiUrl}/seller/logout`);

        if (response.status == 200) {
          this.token = null;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  persist: true,
});
