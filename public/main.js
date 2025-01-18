import {ImageProcessor} from '../pkg';

async function init() {
    const input = document.getElementById('upload');
    const fileReader = new FileReader();
    const originalImg = document.getElementById('new-img');
    let originalBase64 = null;
    let processedBase64 = null;
    let fileName = 'processed-image.png';
    let originalFileName = '';


    fileReader.onloadend = () => {
        originalBase64 = fileReader.result;
        originalImg.setAttribute('src', originalBase64);
        processedBase64 = originalBase64;

        const uploadedFileName = input.files[0]?.name || 'uploaded-image';
        originalFileName = uploadedFileName.replace(/\.[^/.]+$/, '');
    };

    input.addEventListener('change', () => {
        if (input.files && input.files[0]) {
            fileReader.readAsDataURL(input.files[0]);
        }
    });


    const downloadBtn = document.getElementById('download_label');
    downloadBtn.addEventListener('click', () => {
        const imageSrc = processedBase64 || originalBase64;
        if (!imageSrc) {
            alert('No image to download!');
            return;
        }

        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });


    document.getElementById('grayscale-btn').addEventListener('click', (e) => {
        e.preventDefault();
        if (originalBase64) {
            let base64 = originalBase64.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
            try {
                let img_data_url = ImageProcessor.grayscale(base64);
                processedBase64 = img_data_url;
                originalImg.setAttribute('src', img_data_url);
                fileName = `grayscale-${originalFileName}`;
            } catch (e) {
                console.log(e);
            }
        }
    });

    document.getElementById('reset-btn').addEventListener('click', (e) => {
        e.preventDefault();
        if (originalBase64) {
            processedBase64 = originalBase64;
            originalImg.setAttribute('src', originalBase64);
            fileName = originalFileName;
        }
    });

    document.getElementById('blur-btn').addEventListener('click', (e) => {
        e.preventDefault();
        if (originalBase64) {
            let base64 = originalBase64.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
            try {
                let sigma = 12.0;
                let img_data_url = ImageProcessor.blur(base64, sigma);
                processedBase64 = img_data_url;
                originalImg.setAttribute('src', img_data_url);
                fileName = `blur-${originalFileName}`;
            } catch (e) {
                console.log(e);
            }
        }
    });
}

init();
