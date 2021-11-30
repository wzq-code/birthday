/*
 * @Author: your name
 * @Date: 2021-11-29 21:45:58
 * @LastEditTime: 2021-11-30 17:38:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \生日快乐\birthday\index.js
 */
let btn = document.querySelector('.btn');
let box1 = document.querySelector('.box1');
let title = document.querySelector('.title')
let name1 = document.querySelector('.inputName')
let userName = document.querySelector('.userName')
let pictrues = document.querySelector('.pictrues')
let music = document.querySelector('.music');
let heartArr = [];
let fadeSpeeed = 0.005
let moveSpeed = 2
let picNum =0;
let imgArr = [
  'imgs/1.jpg',
  'imgs/2.jpg',
  'imgs/3.jpg',
  'imgs/4.jpg',
  'imgs/5.jpg',
  'imgs/6.jpg',
  'imgs/final.jpg',
]
function playMusic(){
  music.play()
}
function getInputName(){
  var inputname = name1.value;
  userName.innerHTML = inputname;
}
function titleIsShow() {
  title.classList.remove("animate__rotateOut")
  title.classList.add("animate__rotateIn")
}
function box1Exit(){
  box1.classList.remove("animate__backInDown")
  box1.classList.add("animate__bounceOut")
}
function pictrueIsShow(){
  pictrues.style.backgroundImage = `url(${imgArr[picNum++]})`
}
function heartMove(){
  setInterval(() => {
    for(let i = 0 ; i<heartArr.length ; i++){
      heartArr[i].style.opacity =getComputedStyle(heartArr[i]).opacity - fadeSpeeed
      if(i%2==0)
      heartArr[i].style.bottom = (parseInt(getComputedStyle(heartArr[i]).bottom) + (moveSpeed+Math.random()*3)) +'px'
      else{
      heartArr[i].style.bottom = (parseInt(getComputedStyle(heartArr[i]).bottom) + (moveSpeed)) +'px'
      }
      if(heartArr[i].style.opacity<=0){
        heartArr[i].style.opacity = 1
        heartArr[i].style.bottom = (Math.random()*100) +'px'
      }
    }
  }, 10);
}
function heartInit(){
  let count = 0
  let timer = setInterval(() => {
    for(let i = 1; i<=5 ; i++){
      let heart = document.createElement('div')
      heart.classList.add("heart")
      heart.style.bottom += heart.style
      heart.style.left = (Math.random()*1200 +100) +'px'
      heart.style.bottom = (Math.random()*100) +'px'
      document.body.appendChild(heart);
      heartArr.push(heart);
      if(5==i){
        count++;
      }
      
    }
    if(count==6){
      clearInterval(timer)
    }
  }, 500);
  heartMove();
}
window.onload = function () {
  btn.onclick = function (event) {
    box1Exit();
    titleIsShow();
    heartInit();
    getInputName()
    playMusic()

  }

}
