document.addEventListener("DOMContentLoaded",function(event){
    var canvas = document.getElementById('dibujando');
    var img = document.getElementById('afor')
    var ctx = canvas.getContext('2d');

    ctx.drawImage(img, 72, 35, 420-72, 500-35, 
        0, 0, 420-72, 500-35)//352,465

    ctx.drawImage(img, 490, 42, 610-490, 120-40, 
        130, 272, 84,56)//120,80  * 0.7 = 84,56

})