<template>
  <div>
      <input type="text" class="todo_enter">
  </div>
</template>

<script>
export default {
    name:"todo-Add",

}
</script>

<style>
    .todo_enter{
        width: 98%;
        height: 40px;
        line-height: 40px;
        padding-left: 2%;
        border: 1px solid #a5a5a5;
        border-radius: 5px;
        outline:none;
    }
    .todo_enter:focus{
    border-style:solid;
    border-color: #28bcff;
	box-shadow: 0 0 8px #8bdbff;
    }
</style>