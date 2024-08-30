let currentQuestion = 1;
const embeds = document.querySelectorAll('#apple-music-embeds iframe');
const images = {
    0: ['image1', 'image2'],
    1: ['image3', 'image4'],
    2: ['image5', 'image6'],
    3: ['image7', 'image8']
};

function playSong(index) {
    // Ensure that the music controls are only available after bypass
    if (document.getElementById('music-controls').style.display !== 'flex') {
        return;
    }

    // Hide all iframes
    embeds.forEach(embed => embed.style.display = 'none');
    
    // Hide all images
    Object.values(images).forEach(imagePair => {
        imagePair.forEach(imgId => document.getElementById(imgId).style.display = 'none');
    });
    
    // Show the selected song
    embeds[index].style.display = 'block';

    // Show the corresponding images
    images[index].forEach(imgId => {
        document.getElementById(imgId).style.display = 'block';
    });
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim();
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';

    if (currentQuestion === 1 && answer === "08/31/2020") {
        showNextQuestion("When did we go on our first date (MM/DD/YYYY)?");
    } else if (currentQuestion === 2 && answer === "09/11/2020") {
        showNextQuestion("Who is Kyle's favorite person in the entire world (first, middle, and last name)?");
    } else if (currentQuestion === 3 && answer === "Hailey Eve Margulies") {
        showMainPage();
    } else {
        errorMessage.style.display = 'block';
    }
}

function showNextQuestion(questionText) {
    currentQuestion++;
    document.getElementById('question').textContent = questionText;
    document.getElementById('answer').value = '';
}

function showMainPage() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('music-controls').style.display = 'flex'; // Show the music controls
}