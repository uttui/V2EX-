<template>
    <div>
        <div class="">
            <a href="">首页</a>
            <a href="">注册</a>
            <a href="">登录</a>
        </div>
        <div class="header">
            <div class="title">
                <h1> {{topic.title}} </h1>
            </div>
            <div class="votes">
                <small class="gray">
                    <a href="/member/Rxianbei"> {{topic.node.name}} </a>
                {{topic.replies}} 次点击
                </small>
            </div>
            <div class="markdown_body">
                <h4> {{topic.content_rendered}} </h4>
            </div>
        </div>
        <div class="cell item" style="margin-bottom: 15px;"></div>
        <div >
            <span class="gray">{{topic.replies}} 条回复 &nbsp;• &nbsp;</span>
            <div class="cell">
                <div class="fr" style="margin: -3px -5px 0px 0px;">
                    <a href="/tag/课程" class="tag"> 课程</a>
                    <a href="/tag/群员" class="tag"> 群员</a>
                    <a href="/tag/base64" class="tag"> base64</a>
                    <a href="/tag/PHP" class="tag"> PHP</a>
                </div>
            </div>
            <div class="cell item" style="margin-bottom: 15px;"></div>
        </div> 
        <div  class="cell" v-for="it in replies" :key="it.id">
            <td>
                <img :src="it.member.avatar_normal" class="avatar" >
            </td>
            <strong>
                <a href="/member/lengyihan" class="dark"> {{it.member.username}} </a>
            </strong>&nbsp; &nbsp;
            <div class="sep5"></div>
            <div class="reply_content"> {{it.content}} </div>
            <td width="70" align="right" valign="middle">
                <a href="/t/705542#reply22" class="count_livid">{{it.replies}}</a>
            </td>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios'
    

export default {
    name:'dateils',
    data (){
        return {
            topic: {},
            replies: []
        }
    },
    mounted(){
        this.gettopic();
    },
    methods:{
        gettopic(){
            axios
                .get("http://81.68.180.93:8080/v2ex/api/topics/show.json?id=709051")
                .then(res =>{
                    console.log(res);
                    this.topic=res.data[0];
                })
            axios
                .get("http://81.68.180.93:8080/v2ex/api/replies/show.json?topic_id=709051")
                .then(res => {
                    console.log(res);
                    this.replies=res.data;
                })    
        }    
    }
}
    

</script>

<style scoped>

</style>