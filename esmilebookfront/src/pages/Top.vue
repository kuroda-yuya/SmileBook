<template>
   <div>
      <div id="top_head"><!--ヘッド-->
         <p id="rogo"><!--ロゴ-->
            <router-link v-bind:to="'/Top'">
            {{"ロゴ"}}
            </router-link>
         </p>
         
         <div id="login"><!--ログイン-->
            <div class="login-foam"><!--Mail・TEL-->
               <p>{{ loginaccountName }}</p>
               <input placeholder="address.TEL" id="login_name" v-model="loginaccountName">
            </div>

            <div class="login-foam"><!--pass-->
               <p>{{ loginaccountPass }}</p>
               <input placeholder="pass" id="login_pass" v-model="loginaccountPass">
            </div>

            <div id="login_button"><!--button-->
               <button v-on:click="checklogin">ログイン</button>
            </div>
         </div>

      </div>
      
      <div id="main">
         
         <main><!--左側-->
            <p>
               サイトについて…
               説明か何か
            </p>
         </main>

         <aside><!--右側-->
            <div id="registration">
               <h2>
                  アカウント新規作成
               </h2>

               <div class="account-foam registration_name"><!--pass-->
                  <div>
                     <p>{{ registrationLastname }}</p>
                     <input placeholder="性" id="registration_lastname" v-model="registrationLastname">
                  </div>
                     
                  <div>
                     <p>{{ registrationFirstname }}</p>
                     <input placeholder="名" id="registration_firstname" v-model="registrationFirstname">
                  </div>
               </div>

               <div class="account-foam"><!--pass-->
                  <p>{{ registrationTel }}</p>
                  <input placeholder="電話番号" id="registration_tel" v-model="registrationTel">
               </div>

               <div class="registrationMail"><!--pass-->
                  <p>{{ registrationMail }}</p>
                  <input placeholder="メールアドレス" id="registration_mail" v-model="registrationMail">
               </div>

               <div class="account-foam"><!--pass-->
                  <p class="mon">性別</p>
                  <select  v-model="selected" id="registration_sex">
                     <option disabled value="">Please select one</option>
                     <option>男性</option>
                     <option>女性</option>
                  </select>
                  <!--<input placeholder="性別" id="registration_sex" v-model="loginaccountpass">-->
               </div>

               <div class="account-foam"><!--pass-->
                  <p class="mon">所属会社</p>
                  <select  v-model="selected" id="registration_company">
                     <option disabled value="">Please select one</option>
                     <option>イースマイル株式会社</option>
                     <option>イースマイルシステムズ株式会社</option>
                     <option>ソーシャルシェアリング株式会社</option>
                     <option>ソルトライブ株式会社</option>
                  </select>
               </div>
               
               <div class="account-foam"><!--pass-->
                  <p>{{ registrationPass }}</p>
                  <input placeholder="パスワード" id="registration_pass" v-model="registrationPass">
               </div>

               <div id="registration_button"><!--button-->
                  <button v-on:click="registrationcheck">ログイン</button>
               </div>

            </div>
         </aside>

      </div>

      <div id="foot">
         <p><small>Facebook © 2019</small></p>
      </div>

   </div>
</template>

<script>
</script>

<style scoped>

#top_head{/*ヘッド*/
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 40px;
   background: rgb(255,175,2);
   box-shadow: 0 3px 3px rgba(0, 0, 0, 0);
   display: flex;
   justify-content: center;
   align-items: center;
}

#rogo{/*ロゴ/パスmargin*/
   margin-right: 25%;
}

#login{/*入力欄横並び*/
   display: flex;
}

.login-foam{/*入力欄*/
   height: 55px;/*縦位置*/
   margin: 0 20px;/*間隔*/
}

#login_button{/*ログインボタン*/
   padding-top: 13px;/*縦位置*/
   width: 100px;/*横幅*/
}


#main{/*2カラム*/
   display: flex;
   justify-content: center;
   background-color: #FAF0E6;
}

main
,aside{/*2カラムサイズ*/
   margin-top: 100px;
   width: 510px;
   height: 550px;
}

h2
{/*新規作成*/
   text-align: left;
   margin-left: 15px;
}

.registration_name{/*姓名*/
   display: flex;
   justify-content: left;
   align-items: center;
   margin-left: 15px;
}

.account-foam
,#registration_button{/*電話/メール/パスワード/さぶた*/
   text-align: left;
   margin-left: 15px;
   margin-top: 30px;
}

.mon{/*姓名/所属会社*/
   margin-top: 10px;
   margin-bottom: 3px;
}


.foot{/*フッター*/
   text-align: center;
}

</style>
