<template>
    <div class="contain">
        <Add/>
        <Todos/>
        <Sum/>
    </div>
</template>

<script>
import Add from './components/Add.vue'
import Todos from './components/Todos.vue'
import Sum from './components/Sum.vue'

export default {
    components:{
        Add,Todos,Sum
    }
}
</script>

<style>
.contain{
    width: 600px;
    height: 300px;
    margin: 0 auto;
    margin-top:50px;
    border: none;
    border:1px solid #eae8ea;
    border-radius: 5px;
    padding:15px;
}
</style>