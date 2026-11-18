const messages = {
  "Phu Tran": {
    title: ["Phu Tran", "(technical lead)"],
    body: "Congratulations on your wedding, Ian! 🎉 Wishing you and your wife a lifetime of love, happiness, and wonderful memories together. All the best to both of you!",
  },
  "Duc Le - Daniel": {
    title: ["Duc Le - Daniel", "(Dev Ops)"],
    body: 'My condolences on the loss of your single life, and congrats on the wedding! Well life is actually not so bad over here. Pro tip: "Yes, dear" is usually one of the ultimate get-out-of-jail-free cards. Wishing you a lifetime of happiness!',
  },
  "Thuy Le": {
    title: ["Thuy le", "(Designer)"],
    body: '"To get the full value of joy, you must have someone to divide it with." — Mark Twain\n\nDear Ian, so happy to see you find your perfect match. Wishing you a wonderful lifelong "Sprint" filled with love, laughter, and endless happiness! 🥂💍✨',
  },
  Chrysanne: {
    title: ["Chrysanne (BA)"],
    body: "You've mastered the art of shaping our great product. Now, wishing you and your bride a lifetime of co-designing your very own 'Home Sweet Home,' with every corner filled with joy and unforgettable memories.",
  },
  "Trung Do": {
    title: ["Trung Do (Dev)"],
    body: "To Ian and your wonderful partner,\n\nCongratulations to you both on this wonderful occasion!\n\nMay this new chapter of your lives be filled with endless love, happiness, laughter, and countless beautiful memories. May you always find joy in the little things, strength in each other, and adventure in every step of the journey ahead.\n\nWishing you both a lifetime of love and happiness. May your journey together be even more wonderful than you ever imagined.\n\nWith warmest wishes!",
  },
  "Khoa Vu": {
    title: ["Khoa Vu (BOSS)"],
    body: "Congratulations on your upcoming wedding.\n\nWe've been working together for almost 5 years now, and I'm really happy to hear that you're starting this wonderful new chapter of your life.\n\nI wish you and your future wife a lifetime of happiness, love, and understanding. May you always support each other, share the good moments, and stand together through any challenges that life may bring.\n\nWishing you both a beautiful wedding day and a long, happy marriage filled with wonderful memories.\n\nAll the best to you both, Ian.",
  },
  Trinh: {
    title: ["Trinh (QC lead)"],
    body: "Hey Ian, congrats on the wedding mate! Really happy for you both! Hope you guys have an awesome day, and send us some photos if you can 😄",
  },
  "Jon V": {
    title: ["Jon V", "(Data lead)"],
    body: "Congratulations on your wedding, Ian! Wishing you and your partner a lifetime of love, laughter, and endless adventures together. Cheers to this exciting new chapter!",
    image: "assets/images/jon-message.gif",
  },
  "Quan Huynh": {
    title: ["Quan Huynh (Dev)"],
    body: "Congratulations, Ian! Wishing you both a lifetime of love and happiness. Despite the challenges and uncertainty this year has brought, you’ve faced so much together. May this new chapter bring you joy, wonderful memories, and strength in each other through whatever life brings.",
  },
  "Phung Tran": {
    title: ["Phung Tran (Dev)"],
    body: "Hi Ian, congratulations on your upcoming wedding. Wishing you and your partner a lovely celebration and plenty of happy years together.",
  },
  "Team QC": {
    title: ["Team QC (Platform & React)"],
    names: "Trang, Quang, Thu, Phat, Hang",
    body: "Wishing you both a lifetime of love, happiness, and wonderful memories together. Congratulations on your wedding!",
  },
};

function fitMessage(back) {
  let fit = 1;
  const apply = () => back.style.setProperty("--fit", String(fit));
  apply();
  while (back.scrollHeight > back.clientHeight && fit > 0.45) {
    fit = Math.round((fit - 0.02) * 100) / 100;
    apply();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const backs = [];

  document.querySelectorAll(".person").forEach((card) => {
    const note = messages[card.dataset.name];
    if (!note) return;

    const avatar = card.querySelector(".person__avatar");
    const flip = document.createElement("div");
    flip.className = "person__flip";

    const front = document.createElement("div");
    front.className = "person__face person__face--front";
    front.appendChild(avatar);

    const back = document.createElement("div");
    back.className = "person__face person__face--back";

    const name = document.createElement("p");
    name.className = "person__message-name";
    note.title.forEach((line) => {
      name.append(line, document.createElement("br"));
    });
    name.lastChild.remove();
    back.appendChild(name);

    if (note.names) {
      const names = document.createElement("p");
      names.className = "person__message-names";
      names.textContent = note.names;
      back.appendChild(names);
    }

    const body = document.createElement("p");
    body.className = "person__message-body";
    body.textContent = note.body;
    back.appendChild(body);

    if (note.image) {
      const art = document.createElement("img");
      art.className = "person__message-art";
      art.src = note.image;
      art.alt = "";
      back.appendChild(art);
    }

    flip.append(front, back);
    card.appendChild(flip);
    card.setAttribute("aria-pressed", "false");
    backs.push(back);

    const art = back.querySelector(".person__message-art");
    if (art) art.addEventListener("load", () => fitMessage(back));

    card.addEventListener("click", () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
    });
  });

  const fitAll = () => backs.forEach(fitMessage);
  fitAll();
  document.fonts.ready.then(fitAll);
  window.addEventListener("resize", fitAll);

  const audio = document.getElementById("bg-music");
  const disc = document.getElementById("disc-toggle");

  const setPlaying = (playing) => {
    disc.classList.toggle("is-playing", playing);
    disc.setAttribute("aria-label", playing ? "Pause music" : "Play music");
  };

  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));

  let userPaused = false;

  disc.addEventListener("click", () => {
    if (audio.paused) {
      userPaused = false;
      audio.play();
    } else {
      userPaused = true;
      audio.pause();
    }
  });

  // Trình duyệt chặn tự phát có tiếng, nên bắt đầu ở cử chỉ đầu tiên của người dùng.
  audio.play().catch(() => {});

  ["pointerdown", "keydown", "touchstart"].forEach((type) => {
    document.addEventListener(
      type,
      (event) => {
        if (disc.contains(event.target)) return;
        if (audio.paused && !userPaused) {
          audio.play().catch(() => {});
        }
      },
      { passive: true }
    );
  });
});
