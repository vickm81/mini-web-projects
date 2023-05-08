const load_text = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0

let int = setInterval(loading,30)

function loading() {
	load++
	if (load>99) {
		clearInterval(int)
	}
	load_text.innerText = `${load}%`
	load_text.style.opacity=scale(load,0,100,1,0)
	b=scale(load,0,100,30,0)
	bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`

}
const scale = (num,in_min,in_max,out_min,out_max)=>{
	return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min
}