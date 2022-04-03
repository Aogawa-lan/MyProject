# vue_todolist

Vue学习 脚手架综合训练 Todo-list案例
## 运用技术
 @Vue-Cli

## 组件化编码流程

1.  实现静态组件：抽取组件，使用组件实现静态页面效果。
2.  展示动态数据：
    (1)数据的类型、名称
      ```javascript
        TodoHub=[
            {id: ,name: ,status:}
            {id: ,name: ,status:}
            {id: ,name: ,status:}
            ]
      ```
    (2)数据保存再哪个组件？
        谁用给谁，即Todos.vue

3. 交互——从绑定事件监听开始 


## 更新时间轴

    2022-04-01 完成实现静态组件编写 

    2022-04-02 （1）设计完成数据类型名称，完成Todos与Item数据传递（2）输入框写入todo功能 (3)更新list （4）


## 备注

【重点】数据在谁，就在谁操作。
【重点】千万不要直接操作真DOM
【重点】props只读属性，不要浅层修改，请直接修改底层获取到的数据再po过去或等动态更新

```javascript
        //回车获取输入框输入内容 2种方法
        // 第一种方法
        addItem(e){
            console.log(e.target.value)
        }
        // 第二种方法 使用v-model:title在输入框上 之后data里面配一个title空值 下面一直获得this。title
        addItem(){
            console.log(this.title)
        }
```

实现兄弟间数据传输 既Add的数据给Todos 此处使用父组件app保存数据 

将数据渲染传递给Todos
```javascript
        //App.vue
        // 
        <Todos :toTodos="TodoHub"/>
        // Todos.Vue
        props:[
        "toTodos"
        ]
```

将数据从Add传递给App
```javascript
        //App.vue
        // 
        <Add :toAdd="receive"/>

        methods: {
        receive(x){
            console.log("收到数据",x)
            this.TodoHub.unshift(x)//push()
        }

        
        // Add.Vue
        props:[
        "toAdd"
    ],
    methods: {
        addItem(e){
            // 将用户输入包装成一个TodoHub对象
            const todoObj = {
                id: nanoid(),
                text:e.target.value,
                status : false
            }
            this.toAdd(todoObj)
        }
```