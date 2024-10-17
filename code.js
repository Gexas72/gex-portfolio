const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png'
];

const imageContainer = document.getElementsByClassName('collection')[0];
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image}`;
    imgElement.alt = image;  
    imgElement.className = "card";
    imageContainer.appendChild(imgElement); 
});

let isVideoPlaying = false;


document.getElementById('webinfob').addEventListener('click',function() {
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.filter = 'blur(15px)'; 
    overlay.style.opacity = '20%'; 
    document.querySelectorAll('h1, img').forEach(element => {

        

        if (!document.getElementById('webinfoc').contains(element)) {
            // Apply styles to elements not inside the object with id "webinfoc"
            element.style.opacity = '20%';
            element.style.filter = 'blur(16px)';
        }
    });
    

document.getElementById('webinfoc').style.opacity = '100%'
document.getElementById('webinfoc').style.filter = 'blur(0px)'





});
document.getElementById('aboutmeb').addEventListener('click',function() {
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.filter = 'blur(15px)'; 
    overlay.style.opacity = '20%'; 
    document.querySelectorAll('h1, img').forEach(element => {
      


        element.style.opacity= '20%';
        element.style.filter = 'blur(16px)'; 
});

document.getElementById('aboutmec').style.opacity = '100%'

document.getElementById('aboutmec').style.filter = 'blur(0px)'

});
document.querySelectorAll('.card').forEach(image => {
    image.addEventListener('click', function() {
        const imageName = this.src.split('/').pop(); 
        const videoName = imageName.replace('.png', '.mp4'); 
        const videoPath = `videos/${videoName}`; 
        
        const overlay = document.getElementsByClassName('overlay')[0];
        overlay.style.filter = 'blur(15px)'; 
        overlay.style.opacity = '20%'; 
        document.querySelectorAll('h1, img').forEach(element => {
          
    
                
            
            element.style.opacity= '20%';
            element.style.filter = 'blur(16px)'; 
    });
        const videoPlayer = document.getElementById('videoPlayer');
        
        if (!isVideoPlaying) {
            videoPlayer.src = videoPath;
            videoPlayer.style.filter = 'blur(0px)'; 
            videoPlayer.style.opacity = '100%';
            videoPlayer.style.pointerEvents = "all";  
            videoPlayer.play();
            isVideoPlaying = true;
        } else {
            overlay.style.filter = 'blur(5px)'; 
            overlay.style.opacity = '100%'; 
            
            document.querySelectorAll('h1, img').forEach(element => {
                element.style.opacity = '100%';
                element.style.filter = 'blur(0px)'; 
            });

            videoPlayer.style.opacity = '0%';
            videoPlayer.style.filter = 'blur(15px)'; 
            videoPlayer.currentTime = 0;
            videoPlayer.pause();
            videoPlayer.style.pointerEvents = "none";  
            isVideoPlaying = false; 
        }
    });
});

document.getElementsByClassName('overlay')[0].addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.filter = 'blur(5px)'; 
        this.style.opacity = '100%'; 


            document.querySelectorAll('h1, img').forEach(element => {
               element.style.filter = ''; 
               element.style.opacity = ''; 
            
        });
              document.getElementById('aboutmec').style.opacity = '0%'
document.getElementById('webinfoc').style.opacity = '0%'
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.style.opacity = '0%';
        videoPlayer.style.filter = 'blur(15px)'; 
        videoPlayer.currentTime = 0;
        videoPlayer.pause();
        videoPlayer.style.pointerEvents = "none";  
        isVideoPlaying = false; 
    }
});
