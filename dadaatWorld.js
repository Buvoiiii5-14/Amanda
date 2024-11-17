

// ดึงวิดีโอทั้งหมด
const videos = document.querySelectorAll("video");

// ฟังก์ชัน: เล่นวิดีโอทั้งหมด
const playAll = () => {
    videos.forEach(video => video.play());
};

// ฟังก์ชัน: หยุดวิดีโอทั้งหมด
const pauseAll = () => {
    videos.forEach(video => video.pause());
};

// ฟังก์ชัน: เริ่มวิดีโอทั้งหมดใหม่
const resetAll = () => {
    videos.forEach(video => {
        video.currentTime = 0;
        video.pause();
    });
};

// เพิ่ม Event Listener ให้กับปุ่ม
document.getElementById("playAll").addEventListener("click", playAll);
document.getElementById("pauseAll").addEventListener("click", pauseAll);
document.getElementById("resetAll").addEventListener("click", resetAll);
