var r1=document.getElementsByClassName('r1text');
var r2=document.getElementsByClassName('r2text');
var r3=document.getElementsByClassName('r3text');
var v1=document.getElementsByClassName('v1text');
var v2=document.getElementsByClassName('v2text');
var st1 =false;
var st2=false;
var st3=false;
var i1v1v2=0;
var i2v1v2=0;
var i3v1v2=0;
var i1v1=0;
var i2v1=0;
var i3v1=0;
var i1v2=0;
var i2v2=0;
var i3v2=0;


        function updateR1(val) {
          r1[0].value=val; 
          r1[1].value=val; 
        }
       
        function updateR2(val) {
          r2[0].value=val; 
          r2[1].value=val; 
        }
        function updateR3(val) {
          r3[0].value=val; 
          r3[1].value=val; 
        }
        function updateV1(val) {
          v1[0].value=val; 
          v1[1].value=val; 
        }
        function updateV2(val) {
          v2[0].value=val; 
          v2[1].value=val; 
        }



        function upr1(val,cl) {
          if(val>300||val<1){
            alert('Please enter value in range [0,300] !');
            r1[0].value="";
            r1[1].value="";
            document.getElementsById('r1').value=150;  
          }
          else{
          document.getElementById('r1').value=val;  
          if(cl.includes("zero")){
            r1[1].value=val;
         }
         else{
           r1[0].value=val;
         }
          }
        }
        function upr2(val,cl) {
          if(val>300||val<1){
            alert('Please enter value in range [0,300] !');
            r2[0].value="";
            r2[1].value="";
            document.getElementById('r2').value=150;  
          }
          else{
          document.getElementById('r2').value=val; 
         if(cl.includes("zero")){
            r2[1].value=val;
         }
         else{
           r2[0].value=val;
         }
          } 
        }
        function upr3(val,cl) {
          if(val>300||val<1){
            alert('Please enter value in range [0,300] !');
            r3[0].value="";
            r3[1].value="";
            document.getElementById('r3').value=150;  
          }
          else{
          document.getElementById('r3').value=val;  
          if(cl.includes("zero")){
            r3[1].value=val;
         }
         else{
           r3[0].value=val;
         }
          }
        }
        function upv1(val,cl) {
          if(val>300||val<1){
            alert('Please enter value in range [0,300] !');
            v1[0].value="";
            v1[1].value="";
            document.getElementById('v1').value=150;  
          }
          else{
            document.getElementById('v1').value=val; 
            if(cl.includes("zero")){
              v1[1].value=val;
           }
           else{
             v1[0].value=val;
           }
          } 
        }
        function upv2(val,cl) {
          if(val>300||val<1){
            alert('Please enter value in range [0,300] !');
            v2[0].value="";
            v2[1].value="";
            document.getElementById('v2').value=150;  
          }
          else{
          document.getElementById('v2').value=val; 
          if(cl.includes("zero")){
            v2[1].value=val;
         }
         else{
           v2[0].value=val;
         }
        } 
        }
        function batao(){
        var voltage1=true;
        var voltage2=false;
        var voltage=false;

}



