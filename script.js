const portfolio = {
  goals: [
    {
      title: "Applied AI Engineering",
      summary:
        "Position the profile for machine learning engineering roles where models must move beyond notebooks into reliable systems.",
      signals: ["Deep learning", "Model evaluation", "Production thinking"],
    },
    {
      title: "Multimodal Research To Product",
      summary:
        "Show depth in audio, EEG, image, text, and cross-attention systems while keeping the explanation accessible to technical reviewers.",
      signals: ["Audio AI", "Computer vision", "NLP"],
    },
    {
      title: "Full-Stack AI Builder",
      summary:
        "Connect backend, database, and interface experience with AI workflows so projects feel deployable, maintainable, and useful.",
      signals: ["Java/Spring", "Python web", "SQL"],
    },
  ],
  experience: [
    {
      role: "Applied AI / ML Engineering",
      organization: "Handshake",
      place: "New York, NY",
      dates: "Current",
      details: [
        "Focused on applied AI and real-world machine learning development in a professional product environment.",
        "Combines AI research orientation with software execution, project ownership, and cross-functional delivery.",
      ],
    },
    {
      role: "Graduate AI/ML Research And Engineering",
      organization: "New York University",
      place: "New York, NY",
      dates: "2023 - 2025",
      details: [
        "Completed advanced coursework across machine learning, deep learning, computer vision, big data, information visualization, machine listening, algorithms, and software engineering.",
        "Participated in the New York City Machine Learning Club and built multiple applied ML systems across audio, healthcare, and multimodal classification.",
      ],
    },
    {
      role: "Multimodal ML Project Contributor",
      organization: "NYU VIDA Center",
      place: "New York, NY",
      dates: "Feb 2024 - May 2024",
      details: [
        "Architected a distributed image-text classification pipeline for illegal wildlife trade detection from e-commerce data.",
        "Combined Spark-scale processing, EfficientNet vision features, DistilBERT text encodings, cross-attention, MLflow, and Databricks workflows.",
      ],
    },
    {
      role: "AI, Data, And Full-Stack Development",
      organization: "Earlier Professional And Project Work",
      place: "Chennai / Hyderabad / Remote",
      dates: "Prior experience",
      details: [
        "Built experience across classification, regression, clustering, forecasting, deep learning, NLP, and computer vision use cases.",
        "Worked with Java, Spring, Hibernate, JDBC, Python, Flask, Django, React, SQL, HTML, and CSS for software and data-driven applications.",
      ],
    },
  ],
  projects: [
    {
      title: "Sound Scene Synthesis (DCASE 2024)",
      dates: "Jan 2025 - May 2025",
      type: "Audio generation research",
      visual: "audio",
      summary:
        "High-fidelity text-to-audio synthesis framework using Wavelet Scattering Transforms to condition TangoFlux and preserve fine temporal-spectral structure.",
      impact:
        "Demonstrates depth in generative audio, representation learning, diffusion/flow matching, and rigorous model evaluation.",
      bullets: [
        "Developed and pretrained a Wavelet-Conditioned VAE with uncertainty-weighted KL and reconstruction objectives.",
        "Integrated CLAP-Ranked Preference Optimization, gated MLPs, contrastive audio-text alignment, and HPC-accelerated PyTorch Lightning training.",
        "Targeted lower Frechet Audio Distance and stronger semantic fidelity versus DCASE baselines, AudioLDM, and Tango2.",
      ],
      stack: ["PyTorch Lightning", "Kymatio", "TangoFlux", "CLAP", "HPC"],
    },
    {
      title: "Harmful Brain Activity Classification",
      dates: "Feb 2024 - May 2024",
      type: "Healthcare AI",
      visual: "eeg",
      summary:
        "Deep learning pipeline for classifying seizures and periodic discharges from EEG spectrograms and raw time-series signals.",
      impact:
        "Shows ability to work with sensitive biomedical data, robust preprocessing, model comparison, and out-of-distribution validation.",
      bullets: [
        "Benchmarked GRU plus Conv1D, EEGNet, EfficientNetB0, and MobileNet approaches.",
        "Built modular training workflows with PyTorch Lightning and TensorFlow.",
        "Applied spectrogram generation, normalization, hyperparameter tuning, early stopping, and generalization checks.",
      ],
      stack: ["PyTorch", "TensorFlow", "EEGNet", "EfficientNet", "Signal processing"],
    },
    {
      title: "Wildlife Trafficking Detection System",
      dates: "Feb 2024 - May 2024",
      type: "Multimodal classification",
      visual: "wildlife",
      summary:
        "Distributed image-text system for detecting illegal wildlife trade patterns in e-commerce listings.",
      impact:
        "Connects AI for social good, big-data engineering, and multimodal reasoning.",
      bullets: [
        "Used Apache Spark and PyTorch for high-throughput processing of unstructured image and text data.",
        "Combined EfficientNet, DistilBERT, and cross-attention to improve inter-modal classification fidelity.",
        "Applied frequent pattern mining, quantile discretization, TF-IDF filtering, MLflow lineage, and Databricks experimentation.",
      ],
      stack: ["Spark", "PyTorch", "DistilBERT", "EfficientNet", "MLflow"],
    },
    {
      title: "Full-Stack Library Management System",
      dates: "Feb 2020 - Apr 2020",
      type: "Web application",
      visual: "library",
      summary:
        "Role-based library operations platform for cataloging, issuing, returning, reserving, and tracking books.",
      impact:
        "Adds a concrete full-stack software engineering foundation to the AI-heavy project set.",
      bullets: [
        "Implemented secure authentication and role-based access control for patrons and administrators.",
        "Built inventory, catalog, reservation, and transaction workflows backed by MySQL.",
        "Created an administrative dashboard for oversight and reporting.",
      ],
      stack: ["Java", "Spring MVC", "MySQL", "RBAC", "Web app"],
    },
  ],
  skills: [
    {
      group: "Machine Learning",
      items: ["Deep learning", "Classification", "Regression", "Clustering", "Time-series forecasting", "Model evaluation"],
    },
    {
      group: "Frameworks",
      items: ["PyTorch", "PyTorch Lightning", "TensorFlow", "Scikit-learn", "Kymatio", "Spark"],
    },
    {
      group: "Multimodal AI",
      items: ["Computer vision", "NLP", "Audio generation", "EEG signal processing", "Cross-attention", "Text-audio alignment"],
    },
    {
      group: "Data And MLOps",
      items: ["SQL", "Databricks", "MLflow", "Feature extraction", "Data lineage", "Distributed pipelines"],
    },
    {
      group: "Full-Stack Engineering",
      items: ["Java", "Spring MVC", "Hibernate", "JDBC", "Python", "Flask", "Django", "React"],
    },
    {
      group: "Foundations",
      items: ["Algorithms", "Software engineering", "Information visualization", "Big data", "Computer vision", "Machine listening"],
    },
  ],
  education: [
    {
      school: "New York University",
      dates: "2023 - 2025",
      details:
        "Graduate study focused on data science, machine learning, deep learning, big data, computer vision, machine listening, software engineering, algorithms, and information visualization.",
    },
    {
      school: "KL University",
      dates: "2018 - 2022",
      details:
        "Computer Science and Engineering background with public university records listing an 8.87 CGPA and First Class standing.",
    },
  ],
  certifications: [
    "Java / J2EE Developer - Wipro",
    "Cisco Certified Network Associate Routing and Switching - Cisco Networking Academy",
    "Certified Software Programmer - Infosys",
    "Certified System Administrator - ServiceNow",
    "Introduction to Artificial Intelligence - Simplilearn",
    "Problem Solving (Basic) - HackerRank",
    "IBM Data Science Specialization - Coursera",
  ],
};

