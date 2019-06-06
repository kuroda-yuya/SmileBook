<template>
  <div id="header">
    <p><router-link v-bind:to="'/timeline'">
      {{ "ロゴ" }}
      </router-link>
    </p>
    <input placeholder="検索">
    <p v-for="(item, index) in items" :key=index>
      <router-link v-bind:to=item.path>
      {{ item.title }}
      </router-link>
    </p>
    <p><router-link v-bind:to="'/mypage'">
      {{ "垢" }}
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'タイムライン', path: '/timeline' },
        { title: 'チャット', path: '/chat' },
        { title: '友達一覧', path: '/friend' },
        { title: '通知', path: '/top' },
        { title: '設定', path: '/config' },
      ]
    }
  }
}
</script>

<style scoped>

#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: rgb(255, 175, 2);
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  width: 100px;
  height: 30px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: rgb(241, 165, 78);
  border-radius: 8px;
  /* position: relative; */
}

a:hover {
  opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  color: white;
  text-decoration: none;
  line-height: 30px;
}

</style>
