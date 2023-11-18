function downloadImage() {
    var modalImage = document.getElementById('modalImage');
    var link = document.createElement('a');

    link.href = modalImage.src;
    link.download = 'techmanthan-events.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('promo');

    // Toggle mute on button click
    document.getElementById('toggleMute').addEventListener('click', function () {
        video.muted = !video.muted;
    });
});

document.getElementById('downloadButton').addEventListener('click', function() {
    // Get the image source
    var imageUrl = "assets\brochure.pdf";

    // Create an anchor element"D:\tm\site\assets\brochure.pdf"
    var link = document.createElement('a');

    // Set the href attribute to the image source
    link.href = imageUrl;

    // Set the download attribute with a desired filename
    link.download = 'tech manthan 2k23.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
});