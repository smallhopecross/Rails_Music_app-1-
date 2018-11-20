navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false
  }).then(stream => {
    console.log(stream);
  }).catch(error => {
    console.log(error);
  });
  const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let mediaRecorder = null;
let mediaStream = null;

start.addEventListener('click', () => {
  start.disabled = true;
  stop.disabled = false;

  const chunks = [];
  mediaRecorder = new MediaRecorder(mediaStream, {
    mimeType: 'audio/webm'
  });

  mediaRecorder.addEventListener('dataavailable', e => {
    if (e.data.size > 0) {
      chunks.push(e.data);
    }
  });

  mediaRecorder.addEventListener('stop', ()　=> {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob(chunks));
    a.download = 'test.webm';
    a.click();
  });

  mediaRecorder.start();
});

stop.addEventListener('click', () => {
  if (mediaRecorder === null) {
    return;
  }

  start.disabled = false;
  stop.disabled = true;

  mediaRecorder.stop();
  mediaRecorder = null;
});

navigator.mediaDevices.getUserMedia({ 
  audio: true,
  video: false
}).then(stream => {
  mediaStream = stream;

  // ...
}).catch(error => {
  console.log(error);
});