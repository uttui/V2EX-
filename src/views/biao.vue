<template>
    <div>
        <div >
            <h1> 最新主题 </h1>
            <div  v-for="it in topics" :key="it.id" style="margin-bottom: 10px">
                <span>
                    <a :href="'#/detail?id=' + it.id"> {{it.title}} </a>
                </span>
                <div>
                    <span style="color: gray; font-size: 14px;">{{it.node.title}}</span>
                    <strong>
                        <span>{{it.last_reply_by}}</span>
                    </strong>
                    &nbsp;•&nbsp; 最后回复来自 
                    <a href="#">{{it.replies}}</a>
                </div>
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