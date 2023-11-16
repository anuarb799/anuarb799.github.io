document.addEventListener("DOMContentLoaded", function () {
    const colorPalette = [
        "#00072D", // Dark Blue
        "#051650", // Blue
        "#0A2472", // Light Blue
    ];

    let currentIndex = 0;
    let up = true;
    function changeBackgroundColor() {
        // Get the current color from the palette
        const currentColor = colorPalette[currentIndex];

        // Update the body background color
        document.body.style.backgroundColor = currentColor;

        // Increment the index or reset to 0 if reached the end of the palette
       // currentIndex = (currentIndex + 1) % colorPalette.length;
       if(currentIndex == 2){
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
        setTimeout(changeBackgroundColor, 1000);
    }

    // Start the dynamic background change
    changeBackgroundColor();
});