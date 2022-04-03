<template>
    <li class="todo_item">
        <input type="checkbox" :checked="toItem.status" @click="ChangeStatus">
        <label for="">{{toItem.text}}</label>
        <button @click="DeleteTodo">删除</button>
    </li>
</template>

<script>
export default {
    name:"todo-Item",
    props:[
        "toItem",
        //声明接收父组件传过来的对象
        "checkTodo",
        "deleteTodoId"
    ],
    methods: {
        // focusItem(e){
        //     let isTrue = e.target.childNodes[0].checked
        //     // let isTrue = this.$refs.xxx.childNodes[0].checked
        //     if(isTrue){
        //         e.target.childNodes[0].checked = false
        //         this.todoChangeStatus(this.toItem.id,this.toItem.status)
        //     }else{
        //         e.target.childNodes[0].checked = true
        //         this.todoChangeStatus(this.toItem.id,this.toItem.status)
        //     }
        // },
        ChangeStatus(){
            this.checkTodo(this.toItem.id)
        },
        DeleteTodo(){
            if(confirm('确认删除吗？')){
                this.deleteTodoId(this.toItem.id)
            }else{
                console.log('取消删除')
            }
        }
    }
}
</script>

<style scoped>
/* Item */
    .todo_item{
        width: 98%;
        height: 45px;
        line-height: 45px;
        padding-left: 2%;
        border-bottom: 1px solid #deddde;
    }
    .todo_item:hover{
        background: #deddde;
        cursor: pointer;
    }
    .todo_item input{
        margin-right: 20px;
    }
    .todo_item button{
        width: 100px;
        height: 36px;
        float: right;
        margin: 4px 4px 0 0;
        background: #e45a46;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: none;
    }

    .todo_item:hover button{
        display: block;
    }
/* Item */    
</style>