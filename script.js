document.addEventListener("DOMContentLoaded", function () {
    const colorPalette = [
        "#FFA500", // Dark Blue
        "#00073D", // Blue
    ];

    let currentIndex = 0;
    let up = true;
    function changeBackgroundColor() {
        // Get the current color from the palette
        const currentColor = colorPalette[currentIndex];

        // Update the body background color
        document.body.style.backgroundColor = currentColor;

       if(currentIndex == 1){
            up = false
       }

       if(currentIndex == 0){
            up = true
       }
       

        if(up){
            currentIndex++;
        }

        if(!up){
            currentIndex--;
        }

        
        // Schedule the next background change after 2 seconds
        setTimeout(changeBackgroundColor, 2000);
    }

    // Start the dynamic background change
    changeBackgroundColor();
});