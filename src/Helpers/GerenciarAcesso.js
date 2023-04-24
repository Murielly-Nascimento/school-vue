import Vue from "vue";
import SessionHelper from "@/components/Helpers/SessionHelper";
import axios from "axios";
import store from "../../store";

const GerenciarAcesso = {
  token: null,
  cookie: null,
  userData: null,
  async check() {
    this.setToken(Vue.cookie.get("token", null));
    if (!(await this.validateToken())) {
      this.accessOrDie();
    }

    this.saveToken(this.token);
    SessionHelper.setItem("user-data", this.userData);
  },
  accessOrDie() {
    this.resetToken();
    location.href = "/login";
  },
  saveToken(token) {
    window.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  resetToken() {
    Vue.cookie.set("token", null, -1);
  },
  getToken() {
    return this.token;
  },
  setToken(token) {
    this.token = token;
  },
  hasToken() {
    return this.token != null && this.token != undefined;
  },
  async validateToken() {
    return this.hasToken() && (await this.isValid());
  },
  async isValid() {
    try {
      var url = "https://api-test.i-sociall.com/api/agency-user/me";
      this.userData = (
        await axios.get(url, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
      ).data;
      store.commit("SET_USER", this.userData);
      return this.userData;
    } catch (e) {
      return false;
    }
  },
};

export default GerenciarAcesso;
