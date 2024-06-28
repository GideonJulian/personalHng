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
})