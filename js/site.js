function toggleShadows() {
    console.log('Toggle Shadow function called');
    var myHeading = document.getElementById("myHeading");
    if (myHeading.style.textShadow === "") {
      myHeading.style.textShadow = "0px 4px 10px rgba(253, 246, 241, 0.8)";
    } else {
      myHeading.style.textShadow = "";
    }
  }

