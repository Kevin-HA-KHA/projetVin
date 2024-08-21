document.querySelectorAll('.img-support-box img').forEach((image) => {
    image.addEventListener("click", () => {
        // Vérifie si un overlay existe déjà
        if (document.querySelector('.image-overlay')) return;

        // Créer l'overlay de fond
        let overlay = document.createElement('div');
        overlay.classList.add('image-overlay');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.zIndex = '9998';
        overlay.style.cursor = 'zoom-out';

        // Ajouter l'overlay au corps du document
        document.body.appendChild(overlay);

        // Créer une copie de l'image cliquée
        let zoomedImage = image.cloneNode(true);
        zoomedImage.style.position = 'fixed';
        zoomedImage.style.top = '50%';
        zoomedImage.style.left = '50%';
        zoomedImage.style.transform = 'translate(-50%, -50%)';
        zoomedImage.style.maxWidth = '80%'; // Pour s'assurer que l'image ne déborde pas
        zoomedImage.style.maxHeight = '80%';
        zoomedImage.style.zIndex = '9999';
        zoomedImage.style.cursor = 'zoom-out';

        // Ajouter la copie de l'image à l'overlay
        overlay.appendChild(zoomedImage);

        // Ajouter un gestionnaire pour fermer l'image en cliquant sur l'overlay
        overlay.addEventListener("click", () => {
            document.body.removeChild(overlay);
        });
    });
});
