import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const NO_WINNER = "NO_WINNER";
//이게 실행되기 전에 Vuex 를 연결해줘야 하므로 vuex 미들웨어 사용 코드는 store.js 에 작성해줌.
export default new Vuex.Store({
  state: {
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    turn: "O",
    winner: "",
  }, //vue의 데이터와 비슷
  mutations: {
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },
    [CLICK_CELL](state, { row, cell }) {
      Vue.set(state.tableData[row], cell, state.turn);
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === "O" ? "X" : "O";
    },
    [RESET_GAME](state) {
      state.turn = "O";
      state.tableData = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
    },
    [NO_WINNER](state) {
      state.winner = "";
    },
  }, //vue의 computed 와 비슷
  getters: {
    //추가적인 작업을 할 때 getters 사용함. cache를 사용함. state 사용시마다 turnMessage 가 변경됨.
    turnMessage(state) {
      return state.turn + "님이 승리!";
    },
  }, //state를 수정할 때 사용함. 동기적으로
  actions: {}, //비동기를 사용할 때 또는 여러 뮤테이션을 연달아 실행할 때
});
