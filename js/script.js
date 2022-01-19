/*
window.onscroll= () => {scrollFunction()};

scrollFunction =()=>{
	if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
		document.getElementById("navba").style.backgroundColor= "#fff";
		document.getElementById("navbar").style.display= "none";
	}
	else{
		document.getElementById("navba").style.backgroundColor= "#3330";
		document.getElementById("navbar").style.display= "block";

	}
}
*/
const titreSpans = document.querySelectorAll('h1 span');
const l1 = document.querySelectorAll('.main-text-two');
const btns = document.querySelectorAll('.btn-first');

window.addEventListener('load', () => {

	const TL= gsap.timeline({paused: true});

	TL
	.staggerFrom(titreSpans,1, {top: -50, opacity: 0, ease:"power2.out"}, 0.3);



	TL.play();
});


// Form contact 

      $(function(){
        $("form").submit(function(e) {

          e.preventDefault();
          let sub= $('.envoyer');
          sub.text("Patienter...");
          let $form = $(this);
          
          $.post($form.attr("action"), $form.serialize())
          .done(function(data) {
            let res= JSON.parse(data);
            if(res.code === 200){
              $("#exampleInputName").val("");
              $("#exampleInputEmail").val("");
              $("#exampleInputObjet").val("");
              $("#exampleInputMessage").val("");
              sub.text("Envoyer");
              $('.message-success').css("display","block");
              setTimeout(
              ()=>{
                $('.message-success').css("display","none");
              },4000
              );
            }
            else if(res.code === 400){
              sub.text("Envoyer");
              $('.message-danger').css("display","block");
              setTimeout(
              ()=>{
                $('.message-danger').css("display","none");
              },4000
              );
            }
            
            
          })
          .fail(function() {
            alert("Erreur, Veuillez rééssayer...");
          });
        });
      }); 