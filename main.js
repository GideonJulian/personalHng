
document.addEventListener("DOMContentLoaded", ()=>{
    const text = [
        "Frontend Developer",
        "Backend Developer",
        "Content Creator"
    ]
    const typewriterElement = document.getElementById('typewriter')
    let textindex = 0;
    let charindex = 0

    function typewriter (){
        if (charindex < text[textindex].length) {
            typewriterElement.textContent += text[textindex].charAt(charindex);
            charindex++;
            setTimeout(typewriter, 100);
        } else {
            setTimeout(() => {
                charindex = 0;
                textindex++;
                if (textindex >= text.length) {
                    textindex = 0; 
                }
                typewriterElement.textContent = '';
                typewriter();
            }, 2000); 
        }
    }
    typewriter();
    
// Displaying current time and date 

function updateTimeAndDate (){
    const now = new Date()
      const options = {
        weekday: 'long',  
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    };
    const formattedDate = now.toLocaleDateString('en-US', options)
    const htmlElement = document.getElementById('currentTime')
    htmlElement.textContent = formattedDate
}
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate()
})
