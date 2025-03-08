document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const captureButton = document.getElementById('capture');
    const frameSelect = document.getElementById('frameSelect');
    const gallery = document.getElementById('gallery');
    let photoCount = 0;
    const maxPhotos = 5;

    // Akses webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing webcam:', error);
        });

    // Ambil Foto
    captureButton.addEventListener('click', () => {
        if (photoCount < maxPhotos) {
            context.drawImage(video, 0, 0, 640, 480);

            const frameImage = new Image();
            frameImage.src = frameSelect.value;

            frameImage.onload = () => {
                context.drawImage(frameImage, 0, 0, 640, 480);
                const framedPhoto = canvas.toDataURL('image/png');

                const framedImg = document.createElement('img');
                framedImg.src = framedPhoto;
                framedImg.classList.add('photo');

                const link = document.createElement('a');
                link.href = framedPhoto;
                link.download = `photo_${photoCount + 1}.png`;
                link.textContent = `Download Foto ${photoCount + 1}`;
                link.classList.add('download-btn');

                const photoContainer = document.createElement('div');
                photoContainer.classList.add('photo-container');
                photoContainer.appendChild(framedImg);
                photoContainer.appendChild(link);

                gallery.appendChild(photoContainer);

                photoCount++;
                if (photoCount === maxPhotos) {
                    captureButton.disabled = true;
                }
            };
        }
    });
});
