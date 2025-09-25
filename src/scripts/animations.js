// Fast Travel
const fastTravelCard = document.querySelector("#fast-travel-card");
const fastTravelIcon = document.querySelector("#floating-ft-icon-container");

if (fastTravelCard && fastTravelIcon) {
    const fastTravelObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    fastTravelIcon.classList.add("ft-icon-animation");
                } else {
                    fastTravelIcon.classList.remove("ft-icon-animation");
                }
            });
        },
        {
            rootMargin: "0px",
            threshold: 0.5,
        }
    );

    fastTravelObserver.observe(fastTravelCard);
}

// Sign Language CV
const signLanguageCvCard = document.querySelector("#sign-language-cv-card");
const signLanguageCvIcon = document.querySelector("#floating-libras-container");

if (signLanguageCvCard && signLanguageCvIcon) {
    const signLanguageCvObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    signLanguageCvIcon.classList.add("libras-icon-animation");
                } else {
                    signLanguageCvIcon.classList.remove(
                        "libras-icon-animation"
                    );
                }
            });
        },
        {
            rootMargin: "0px",
            threshold: 0.5,
        }
    );

    signLanguageCvObserver.observe(signLanguageCvCard);
}

// MTG card price tracker
const ligaMagicCard = document.querySelector("#liga-magic-card");
const ligaMagicFloatingCard = document.querySelector(
    "#floating-3d-mtg-container"
);

if (ligaMagicCard && ligaMagicFloatingCard) {
    const ligaMagicObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    ligaMagicFloatingCard.classList.add("mtg-card-animation");
                } else {
                    ligaMagicFloatingCard.classList.remove(
                        "mtg-card-animation"
                    );
                }
            });
        },
        {
            rootMargin: "0px",
            threshold: 0.5,
        }
    );

    ligaMagicObserver.observe(ligaMagicCard);
}
