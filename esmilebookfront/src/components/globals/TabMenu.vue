<template>
  <div id="header">
    <p><a>ロゴ</a></p>
    <input placeholder="検索">
    <p v-for="(item, index) in items" :key=index>
        <router-link v-bind:to=item.path>
        {{ item.title }}
        </router-link>
    </p>
    <p><a>垢</a></p>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: '友達一覧', path: '/page1' },
        { title: 'チャット', path: '/page2' },
        { title: 'タイムライン', path: '/page3' },
        { title: '通知', path: '' },
        { title: '設定', path: '' },
      ]
    }
  }
}
</script>

<style scoped>

#header {
  height: 40px;
  background: rgb(255, 175, 2);
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

ol {
  margin: auto;
  width: 450px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
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