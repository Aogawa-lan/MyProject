<template>
    <div class="todo_sum" v-show="toTodos.length">
        <input type="checkbox" name="" id="" :checked="isAll" @click="selectStatus">

        <span>已完成{{Doing}}/全部{{toTodos.length}}</span>


        <button @click="deleteAll">清除所有项目</button>
    </div>
</template>

<script>
export default {
    name:"todo-Sum",
    props:[
        "toTodos","removeAll","selectAll"
    ],
    data(){
        return{
        }
    },
    computed:{
        Doing(){
            return this.toTodos.reduce((pre,todo)=>pre + (todo.status ? 1:0),0)
        },
        isAll(){
            return this.toTodos.length === this.Doing
        }
    },
    methods:{
        deleteAll(){
            if(confirm("确认删除所有项？")){
                this.removeAll(true)
            }else{
                console.log('点错了')
            }
        },
        selectStatus(e){
            this.selectAll(e.target.checked)
        }
    }
}
</script>

<style scoped>
/* Sum */
    .todo_sum{
        width: 100%;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
        margin-top: 20px;
    }
    .todo_sum input{
        margin-right: 20px;
    }
    .todo_sum button{
        width: 150px;
        height: 50px;
        float: right;
        background: #e45a46;
        color: #fff;
        border: none;
        border-radius: 5px;
        margin: 15px 4px 0 0;
        cursor: pointer;
    }
/* Sum */
</style>