document.addEventListener("DOMContentLoaded", () => {
    // 1. "Did you know?" toggle
    const btn = document.getElementById("factBtn");
    const content = document.getElementById("factContent");
    if (btn && content) {
        btn.addEventListener("click", () => {
            if (content.style.display === "none") {
                content.style.display = "block";
                btn.textContent = "🔽 Hide fact";
            } else {
                content.style.display = "none";
                btn.textContent = "💡 Did you know?";
            }
        });
    }

    // 2. Navigation popup
    document.querySelectorAll("#navigation a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = link.getAttribute("href");
            alert(`📺 Directing to ${target} now...`);
            window.location.href = target;
        });
    });

    // 3. Easter egg heart on About Us page
    if (document.getElementById("aboutMain")) {
        const heart = document.createElement("span");
        heart.textContent = "🥰";
        heart.classList.add("hidden-heart");

        // Random placement
        heart.style.top = Math.random() * (window.innerHeight - 50) + "px";
        heart.style.left = Math.random() * (window.innerWidth - 50) + "px";

        document.body.appendChild(heart);

        // Popup message
        const message = document.createElement("div");
        message.id = "foundMessage";
        message.textContent = "Hooray! You found me 🥰";
        document.body.appendChild(message);

        // Click action
        heart.addEventListener("click", () => {
            heart.classList.add("found");

            // Show popup
            message.style.opacity = "1";
            setTimeout(() => {
                message.style.opacity = "0";
            }, 2000);

            // Spawn blossoms
            for (let i = 0; i < 15; i++) {
                const blossom = document.createElement("div");
                blossom.classList.add("blossom");
                blossom.textContent = "🌸";

                blossom.style.left = Math.random() * window.innerWidth + "px";
                blossom.style.top = "-20px";
                blossom.style.fontSize = Math.random() * 20 + 15 + "px";
                document.body.appendChild(blossom);

                setTimeout(() => blossom.remove(), 4000);
            }
        });
    }


    // 4. Image zoom (lightbox)
    const zoomables = document.querySelectorAll(".zoomable");
    if (zoomables.length > 0) {
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        const img = document.createElement("img");
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        zoomables.forEach(z => {
            z.addEventListener("click", () => {
                img.src = z.src;
                lightbox.style.visibility = "visible";
            });
        });

        lightbox.addEventListener("click", () => {
            lightbox.style.visibility = "hidden";
        });
    }
});
