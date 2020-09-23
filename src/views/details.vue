<template>
  <div>
    <div>
      <div>
        <h2>{{topic.title}}</h2>
      </div>
      <div>
        <small>
          <a  v-if= "topic.node">{{topic.node.name}}</a>
          {{topic.replies}} 次点击
        </small>
      </div>
      <div>
        <h4 v-html="topic.content_rendered"></h4>
      </div>
    </div>
    <div class="cell item" style="margin-bottom: 15px;"></div>
    <div>
      <span class="gray">{{topic.replies}} 条回复 &nbsp;• &nbsp;</span>
      <div class="cell item" style="margin-bottom: 15px;"></div>
    </div>
    <button @click="showReplies = true" v-if="!showReplies">显示回复</button>
    <button @click="showReplies = false" v-if="showReplies">隐藏回复</button>
    <div class="replies"  v-if="showReplies">
        <div class="row" v-for="it in replies" :key="it.id">
        <div class="img">
            <img :src="it.member.avatar_normal" class="avatar" />
        </div>
        <strong class="username">
            <a :href="'#/yong?id=' + it.id" class="dark">{{it.member.username}}</a>
        </strong>&nbsp; &nbsp;
        <div class="reply_content">{{it.content}}</div>
        <hr />
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dateils",
  data() {
    return {
      topic: {},
      replies: [],
      showReplies: false
    };
  },
  mounted() {
    const id = this.$route.query.id;

    this.gettopic(id);
    this.getReplies(id);
  },
  methods: {
    gettopic(tid) {
      axios
        .get("http://81.68.180.93:8080/v2ex/api/topics/show.json?id=" + tid)
        .then((res) => {
          console.log(res);
          this.topic = res.data[0];
        });
    },
    getReplies(tid) {
      axios
        .get(
          "http://81.68.180.93:8080/v2ex/api/replies/show.json?topic_id=" + tid
        )
        .then((res) => {
          console.log(res);
          this.replies = res.data;
        });
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  margin: 20px 0;
}

.img {
  margin-left: 10px;
}

.username {
  margin-left: 10px;
}

.reply_content {
  padding-left: 10px;
}
</style>