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
        "Built applied ML systems across audio generation, EEG analysis, underwater vision, salary prediction, food classification, and multimodal wildlife-trade detection.",
      ],
    },
    {
      role: "Computer Vision And Multimodal ML Project Contributor",
      organization: "NYU Project Work",
      place: "New York, NY",
      dates: "2023 - 2025",
      details: [
        "Led or contributed to report-backed projects using YOLOv8, YOLOv11, EfficientNet, DistilBERT, cross-attention, Spark MLlib, Random Forests, XGBoost, and TensorFlow/Keras.",
        "Owned feature extraction, network architecture, model training, NLP feature engineering, regression model comparison, and production-resource analysis across different projects.",
      ],
    },
    {
      role: "AI, Data, And Full-Stack Development",
      organization: "Earlier Professional And Project Work",
      place: "Chennai / Hyderabad / Remote",
      dates: "Prior experience",
      details: [
        "Built experience across classification, regression, clustering, forecasting, deep learning, NLP, computer vision, and web application use cases.",
        "Worked with Java, Spring, Hibernate, JDBC, Python, Flask, Django, React, SQL, HTML, and CSS for software and data-driven applications.",
      ],
    },
  ],
  projects: [
    {
      slug: "sound-scene-synthesis",
      title: "Sound Scene Synthesis",
      dates: "2025",
      type: "Generative audio",
      course: "ECE-GY 9173 Machine Listening",
      visual: "audio",
      summary:
        "A DCASE 2024 Task 7 text-to-audio synthesis system exploring AudioLDM, Tango2, TangoFlux, and wavelet scattering representations.",
      impact:
        "Shows deep generative-audio work across diffusion pipelines, CLAP alignment, wavelet features, VAE reconstruction, and Frechet Audio Distance evaluation.",
      metrics: [
        { label: "Best dev FAD", value: "51.08" },
        { label: "Baseline dev FAD", value: "62.68" },
        { label: "VAE training", value: "150 epochs" },
      ],
      stack: ["AudioLDM", "TangoFlux", "Tango2", "CLAP", "Kymatio", "VAE", "PANNs"],
      details: {
        problem:
          "The project tackles DCASE 2024 Task 7: generate four-second, 32 kHz mono environmental audio from text prompts that describe foreground and background sound scenes. The challenge is difficult because the development data provides only 60 text prompts and high-level audio embeddings rather than original waveform recordings.",
        dataset:
          "The development set contains 60 prompt/audio-embedding pairs. Prompts include foreground sound events such as animal sounds and background contexts such as water, birds, or traffic. Evaluation uses embedding-space similarity rather than direct waveform comparison.",
        approach: [
          "Reimplemented and compared AudioLDM, Tango2, TangoFlux, AudioLDM/Tango2, and AudioLDM/TangoFlux configurations.",
          "Designed a wavelet-conditioned VAE using raw AudioCaps audio and scattering coefficients extracted with Kymatio.",
          "Trained TangoFlux to predict scattering coefficients from CLAP text embeddings and duration embeddings, with the VAE decoder intended to reconstruct waveforms from predicted scattering features.",
          "Tracked Frechet Audio Distance using PANNs CNN14 Wavegram-Logmel embeddings as the primary perceptual evaluation metric.",
        ],
        results: [
          "On the 60-sample development set, AudioLDM/TangoFlux produced the strongest measured result with FAD 51.0765, improving over AudioLDM at 62.6838, Tango2 at 60.8796, TangoFlux alone at 56.5396, and AudioLDM/Tango2 at 53.5921.",
          "The wavelet-conditioned VAE showed stable convergence over 150 epochs, with validation loss plateauing after roughly 60 epochs.",
          "The full TangoFlux-wavelet integration could not be completed within the project timeline because AudioCaps scale and training time were too large for the available compute window.",
        ],
        role:
          "Contributed to the report-backed team system design, implementation direction, model comparison, and analysis of generative audio architectures.",
        takeaways: [
          "Strong text-to-audio systems need both a capable backbone and a well-designed generative pipeline.",
          "TangoFlux improved dev-set FAD when integrated with AudioLDM, suggesting stronger temporal encoding and generation dynamics than Tango2 in this setup.",
          "Wavelet scattering remains a promising intermediate representation, but the complete training loop needs longer HPC runs for a fair quantitative evaluation.",
        ],
        sources: ["Final_Report.pdf"],
      },
    },
    {
      slug: "fathomnet-visual-categorization",
      title: "FathomNet Fine-Grained Visual Categorization",
      dates: "2025",
      type: "Computer vision",
      course: "CS-GY 6643 Computer Vision",
      visual: "vision",
      summary:
        "Underwater object detection and out-of-distribution recognition on FathomNet2023 using YOLOv8, YOLOv11, wavelet preprocessing, and depth-shift analysis.",
      impact:
        "Demonstrates modern object detection, underwater image preprocessing, OOD detection, feature extraction ownership, and model-training leadership.",
      metrics: [
        { label: "Dataset", value: "5,950 images" },
        { label: "OOD accuracy", value: "97.12%" },
        { label: "sAUC", value: "91%" },
      ],
      stack: ["YOLOv8", "YOLOv11", "ResNet50", "Random Forest", "Wavelets", "PCA", "K-Means"],
      details: {
        problem:
          "Underwater visual recognition is vulnerable to domain shift caused by depth, lighting, camera conditions, incomplete annotations, class imbalance, and unknown organisms. The project studied whether object detection models could generalize from shallower training images to deeper validation environments.",
        dataset:
          "The FathomNet2023 dataset contains 5,950 underwater images across 290 marine categories and 20 supercategories. Training images were captured from 0 to 800 meters while validation images extend to 1,300 meters, creating a depth-driven distribution shift.",
        approach: [
          "Built a YOLOv8m baseline on the full dataset with a 60/40 split over 200 epochs.",
          "Applied wavelet-based preprocessing to reduce underwater hue, illumination, and blueness so models had to focus more on structure than color cues.",
          "Compared YOLOv8m, YOLOv11, YOLOv11 on preprocessed data, and larger YOLOv11 variants across split strategies.",
          "Built an out-of-sample detector using ResNet50 feature extraction, Random Forest classification, K-Means clustering, and PCA visualization.",
        ],
        results: [
          "YOLOv11 showed very strong convergence and near-perfect mAP behavior in the strongest reported variants, outperforming the YOLOv8 baseline in reliability and adaptability.",
          "Wavelet preprocessing revealed a useful tradeoff: it reduced reliance on color and illumination, but made fine-grained recognition harder until the model adapted.",
          "The out-of-sample pipeline achieved about 97.12% accuracy and around 91% rescaled AUC for distinguishing in-distribution versus deeper OOD images.",
        ],
        role:
          "Owned feature extraction, network architecture, and model training according to the report's author-contribution section.",
        takeaways: [
          "Depth-aware visual categorization needs both strong detectors and explicit OOD handling.",
          "YOLOv11 was the strongest practical benchmark in this study because of its accuracy, parameter efficiency, and stable learning curves.",
          "A production-ready underwater model should combine detection, uncertainty/OOD scoring, and continuous learning from new marine samples.",
        ],
        sources: ["computer_vision_Final_Report__Copy_.pdf"],
      },
    },
    {
      slug: "harmful-brain-activity-classification",
      title: "Harmful Brain Activity Classification",
      dates: "2024",
      type: "Healthcare deep learning",
      course: "Deep Learning Final Project",
      visual: "eeg",
      summary:
        "EEG and spectrogram classification system for detecting seizures and harmful brain activity in neurocritical-care recordings.",
      impact:
        "Shows healthcare AI work with time-series signals, spectrogram engineering, multi-model benchmarking, and careful generalization analysis.",
      metrics: [
        { label: "EEG window", value: "50 sec" },
        { label: "Spectrogram window", value: "10 min" },
        { label: "Classes", value: "6" },
      ],
      stack: ["TensorFlow", "PyTorch", "EfficientNetB0", "EEGNet", "GRU", "ResNet", "Kaggle HMS"],
      links: [{ label: "GitHub", href: "https://github.com/ShaktidharK1997/DLFinalProject" }],
      details: {
        problem:
          "Critically ill patients often require EEG monitoring to detect seizures and other harmful brain activity. Manual EEG interpretation depends on specialized neurologists and can be slow, expensive, and vulnerable to fatigue. The project explored deep learning models that classify EEG patterns automatically.",
        dataset:
          "The report uses HMS Harmful Brain Activity data with metadata files, 50-second EEG segments sampled at 200 Hz, and 10-minute spectrogram windows. Labels cover six expert-voted categories: seizure, LPD, GPD, LRDA, GRDA, and other.",
        approach: [
          "Built an EfficientNetB0 pipeline over custom 512 by 512 spectrogram images constructed from Kaggle-provided spectrograms and EEG-derived spectrogram channels.",
          "Implemented an EEGNet plus 1D ResNet architecture to capture spatial EEG patterns and deeper temporal representations.",
          "Implemented a GRU plus ResNet model that combines parallel 1D convolutional layers, residual blocks, dropout, max pooling, and recurrent sequence modeling.",
          "Compared EEGNet, MobileNet, EfficientNet, and GRU training/validation loss behavior over 25 epochs.",
        ],
        results: [
          "GRU showed the strongest generalization pattern, with validation loss closely mirroring training loss and minimal overfitting.",
          "EfficientNet maintained low and stable validation loss with minor spikes, making it another strong candidate for EEG spectrogram classification.",
          "MobileNet and EEGNet were less stable in this project setup, with MobileNet showing larger validation fluctuations and EEGNet struggling to generalize as well.",
        ],
        role:
          "Contributed to the team implementation and comparative evaluation of deep learning approaches for EEG and spectrogram classification.",
        takeaways: [
          "Hybrid convolutional-recurrent models are well suited for EEG because they can capture both local signal patterns and longer temporal dependencies.",
          "Spectrogram construction can convert raw EEG into a form that image backbones can process, but model choice and validation stability matter heavily.",
          "Future work should test ensembles, more EEG-specific features, and stronger regularization.",
        ],
        sources: ["Deep_Learning_Final_Project.pdf"],
      },
    },
    {
      slug: "resnet-cifar10-under-5m",
      title: "Parameter-Efficient ResNet For CIFAR-10",
      dates: "2024",
      type: "Efficient image classification",
      course: "Deep Learning Mini Project",
      visual: "resnet",
      summary:
        "A modified ResNet architecture designed to achieve high CIFAR-10 accuracy while staying under a 5M trainable-parameter budget.",
      impact:
        "Highlights architecture design, residual learning, Squeeze-and-Excitation, regularization, and model-size constraints.",
      metrics: [
        { label: "Accuracy", value: "93.67%" },
        { label: "Test loss", value: "0.2790" },
        { label: "Parameters", value: "4.70M" },
      ],
      stack: ["PyTorch", "ResNet", "CIFAR-10", "SE blocks", "BatchNorm", "Dropout"],
      links: [{ label: "GitHub", href: "https://github.com/ShaktidharK1997/DLProject" }],
      details: {
        problem:
          "The project goal was to design a CIFAR-10 image classifier that balances accuracy, depth, and computational efficiency under a strict 5 million trainable-parameter limit.",
        dataset:
          "CIFAR-10 provides 50,000 training images and 10,000 validation images across 10 object classes. Images were normalized with standard CIFAR-10 channel means and standard deviations.",
        approach: [
          "Designed a modified ResNet with three residual groups using depths of 4, 4, and 3 blocks.",
          "Used 3 by 3 convolutions, shortcut connections with 1 by 1 convolutions when dimensions changed, batch normalization, ReLU activations, and adaptive average pooling.",
          "Added dropout at 0.1 inside residual blocks to reduce overfitting.",
          "Integrated Squeeze-and-Excitation blocks for channel-wise feature recalibration without a large parameter increase.",
        ],
        results: [
          "Achieved 93.67% CIFAR-10 test accuracy with average test loss of 0.2790.",
          "Stayed under the project constraint with 4,697,742 trainable parameters.",
          "Training accuracy approached near-perfect levels while test accuracy stabilized after roughly 75 epochs, indicating useful generalization under the parameter budget.",
        ],
        role:
          "Contributed to the team architecture design, training workflow, and model evaluation under constrained-parameter requirements.",
        takeaways: [
          "Residual blocks plus SE recalibration provide a strong accuracy-to-parameter tradeoff.",
          "Regularization and controlled width/depth expansion were critical to staying under the 5M-parameter limit.",
          "Future gains could come from Cutout, Mixup, cyclic learning rates, warm-up schedules, and teacher-student distillation.",
        ],
        sources: ["DL_MiniProject.pdf"],
      },
    },
    {
      slug: "food11-ml-deployment",
      title: "Food-11 Classification And Deployment",
      dates: "2023",
      type: "ML deployment",
      course: "Machine Learning Project",
      visual: "food",
      summary:
        "A Food-11 image classifier deployment study comparing VGG16, MobileNet, and Xception under accuracy, memory, CPU, and response-time tradeoffs.",
      impact:
        "Connects model improvement with production-resource thinking: accuracy, response time, memory, CPU limits, and deployment YAML configuration.",
      metrics: [
        { label: "Best accuracy", value: "0.8892" },
        { label: "Baseline accuracy", value: "0.7621" },
        { label: "Best response", value: "0.72 sec" },
      ],
      stack: ["TensorFlow", "Keras", "VGG16", "MobileNet", "Xception", "Kubernetes YAML"],
      details: {
        problem:
          "The baseline Food-11 classifier used VGG16 and reached 0.7621 validation accuracy, but it struggled with confusing classes such as dessert, dairy, seafood, eggs, breads, and mixed food images. The project improved the model while analyzing deployment resource costs.",
        dataset:
          "The project uses the Food-11 image classification task with 224 by 224 RGB inputs and 11 food categories.",
        approach: [
          "Compared the VGG16 baseline against a MobileNet model and an Xception model.",
          "Added dense layers, ReLU activations, dropout at 0.5, Adam optimization, sparse categorical cross-entropy, image resizing, and data generators.",
          "Fine-tuned each improved model by unfreezing the last five base-model layers and lowering Adam's learning rate to 0.0001.",
          "Measured deployment resource requirements including CPU usage, memory, response time, CPU requests/limits, and memory requests/limits.",
        ],
        results: [
          "VGG16 baseline reached 0.7621 overall accuracy using 517m CPU, 489 MB memory, and 0.45 second response time.",
          "MobileNet improved accuracy to 0.8756 with 764m CPU, 629 MB memory, and 0.67 second response time.",
          "Xception reached the best reported accuracy at 0.8892 with 1550m CPU, 800 MB memory, and 0.72 second response time.",
        ],
        role:
          "Owned model comparison, fine-tuning analysis, deployment-resource interpretation, and recommendation framing.",
        takeaways: [
          "The best-performing model was not the cheapest model; accuracy increased with memory and CPU requirements.",
          "Xception handled prior class-confusion issues most effectively but required more memory.",
          "MobileNet remained a cost-effective option when infrastructure efficiency matters more than the last accuracy gain.",
        ],
        sources: ["ML_Project_report.pdf", "ML_Presentation.pdf"],
      },
    },
    {
      slug: "nyc-salary-range-prediction",
      title: "NYC Job Salary Range Prediction",
      dates: "2023",
      type: "Data science",
      course: "CS-GY 6053 Foundation of Data Science",
      visual: "salary",
      summary:
        "Regression and NLP project predicting salary ranges for New York City job listings using feature engineering, ANOVA, Random Forest, and XGBoost.",
      impact:
        "Shows end-to-end data science: messy civic data, text processing, feature engineering, statistical testing, model comparison, and tuning.",
      metrics: [
        { label: "Rows", value: "6,634" },
        { label: "Features", value: "30" },
        { label: "Best R2", value: "0.8478" },
      ],
      stack: ["Python", "NLP", "scikit-learn", "Random Forest", "XGBoost", "GridSearchCV", "ANOVA"],
      details: {
        problem:
          "The project predicts salary ranges for jobs posted on New York City's official job portal. The goal is to help employers benchmark compensation and help applicants understand salary expectations from role, location, level, qualifications, and skill signals.",
        dataset:
          "The Jobs Posting NYC dataset contains 6,634 job postings with 30 features, including demographic location, salary range, job description, role, level, experience, education, technical skills, and processing dates.",
        approach: [
          "Processed long text fields such as job descriptions, residency requirements, preferred skills, and educational qualifications with NLP tokenization and n-gram frequency features.",
          "Used feature engineering and statistical analysis, including one-way ANOVA, box plots, violin plots, and categorical/continuous dependency checks.",
          "Compared regression models including Linear Regression, Ridge/Lasso concepts, Random Forest Regressor, Gradient Boosting, and XGBoost.",
          "Applied 5-fold cross-validation and GridSearchCV hyperparameter tuning.",
        ],
        results: [
          "Random Forest improved from an initial R2 of 0.6884 to a tuned R2 of 0.7626.",
          "XGBoost achieved the strongest report-level result, improving from an initial R2 of 0.7690 to a tuned R2 of 0.8478.",
          "Important salary drivers included career level, borough, title classifications, and engineered text-derived features.",
        ],
        role:
          "Owned NLP, feature engineering, and regression model comparison according to the project contribution table.",
        takeaways: [
          "Salary prediction benefits from both structured job attributes and unstructured text processing.",
          "Ensemble models handled nonlinearity better than simple linear assumptions in this dataset.",
          "The project could extend into salary-band classification, job-fit prediction, and time-series forecasting of posting trends.",
        ],
        sources: ["CS-GY6053_Project_Report.pdf", "CS6053_Project.pdf", "CS6053_Project.ipynb"],
      },
    },
    {
      slug: "wildlife-trafficking-ads",
      title: "Wildlife Trafficking Detection From Animal-Related Ads",
      dates: "2024",
      type: "Big data and multimodal AI",
      course: "Big Data Project",
      visual: "wildlife",
      summary:
        "A multimodal big-data system for identifying wildlife-trade signals in online animal-related advertisements using structured features, images, and text.",
      impact:
        "Combines AI for social good with Spark feature engineering, image models, language models, cross-attention, and deployment-minded evaluation.",
      metrics: [
        { label: "Test accuracy", value: "94.08%" },
        { label: "Test recall", value: "93.02%" },
        { label: "Test precision", value: "85.11%" },
      ],
      stack: ["Spark MLlib", "EfficientNet", "DistilBERT", "CrossAttention", "Quantile Discretizer", "Frequent patterns"],
      details: {
        problem:
          "Illegal wildlife trade threatens biodiversity, ecosystems, and public health. The project focuses on identifying online advertisements for animal trading by combining product images, text descriptions, prices, countries, sellers, and categories.",
        dataset:
          "The project works with animal-related online advertisement data collected from trading sites. Cleaning removed incomplete ads and normalized fields such as price, country, seller, domain, and product category.",
        approach: [
          "Used Spark MLlib for feature engineering over location, price, category, seller, and domain attributes.",
          "Applied frequent pattern matching and quantile discretization to create price bins and discover high-confidence itemsets.",
          "Transformed images with EfficientNet after removing the final classification layer so image feature maps could feed the multimodal model.",
          "Transformed advertisement text with DistilBERT and combined image/text signals with cross-attention plus normalized price and country features.",
        ],
        results: [
          "The model achieved 99.58% training accuracy, 99.53% training recall, and 99.07% training precision.",
          "On the test set, it achieved 94.08% accuracy, 93.02% recall, and 85.11% precision.",
          "The high recall suggests the model was effective at identifying positive wildlife-trade signals, though precision could improve with more data and tuning.",
        ],
        role:
          "Contributed to multimodal model framing, big-data feature engineering, and evaluation analysis for the wildlife-trade detection pipeline.",
        takeaways: [
          "Combining structured metadata, text, and image features improves signal quality for suspicious-ad classification.",
          "High recall is valuable for screening workflows where missing a risky ad is costly.",
          "Additional labeled data and hyperparameter tuning should improve precision while preserving recall.",
        ],
        sources: ["Big_Data_Final_Report.pdf"],
      },
    },
    {
      slug: "library-management-system",
      title: "Full-Stack Library Management System",
      dates: "2020",
      type: "Software engineering",
      course: "Independent full-stack project",
      visual: "library",
      summary:
        "Role-based web application for managing library catalog, issuing, returns, reservations, inventory, and administrative oversight.",
      impact:
        "Balances the AI project set with concrete full-stack engineering, relational data modeling, authentication, and workflow implementation.",
      metrics: [
        { label: "Stack", value: "Java" },
        { label: "Database", value: "MySQL" },
        { label: "Access", value: "RBAC" },
      ],
      stack: ["Java", "Spring MVC", "MySQL", "JDBC", "Hibernate", "RBAC"],
      details: {
        problem:
          "Libraries need reliable workflows for cataloging books, tracking availability, managing users, issuing and returning books, handling reservations, and giving administrators clear operational visibility.",
        dataset:
          "The system is backed by relational entities for books, patrons, administrators, transactions, reservations, and inventory state.",
        approach: [
          "Implemented role-based access control for patrons and administrators.",
          "Built workflows for catalog search, book issuing, returns, reservations, inventory tracking, and administrative reporting.",
          "Used Java/Spring MVC patterns with a MySQL persistence layer.",
        ],
        results: [
          "Delivered a structured full-stack web application with separation between user-facing workflows and admin operations.",
          "Created a practical software foundation that complements later AI/ML work.",
        ],
        role:
          "Designed and implemented the application workflow, database-backed operations, and access-control behavior.",
        takeaways: [
          "The project established core web engineering habits: authentication, CRUD design, relational modeling, and workflow clarity.",
          "These foundations carry into AI products, where models still need reliable user interfaces, storage, and permissions.",
        ],
        sources: ["LinkedIn / resume project listing"],
      },
    },
  ],
  skills: [
    {
      group: "Machine Learning",
      items: ["Deep learning", "Classification", "Regression", "Clustering", "Time-series forecasting", "Model evaluation"],
    },
    {
      group: "Frameworks",
      items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Spark MLlib", "Kymatio"],
    },
    {
      group: "Multimodal AI",
      items: ["Computer vision", "NLP", "Audio generation", "EEG signal processing", "Cross-attention", "Text-audio alignment"],
    },
    {
      group: "Data And MLOps",
      items: ["SQL", "Databricks", "MLflow", "GridSearchCV", "Data lineage", "Distributed pipelines"],
    },
    {
      group: "Full-Stack Engineering",
      items: ["Java", "Spring MVC", "Hibernate", "JDBC", "Python", "Flask", "Django", "React"],
    },
    {
      group: "Model Families",
      items: ["YOLOv8", "YOLOv11", "EfficientNet", "DistilBERT", "XGBoost", "Random Forest", "ResNet"],
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
    vision: `
      <div class="project-visual vision-visual" aria-hidden="true">
        <span class="vision-box large"></span><span class="vision-box small"></span><span class="vision-depth"></span>
      </div>
    `,
    eeg: `
      <div class="project-visual eeg-visual" aria-hidden="true">
        ${Array.from({ length: 18 }, (_, index) => `<span style="--level:${(index % 6) + 1}"></span>`).join("")}
      </div>
    `,
    resnet: `
      <div class="project-visual resnet-visual" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    `,
    food: `
      <div class="project-visual food-visual" aria-hidden="true">
        <span class="plate"></span><span class="wedge"></span><span class="grain"></span>
      </div>
    `,
    salary: `
      <div class="project-visual salary-visual" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
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
        <a class="project-card" href="#project/${project.slug}" aria-label="View detailed case study for ${project.title}">
          ${renderProjectVisual(project.visual)}
          <div class="project-body">
            <div class="project-meta">
              <span>${project.type}</span>
              <span>${project.dates}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <p class="impact-copy">${project.impact}</p>
            <div class="metric-strip">
              ${project.metrics.map((metric) => `<span><strong>${metric.value}</strong>${metric.label}</span>`).join("")}
            </div>
            <div class="tag-row">
              ${project.stack.slice(0, 6).map((item) => `<span>${item}</span>`).join("")}
            </div>
            <span class="project-link">View case study</span>
          </div>
        </a>
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

function renderProjectDetail(slug) {
  const project = portfolio.projects.find((item) => item.slug === slug);
  const detail = byId("projectDetail");

  if (!project) {
    document.body.classList.remove("detail-mode");
    detail.hidden = true;
    return;
  }

  document.body.classList.add("detail-mode");
  detail.hidden = false;
  detail.innerHTML = `
    <div class="detail-shell">
      <a class="back-link" href="#projects">Back to projects</a>
      <div class="detail-hero">
        <div>
          <p class="eyebrow">${project.type}</p>
          <h1>${project.title}</h1>
          <p class="detail-intro">${project.summary}</p>
          <div class="detail-meta-row">
            <span>${project.course}</span>
            <span>${project.dates}</span>
          </div>
        </div>
        <div class="detail-metrics">
          ${project.metrics.map((metric) => `<div><strong>${metric.value}</strong><span>${metric.label}</span></div>`).join("")}
        </div>
      </div>

      <div class="detail-layout">
        <aside class="detail-sidebar">
          <div class="detail-panel">
            <h2>Stack</h2>
            <div class="tag-row">
              ${project.stack.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </div>
          <div class="detail-panel">
            <h2>Sources Used</h2>
            <ul class="source-list">
              ${project.details.sources.map((source) => `<li>${source}</li>`).join("")}
            </ul>
          </div>
          ${
            project.links
              ? `<div class="detail-panel">
                  <h2>Links</h2>
                  <div class="detail-links">
                    ${project.links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
                  </div>
                </div>`
              : ""
          }
        </aside>

        <article class="case-study">
          ${renderDetailBlock("Problem", project.details.problem)}
          ${renderDetailBlock("Dataset", project.details.dataset)}
          ${renderDetailList("Approach", project.details.approach)}
          ${renderDetailList("Results", project.details.results)}
          ${renderDetailBlock("My Role", project.details.role)}
          ${renderDetailList("Technical Takeaways", project.details.takeaways)}
        </article>
      </div>
    </div>
  `;

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function renderDetailBlock(title, body) {
  return `
    <section class="case-section">
      <h2>${title}</h2>
      <p>${body}</p>
    </section>
  `;
}

function renderDetailList(title, items) {
  return `
    <section class="case-section">
      <h2>${title}</h2>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function handleRoute() {
  const hash = window.location.hash || "";

  if (hash.startsWith("#project/")) {
    renderProjectDetail(hash.replace("#project/", ""));
    return;
  }

  document.body.classList.remove("detail-mode");
  byId("projectDetail").hidden = true;
}

renderGoals();
renderExperience();
renderProjects();
renderSkills();
renderEducation();
renderCertifications();
handleRoute();

window.addEventListener("hashchange", handleRoute);
