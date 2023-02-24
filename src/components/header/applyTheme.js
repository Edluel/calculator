export default function applyTheme(selectedTheme) {
    if (selectedTheme === 1) {
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    } else if (selectedTheme === 2) {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
      
    } else {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    }  
};
