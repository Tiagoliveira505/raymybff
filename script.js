const flowers = document.getElementById("flowers");
const icons = ["🌸","💜","✿","❀"];
function createFlower(){
  const flower=document.createElement("span");
  flower.className="flower";
  flower.textContent=icons[Math.floor(Math.random()*icons.length)];
  flower.style.left=Math.random()*100+"vw";
  flower.style.fontSize=(14+Math.random()*20)+"px";
  flower.style.opacity=.25+Math.random()*.45;
  flower.style.setProperty("--drift",(Math.random()*160-80)+"px");
  flower.style.animationDuration=(7+Math.random()*7)+"s";
  flowers.appendChild(flower);
  setTimeout(()=>flower.remove(),14500);
}
setInterval(createFlower,550);
for(let i=0;i<10;i++) setTimeout(createFlower,i*180);

const items=document.querySelectorAll(".letter-card, .gallery figure, .video-frame");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0,transform:"translateY(35px)"},{opacity:1,transform:"translateY(0)"}],
        {duration:800,easing:"cubic-bezier(.2,.8,.2,1)",fill:"forwards"}
      );
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
items.forEach(item=>{item.style.opacity="0";observer.observe(item)});