const byId = (id) => document.getElementById(id);

function renderGoals() {
  byId("goalGrid").innerHTML = portfolio.goals
    .map(
      (goal) => `
        <article class="goal-card">
          <h3>${goal.title}</h3>
          <p>${goal.summary}</p>
          <div class="tag-row">
            ${goal.signals.map((signal) => `<span>${signal}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderExperience() {
  byId("experienceTimeline").innerHTML = portfolio.experience
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-date">${item.dates}</div>
          <div class="timeline-card">
            <p class="timeline-place">${item.organization} <span>${item.place}</span></p>
            <h3>${item.role}</h3>
            <ul>
              ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjectVisual(kind) {
  const visualMap = {
    audio: `
      <div class="project-visual audio-visual" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    `,
    eeg: `
      <div class="project-visual eeg-visual" aria-hidden="true">
        ${Array.from({ length: 18 }, (_, index) => `<span style="--level:${(index % 6) + 1}"></span>`).join("")}
      </div>
    `,
    wildlife: `
      <div class="project-visual wildlife-visual" aria-hidden="true">
        <span class="image-tile"></span><span class="text-tile"></span><span class="fusion-tile"></span>
      </div>
    `,
    library: `
      <div class="project-visual library-visual" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
    `,
  };
  return visualMap[kind] || "";
}

function renderProjects() {
  byId("projectGrid").innerHTML = portfolio.projects
    .map(
      (project) => `
        <article class="project-card">
          ${renderProjectVisual(project.visual)}
          <div class="project-body">
            <div class="project-meta">
              <span>${project.type}</span>
              <span>${project.dates}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <p class="impact-copy">${project.impact}</p>
            <ul>
              ${project.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
            <div class="tag-row">
              ${project.stack.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  byId("skillsGrid").innerHTML = portfolio.skills
    .map(
      (skill) => `
        <article class="skill-card">
          <h3>${skill.group}</h3>
          <div class="skill-list">
            ${skill.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderEducation() {
  byId("educationList").innerHTML = portfolio.education
    .map(
      (item) => `
        <article class="credential-card">
          <span>${item.dates}</span>
          <h3>${item.school}</h3>
          <p>${item.details}</p>
        </article>
      `
    )
    .join("");
}

function renderCertifications() {
  byId("certificationList").innerHTML = portfolio.certifications
    .map((certification) => `<div class="certification-item">${certification}</div>`)
    .join("");
}

renderGoals();
renderExperience();
renderProjects();
renderSkills();
renderEducation();
renderCertifications();
