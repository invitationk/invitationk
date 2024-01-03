var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++){
      var page = pages[i];
      if (i % 2 === 0){
          page.style.zIndex = (pages.length - i);
        }
    }
var num=0;
const colors=["#fce6ef","#ffdbea","#fccce1","#fabbd8","#fcaed1","#fc9dc8","#fc88bf","#fa73b2","#ff5ea9","#fc499a","#fc2888","#fc0069"];
document.body.style.backgroundColor = colors[num];
document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i < pages.length; i++){
        //Or var page = pages[i];
        pages[i].pageNum = i + 1;
        

        pages[i].onclick=function(){
            if (this.pageNum % 2 === 0){
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
                num--;
                document.body.style.backgroundColor = colors[num];
                // console.log(num);
              }
            else{
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
                document.body.style.backgroundColor = colors[num];
                num++;
                // console.log(num);
              }
           }
        }
  })