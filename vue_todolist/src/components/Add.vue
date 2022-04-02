<template>
  <div>
      <input type="text" class="todo_enter" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addItem">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
    name:"todo-Add",
    data() {
        return {
            title:''
        }
    },
    props:[
        "toAdd"
    ],
    methods: {
        //回车获取输入框输入内容 2种方法
        // 第一种方法
        // addItem(e){
        //     console.log(e.target.value)
        // }
        // 第二种方法 使用v-model:title在输入框上 之后data里面配一个title空值 下面一直获得this。title
        // addItem(){
        //     console.log(this.title)
        // }

        addItem(){
            // 将用户输入包装成一个TodoHub对象
            const todoObj = {
                id: nanoid(),
                text:this.title,
                status : false
            }
            if(this.title){
                this.toAdd(todoObj)
                this.title = ''
            }else{
                alert('空值')
            }
        }
    }
}
</script>

<style scoped>
/* Add */
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
/* Add */
</style>