# GKUQAS-Frontend
<!DOCTYPE html>
<html lang="ur" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>جنرل نالج سوال جواب نظام (GKUQAS)</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- 🔹 Navbar -->
  <nav class="navbar">
    <div class="logo">🌟 GKUQAS</div>
    <div class="nav-links">
      <button onclick="toggleSection('about')">About</button>
      <button onclick="toggleSection('team')">Team</button>
    </div>
  </nav>

  <!-- 🔹 Main Card -->
  <div class="container">
    <div class="card">
      <h1>✨ جنرل نالج سوال جواب نظام ✨</h1>
      <p>اردو میں کوئی بھی جنرل نالج سوال درج کریں، ہم جواب دیں گے۔</p>

      <div class="input-group">
        <input type="text" id="question" placeholder="اپنا سوال یہاں لکھیں..." />
        <button onclick="getAnswer()">جواب حاصل کریں</button>
      </div>

      <p id="answer"></p>
    </div>
  </div>

  <!-- 🔹 About Section (English) -->
  <section id="about" class="hidden">
    <h2>About Our Project</h2>
    <p>
      The <strong>General Knowledge Urdu Question Answering System (GKUQAS)</strong> 
      is an AI-based project that understands Urdu questions and provides accurate answers.
      Our mission is to promote Urdu language technology and make general knowledge easily accessible 
      for Urdu-speaking users.
    </p>
  </section>

  <!-- 🔹 Team Section (English) -->
  <section id="team" class="hidden">
    <h2>Meet Our Team</h2>
    <div class="team-container">

      <div class="team-member">
        <img src="F:\New folder\075e8657-c987-4966-946e-364699081acd.jpg" alt="Haseeb Ahmed">
        <h3>Haseeb Ahmed</h3>
        <p>AI Student | NLP & Frontend Developer</p>
      </div>

      <div class="team-member">
        <img src="partner.jpg" alt="Partner">
        <h3>[Partner Name]</h3>
        <p>AI Student | Data Processing & Model Training Expert</p>
      </div>

    </div>
  </section>

  <!-- 🔹 Footer -->
  <footer>
    <p>© 2025 GKUQAS Project | Developed by Haseeb Ahmed & [Partner Name]</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>


@import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600&family=Poppins:wght@400;600&display=swap');

body {
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-family: 'Noto Nastaliq Urdu', serif;
  color: #333;
  direction: rtl;
}

/* 🔹 Navbar */
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.5rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: white;
  font-size: 1.1rem;
}

.nav-links {
  display: flex;
  gap: 0.8rem;
}

.nav-links button {
  background: #f1f3ff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.nav-links button:hover {
  background: #d9e0ff;
  transform: scale(1.05);
}

/* 🔹 Main Card */
.container {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  background: #fff;
  padding: 2rem 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  max-width: 420px;
}

.card h1 {
  font-size: 1.5rem;
  color: #2b2b52;
}

.card p {
  color: #555;
  margin-top: 0.5rem;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.input-group input {
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Noto Nastaliq Urdu', serif;
}

.input-group button {
  background: #5b6ef5;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: 'Noto Nastaliq Urdu', serif;
}

.input-group button:hover {
  background: #4752c4;
}

/* 🔹 Sections (About / Team) */
section {
  background: #fff;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

section h2 {
  color: #2b2b52;
  margin-bottom: 1rem;
}

.hidden {
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

/* 🔹 Team Section */
.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.team-member {
  background-color: #f8f8ff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 300px;
}

.team-member img {
  width: 100%;
  height: 300x;
  object-fit: cover;
  border-radius: 10px;
}

.team-member h3 {
  margin-top: 0.7rem;
  color: #004aad;
}

/* 🔹 Footer */
footer {
  margin: 2rem 0;
  color: white;
  font-size: 0.9rem;
  text-align: center;
}
footer a {
  color: #ffdd57;
  text-decoration: none;
}
