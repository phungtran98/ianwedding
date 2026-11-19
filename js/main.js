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
  "By Le": {
    title: ["By Le (BA)"],
    body: "Wish you both well as your marriage blossoms from the wonderful seed you have planted today, happiness follows you wherever you go.",
  },
  Andy: {
    title: ["Andy", "(dev lead)"],
    body: "Congrats, you two!\nWhat a ripper day – so stoked for you both. Wishing you a lifetime of love, laughs and adventures together. Cheers!",
  },
  Danh: {
    title: ["Danh", "(AI lead)"],
    body: "Congratulations on your wedding, Ian. From all of us on the PH2 AI Team, we wish you a marriage that feels like coming home, warm and safe and always full of light. May the love you share grow deeper and gentler with every year, filling your days with quiet joy and your hearts with lasting happiness.",
  },
  "React Stream": {
    title: ["From React Stream"],
    names: "Hoa (Dev Lead), Ha (Dev), Duyen (QC)",
    body: "From React Stream: Hi Ian, wishing you a lifetime of love and happiness! - Hoa Nguyen -",
  },
  "Pro. Support": {
    title: ["From Production Support Stream"],
    names: "Phuc Nguyen (Lead), Tai (Dev)",
    body: "Congratulations on your wedding, Ian! It's been great working with you on the project, and I'm thrilled to hear this wonderful news. Wishing you both all the best as you start this exciting new chapter!",
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
      const willOpen = !card.classList.contains("is-flipped");
      document.querySelectorAll(".person.is-flipped").forEach((other) => {
        if (other === card) return;
        other.classList.remove("is-flipped");
        other.setAttribute("aria-pressed", "false");
      });
      card.classList.toggle("is-flipped", willOpen);
      card.setAttribute("aria-pressed", String(willOpen));
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

  let userPaused = false;

  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => {
    if (userPaused) setPlaying(false);
  });

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

const CONFETTI_COLORS = ["#f70042", "#ffc352", "#769312", "#8e54be", "#267eaf", "#57a78f", "#ffffff"];
const GIFT_EMOJIS = ["🎁", "💍", "💐", "💌", "💖", "🥂"];

function burstConfetti(side, count, fromTop = false) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let layer = document.getElementById("confetti");
  if (!layer) {
    layer = document.createElement("div");
    layer.id = "confetti";
    layer.className = "confetti";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const dir = side === "left" ? 1 : -1;
  const originX = side === "left" ? -10 : w + 10;
  const originY = fromTop ? -10 : h + 10;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    if (fromTop) {
      piece.className = "confetti__gift";
      piece.textContent = GIFT_EMOJIS[Math.floor(Math.random() * GIFT_EMOJIS.length)];
    } else {
      piece.className = "confetti__piece" + (Math.random() < 0.3 ? " confetti__piece--round" : "");
      piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    }
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    layer.appendChild(piece);

    const apexX = dir * w * (0.15 + Math.random() * 0.3);
    const apexY = fromTop ? h * (0.2 + Math.random() * 0.15) : -h * (0.45 + Math.random() * 0.35);
    const endX = apexX + dir * w * (0.05 + Math.random() * 0.1);
    const endY = fromTop ? h * (0.7 + Math.random() * 0.5) : h * (0.15 + Math.random() * 0.5);
    const spin = Math.random() * 720 - 360;

    const animation = piece.animate(
      [
        { transform: "translate(0px, 0px) rotate(0deg)", easing: "cubic-bezier(0.2, 0.6, 0.4, 1)" },
        { transform: `translate(${apexX}px, ${apexY}px) rotate(${spin / 2}deg)`, easing: "cubic-bezier(0.5, 0, 0.8, 0.6)" },
        { transform: `translate(${endX}px, ${endY}px) rotate(${spin}deg)` },
      ],
      { duration: 1400 + Math.random() * 700, delay: Math.random() * 150, fill: "forwards" }
    );
    animation.onfinish = () => piece.remove();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("final-open");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("popup-close");
  const ctaButton = document.getElementById("popup-cta");
  if (!openButton || !popup || !closeButton || !ctaButton) return;

  const open = () => {
    popup.classList.add("is-open");
    closeButton.focus();
    burstConfetti("left", 70);
    burstConfetti("right", 70);
  };

  let ctaClicks = 0;

  ctaButton.addEventListener("click", () => {
    ctaClicks += 1;
    burstConfetti("left", 40);
    burstConfetti("right", 40);
    if (ctaClicks > 2) {
      burstConfetti("left", 30, true);
      burstConfetti("right", 30, true);
    }
  });

  const close = () => {
    popup.classList.remove("is-open");
    ctaClicks = 0;
    openButton.focus();
  };

  openButton.addEventListener("click", open);
  closeButton.addEventListener("click", close);
  popup.addEventListener("click", (event) => {
    if (event.target === popup) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && popup.classList.contains("is-open")) close();
  });
});

// Memory Lane: bấm card để đưa lên trên cùng, bấm lại để trả về lớp cũ.
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".memory-card");

  const toggleFront = (card) => {
    const willFront = !card.classList.contains("is-front");
    cards.forEach((other) => other.classList.remove("is-front"));
    card.classList.toggle("is-front", willFront);
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => toggleFront(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleFront(card);
      }
    });
  });
});

const PETAL_COLORS = ["#fff7f4", "#f6d5dc", "#f3c3cb", "#fffdf8", "#f8e6d8"];
const PETAL_LIMIT = 24;

function dropPetal(layer, started) {
  if (layer.childElementCount >= PETAL_LIMIT) return;

  const petal = document.createElement("span");
  petal.className = "petal";
  petal.style.background = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
  petal.style.left = `${Math.random() * window.innerWidth}px`;
  petal.style.top = "-24px";
  layer.appendChild(petal);

  const height = window.innerHeight + 40;
  const sway = 36 + Math.random() * 70;
  const dir = Math.random() < 0.5 ? -1 : 1;
  const spin = 140 + Math.random() * 220;
  const duration = 14000 + Math.random() * 6000;
  const animation = petal.animate(
    [
      { transform: "translate(0px, 0px) rotate(0deg)" },
      { transform: `translate(${dir * sway}px, ${height * 0.5}px) rotate(${spin / 2}deg)`, offset: 0.5 },
      { transform: `translate(${dir * sway * -0.35}px, ${height}px) rotate(${spin}deg)` },
    ],
    { duration, easing: "linear", fill: "forwards" }
  );

  if (!started) animation.currentTime = Math.random() * duration * 0.8;
  animation.onfinish = () => petal.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layer = document.createElement("div");
  layer.className = "petals";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  for (let i = 0; i < 10; i++) dropPetal(layer, false);
  window.setInterval(() => dropPetal(layer, true), 900);
});
