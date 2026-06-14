const video=document.getElementById("mult")
video.play()
video.addEventListener('ended',function(event){
    window.location.href = "about:blank";
})