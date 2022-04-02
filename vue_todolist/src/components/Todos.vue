<template>
  <ul class="todo_list">
      <Item class=""/>
      <Item class=""/>
      <Item class="no_border"/>
  </ul>
</template>

<script>
import Item from './Item.vue'

export default {
    name:"todo-Todos",
    components:{
        Item
    }
}
</script>

<style>
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
</style>