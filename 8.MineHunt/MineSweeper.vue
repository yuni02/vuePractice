<template>
 <div>
  <mine-form/>
  <div>{{timer}}</div>
  <table-component></table-component>
  <div>{{ result }}</div>
 </div>
</template>

<script>
  import {mapState} from 'vuex'
  import store, { INCREMENT_TIMER } from './store';
  import TableComponent from './TableComponent';
  import MineForm from './MineForm';
  let interval;

  export default {
    store,
    components:{
      TableComponent,
      MineForm
    },
    computed:{
      ...mapState(['time','result', 'halted']),
    },
    methods: {
    
    },
    watch:{
      halted(value, oldValue){
        if(value){
          clearInterval(this.interval);
        }else{
          //게임이 시작되면 타이머를 시작한다.
          this.interval = setInterval(()=>{
            this.$store.commit(INCREMENT_TIMER);
          }, 1000);
          //1초마다 타이머 올려줌
        }
      }
    }
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>
