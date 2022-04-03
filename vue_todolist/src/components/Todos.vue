<template>
  <ul class="todo_list">
      <Item v-for="a in toTodos" 
      :key="toTodos.id" 
      :toItem="a" 
      :checkTodo="checkTodo"
      :deleteTodoId="deleteTodoId"
      />
      <!-- 遍历数组数据              基于id排序         传数据给子组件props -->
  </ul>
</template>

<script>
import Item from './Item.vue'

export default {
    name:"todo-Todos",
    components:{
        Item
    },props:[
        "toTodos","checkTodo","deleteTodoId"
    ]
}
</script>

<style scoped>
/* Todos */
    .todo_list{
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
        list-style: none;
        padding: 0;
        border: 1px solid #dddcdd;
    }
    .bg_gray{
        background: #deddde;
    }
    .no_border{
        border: none;
    }
/* Todos */
</style>