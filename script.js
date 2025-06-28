function showSongs(friend) {
    let songs = {
        'Xander': {
            happy: 'Playboi Carti - Bando',
            sad: 'Bando ft. Bbygirl Slowed',
            happyVideo: 'snaptik_7486684495035288887.mp4',
            sadVideo: 'snaptik_7442329249840729351.mp4'
        },
        'Lorelyn': {
            happy: 'Magic Shop - BTS',
            sad: 'Malibu Nights',
            happyVideo: 'snaptik_7298293350220811525.mp4',
            sadVideo: 'snaptik_7381067364126772485.mp4'
        },
        'Kristine': {
            happy: 'Love Story',
            sad: 'I\'ll Be',
            happyVideo: 'snaptik_7301961703435095302.mp4',
            sadVideo: 'snaptik_7307021300357254405.mp4'
        },
        'Adela': {
            happy: 'Happy Birthday',
            sad: 'Awit ni Ginny',
            happyVideo: 'snaptik_7243642195130010887.mp4',
            sadVideo: 'snaptik_7361773813463321862.mp4'
        },
        'Jasselle': {
            happy: 'End of Beginning',
            sad: 'End of Beginning',
            happyVideo: 'snaptik_7354603903960321285.mp4',
            sadVideo: 'snaptik_7354603903960321285.mp4'
        },
        'Jefferson': {
            happy: 'Duality',
            sad: 'Eyeless',
            happyVideo: 'snaptik_7486154244492561670.mp4',
            sadVideo: 'snaptik_7484220622881541398.mp4'
        },
        'AnthonyQtQtxD': {
            happy: 'Japanese Denim',
            sad: 'Sanctuary',
            happyVideo: 'snaptik_7323160951971204357.mp4',
            sadVideo: 'snaptik_7375092184678141190.mp4'
        },
        'Allen': {
            happy: 'Apricot Princess',
            sad: 'Panaginip',
            happyVideo: 'snaptik_7320894864147680518.mp4',
            sadVideo: 'snaptik_7346131182322502917.mp4'
        },
        'Ezekiel': {
            happy: 'Your Universe',
            sad: 'The Man Who Can\'t Be Moved',
            happyVideo: 'snaptik_7446956010893364488.mp4',
            sadVideo: 'snaptik_7270802094104317189.mp4'
        },
        'Ace': {
            happy: 'Laufey - Valentines',
            sad: 'Bawat Piyesa',
            happyVideo: 'snaptik_7435239793879026952.mp4', 
            sadVideo: 'snaptik_7229886163694275845.mp4' 
        },
        'Charles': {
            happy: 'Happy by Pharrell Williams',
            sad: 'Say something',
            happyVideo: 'snaptik_7297416875430923526.mp4',
            sadVideo: 'snaptik_7250455776068668678.mp4'
        },
        'Yeshua': {
            happy: 'Dear Maria, Count Me In',
            sad: 'Sagada',
            happyVideo: 'path_to_happy_video.mp4', // Replace with actual video path
            sadVideo: 'path_to_sad_video.mp4' // Replace with actual video path
        },
        'Jaspher': {
            happy: 'Bomba Honda',
            sad: 'Sparkle - Your Name',
            happyVideo: 'snaptik_7497965873555082514.mp4',
            sadVideo: 'snaptik_7326509922772962565.mp4'
        },
        'Ron': {
            happy: 'Finesse',
            sad: 'I\'ll Rather Pretend',
            happyVideo: 'snaptik_7250246789780049194.mp4',
            sadVideo: 'snaptik_7413758981451042054.mp4'
        },
        'Diana': {
            happy: 'Fearless',
            sad: 'Gonna Be Okay',
            happyVideo: 'snaptik_7452720979907808530.mp4',
            sadVideo: 'snaptik_7520494772675448071.mp4'
        },
        'Jenn': {
            happy: 'Criminal',
            sad: 'Panaginip',
            happyVideo: 'snaptik_7363221739427646726.mp4',
            sadVideo: 'snaptik_7346131182322502917.mp4'
        }
    };

    let songDisplay = document.getElementById('songDisplay');
    songDisplay.innerHTML = `
        <h2>${friend}'s Favorite Songs</h2>
        <button style="
            background: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 0 5px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        " 
        onmouseover="this.style.background='#3e8e41'" 
        onmouseout="this.style.background='#4CAF50'"
        onclick="displaySong('${friend}', 'happy')">Happy</button>
        
        <button style="
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 0 5px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        " 
        onmouseover="this.style.background='#2980b9'" 
        onmouseout="this.style.background='#3498db'"
        onclick="displaySong('${friend}', 'sad')">Sad</button>
        <div id="${friend}-happy" class="happy"></div>
        <div id="${friend}-sad" class="sad"></div>
    `;

    // Scroll to the song display area
    songDisplay.scrollIntoView({ behavior: 'smooth' });
}

