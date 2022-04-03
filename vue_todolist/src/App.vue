<template>
    <div class="contain">
        <Add :toAdd="receive"/>
        <Todos 
        :toTodos="TodoHub" 
        :checkTodo="checkTodo" 
        :deleteTodoId="deleteTodoId"
        />
        <Sum 
        :toTodos="TodoHub"
        :removeAll="removeAll"
        :selectAll="selectAll"
        />
    </div>
</template>

<script>
import Add from './components/Add.vue'
import Todos from './components/Todos.vue'
import Sum from './components/Sum.vue'

export default {
    components:{
        Add,Todos,Sum
    },data() {
        return {
            TodoHub:[
                {id: '001',text: '吃饭',status: true},
                {id: '002',text: '喝酒',status: false},
                {id: '003',text: '开车',status: true}
            ]
        }
    },
    methods: {
        // 获取添加项目
        receive(x){
            console.log("收到数据",x)
            this.TodoHub.unshift(x)
        },
        //获取勾选的id
        checkTodo(id){
            console.log('收到改变状态id',id)
            this.TodoHub.forEach((todo)=>{
                if(todo.id === id) todo.status = !todo.status
            console.log(JSON.stringify(todo))
            })
        },
        //获取删除的id
        deleteTodoId(id){
            console.log('收到删除id',id)
            this.TodoHub = this.TodoHub.filter((todo)=>{
                return todo.id !== id
            })
        },
        //获取清空指令
        removeAll(x){
            if(x) this.TodoHub.splice(0,this.TodoHub.length)
        },
        //获取全选指令
        selectAll(x){
            this.TodoHub.forEach((todo)=>{
                todo.status = x
            })
        }
    }
}
</script>

<style>
/* body */
.contain{
    width: 600px;
    margin: 0 auto;
    margin-top:50px;
    border: none;
    border:1px solid #eae8ea;
    border-radius: 5px;
    padding:15px;
}
/* body */
</style>