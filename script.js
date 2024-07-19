console.log("script running...")
document.querySelector('.cross').Style.display = 'none';
document.querySelector('.ham').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('.sidebarGo');
})
