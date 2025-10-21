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
