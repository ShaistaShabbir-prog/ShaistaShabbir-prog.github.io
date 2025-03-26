<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shaista Shabbir | AI Researcher & Data Scientist</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background-color: #f4f4f4; }
        header {
            background-color: #1E90FF;
            color: white;
            padding: 30px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .container {
            width: 80%;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .tabs { display: flex; justify-content: space-around; padding: 10px; background: #ddd; border-radius: 5px; }
        .tabs button { background: none; border: none; padding: 10px; cursor: pointer; font-size: 16px; }
        .tabs button:hover { background: #bbb; border-radius: 5px; }
        .tab-content { display: none; padding: 20px; }
        .active { display: block; }
        .profile-img { width: 150px; border-radius: 50%; display: block; margin: auto; }
    </style>
    <script>
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByTagName("button");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }
    </script>
</head>
<body>
    <header>
        <img src="https://via.placeholder.com/150" alt="Shaista Shabbir" class="profile-img">
        <h1>Shaista Shabbir</h1>
        <p>AI Researcher | Data Scientist | Software Engineer</p>
    </header>

    <div class="container">
        <div class="tabs">
            <button onclick="openTab(event, 'about')" class="active">About</button>
            <button onclick="openTab(event, 'experience')">Experience</button>
            <button onclick="openTab(event, 'education')">Education</button>
            <button onclick="openTab(event, 'skills')">Skills</button>
            <button onclick="openTab(event, 'projects')">Projects</button>
            <button onclick="openTab(event, 'publications')">Publications</button>
            <button onclick="openTab(event, 'honours')">Honours & Awards</button>
            <button onclick="openTab(event, 'contact')">Contact</button>
        </div>

        <div id="about" class="tab-content active">
            <h2>About Me</h2>
            <p>Results-driven AI/ML Engineer with extensive experience in developing and deploying cutting-edge machine learning models and NLP solutions...</p>
        </div>

        <div id="experience" class="tab-content">
            <h2>Experience</h2>
            <p><strong>Research Assistant - HITEC Hamburg</strong> (2022 - Present)</p>
            <ul>
                <li>Worked on projects such as CoyPu, PEM, ewiVikis, and DigitalCurri.</li>
                <li>Implemented NLP models (BERT, RoBERTa, LSTM) for event extraction and knowledge discovery.</li>
                <li>Developed deep learning models for energy consumption prediction.</li>
            </ul>
            <p><strong>Computer Science Lecturer - University of Kotli AJK</strong> (2019 - 2022)</p>
            <ul>
                <li>Delivered lectures on AI, Data Science, Machine Learning, and Software Engineering.</li>
                <li>Supervised student research projects in AI and Data Science.</li>
            </ul>
            <p><strong>Research Assistant - COMSENS Lab, COMSATS Islamabad</strong> (2019)</p>
            <ul>
                <li>Conducted research on data analytics and machine learning applications.</li>
            </ul>
            <p><strong>Software Engineer - UMSIT Kotli AJK</strong> (2015 - 2016)</p>
            <ul>
                <li>Developed software solutions for administrative tasks and data management.</li>
            </ul>
        </div>

        <div id="education" class="tab-content">
            <h2>Education</h2>
            <p><strong>MS Computer Science</strong> - VU Pakistan (2017 - 2019)</p>
            <p><strong>BS Computer Science</strong> - University of AJK (2012 - 2016, Gold Medalist)</p>
        </div>

        <div id="skills" class="tab-content">
            <h2>Skills</h2>
            <ul>
                <li>Programming: Python, C, C++, Java</li>
                <li>Machine Learning: PyTorch, TensorFlow</li>
                <li>Data Science: SQL, NoSQL, Data Visualization</li>
                <li>Web Development: Flask, FastAPI, HTML, CSS</li>
            </ul>
        </div>

        <div id="projects" class="tab-content">
            <h2>Projects</h2>
            <ul>
                <li>Face Recognition Based Automated Attendance System</li>
                <li>Drowsiness Detection using DLIB</li>
                <li>Arms Licensing System ALSK</li>
            </ul>
        </div>

        <div id="publications" class="tab-content">
            <h2>Publications</h2>
            <p><a href="https://www.researchgate.net/profile/Shaista-Shabbir/publications">View full publications on ResearchGate</a></p>
        </div>

        <div id="honours" class="tab-content">
            <h2>Honours & Awards</h2>
            <ul>
                <li>Fully Funded Scholarship – DAAD-Higher Education Commission Pakistan</li>
                <li>Gold Medalist in BSCS amongst all the 5 Campuses – University of AJK</li>
                <li>Active Citizen Social Action Project – British Council</li>
                <li>Certificate of Appreciation for Outstanding Services as Volunteer at ICIRM – UMSIT Kotli AJK, Pakistan</li>
            </ul>
        </div>

        <div id="contact" class="tab-content">
            <h2>Contact</h2>
            <p>Email: shaista@example.com</p>
            <p>GitHub: <a href="https://github.com/your-github-username">github.com/your-github-username</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/shaista">linkedin.com/in/shaista</a></p>
        </div>
    </div>
</body>
</html>
