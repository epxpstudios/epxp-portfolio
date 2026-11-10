const projectCards = document.querySelectorAll(".cinematic-project");

const videoModal = document.createElement("div");

videoModal.className = "video-modal";

videoModal.innerHTML = `
    <div class="video-modal-content">
        <button
            class="video-modal-close"
            aria-label="Close video">
            ×
        </button>

        <iframe
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
`;

document.body.appendChild(videoModal);

const modalIframe = videoModal.querySelector("iframe");
const closeButton = videoModal.querySelector(".video-modal-close");

projectCards.forEach(card => {

    const playButton = card.querySelector(".play-button");

    if (!playButton) return;

    playButton.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        const videoURL = card.dataset.video;

        if (!videoURL) return;

        modalIframe.src = videoURL;

        videoModal.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});

function closeVideo() {

    videoModal.classList.remove("active");

    modalIframe.src = "";

    document.body.style.overflow = "";
}

closeButton.addEventListener("click", closeVideo);

videoModal.addEventListener("click", (event) => {

    if (event.target === videoModal) {
        closeVideo();
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeVideo();
    }

});