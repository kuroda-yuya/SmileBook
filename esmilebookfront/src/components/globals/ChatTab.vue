<template>
  <div id="chat_tab">
    <div id="chat_ber">
      <div id="chat_ber_button" v-on:click="greet">
        チャット
      </div>
      <div id="chat_ber_content">
        <input type="button" v-on:click="test" value="熊崎">
        <input type="button" v-on:click="test" value="井手">
        <input type="button" v-on:click="test" value="黒田">
        <input type="button" v-on:click="test" value="赤尾">
      </div>
    </div>
    <!-- <div v-for="(value,index) in testdata" :key=index> -->
        <!-- <chat-box :message="msg"/> -->
        <chat-box ref="ber" :message="testdata"/>
    <!-- </div> -->
  </div>
</template>

<script>
let showChat = true
let showChatBox = true

export default {
  data () {
    return {
      testdata:[
        // { id: '', name: ''},
      ]
    }
  },
  methods: {
    greet: function (event) {
      if (event) {
        let parent = event.target.parentNode

        if (showChat) {
          showChat = false
          parent.style.height = '200px'
          parent.children[1].style.display = 'block'
        } else {
          showChat = true
          parent.style.height = '40px'
          parent.children[1].style.display = 'none'
        }
      }
    },
    test: function (event) {
      if (event) {
        let tes = document.getElementById("chat_box")
        let test_a = event.target.value
        let flag = false

        if(this.testdata.length == 0)
        {
           this.testdata.push({id:'0', name: ''})
        }

        for (let i of this.testdata) {
          if (i.name == test_a) {
            flag = false
            break
          } else {
            flag = true
          }
        }

        if (flag) {
          this.testdata.push({id:'', name: test_a})
        }

        if (this.testdata[0].name == '') {	
          this.testdata.splice(0, 1)
        }

        this.$refs.ber.up()

        // this.$set(this.testdata, [{id:'', name: test_a}])
        //this.testdata.push({id:'', name: test_a})

        // this.testdata = Object.assign({}, this.testdata, [{id: '', name: test_a}])

        // if (showChatBox) {
        //   showChatBox = false
        //   tes.style.display = 'block'
        // } else {
        //   showChatBox = true
        //   tes.style.display = 'none'
        // }

        // this.$axios.get('https://httpbin.org/get')
        //   .then((response) => {
        //     console.log(response.data.origin)
        //   })
        //   .catch((reason) => {
        //     console.log('IPの取得に失敗しました')
        //   });
      }
    }
  }
}
</script>

<style scoped>

#chat_ber {
  position: fixed;
  right: 20px;
  bottom: 0;
  width: 200px;
  height: 40px;
  background: rgb(245, 231, 201);
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
}

#chat_ber_button {
  background: rgb(255, 175, 2);
  width: 100%;
  height: 40px;
  top : 0;
  color: white;
  border-radius: 5px 5px 0 0;
  line-height: 40px;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
}

#chat_ber_button:hover {
  background: rgb(219, 154, 12);
  cursor: pointer;
}

#chat_ber_content{
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
