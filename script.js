const targetDate = document.getElementById("targetDate")

const calBtn = document.getElementById("calBtn")
calBtn.addEventListener("click", ()=>{
    const today = new Date().setHours(0,0,0,0);
    const targetDay = new Date(targetDate.value).setHours(0,0,0,0)
    const resultDate = (targetDay - today) / (1000 * 60 * 60 * 24)
    alert(resultDate + '일')
})