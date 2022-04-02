<template>
    <li class="todo_item" ref="item" @click="focusItem()">
        <input type="checkbox" name="" id="" >
        <label for="">打代码</label>
        <button>删除</button>
    </li>
</template>

<script>
export default {
    name:"todo-Item",
    methods: {
        focusItem(){
            let isTrue = this.$refs.item.childNodes[0].checked
            if(isTrue){
                this.$refs.item.childNodes[0].checked = false
            }else{
                this.$refs.item.childNodes[0].checked = true
            }
        }
    },
}
</script>

<style>
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
    }
</style>