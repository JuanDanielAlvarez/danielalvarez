document.addEventListener("DOMContentLoaded",function(){
	let e=document.getElementsByTagName("include");
	for(var t=0;t<e.length;t++){
		let a=e[t];
		n(e[t].attributes.src.value,function(e){
			a.insertAdjacentHTML("afterend",e),a.remove()
		})
	}
	function n(e,t){fetch(e).then(e=>e.text()).then(e=>t(e))}
});
