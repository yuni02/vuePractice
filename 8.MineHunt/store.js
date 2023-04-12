import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL"; //클릭한거 해제하는 동작
export const INCREMENT_TIMER = "INCREMENT_TIMER";
//이게 실행되기 전에 Vuex 를 연결해줘야 하므로 vuex 미들웨어 사용 코드는 store.js 에 작성해줌.
export default new Vuex.Store({
  state: {
    tableData: [],
    data: {
      row: 0,
      cell: 0,
      mine: 0,
    },
    timer: 0,
    result: "",
  }, //vue의 데이터와 비슷
  mutations: {
    [START_GAME](state) {},
    [OPEN_CELL](state) {},
    [CLICK_MINE](state) {},
    [FLAG_CELL](state) {},
    [QUESTION_CELL](state) {},
    [NORMALIZE_CELL](state) {},
  }, //vue의 computed 와 비슷
  getters: {
    //추가적인 작업을 할 때 getters 사용함. cache를 사용함. state 사용시마다 turnMessage 가 변경됨.
  }, //state를 수정할 때 사용함. 동기적으로
  actions: {}, //비동기를 사용할 때 또는 여러 뮤테이션을 연달아 실행할 때
});
