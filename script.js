const portfolio = {
  goals: [
    {
      title: "LLM evaluation & agentic-system testing",
      summary:
        "Execution-based validation, adversarial suites, and guardrails for LLM-driven and agentic features.",
      signals: ["Execution-based validation", "Adversarial suites", "Guardrails"],
    },
    {
      title: "Multimodal research turned into usable product",
      summary:
        "Applied work across audio, vision, text, structured data, and cross-attention systems.",
      signals: ["Audio", "Vision", "Text", "Structured data"],
    },
    {
      title: "Data systems wired to business outcomes",
      summary:
        "Risk analytics, retention, support automation, and experimentation built from reliable data workflows.",
      signals: ["Risk analytics", "Retention", "Support automation", "Experimentation"],
    },
  ],
  experience: [
    {
      role: "AI Research Fellow",
      organization: "Handshake AI",
      place: "New York, NY",
      dates: "Oct 2025 - Present",
      details: [
        "Built execution-based validation pipelines for LLM-generated code, raising test pass rates from 60% to 87%+ and cutting invalid downstream code.",
        "Engineered latency-optimized inference paths (batching, caching, streamlined routing), reducing end-to-end pipeline latency from 1.8s to 1.1s while maintaining model quality.",
        "Translated qualitative user feedback into measurable evaluation criteria and guardrails for LLM-driven features in partnership with PMs and engineers.",
        "Developed adversarial and edge-case test suites for agentic systems, doubling unique failure-mode coverage and improving robustness on unseen scenarios by ~20%.",
      ],
      tech: "Python, PyTorch, internal evaluation frameworks, cloud services.",
    },
    {
      role: "Data Analyst",
      organization: "Tiger Analytics",
      place: "Chennai, India",
      dates: "Jun 2022 - May 2023",
      details: [
        "Architected an end-to-end risk analytics pipeline using hierarchical clustering to segment 1M+ customer profiles, mitigating an estimated $4.5M in credit-default and compliance risk.",
        "Engineered automated time-series forecasting frameworks with RNN architectures, achieving 90%+ prediction accuracy across a $10M+ at-risk portfolio.",
        "Deployed an AI-powered chatbot using Azure Bot Framework and Tiny-RoBERTa to support 10,000+ daily queries, then improved real-time engagement by 60% via an active-learning QnA pipeline.",
      ],
      tech: "Python, scikit-learn, RNNs, Azure Bot Framework, Tiny-RoBERTa, SQL, dashboards.",
    },
    {
      role: "Data Science Intern",
      organization: "Tiger Analytics",
      place: "Chennai, India",
      dates: "Oct 2021 - Jun 2022",
      details: [
        "Built scalable ETL pipelines using PySpark and advanced SQL to process 500GB+ of industrial data, accelerating downstream ML deployments by 30%.",
        "Ran hypothesis-driven A/B tests with Python, pandas, and SciPy, informing product changes that delivered a 15% uplift in user retention.",
        "Designed Tableau dashboards and anomaly-detection models that surfaced $500K+ in strategic opportunities and reduced processing anomalies by 40%.",
      ],
      tech: "PySpark, SQL, Python, SciPy, Tableau, SparkSQL, Hadoop.",
    },
    {
      role: "Graduate AI/ML Research And Engineering",
      organization: "New York University",
      place: "New York, NY",
      dates: "Sep 2023 - May 2025",
      details: [
        "Completed graduate study in computer science with applied work across machine learning, deep learning, computer vision, big data, information visualization, machine listening, algorithms, and software engineering.",
        "Built report-backed ML systems across generative audio, EEG analysis, underwater vision, salary prediction, food classification, and multimodal wildlife-trade detection.",
      ],
      tech: "PyTorch, TensorFlow, Spark, Python, Docker, modern CV and NLP models.",
    },
    {
      role: "Software Engineer",
      organization: "EPAM Systems",
      place: "Hyderabad, India",
      dates: "Jun 2022 - Aug 2023",
      details: [
        "Designed and deployed production-grade REST APIs and microservices using Java and Spring Boot to support internal data workflows and cross-team integrations.",
        "Improved reliability with unit and integration tests, reducing post-release incidents and speeding up CI/CD pipeline throughput.",
        "Collaborated with cross-functional teams to gather requirements, scope technical solutions, and deliver features across iterative release cycles.",
      ],
      tech: "Java, Spring Boot, REST APIs, CI/CD, relational databases.",
    },
  ],
  projects: [
    {
      slug: "intelliquest",
      title: "IntelliQuest — Academic Paper Search Engine",
      dates: "2023",
      type: "Full-stack web application",
      course: "Software Engineering Course Project",
      visual: "search",
      summary: "A specialized search engine for academic papers with personalized recommendations, advanced filtering, and AI-powered relevance ranking for students, researchers, and faculty.",
      built: "Full-stack system with React, Django, PostgreSQL, and GPT-powered semantic search, including indexing, filters, and recommendation logic in a 5-person team.",
      impact: "Delivered a live deployment used by students and faculty, improving the relevance and speed of academic literature discovery.",
      metrics: [
        { label: "Team size", value: "5" },
        { label: "Role", value: "Collaborator" },
        { label: "Deployment", value: "Digital Ocean" },
      ],
      stack: ["React", "Django", "PostgreSQL", "Docker", "AWS", "OpenAI GPT"],
      details: {
        problem: "Researchers and students struggle to find, filter, and track academic papers across fragmented databases — no single platform offers personalized recommendations alongside advanced search.",
        dataset: "Academic papers corpus with keyword, author, journal, citation, and date metadata.",
        approach: [
          "Built a React.js frontend with dynamic filtering by keyword, author, publication date, and citation metrics.",
          "Developed a Django REST backend with PostgreSQL for user profiles, reading lists, and paper metadata.",
          "Integrated OpenAI GPT for personalized recommendation based on user search history.",
          "Containerized full stack with Docker and deployed live on Digital Ocean.",
          "Implemented Google Auth for user authentication and secure sessions.",
        ],
        results: [
          "Live deployment at http://165.227.74.112:3000/ serving full search and recommendation features.",
          "Supports advanced filtering by relevance, date, citation count, and journal impact.",
          "Users can save favorites, create reading lists, and follow authors.",
        ],
        role: "Collaborated as a team member on a 5-person software engineering team; contributed to frontend components, backend integration, and quiz/search feature development across multiple pull requests.",
        takeaways: [
          "End-to-end full-stack development with React, Django, and PostgreSQL in a team setting.",
          "Hands-on experience with Docker containerization and cloud deployment on Digital Ocean.",
          "Practical integration of GPT-based personalization into a production search system.",
        ],
        sources: ["https://github.com/ShaktidharK1997/IntelliQuest"],
      },
      links: [{ label: "GitHub", href: "https://github.com/ShaktidharK1997/IntelliQuest" }],
    },
    {
      slug: "sound-scene-synthesis",
      title: "Sound Scene Synthesis",
      dates: "2025",
      type: "Generative audio",
      course: "ECE-GY 9173 Machine Listening",
      visual: "audio",
      summary:
        "A DCASE 2024 Task 7 text-to-audio synthesis system exploring AudioLDM, Tango2, TangoFlux, and wavelet-scattering representations.",
      built:
        "Diffusion-based text-to-audio pipelines with CLAP-aligned conditioning, wavelet features via Kymatio, and a VAE-based reconstruction module.",
      impact:
        "Improved Frechet Audio Distance from a 62.68 baseline to 51.08 on the dev set, demonstrating better text-to-audio alignment and generative quality.",
      metrics: [
        { label: "Best dev FAD", value: "51.08" },
        { label: "Baseline dev FAD", value: "62.68" },
        { label: "VAE training", value: "150 epochs" },
      ],
      stack: ["AudioLDM", "TangoFlux", "Tango2", "CLAP", "Kymatio", "VAE", "PyTorch"],
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
        "Underwater object detection and out-of-distribution recognition on FathomNet2023 using YOLOv8, YOLOv11, wavelet preprocessing, and depth-aware analysis.",
      built:
        "Detection and OOD pipelines with underwater-specific preprocessing, YOLO fine-tuning, and feature-extraction workflows for downstream classifiers.",
      impact:
        "Achieved 97.12% OOD accuracy and 91% SAUC on 5,950 underwater images, demonstrating robust detection and recognition under challenging visual conditions.",
      metrics: [
        { label: "Images", value: "5,950" },
        { label: "OOD accuracy", value: "97.12%" },
        { label: "SAUC", value: "91%" },
      ],
      stack: ["YOLOv8", "YOLOv11", "ResNet50", "Random Forest", "Wavelets", "PCA", "PyTorch"],
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
      built:
        "Multi-model pipeline using EEGNet, GRU, ResNet, and spectrogram-based EfficientNet inputs over 50-second EEG and 10-minute spectrogram windows.",
      impact:
        "Demonstrated robust seizure and harmful activity detection across 6 classes, with careful generalization analysis across patients and recording conditions.",
      metrics: [
        { label: "EEG window", value: "50 sec" },
        { label: "Spectrogram window", value: "10 min" },
        { label: "Classes", value: "6" },
      ],
      stack: ["TensorFlow", "PyTorch", "EfficientNetB0", "EEGNet", "GRU", "ResNet"],
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
        "A modified ResNet architecture designed to stay under 5M trainable parameters while achieving strong CIFAR-10 performance.",
      built:
        "Compact residual network with Squeeze-and-Excitation blocks, regularization, and architectural tweaks to meet strict parameter constraints.",
      impact:
        "Reached 93.67% test accuracy with 4.70M parameters, improving over a 0.2790 test-loss baseline under the same budget.",
      metrics: [
        { label: "Accuracy", value: "93.67%" },
        { label: "Test loss", value: "0.2790" },
        { label: "Params", value: "4.70M" },
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
        "Image classification study comparing VGG16, MobileNet, and Xception under accuracy, memory, CPU, and response-time constraints.",
      built:
        "End-to-end deployment pipeline with Kubernetes YAML, model selection, and resource-constrained benchmarking for real-world inference scenarios.",
      impact:
        "Improved accuracy from 0.7621 to 0.8892 while keeping best-response time at 0.72 seconds within memory and CPU limits.",
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
      built:
        "End-to-end pipeline from messy civic data ingestion and text processing to statistical tests, model selection, and tuned ensemble regressors.",
      impact:
        "Achieved an R² of 0.8478 on 6,634 rows with 30 engineered features, capturing key drivers of salary bands.",
      metrics: [
        { label: "Rows", value: "6,634" },
        { label: "Features", value: "30" },
        { label: "Best R²", value: "0.8478" },
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
  title: "Wildlife Trafficking Detection",
  dates: "2024",
  type: "Multimodal AI",
  course: "Big Data Project",
  visual: "wildlife",
  summary:
    "A multimodal system that flags suspicious wildlife-trade ads using listing text, images, price, and location signals.",
  built:
    "Spark-based feature engineering pipeline plus multimodal model with EfficientNet for images, DistilBERT for text, and cross-attention over structured features.",
  impact:
    "Reached 94.08% accuracy, 93.02% recall, and 85.11% precision, prioritizing high recall on a real-world classification problem.",
  metrics: [
    { label: "Accuracy", value: "94.08%" },
    { label: "Recall", value: "93.02%" },
    { label: "Precision", value: "85.11%" },
  ],
  stack: [
    "Spark MLlib",
    "EfficientNet",
    "DistilBERT",
    "PyTorch",
    "Cross-Attention",
  ],
  details: {
    problem:
      "Online wildlife-trade listings are noisy, short-lived, and difficult to detect at scale. This project focused on classifying suspicious animal-related ads by combining image, text, and structured metadata.",
    dataset:
      "Used online animal-related advertisement data with fields such as image, description, seller, country, and price, followed by cleaning and normalization before modeling.",
    approach: [
      "Engineered structured features from seller, country, category, and price attributes using Spark MLlib.",
      "Normalized and discretized price fields to reduce outlier effects from inconsistent currencies and listing formats.",
      "Extracted visual features with EfficientNet and text features with DistilBERT.",
      "Fused image, text, price, and country signals in a multimodal classification pipeline.",
    ],
    results: [
      "Achieved 94.08% test accuracy, 93.02% recall, and 85.11% precision.",
      "High recall made the system useful for screening workflows where missed positive cases are costly.",
      "Showed that combining metadata with image and text signals improved classification strength.",
    ],
    role:
      "Contributed to feature engineering, multimodal pipeline design, and evaluation analysis for the project.",
    takeaways: [
      "Multimodal systems can outperform single-modality approaches on noisy listing data.",
      "Structured metadata like price and location adds meaningful predictive value.",
      "More labeled data and calibration would likely improve precision further.",
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
      built:
        "Full-stack system with Java, Spring MVC, and MySQL including RBAC, transactional operations, and reporting views.",
      impact:
        "Demonstrated concrete software engineering skills in authentication, relational data modeling, and workflow implementation beyond ML projects.",
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
      group: "AI And Machine Learning",
      items: ["Generative AI architectures", "LLM evaluation pipelines", "Multimodal deep learning", "NLP", "Automated validation", "Adversarial testing"],
    },
    {
      group: "Modeling And Analytics",
      items: ["Time-series forecasting", "RNNs", "Hierarchical clustering", "A/B testing", "Statistical modeling"],
    },
    {
      group: "Frameworks",
      items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Spark MLlib", "Hugging Face"],
    },
    {
      group: "Data Engineering And ETL",
      items: ["PySpark", "SQL", "Hive", "SparkSQL", "Hadoop", "Distributed pipeline orchestration"],
    },
    {
      group: "Tools And Platforms",
      items: ["Python", "Pandas", "SciPy", "NumPy", "Git", "Docker", "Azure Bot Framework", "Tableau"],
    },
    {
      group: "Model Families",
      items: ["YOLOv8", "YOLOv11", "EfficientNet", "DistilBERT", "Tiny-RoBERTa", "XGBoost", "Random Forest"],
    },
  ],
  skillStories: [
    {
      title: "LLM Evaluation",
      proof: "60% → 87%+",
      summary: "Execution-based validation, root-cause diagnostics, adversarial tests, and agentic failure-mode coverage.",
    },
    {
      title: "Production Data",
      proof: "500GB+",
      summary: "PySpark, SQL, Hive, SparkSQL, Hadoop, ETL orchestration, and downstream ML acceleration.",
    },
    {
      title: "Multimodal AI",
      proof: "9 projects",
      summary: "Audio, EEG, underwater vision, ad images, job text, food images, and cross-attention systems.",
    },
    {
      title: "Business Impact",
      proof: "$4.5M+",
      summary: "Risk segmentation, forecasting, retention experiments, support automation, and stakeholder dashboards.",
    },
  ],
  education: [
    {
      school: "New York University",
      dates: "Sep 2023 - May 2025",
      details:
        "Master of Science in Computer Science, New York, NY. Graduate study focused on AI/ML, data science, systems, and applied research projects.",
      coursework:
        "Selected coursework: Machine Learning, Deep Learning, Big Data, Computer Vision, Information Visualization, Machine Listening, Algorithms, Software Engineering.",
    },
    {
      school: "KL University",
      dates: "Jun 2018 - Apr 2022",
      details:
        "Bachelor of Science in Computer Science and Engineering with Artificial Intelligence, Vijayawada, India.",
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
  footer: {
    copy: "© 2026 Chhatrapathi Sivaji Lakkimsetty. All rights reserved.",
  },
};

const byId = (id) => document.getElementById(id);

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const projectFilterLabels = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "data", label: "Data" },
  { id: "vision", label: "Vision" },
  { id: "systems", label: "Systems" },
];

const projectCategoryBySlug = {
  intelliquest: "systems",
  "sound-scene-synthesis": "ai",
  "fathomnet-visual-categorization": "vision",
  "harmful-brain-activity-classification": "ai",
  "resnet-cifar10-under-5m": "vision",
  "food11-ml-deployment": "systems",
  "nyc-salary-range-prediction": "data",
  "wildlife-trafficking-ads": "ai",
  "library-management-system": "systems",
};

function renderGoals() {
  byId("goalGrid").innerHTML = portfolio.goals
    .map(
      (goal) => `
        <article class="goal-card">
          <h3>${goal.title}</h3>
          <p>${goal.summary}</p>
          <div class="goal-signals">
            ${goal.signals.map((signal) => `<span class="goal-signal">${signal}</span>`).join("")}
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
          <div class="timeline-content">
            <p class="timeline-org">${item.organization}</p>
            <p class="timeline-place">${item.place}</p>
            <h3>${item.role}</h3>
            <ul>
              ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
            ${item.tech ? `<p class="timeline-tech"><strong>Tech:</strong> ${item.tech}</p>` : ""}
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
    search: `
      <div class="project-visual search-visual" aria-hidden="true">
        <span class="search-ring"></span><span class="search-line"></span><span class="search-dot"></span>
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
        <a class="project-card" data-category="${projectCategoryBySlug[project.slug]}" href="#project/${project.slug}" aria-label="View detailed case study for ${project.title}">
          ${renderProjectVisual(project.visual)}
          <div class="project-meta">
            <span>${project.type}</span>
            <span>${project.dates}</span>
          </div>
          <h3>${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
          <ul class="project-card-points">
            <li><strong>What I built:</strong> ${project.built}</li>
            <li><strong>Impact:</strong> ${project.impact}</li>
          </ul>
          <div class="project-metrics">
            ${project.metrics.map((metric) => `<span class="project-metric"><strong>${metric.value}</strong><span>${metric.label}</span></span>`).join("")}
          </div>
          <p class="project-tech-line"><strong>Tech:</strong> ${project.stack.slice(0, 6).join(", ")}</p>
          <div class="project-stack">
            ${project.stack.slice(0, 6).map((item) => `<span class="project-tech">${item}</span>`).join("")}
          </div>
          <span class="project-cta">View case study <span>↗</span></span>
        </a>
      `
    )
    .join("");
}

function renderProjectFilters() {
  byId("projectFilter").innerHTML = projectFilterLabels
    .map(
      (filter, index) => `
        <button class="${index === 0 ? "active" : ""}" type="button" data-filter="${filter.id}">
          ${filter.label}
        </button>
      `
    )
    .join("");
}

function bindProjectFilters() {
  byId("projectFilter").addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
      return;
    }

    const filter = button.dataset.filter;
    byId("projectFilter")
      .querySelectorAll("button")
      .forEach((item) => item.classList.toggle("active", item === button));

    byId("projectGrid")
      .querySelectorAll(".project-card")
      .forEach((card) => {
        const visible = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-filtered-out", !visible);
      });
  });
}

function renderSkillStories() {
  byId("skillStoryGrid").innerHTML = portfolio.skillStories
    .map(
      (story) => `
        <article class="skill-story">
          <strong class="skill-story-proof">${story.proof}</strong>
          <h3>${story.title}</h3>
          <p>${story.summary}</p>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  byId("skillsGrid").innerHTML = portfolio.skills
    .map(
      (skill) => `
        <article class="skill-group">
          <h3>${skill.group}</h3>
          <div class="skill-items">
            ${skill.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
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
        <article class="education-item">
          <span class="education-date">${item.dates}</span>
          <h3>${item.school}</h3>
          <p>${item.details}</p>
          ${item.coursework ? `<p class="coursework">${item.coursework}</p>` : ""}
        </article>
      `
    )
    .join("");
}

function renderCertifications() {
  byId("certificationList").innerHTML = portfolio.certifications
    .map((certification) => `<li>${certification}</li>`)
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
    <article class="project-detail-inner project-detail">
      <a class="project-detail-back" href="#projects">← Back to projects</a>
      <p class="project-meta"><span>${project.type}</span><span>${project.dates}</span><span>${project.course}</span></p>
      <h1>${project.title}</h1>
      <p>${project.summary}</p>
      <p><strong>What I built:</strong> ${project.built}</p>
      <p><strong>Impact:</strong> ${project.impact}</p>
      <div class="project-metrics">
        ${project.metrics.map((metric) => `<span class="project-metric"><strong>${metric.value}</strong><span>${metric.label}</span></span>`).join("")}
      </div>

      <h2>Stack</h2>
      <div class="project-stack">
        ${project.stack.map((item) => `<span class="project-tech">${item}</span>`).join("")}
      </div>

      ${renderDetailBlock("Problem", project.details.problem)}
      ${renderDetailBlock("Dataset", project.details.dataset)}
      ${renderDetailList("Approach", project.details.approach)}
      ${renderDetailList("Results", project.details.results)}
      ${renderDetailBlock("My Role", project.details.role)}
      ${renderDetailList("Technical Takeaways", project.details.takeaways)}

      <h2>Sources Used</h2>
      <ul>
        ${project.details.sources.map((source) => `<li>${source}</li>`).join("")}
      </ul>

      ${
        project.links
          ? `<h2>Links</h2>
              <div class="project-stack">
                ${project.links.map((link) => `<a class="project-tech" href="${link.href}" target="_blank" rel="noreferrer">${link.label} ↗</a>`).join("")}
              </div>`
          : ""
      }
    </article>
  `;

  const resetScroll = () => {
    const html = document.documentElement;
    const body = document.body;
    const htmlScrollBehavior = html.style.scrollBehavior;
    const bodyScrollBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";
    html.scrollTop = 0;
    body.scrollTop = 0;

    if (typeof window.scrollTo === "function") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    html.style.scrollBehavior = htmlScrollBehavior;
    body.style.scrollBehavior = bodyScrollBehavior;
  };

  resetScroll();
  requestAnimationFrame(() => {
    resetScroll();
    requestAnimationFrame(resetScroll);
  });
  [80, 180, 360].forEach((delay) => setTimeout(resetScroll, delay));
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
renderProjectFilters();
renderProjects();
bindProjectFilters();
renderSkillStories();
renderSkills();
renderEducation();
renderCertifications();
handleRoute();

const navBurger = document.querySelector(".nav-burger");
const navLinks = document.querySelector(".nav-links");

if (navBurger && navLinks) {
  navBurger.addEventListener("click", () => {
    const expanded = navBurger.getAttribute("aria-expanded") === "true";
    navBurger.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open", !expanded);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navBurger.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("open");
    }
  });
}

window.addEventListener("hashchange", handleRoute);