function displaySong(friend, mood) {
    let songs = {
        'Xander': {
            happy: 'Playboi Carti - Bando',
            sad: 'Bando ft. Bbygirl Slowed',
            happyVideo: 'snaptik_7486684495035288887.mp4',
            sadVideo: 'snaptik_7442329249840729351.mp4'
        },
        'Lorelyn': {
            happy: 'Magic Shop - BTS',
            sad: 'Malibu Nights',
            happyVideo: 'snaptik_7298293350220811525.mp4',
            sadVideo: 'snaptik_7381067364126772485.mp4'
        },
        'Kristine': {
            happy: 'Love Story',
            sad: 'I\'ll Be',
            happyVideo: 'snaptik_7301961703435095302.mp4',
            sadVideo: 'snaptik_7307021300357254405.mp4'
        },
        'Adela': {
            happy: 'Happy Birthday',
            sad: 'Awit ni Ginny',
            happyVideo: 'snaptik_7243642195130010887.mp4',
            sadVideo: 'snaptik_7361773813463321862.mp4'
        },
        'Jasselle': {
            happy: 'End of Beginning',
            sad: 'End of Beginning',
            happyVideo: 'snaptik_7354603903960321285.mp4',
            sadVideo: 'snaptik_7354603903960321285.mp4'
        },
        'Jefferson': {
            happy: 'Duality',
            sad: 'Eyeless',
            happyVideo: 'snaptik_7486154244492561670.mp4',
            sadVideo: 'snaptik_7484220622881541398.mp4'
        },
        'AnthonyQtQtxD': {
            happy: 'Japanese Denim',
            sad: 'Sanctuary',
            happyVideo: 'snaptik_7323160951971204357.mp4',
            sadVideo: 'snaptik_7375092184678141190.mp4'
        },
        'Allen': {
            happy: 'Apricot Princess',
            sad: 'Panaginip',
            happyVideo: 'snaptik_7320894864147680518.mp4',
            sadVideo: 'snaptik_7346131182322502917.mp4'
        },
        'Ezekiel': {
            happy: 'Your Universe',
            sad: 'The Man Who Can\'t Be Moved',
            happyVideo: 'snaptik_7446956010893364488.mp4',
            sadVideo: 'snaptik_7270802094104317189.mp4'
        },
        'Ace': {
            happy: 'Laufey - Valentines',
            sad: 'Bawat Piyesa',
            happyVideo: 'snaptik_7435239793879026952.mp4', 
            sadVideo: 'snaptik_7229886163694275845.mp4' 
        },
        'Charles': {
            happy: 'Happy by Pharrell Williams',
            sad: 'Say something',
            happyVideo: 'snaptik_7297416875430923526.mp4',
            sadVideo: 'snaptik_7250455776068668678.mp4'
        },
        'Yeshua': {
            happy: 'Dear Maria, Count Me In',
            sad: 'Sagada',
            happyVideo: 'path_to_happy_video.mp4', // Replace with actual video path
            sadVideo: 'path_to_sad_video.mp4' // Replace with actual video path
        },
        'Jaspher': {
            happy: 'Bomba Honda',
            sad: 'Sparkle - Your Name',
            happyVideo: 'snaptik_7497965873555082514.mp4',
            sadVideo: 'snaptik_7326509922772962565.mp4'
        },
        'Ron': {
            happy: 'Finesse',
            sad: 'I\'ll Rather Pretend',
            happyVideo: 'snaptik_7250246789780049194.mp4',
            sadVideo: 'snaptik_7413758981451042054.mp4'
        },
        'Diana': {
            happy: 'Fearless',
            sad: 'Gonna Be Okay',
            happyVideo: 'snaptik_7452720979907808530.mp4',
            sadVideo: 'snaptik_7520494772675448071.mp4'
        },
        'Jenn': {
            happy: 'Criminal',
            sad: 'Panaginip',
            happyVideo: 'snaptik_7363221739427646726.mp4',
            sadVideo: 'snaptik_7346131182322502917.mp4'
        }
    };

    let happyDisplay = document.getElementById(`${friend}-happy`);
    let sadDisplay = document.getElementById(`${friend}-sad`);

    const currentlyPlaying = document.querySelector('video[autoplay]');
    if (currentlyPlaying) {
        currentlyPlaying.pause();
    }

    if (mood === 'happy') {
        happyDisplay.innerHTML = `
            <p>${songs[friend].happy}</p>
            <video class="${friend === 'Ezekiel' && songs[friend].happy === 'Your Universe' ? 'landscape' : ''}" controls autoplay>
                <source src="${songs[friend].happyVideo}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        happyDisplay.style.display = 'block';
        sadDisplay.style.display = 'none';
        happyDisplay.scrollIntoView({ behavior: 'smooth' });
    } else {
        sadDisplay.innerHTML = `
            <p>${songs[friend].sad}</p>
            <video controls autoplay>
                <source src="${songs[friend].sadVideo}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
        sadDisplay.style.display = 'block';
        happyDisplay.style.display = 'none';
        sadDisplay.scrollIntoView({ behavior: 'smooth' });
    }
}
