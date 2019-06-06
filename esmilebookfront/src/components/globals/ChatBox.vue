<template>
  <div id="chat_box" >
    <div v-for="(value,index) in message" :key=index>
      <div id="chat_box_button" v-on:click="greet">
        {{ value.name }}
      </div>
      <div id="chat_box_content">
        content
      </div>
    </div>
  </div>
</template>

<script>
let showChat = true

export default {
  props: {
    message: String
  },
  methods: {
    greet: function (event) {
      if (event) {
        let parent = event.target.parentNode

        if (showChat) {
          showChat = false
          parent.style.height = '200px'
          parent.style.width = '250px'
          parent.children[1].style.display = 'block'
        } else {
          showChat = true
          parent.style.height = '40px'
          parent.style.width = '150px'
          parent.children[1].style.display = 'none'
        }
      }
    }
  }
}
</script>

<style scoped>

#chat_box {
  display: block;
  position: fixed;
  right: 230px;
  bottom: 0;
  width: 150px;
  height: 40px;
  background: rgb(245, 231, 201);
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
}

#chat_box_button {
  background: rgb(255, 175, 2);
  width: 100%;
  height: 40px;
  top : 0;
  color: white;
  border-radius: 5px 5px 0 0;
  line-height: 40px;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
}

#chat_box_button:hover {
  background: rgb(219, 154, 12);
  cursor: pointer;
}

#chat_box_content{
  display: none;
  height: 40px;
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
