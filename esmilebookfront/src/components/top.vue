<template>
  <div class="head">
    <!--グローバルメニュー-->
    <div class="smilebook-header">
      <nav class="gnav">

        <ul class="gnav-menu">
            <li class="gnav-menu-item"><a href="">タイムライン</a></li>
            <li class="gnav-menu-item"><a href="">チャット</a></li>
            <li class="gnav-menu-item"><a href="">友達一覧</a></li>
            <li class="gnav-menu-item"><a href="">通知</a></li>
            <li class="gnav-menu-item"><a href="">設定</a></li>
            <li class="gnav-menu-item"><a href="">アイコン</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
</script>

<style>
.head{/*初期化*/
  margin: 0;
  padding: 0;
}

.smilebook-header{
  background-color: #FF8C00;
}

a{/*下線を消す*/
  text-decoration: none;
}

ul{/*箇条書きの点を消す*/
  list-style-type: none;
  overflow: hidden;
}

.gnav-menu-item{/*幅*/
  float: left;
  margin: 0.5em;
}

</style>