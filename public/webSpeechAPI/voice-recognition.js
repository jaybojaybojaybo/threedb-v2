$(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    let p = document.createElement('p');
    const words = document.querySelector('.words');
    words.appendChild(p);

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement('p');
            words.appendChild(p);
        }

        if (transcript.includes('search')) {
            if (e.results[0].isFinal) {
                console.log('SEARCH SEARCH SEARCH');
            }
        }

        if (transcript.includes('Twitter')) {
            if (e.results[0].isFinal) {
                console.log('TWEEEEEEEEEEEEEEET');
            }
        }

        if (transcript.includes('GitHub')) {
            if (e.results[0].isFinal) {
                console.log('Git you some Git Hub');
            }
        }

        console.log(transcript);
    });

    recognition.addEventListener('end', recognition.start);

    recognition.start();
});