<template>
 <div>
  <mine-form/>
  <div>{{timer}}</div>
  <table-component/>
  <!--승리했다는 메세지 보여주기-->
  <div>{{ result }}</div>
 </div>
</template>

<script>
  import {mapState} from 'vuex'
  import store from './store';
  export default {
    store,
    components:{
      TableComponent
    },
    data() {
  
      return {
      };
    },
    computed:{
      ...mapState(['time','result'])
    },
  methods: {
    
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
