<template>
  <div id="app">
    <TitleBar title="Groove 音乐"/>
    <BottomBar v-bind:backgroundImage="singerInformation.avatarUrl" 
    v-bind:backgroundColor="singerInformation.avatarColor"
    v-bind:backgroundFontColor="singerInformation.avatarFontColor">
      <BottomBarItem hoverEnabled="true">
        <img id='avatarImg' v-bind:src="singerInformation.avatarUrl" v-on:load="RefreshBottomColor" style="height:100%;width:auto">
        <canvas id='avatarCanvas' style="display:none"></canvas>
        <UpDownPair style="margin-left:5px" class="u-minor">
          <template #utop>{{musicInformation.name}}</template>
          <template #ubottom>{{singerInformation.name}}</template>
        </UpDownPair>
      </BottomBarItem>
      <BottomBarItem>
        <UpDownPair style="margin-left:5px" v-bind:isCenter="true">
          <template #utop>
            <div style="width:100%;display:flex;align-items:center">
              <span style="font-size:small">{{playerSettings.playerNowTime}}</span>
              <input type="range" style="width:100%;height:3px;margin-left:3px;margin-right:3px">
              <span style="font-size:small">{{playerSettings.songTime}}</span>
            </div>
          </template>
          <template #ubottom >
            <div style="display:flex;justify-content: center;align-items: center;">
              <Ubutton v-bind:isCircle="true" v-bind:highlightBorderEnabled="true" style="margin-right: 8px;">
                  <i class="fa fa-step-backward" aria-hidden="true"></i>
              </Ubutton>
              <Ubutton v-bind:isCircle="true" v-bind:highlightBorderEnabled="true" standardSize="lg" style="margin-right: 8px;" v-if="playerSettings.playing===false" v-on:click="play()">
                  <i class="fa fa-play" aria-hidden="true" style="margin-left: 5px;"></i>
              </Ubutton>
              <Ubutton v-bind:isCircle="true" v-bind:highlightBorderEnabled="true" standardSize="lg" style="margin-right: 8px;" v-if="playerSettings.playing===true" v-on:click="pause()">
                  <i class="fa fa-pause" aria-hidden="true"></i>
              </Ubutton>
              <Ubutton v-bind:isCircle="true" v-bind:highlightBorderEnabled="true" style="margin-right: 3px;">
                  <i class="fa fa-step-forward" aria-hidden="true"></i>
              </Ubutton>
              <Ubutton v-bind:isCircle="true" v-bind:highlightBorderEnabled="true" style="margin-right: 3px;" class="u-minor-only">
                  <i class="fa fa-list-ul" aria-hidden="true"></i>
              </Ubutton>
            </div>
            </template>
        </UpDownPair>
      </BottomBarItem>
      <BottomBarItem>
        <Ubutton v-bind:isCircle="true" v-bind:highlightBorderEnabled="true" style="margin-right: 15px;">
            <i class="fa fa-volume-up" aria-hidden="true"></i>
        </Ubutton>
        <Ubutton v-bind:isCircle="true" v-bind:highlightBorderEnabled="true" style="margin-right: 15px;" class="u-minor">
            <i class="fa fa-random"></i>
        </Ubutton>
        <Ubutton v-bind:isCircle="true" v-bind:highlightBorderEnabled="true" style="margin-right: 15px;">
            <i class="fa fa-refresh"></i>
        </Ubutton>
      </BottomBarItem>
    </BottomBar>
    <ContentContainer>
      <template>
        <Navigator>
          <NavigatorItem>
            <i class="fa fa-list-ul" aria-hidden="true"></i>
          </NavigatorItem>
          <NavigatorItem v-bind:selected="true">
            <i class="fa fa-music" aria-hidden="true"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            My Music
          </NavigatorItem>
          <NavigatorItem>
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            Recent Plays
          </NavigatorItem>
        </Navigator>
        <ContentView>
          <template>
            <h2>Soledad</h2>
            <hr>
            <p>It's kept for the lonely</p>
            <p>Since the day that you were gone</p>
            <p>Why did you leave me in soledad</p>
            <p>In my heart you were the only</p>
            <p>And your memory lives on</p>
          </template>
        </ContentView>
      </template>
    </ContentContainer>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import TitleBar from './components/TitleBar'
import BottomBar from './components/BottomBar'
import BottomBarItem from './components/BottomBarItem'
import UpDownPair from './components/UpDownPair'
import Ubutton from './components/Ubutton'
import ContentContainer from './components/ContentContainer'
import Navigator from './components/Navigator'
import NavigatorItem from './components/NavigatorItem'
import ContentView from './components/ContentView'

function DrawImageInCanvas() {
    let aimg = document.getElementById('avatarImg');
    let canvas = document.getElementById('avatarCanvas');
    canvas.width = aimg.width;
    canvas.height = aimg.height;
    let context = canvas.getContext('2d');
    context.drawImage(aimg, 0, 0, canvas.width, canvas.height);
}

function GetImageColor() {
    let aimg = document.getElementById('avatarImg');
    let canvas = document.getElementById('avatarCanvas');
    let context = canvas.getContext('2d');
    let data = context.getImageData(0, 0, aimg.width, aimg.height).data;

    console.log(data);
    let R = 0, G = 0, B = 0, COUNT = 0;
    for (let i = 0; i < data.length; i +=  16) {
        R += data[i] * (data[i + 3] / 255);
        G += data[i + 1] * (data[i + 3] / 255);
        B += data[i + 2] * (data[i + 3] / 255);
        COUNT++;
    }
    R /= COUNT;
    G /= COUNT;
    B /= COUNT;
    R = Math.round(R);
    G = Math.round(G);
    B = Math.round(B);
    let rgbtext = "rgb(" + R + "," + G + "," + B + ")";
    let gray = R * 0.299 + G * 0.587 + B * 0.114;
    if (gray - R + gray - B + gray - G << 100) {
        if (gray > 128) {
            gray = 245;
        }
        else {
            gray = 30;
        }
    }
    let contrastcolor = 255 - Math.round(gray);
    let conrgbtext = "rgb(" + contrastcolor + "," + contrastcolor + "," + contrastcolor + ")";
    //less.modifyVars({ "bottom-font-color": conrgbtext, "bottom-color": rgbtext });
    //App.singerInformation.avatarColor=rgbtext;
    //App.singerInformation.avatarFontColor=conrgbtext;
    console.log({"bgcolor":rgbtext,"ftcolor":conrgbtext});
    return {"bgcolor":rgbtext,"ftcolor":conrgbtext};
}

var App= Vue.component(
  'App',{
  data:function(){
    return{
      singerInformation:{
        avatarUrl:'/static/avatar.jpg',
        name:'Westlife',
        avatarColor:'#cfcfcf',
        avatarFontColor:'#ffffff'
      },
      musicInformation:{
        name:'Soledad'
      },
      playerSettings:{
        playing:false,
        musicUrl:'',
        playerNowTime:'00:00',
        songTime:'03:27'
      }
    }
  },
  mounted:function(){
  },
  components:{
    TitleBar,BottomBarItem,BottomBar,
    UpDownPair,Ubutton,ContentContainer
    ,Navigator,NavigatorItem,ContentView
  },
  methods:{
    RefreshBottomColor:function(){
      DrawImageInCanvas();
      let obj=GetImageColor();
      this.singerInformation.avatarColor=obj.bgcolor;
      this.singerInformation.avatarFontColor=obj.avatarFontColor;
    },
    play:function(){
      this.playerSettings.playing=true;
    },
    pause:function(){
      this.playerSettings.playing=false;
    }
  }}
);

export default App;
</script>

<style lang="less">

</style>
