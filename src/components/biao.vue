<template>
    <div>
        <div >
            <h1> 最新主题 </h1>
            <div  v-for="it in topics" :key="it.id">
                <a href="/t/705542#reply22">{{it.title}}</a>
                <a href="/go/programmer">{{it.node.title}}</a>
                <a href="/member/clevercsc"></a>
                <a href="/member/manami">{{it.last_reply_by}}</a>
                &nbsp;•&nbsp;}&nbsp;•&nbsp; 最后回复来自 
                <a href="/t/705542#reply22">{{it.replies}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

export default {
    name: 'biao',
    data(){
        return{
            topics:[]
        }
    },
    mounted(){
        axios  
            .get('http://81.68.180.93:8080/v2ex/api/topics/hot.json')
            .then(res => {
                console.log(res);
                this.topics = res.data
            })
    },
}
 
</script>

<style scoped>
</style>