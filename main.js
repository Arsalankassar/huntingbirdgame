

let bullet = 5;
let count = 0;

function shoot(bird){
    bullet--;
    if(bullet!=0){
    bird.style.display= "none";
    document.getElementById('currentscore').innerHTML = ++count;
    document.getElementById('currentbullet').innerHTML = bullet;
    }
else if (bullet == -1){
    alert("Out of bullets!");
}
}
const fireImage = document.getElementById("b1");
const fireSound = document.getElementById("fireSound");

// Add click event listener to the image
fireImage.addEventListener("click", () => {
  // Play the fire sound
  fireSound.play();
});
// shoot(1)
