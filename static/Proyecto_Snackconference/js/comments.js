function agregarComentario(e){
    
    event.preventDefault();
    const load = document.querySelector("#comment-section");
    var comment=document.getElementById('txt-comments').value;
    if(comment != "")
    {
        var newcomment = '<div class = "single-comment">'+comment+'</div>';
        load.innerHTML=load.innerHTML+newcomment;
        document.getElementById('txt-comments').value="";
    }
}