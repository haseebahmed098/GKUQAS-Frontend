// Urdu answer feature (demo)
function getAnswer() {
  const question = document.getElementById("question").value.trim();
  const answerBox = document.getElementById("answer");

  if (question === "") {
    answerBox.textContent = "براہ کرم کوئی سوال درج کریں۔";
    return;
  }

  answerBox.textContent = "یہ فیچر جلد دستیاب ہوگا۔";
}

// Toggle About & Team sections
function toggleSection(id) {
  const section = document.getElementById(id);

  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
    section.style.opacity = "1";
    section.style.transform = "translateY(0)";
    window.scrollTo({ top: section.offsetTop - 60, behavior: "smooth" });
  } else {
    section.classList.add("hidden");
    section.style.opacity = "0";
  }
}
