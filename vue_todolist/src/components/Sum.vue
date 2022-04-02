<template>
    <div class="todo_sum">
        <input type="checkbox" name="" id="">

        <span>已完成{{ufsum}}/全部{{sum}}</span>


        <button>清除所有项目</button>
    </div>
</template>

<script>
export default {
    name:"todo-Sum",
    data(){
        return{
            sum: 3,
            ufsum: 0
        }
    }
}
</script>

<style>
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
</style>