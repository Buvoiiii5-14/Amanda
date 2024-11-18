const fs = require('fs');
const path = require('path');

const imageFolderPath = path.join(__dirname, 'static');

function generateImageJson() {
    console.log('กำลังอ่านไฟล์จากโฟลเดอร์:', imageFolderPath);

    fs.readdir(imageFolderPath, (err, files) => {
        if (err) {
            console.error('ไม่สามารถอ่านโฟลเดอร์:', err);
            return;
        }

        console.log('ไฟล์ในโฟลเดอร์:', files);

        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        console.log('ไฟล์รูปภาพที่พบ:', imageFiles);

        if (imageFiles.length === 0) {
            console.log('ไม่พบไฟล์รูปภาพในโฟลเดอร์');
            return;
        }

        const imageJson = JSON.stringify(imageFiles, null, 2);

        fs.writeFile(path.join(__dirname, 'images.json'), imageJson, (err) => {
            if (err) {
                console.error('ไม่สามารถบันทึกไฟล์ JSON:', err);
            } else {
                console.log('ไฟล์ JSON ถูกสร้างแล้ว: images.json');
            }
        });
    });
}

generateImageJson();