function changepicture(i){
 // console.log(i);
  var im='';
  if(i=="pv1v2"){
    st1=true;
    im='img/v1v2.png';
  var res1=parseInt(r1[0].value);
  var res2=parseInt(r2[0].value);
  var res3=parseInt(r3[0].value);
  var vol1=parseInt(v1[0].value);
  var vol2=parseInt(v2[0].value);
  var sol = nerdamer.solveEquations([`x-z+y=0`, `${res1}x+${res3}z=${vol1}`, `-${res3}z-${res2}y=-${vol2}`]);
  i1v1v2=sol[0][1];
  i2v1v2=(-1)*sol[1][1];
  i3v1v2=(-1)*sol[2][1];
//console.log(i1v1v2+" "+i2v1v2+" "+i3v1v2);

  if((!isNaN(res1))&&(!isNaN(res2))&&(!isNaN(res3))&&(!isNaN(vol1))&&(!isNaN(vol2))){
  document.getElementById('i1').innerHTML=i1v1v2.toFixed(4);
  document.getElementById('i2').innerHTML=i2v1v2.toFixed(4);
  document.getElementById('i3').innerHTML=i3v1v2.toFixed(4);
  if(i1v1v2>0&&i2v1v2>0){
    im='img/rrd.png';
  }
  else if(i1v1v2>0&&i2v1v2<0){
    im='img/rld.png';
  }
  else if(i1v1v2<0&&i2v1v2>0){
    im='img/lrd.png';
  }
  else{
    im='img/lld.png';
  }
  }
  else{
    alert('Fill all the paramters!');
  }
  }
  else if(i=='pv1'){
    st2=true;
    im='img/v1.png';
    var res1=parseInt(r1[0].value);
    var res2=parseInt(r2[0].value);
    var res3=parseInt(r3[0].value);
    var vol1=parseInt(v1[0].value);
    var vol2=parseInt(v2[0].value);
    var totalResistance= ((res2*res3)/(res2+res3))+res1;
    var totalCurrent=vol1/totalResistance;
    var ir1=totalCurrent; 
    var ir3=totalCurrent*(res2/(res2+res3));  //down
    var ir2=totalCurrent*(res3/(res2+res3));  //right
    i1v1=ir1;
    i2v1=ir2;
    i3v1=(-1)*ir3;
    if((!isNaN(res1))&&(!isNaN(res2))&&(!isNaN(res3))&&(!isNaN(vol1))&&(!isNaN(vol2))){
    document.getElementById('i1').innerHTML=ir1.toFixed(4);
    document.getElementById('i2').innerHTML=ir2.toFixed(4);
    document.getElementById('i3').innerHTML=ir3.toFixed(4);
    im='img/v1d.png';
  }
  else{
    alert('Fill all the paramters!');
  }
  }
  else{
    st3=true;
    im='img/v2.png';
   var res1=parseInt(r1[0].value);
   var res2=parseInt(r2[0].value);
   var res3=parseInt(r3[0].value);
   var vol1=parseInt(v1[0].value);
   var vol2=parseInt(v2[0].value);
   var totalResistance= ((res3*res1)/(res3+res1))+res2;
   var totalCurrent=vol2/totalResistance;
   var ir2=totalCurrent; //left
   //console.log(res1+" "+res2+" "+res3);
   var ir3=totalCurrent*(res1/(res1+res3)); //down
   var ir1=totalCurrent*(res3/(res1+res3)); //left
   i1v2=(-1)*ir1;
   i2v2=(-1)*ir2;
   i3v2=(-1)*ir3;
   if((!isNaN(res1))&&(!isNaN(res2))&&(!isNaN(res3))&&(!isNaN(vol1))&&(!isNaN(vol2))){
   document.getElementById('i1').innerHTML=ir1.toFixed(4);
   document.getElementById('i2').innerHTML=ir2.toFixed(4);
   document.getElementById('i3').innerHTML=ir3.toFixed(4);
   im='img/v2d.png';
   }
  else{
    alert('Fill all the paramters!');
  }
 // console.log(totalCurrent+" "+totalResistance+" "+ir1+" "+ir2+" "+ir3);
  }
 // console.log( document.querySelector('img').src);
  document.querySelector('img').src=im;
}
var i=1;






function addToTable(){
  if(st1&&st2&&st3){
  
  document.getElementById(`i1v1v2${i}`).innerHTML=i1v1v2.toFixed(3);
  document.getElementById(`i2v1v2${i}`).innerHTML=i2v1v2.toFixed(3);
  document.getElementById(`i3v1v2${i}`).innerHTML=i3v1v2.toFixed(3);
  document.getElementById(`i1v1${i}`).innerHTML=i1v1.toFixed(3);
  document.getElementById(`i2v1${i}`).innerHTML=i2v1.toFixed(3);
  document.getElementById(`i3v1${i}`).innerHTML=i3v1.toFixed(3);
  document.getElementById(`i1v2${i}`).innerHTML=i1v2.toFixed(3);
  document.getElementById(`i2v2${i}`).innerHTML=i2v2.toFixed(3);
  document.getElementById(`i3v2${i}`).innerHTML=i3v2.toFixed(3);
 // console.log(i1v1v2+" "+i2v1v2+" "+i3v1v2+" "+i1v1+" "+i2v1+" "+i3v1+" "+i1v2+" "+i2v2+" "+i3v2);
  i++;
 if(i==6){
   alert('Table filled completely!');
 }
 st1=false;
 st2=false;
 st3=false;
  }
  else{
    alert('Firstly, Stimulate for all!');
  }

}