<template>
  <div>
      <h1>V2EX</h1>
    <div>
        <img :src= "member.avatar_normal" >
        <h3>{{member.username}}</h3>
    </div>
    <div>
        <img :src= "member.avatar_normal" alt="">
        <span>
            &nbsp;• &nbsp;{{member.username}}创建的所有主题
        </span>
    </div>
    <div  v-for="it in topics" :key="it.id" class="cell">
        <div>
            <span>{{it.title}}</span>
        </div>
        <div class="topic">
            <span>
                <a href="#">{{it.node.title}}</a>&nbsp;• &nbsp;
                <a href="#">{{member.username}}</a>&nbsp;• &nbsp;
            </span>
            <span> {{formatDate(it.created)}} &nbsp;• &nbsp;{{it.replies}} 条回复</span>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import moment from "moment";

export default {
  name: 'yong',
  data() {
    return {
      member: {},
      topics: []
    };
  },
  mounted() {
    const id = this.$route.query.id;

    this.getmember(id);
  },
  methods: {
    getmember(yid) {
      axios
        .get("http://81.68.180.93:8080/v2ex/api/members/show.json?id=" + yid)
        .then((res) => {
          console.log(res);
          this.member = res.data;
          this.gettopics(this.member.username)
        });
    },
    gettopics(username) {
      axios
        .get("http://81.68.180.93:8080/v2ex/api/topics/show.json?username=" + username)
        .then((res) => {
          console.log(res);
          this.topics = res.data;
        });
        console.log(username);
    },
    formatDate(time) {
        return moment(time * 1000).format('YYYY-MM-DD HH:mm')
    },
    getQueryId() {
        const url = window.location.href

        const [, query] = url.split('?')

        const [, id] = query.split('=')

        return id
    }
  },
};
</script>

<style scoped>
.cell{
    margin: 15px;
}
.topic{
    display: flex;
    margin: 5px 0;
}
</style>