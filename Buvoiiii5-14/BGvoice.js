

// ฟังก์ชันเพื่อเปิด-ปิดเสียง
function toggleMute() {
  const audio = document.getElementById('background-audio');
  const muteButton = document.getElementById('mute-button');
  
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = '🔊'; // ไอคอนเสียงเปิด
  } else {
    audio.muted = true;
    muteButton.innerHTML = '🔇'; // ไอคอนเสียงปิด
  }
}

// ทำให้เสียงเริ่มเล่นเมื่อโหลดหน้าเว็บ
window.onload = function() {
  const audio = document.getElementById('background-audio');
  audio.play();
}
