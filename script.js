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
        "Led development of execution-based validation pipelines for LLM-generated code, raising test pass rates from 60% to 87%+ and significantly reducing invalid downstream code.",
        "Engineered latency-optimized inference paths (batching, caching, streamlined routing), reducing end-to-end pipeline latency from 1.8s to 1.1s while maintaining model quality.",
        "Collaborated with PMs and engineers to turn qualitative user feedback into measurable evaluation criteria and guardrails for LLM-driven features.",
        "Designed experiments and ablation studies to analyze model failure modes, informing iteration on prompts, routing, and guardrail policies.",
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
        "Engineered automated time-series forecasting frameworks with RNN architectures for a $10M+ at-risk B2B credit portfolio, achieving 90%+ prediction accuracy.",
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
        "Ran hypothesis-driven A/B tests with Python, pandas, and SciPy for product and operations experiments, informing changes that delivered a 15% uplift in user retention.",
        "Designed Tableau dashboards and anomaly-detection models that surfaced $500K+ in strategic opportunities and reduced processing anomalies by 40%.",
      ],
      tech: "PySpark, SQL, Python, SciPy, Tableau, SparkSQL, Hadoop.",
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
      story: [
        "IntelliQuest is a specialized academic paper search engine built to help students, researchers, and faculty move beyond keyword search toward semantically relevant recommendations.",
        "I helped design and implement the full-stack system in a five-person team, using React and Django backed by PostgreSQL. The product combines custom indexing, metadata filters, reading-list workflows, and GPT-powered relevance ranking.",
        "The deployed system made literature discovery faster and more focused, while giving me end-to-end experience across retrieval design, backend integration, frontend workflows, and cloud deployment.",
      ],
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
      articleTitle: "Sound Scene Synthesis for DCASE 2024 Task 7",
      articleSubtitle:
        "Combining AudioLDM, Tango2, and TangoFlux with wavelet-based representations to generate realistic, text-conditioned environmental soundscapes.",
      summary:
        "A research-style text-to-audio synthesis project for DCASE 2024 Task 7, comparing AudioLDM, Tango2, TangoFlux, and wavelet-scattering representations.",
      built:
        "Diffusion-based text-to-audio pipelines with CLAP-aligned conditioning, wavelet features via Kymatio, and a VAE-based reconstruction module.",
      impact:
        "Improved Frechet Audio Distance from a 62.68 baseline to 51.08 on the dev set, demonstrating better text-to-audio alignment and generative quality.",
      context: "Developed as part of a graduate research project in machine listening at NYU.",
      story: [
        "Sound Scene Synthesis explores how modern text-to-audio diffusion models can generate short environmental soundscapes from prompts that describe both a foreground source and acoustic background.",
        "The project re-implements the AudioLDM baseline, studies the AudioLDM/Tango2 state-of-the-art pipeline, and tests whether TangoFlux plus wavelet-scattering representations can improve semantic alignment and generative quality.",
        "On the 60-sample development set, AudioLDM/TangoFlux produced the strongest measured result with FAD 51.08, improving over the AudioLDM baseline at 62.68 and the AudioLDM/Tango2 configuration at 53.59.",
      ],
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
      articleSections: [
        {
          title: "Introduction",
          image: {
            src: "assets/projects/sound-scene-synthesis/system-overview.png",
            alt: "Overview diagram of the sound scene synthesis system",
            caption: "DCASE 2024 Task 7 maps natural-language prompts to 4-second generated environmental audio clips.",
          },
          paragraphs: [
            "Sound scene synthesis aims to generate realistic environmental audio from natural-language descriptions, such as a dog barking in a park with distant traffic noise.",
            "In DCASE 2024 Task 7, systems receive text prompts and generate a 4-second mono waveform at 32 kHz. Each prompt describes a foreground source and acoustic background, and the generated clips must avoid music or intelligible speech.",
            "This project re-implements the official AudioLDM baseline, studies an AudioLDM/Tango2 state-of-the-art pipeline, and proposes an AudioLDM/TangoFlux-wavelet direction that combines a faster preference-aligned backbone with wavelet scattering representations.",
          ],
        },
        {
          title: "Task Definition And Baseline",
          image: {
            src: "assets/projects/sound-scene-synthesis/audioldm-baseline.png",
            alt: "AudioLDM baseline pipeline with VAE, CLAP, latent diffusion, and HiFi-GAN",
            caption: "The AudioLDM baseline compresses audio, conditions generation with CLAP embeddings, denoises in latent space, and reconstructs waveforms with a vocoder.",
          },
          paragraphs: [
            "The expected system output is a Python dictionary where each key is a text prompt and each value is a NumPy array representing the raw waveform.",
            "The official baseline adapts AudioLDM, a latent diffusion framework for environmental audio synthesis. It uses language-audio alignment through CLAP and iterative denoising through a U-Net latent diffusion model.",
          ],
          items: [
            { label: "VAE encoder", text: "Compresses mel-spectrograms into compact latent representations." },
            { label: "CLAP encoder", text: "Maps text prompts and audio into a shared embedding space for cross-modal conditioning." },
            { label: "Latent diffusion model", text: "Generates new audio latents from noise using classifier-free guidance." },
            { label: "VAE decoder and HiFi-GAN", text: "Reconstructs mel-spectrograms and converts them into time-domain waveforms." },
          ],
        },
        {
          title: "AudioLDM + Tango2",
          image: {
            src: "assets/projects/sound-scene-synthesis/tango2-architecture.png",
            alt: "Tango2 architecture and preference optimization diagram",
            caption: "Tango2 improves text-to-audio alignment by using direct preference optimization and stronger language conditioning.",
          },
          paragraphs: [
            "The state-of-the-art reference system combines AudioLDM with Tango2, an improved version of Tango that fine-tunes diffusion-based text-to-audio generation with direct preference optimization.",
            "Tango2 improves semantic accuracy and perceptual quality, while AudioLDM contributes diversity and robustness. The strongest strategy selectively replaces low-alignment AudioLDM outputs with Tango2 generations based on CLAP similarity.",
          ],
          items: [
            { label: "Semantic alignment", text: "Tango2 produces audio that better matches the prompt semantics." },
            { label: "Diversity", text: "AudioLDM remains useful because its generation pipeline can enrich variation across environmental scenes." },
            { label: "Selective replacement", text: "Low-similarity outputs are replaced by stronger Tango2 generations to improve prompt alignment." },
          ],
        },
        {
          title: "TangoFlux Backbone",
          image: {
            src: "assets/projects/sound-scene-synthesis/tangoflux-training.png",
            alt: "TangoFlux training pipeline with flow matching and CRPO",
            caption: "TangoFlux uses flow matching and CLAP-ranked preference optimization to improve text-audio alignment efficiently.",
          },
          paragraphs: [
            "TangoFlux is a newer Tango-family model designed for faster and more faithful text-to-audio generation. It uses a hybrid Transformer architecture with 6 Multimodal Diffusion Transformer blocks and 18 Diffusion Transformer blocks, totaling about 515M parameters.",
            "Training has two stages: flow-matching pre-training on WavCaps and AudioCaps, followed by online iterative alignment where generated candidates are ranked with a CLAP-based reward and optimized through CLAP-Ranked Preference Optimization.",
            "Compared with Tango2, TangoFlux is especially attractive for this task because it handles complex multi-event prompts and can generate audio much faster under fewer sampling steps.",
          ],
        },
        {
          title: "Why TangoFlux Over Tango2",
          image: {
            src: "assets/projects/sound-scene-synthesis/metric-comparison.png",
            alt: "Metric comparison chart for Tango2 and TangoFlux",
            caption: "TangoFlux improves most objective metrics used for text-audio alignment, fidelity, and diversity.",
          },
          paragraphs: [
            "The report positions TangoFlux as a stronger backbone because it improves most objective measures over Tango2, including CLAP score for semantic alignment and FDopenl3 for fidelity.",
            "TangoFlux also offers a practical runtime advantage: it can generate 30 seconds of audio in 3.7 seconds with 50 steps, while Tango2 requires 22.8 seconds for 10 seconds of audio with 200 steps.",
          ],
          items: [
            { label: "Alignment", text: "Higher CLAP scores suggest stronger prompt-audio correspondence." },
            { label: "Fidelity", text: "Lower FDopenl3 indicates better distributional quality." },
            { label: "Speed", text: "Flow matching reduces the number of sampling steps needed for usable generation." },
          ],
        },
        {
          title: "Wavelet Scattering Representation",
          paragraphs: [
            "Mel-spectrograms are useful, but their averaging can discard non-stationary details such as attacks, amplitude modulations, vibrato, and time-varying spectral structure.",
            "The wavelet scattering transform addresses this by applying cascaded wavelet decompositions and modulus operations. The resulting higher-order coefficients preserve richer signal dynamics that can matter for environmental soundscapes.",
            "The project hypothesis is that replacing mel-spectrogram targets with wavelet scattering representations could lower FAD by giving the generative system a more informative intermediate representation.",
          ],
          items: [
            { label: "Fine-grained dynamics", text: "Wavelet scattering captures attacks, modulations, and complex temporal envelopes." },
            { label: "Robust features", text: "Scattering coefficients provide structured time-frequency information that is less brittle than raw waveform targets." },
            { label: "Generative fit", text: "A richer representation may help diffusion backbones reconstruct more plausible acoustic scenes." },
          ],
        },
        {
          title: "Proposed TangoFlux-Wavelet System",
          paragraphs: [
            "The proposed system makes two changes to the current state-of-the-art pipeline: replace Tango2 with TangoFlux, and replace mel-spectrogram conditioning with wavelet scattering coefficients decoded through a dedicated VAE.",
            "Part 1 trains a wavelet-conditioned VAE using raw AudioCaps audio and scattering tensors extracted with Kymatio. The best validation checkpoint is saved as wavelet_vae.pth and reused as a fixed decoder.",
            "Part 2 trains TangoFlux to predict scattering-space representations from CLAP text embeddings and duration embeddings. The frozen VAE decoder then reconstructs waveforms from predicted scattering coefficients.",
          ],
          items: [
            { label: "Backbone upgrade", text: "TangoFlux replaces Tango2 inside the AudioLDM-style framework." },
            { label: "Representation upgrade", text: "Wavelet scattering coefficients replace mel-spectrogram targets." },
            { label: "Training target", text: "Mean squared error is computed between reconstructed and original audio waveforms." },
          ],
        },
        {
          title: "Dataset And Evaluation",
          paragraphs: [
            "The DCASE development dataset contains 60 text prompts and corresponding audio embeddings. Each prompt describes a foreground sound event and an acoustic background such as water, birds, or traffic.",
            "The original waveform recordings are not provided in the development set. Evaluation therefore compares generated audio to reference audio through embedding-space similarity rather than direct waveform matching.",
            "FAD is the primary metric. It compares the Gaussian distributions of real and generated audio embeddings extracted with PANNs CNN14 Wavegram-Logmel.",
          ],
          items: [
            { label: "Development set", text: "60 prompt and audio-embedding pairs." },
            { label: "Embedding backbones", text: "PANNs CNN14 Wavegram-Logmel, MS-CLAP, and VGGish." },
            { label: "Metric", text: "Frechet Audio Distance; lower is better." },
            { label: "Caveat", text: "FAD on fewer than 100 clips can be high variance, so comparisons are most useful relative to this project's configurations." },
          ],
        },
        {
          title: "Experimental Configurations",
          paragraphs: [
            "The project evaluates a ladder of configurations so the impact of each architectural change can be isolated.",
          ],
          items: [
            { label: "AudioLDM", text: "Official DCASE 2024 baseline." },
            { label: "Tango2", text: "Standalone text-to-audio model conditioned on CLAP." },
            { label: "AudioLDM/Tango2", text: "State-of-the-art combined pipeline." },
            { label: "TangoFlux", text: "Vanilla TangoFlux architecture without AudioLDM-specific integration." },
            { label: "AudioLDM/TangoFlux", text: "AudioLDM pipeline with TangoFlux replacing Tango2 while retaining mel-spectrogram conditioning." },
            { label: "AudioLDM/TangoFlux-Wavelet", text: "Proposed system using wavelet scattering coefficients and a VAE decoder; conceptual under resource constraints." },
          ],
        },
        {
          title: "Results",
          image: {
            src: "assets/projects/sound-scene-synthesis/wavelet-vae-loss.png",
            alt: "Training and validation loss curves for the wavelet-conditioned VAE",
            caption: "The wavelet-conditioned VAE converges over 150 epochs, with validation loss plateauing after roughly epoch 60.",
          },
          paragraphs: [
            "On the official reference scores, AudioLDM/Tango2 substantially improves over the AudioLDM baseline. On our 60-sample development set, the same trend appears, and AudioLDM/TangoFlux improves further.",
            "AudioLDM/TangoFlux achieved the best measured dev-set FAD at 51.0765. The wavelet-conditioned VAE also showed stable convergence, but the complete TangoFlux-wavelet integration could not be fully trained within the project timeline.",
          ],
          table: {
            columns: ["Configuration", "Dev FAD"],
            rows: [
              ["AudioLDM", "62.6838"],
              ["Tango2", "60.8796"],
              ["AudioLDM/Tango2", "53.5921"],
              ["TangoFlux", "56.5396"],
              ["AudioLDM/TangoFlux", "51.0765"],
            ],
          },
        },
        {
          title: "Discussion",
          paragraphs: [
            "The results show that architectural improvements matter, but they matter most when paired with a strong generative pipeline. TangoFlux outperforms Tango2 as a standalone model and improves further when integrated with AudioLDM.",
            "The AudioLDM framework contributes coarse-to-fine diffusion, noise-level conditioning, and iterative denoising. These pieces appear to synergize with stronger Tango-family backbones.",
            "The partial wavelet results suggest that advanced representations can be integrated into modern text-to-audio systems, but realizing their full value requires significantly more compute than was available in the project timeline.",
          ],
          items: [
            { label: "Backbone quality", text: "TangoFlux improves text-audio alignment and generation speed." },
            { label: "Pipeline synergy", text: "AudioLDM plus a strong Tango-family model performs better than either part alone." },
            { label: "Representation promise", text: "Wavelet scattering is promising, but the full system still needs complete training and evaluation." },
          ],
        },
        {
          title: "Limitations",
          paragraphs: [
            "The main limitations are practical rather than conceptual, and they are important to state clearly.",
          ],
          items: [
            { label: "Incomplete TangoFlux-wavelet integration", text: "AudioCaps scale and long epoch times prevented full Part 2 training, so there are no FAD scores for the complete wavelet system." },
            { label: "Small dev-set evaluation", text: "All project FAD comparisons use the 60-sample development set, where absolute values can be noisy." },
            { label: "No subjective listening tests", text: "The study relies on FAD and CLAP-based metrics; human listening studies would strengthen perceptual validation." },
          ],
        },
        {
          title: "Future Work",
          paragraphs: [
            "The natural next step is to complete the TangoFlux-wavelet pipeline on larger compute resources and evaluate it with both objective and human-centered metrics.",
          ],
          items: [
            { label: "Complete wavelet training", text: "Train the full TangoFlux-wavelet configuration long enough to report FAD and qualitative examples." },
            { label: "Joint optimization", text: "Train the backbone and wavelet-conditioned decoder more tightly so the representation and generator co-adapt." },
            { label: "Evaluation", text: "Use larger prompt sets, alternative embedding backbones, and structured listening tests." },
            { label: "Prompt analysis", text: "Study multi-event prompts where TangoFlux is expected to be especially strong." },
          ],
        },
        {
          title: "My Role",
          paragraphs: [
            "This was a graduate machine-listening project at NYU. My work focused on implementing and comparing AudioLDM, Tango2, TangoFlux, and the proposed wavelet-conditioned direction; analyzing FAD results; and helping frame the tradeoffs between architecture, representation, and compute.",
            "I contributed to the report-backed system design, model comparison, wavelet-VAE direction, and final analysis of how TangoFlux changes text-to-audio synthesis quality under DCASE-style evaluation.",
          ],
        },
      ],
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
      context: "Built as a graduate computer vision project at NYU with a focus on robust recognition under domain shift.",
      story: [
        "FathomNet studies underwater object detection in a setting where depth, lighting, camera conditions, and incomplete annotations create serious distribution shift.",
        "The project compared YOLOv8 and YOLOv11 variants, underwater-specific wavelet preprocessing, and feature-extraction workflows that separate in-distribution images from deeper out-of-distribution samples.",
        "The strongest OOD pipeline reached 97.12% accuracy and 91% SAUC on 5,950 underwater images, showing how detection, preprocessing, and explicit uncertainty handling can work together in difficult visual environments.",
      ],
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
      articleTitle: "Harmful Brain Activity Classification with Deep Learning on EEG Signals",
      articleSubtitle:
        "Using spectrogram-based CNNs and hybrid convolutional-recurrent networks to support neurocritical-care EEG review.",
      summary:
        "A research-driven EEG classification project comparing spectrogram CNNs and hybrid temporal models for harmful brain activity detection.",
      built:
        "Multi-model pipeline using EEGNet, GRU, ResNet, and spectrogram-based EfficientNet inputs over 50-second EEG and 10-minute spectrogram windows.",
      impact:
        "Demonstrated robust seizure and harmful activity detection across 6 classes, with careful generalization analysis across patients and recording conditions.",
      context: "Built as a graduate deep learning project at NYU focused on healthcare signals and careful validation behavior.",
      story: [
        "Harmful Brain Activity Classification explores how deep learning can support neurocritical-care EEG review, where expert neurologists often need to scan long recordings under time pressure.",
        "The project compares EfficientNetB0 spectrogram models, EEGNet-ResNet hybrids, GRU-ResNet architectures, and MobileNet-style baselines across 50-second EEG windows and 10-minute spectrogram neighborhoods.",
        "Rather than framing the result as a single leaderboard number, the work studies training and validation behavior to understand which architectures generalize more reliably under noisy clinical labels.",
      ],
      metrics: [
        { label: "EEG window", value: "50 sec" },
        { label: "Spectrogram window", value: "10 min" },
        { label: "Classes", value: "6" },
      ],
      stack: ["TensorFlow", "PyTorch", "EfficientNetB0", "EEGNet", "GRU", "ResNet"],
      links: [{ label: "GitHub", href: "https://github.com/ShaktidharK1997/DLFinalProject" }],
      details: {
        problem:
          "Critically ill patients often require EEG monitoring to detect seizures and other harmful brain activity. Manual EEG interpretation depends on specialized neurologists and can be slow, expensive, and vulnerable to fatigue-related errors. The project explored whether deep learning models can assist by classifying clinically relevant EEG patterns automatically.",
        dataset:
          "The project uses the HMS Harmful Brain Activity Classification dataset, pairing raw 50-second EEG segments sampled at 200 Hz with 10-minute spectrogram windows, metadata, and expert vote distributions across six classes: seizure, LPD, GPD, LRDA, GRDA, and other.",
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
      articleSections: [
        {
          title: "Introduction",
          image: {
            src: "assets/projects/harmful-brain-activity/eeg-10-20-montage.png",
            alt: "10-20 EEG electrode montage diagram from the project report",
            caption: "The project uses EEG signals captured through the international 10-20 electrode placement system.",
          },
          paragraphs: [
            "Electroencephalography is a cornerstone tool in neurocritical care for monitoring brain activity in critically ill patients and detecting seizures early enough to prevent irreversible damage.",
            "In intensive-care settings, continuous EEG monitoring is common, but interpretation still relies heavily on expert neurologists manually reviewing long recordings. That process is time-consuming, expensive, and vulnerable to fatigue.",
            "This project explores whether deep learning can assist by classifying harmful brain activity from EEG signals and spectrograms. The focus is not only raw model performance, but also stability, generalization, and how different architectures behave over training and validation.",
          ],
        },
        {
          title: "Problem And Clinical Patterns",
          paragraphs: [
            "The task is framed as a six-class classification problem over 50-second EEG windows and associated 10-minute spectrogram segments. The labels reflect clinically meaningful EEG patterns annotated by experts.",
            "The annotations include proto-patterns and edge cases from critical-care EEG monitoring, so the dataset is intentionally closer to a real clinical setting than a perfectly clean benchmark.",
          ],
          items: [
            { label: "SZ", text: "Seizures." },
            { label: "GPD", text: "Generalized periodic discharges." },
            { label: "LPD", text: "Lateralized periodic discharges." },
            { label: "LRDA", text: "Lateralized rhythmic delta activity." },
            { label: "GRDA", text: "Generalized rhythmic delta activity." },
            { label: "Other", text: "Ambiguous or non-specific patterns." },
          ],
        },
        {
          title: "Dataset And Representation",
          image: {
            src: "assets/projects/harmful-brain-activity/spectrogram-creation.png",
            alt: "Spectrogram creation workflow from EEG signals",
            caption: "Raw EEG segments are transformed into image-like spectrogram representations for CNN-based modeling.",
          },
          paragraphs: [
            "The HMS Harmful Brain Activity dataset couples raw EEG segments with spectrograms and rich metadata. Each row in the training metadata describes a 50-second EEG segment, a matched 10-minute spectrogram window, patient-level identifiers, offsets, consensus labels, and expert vote counts.",
            "The raw EEG files are sampled at 200 Hz, giving 10,000 time steps per segment per channel. The spectrogram files provide time-frequency views aligned with the same clinical episode.",
          ],
          items: [
            { label: "train.csv", text: "Metadata for EEG IDs, spectrogram IDs, patient IDs, offsets, expert consensus, and class vote counts." },
            { label: "train_eegs", text: "Raw 50-second EEG segments sampled at 200 Hz." },
            { label: "train_spectrograms", text: "Precomputed spectrogram tiles assembled from EEG data and aligned to metadata offsets." },
            { label: "Model inputs", text: "Raw EEG sequences, spectrogram windows, expert votes, and consensus labels." },
          ],
        },
        {
          title: "Methodology Overview",
          image: {
            src: "assets/projects/harmful-brain-activity/sample-spectrum-architecture.png",
            alt: "Sample spectrum and architecture figure from the project report",
            caption: "The project compares spectrogram-based CNNs with temporal EEG architectures that process raw signal dynamics.",
          },
          paragraphs: [
            "We deliberately explored multiple model families rather than betting on a single architecture. This made the project a comparative study of representation choices, inductive biases, and validation behavior.",
            "Across all experiments, the key question was practical: which modeling path learns useful EEG structure without becoming brittle under noisy labels and limited compute?",
          ],
          items: [
            { label: "EfficientNetB0", text: "A spectrogram-based CNN pipeline using custom 512 x 512 spectrogram mosaics." },
            { label: "EEGNet-ResNet", text: "A raw-EEG pipeline combining compact EEGNet-style layers with deeper 1D residual blocks." },
            { label: "GRU-ResNet", text: "A hybrid model that combines convolutional feature extraction with recurrent temporal modeling." },
            { label: "Baselines", text: "EEGNet and MobileNet variants used as reference points for stability and generalization." },
          ],
        },
        {
          title: "Spectrogram-Based EfficientNetB0",
          paragraphs: [
            "The EfficientNetB0 model treats EEG-derived time-frequency data as an image-like representation. The base spectrogram input has shape 128 x 256 x 8, where four channels come from Kaggle-provided spectrogram tiles and four channels come from custom spectrograms derived from raw EEG.",
            "To adapt the input for CNN processing, the first four channels are vertically concatenated into a 512 x 256 image, the EEG-derived channels are concatenated into another 512 x 256 image, and both views are placed side by side to create a 512 x 512 sample.",
            "The EfficientNetB0 backbone is used without its classification head and without ImageNet initialization because natural images differ heavily from EEG spectrograms. Global average pooling produces a 1280-dimensional feature vector, followed by a dense six-class softmax head.",
          ],
          items: [
            { label: "Loss", text: "Kullback-Leibler divergence, aligning predictions with expert vote distributions." },
            { label: "Optimizer", text: "Adam with learning rate 1e-3 and a custom learning-rate scheduler." },
            { label: "Training", text: "Batch size 32, 25 epochs, and TensorFlow MirroredStrategy for multi-GPU execution." },
          ],
        },
        {
          title: "EEGNet-ResNet Architecture",
          paragraphs: [
            "Where EfficientNetB0 works on spectrogram images, the EEGNet-ResNet path operates closer to the raw time-series. It combines EEGNet-style compact convolutions with deeper 1D residual blocks designed for temporal EEG signals.",
            "The EEGNet component begins with four parallel Conv1D layers using kernel sizes 3, 5, 7, and 9. This allows the model to learn temporal features at several scales before batch normalization, ReLU activations, and a refinement Conv1D layer pass features into residual blocks.",
            "Nine 1D ResNet blocks add depth through Conv1D layers, batch normalization, ReLU activations, skip connections, and downsampling. Bidirectional GRU layers then aggregate temporal dependencies before the final six-class softmax output.",
          ],
        },
        {
          title: "GRU-ResNet Hybrid",
          paragraphs: [
            "The GRU-ResNet model emphasizes sequence behavior after convolutional feature extraction. Multiple parallel Conv1D layers capture local patterns at different temporal scales, then concatenate those outputs into a richer representation.",
            "A stack of residual blocks with batch normalization, ReLU, dropout, and max pooling builds deeper signal features. A GRU layer then models long-range temporal dependencies across the 50-second EEG window.",
            "In the reported configuration, the model used batch size 64, kernel size 2, stride 2, padding 0, 25 epochs, and learning rate 0.001. This hybrid design aims to balance local waveform detection with longer temporal context.",
          ],
        },
        {
          title: "Training And Validation Behavior",
          image: {
            src: "assets/projects/harmful-brain-activity/training-validation-loss.png",
            alt: "Training and validation loss curves for EEGNet, MobileNet, EfficientNet, and GRU models",
            caption: "Loss curves were central to the analysis because stable validation behavior matters more than a single headline score in clinical ML settings.",
          },
          paragraphs: [
            "We compared EEGNet, MobileNet, EfficientNet, and the GRU-based hybrid over 25 epochs. Instead of relying only on final accuracy, we studied training and validation loss curves to understand convergence, overfitting, and stability.",
          ],
          items: [
            { label: "GRU", text: "Training loss declined smoothly from roughly 0.6 to 0.2, while validation loss stayed close to the training curve, indicating strong generalization." },
            { label: "EfficientNet", text: "Training loss decreased more conservatively and validation loss stayed low with minor spikes, making it a stable spectrogram baseline." },
            { label: "MobileNet", text: "Loss curves fluctuated heavily, suggesting sensitivity to hyperparameters, batch composition, or insufficient regularization." },
            { label: "EEGNet", text: "Training improved over time, but validation loss remained higher than the stronger models under this configuration." },
          ],
        },
        {
          title: "Key Results And Insights",
          paragraphs: [
            "The most important outcome was comparative rather than a single best score. GRU-based architectures showed the strongest generalization pattern, with validation loss staying close to training loss and little evidence of severe overfitting.",
            "EfficientNet on spectrogram mosaics remained a strong and stable alternative, reinforcing that image backbones can work well when EEG is represented carefully in time-frequency space.",
            "MobileNet and EEGNet were less stable in this setup, which underscores that architecture choice, representation design, and training regime matter heavily for noisy EEG classification tasks.",
          ],
          items: [
            { label: "Representation matters", text: "Spectrogram construction changed how effectively CNN backbones could learn EEG structure." },
            { label: "Inductive bias matters", text: "Hybrid convolutional-recurrent models matched the temporal nature of EEG more naturally than compact CNN-only designs." },
            { label: "Generalization matters", text: "For clinical support, predictable validation behavior is more useful than a brittle model with impressive training loss." },
          ],
        },
        {
          title: "Limitations",
          paragraphs: [
            "The project is a strong graduate research study, but it also has clear boundaries that are important to state honestly.",
          ],
          items: [
            { label: "Limited hyperparameter tuning", text: "Compute constraints led to a fixed set of hyperparameters instead of extensive automated search." },
            { label: "Label noise", text: "Proto-patterns and edge cases add ambiguity, making evaluation more realistic but also more difficult." },
            { label: "Single-dataset scope", text: "The models were evaluated on HMS data only; broader validation across other EEG corpora would strengthen deployment claims." },
          ],
        },
        {
          title: "Future Work",
          paragraphs: [
            "The next step would be to turn this comparative study into a more robust clinical ML pipeline with calibration, uncertainty, and broader validation.",
          ],
          items: [
            { label: "Ensembles", text: "Combine GRU-based models with spectrogram CNNs to exploit complementary strengths." },
            { label: "EEG-specific features", text: "Add frequency-band features, biomarkers, or connectivity measures for interpretability." },
            { label: "Regularization", text: "Use Mixup, label smoothing, dropout tuning, and stronger optimization schedules to improve unstable baselines." },
            { label: "Uncertainty estimation", text: "Calibrate probability outputs so the model can communicate uncertainty in high-cost false-negative settings." },
          ],
        },
        {
          title: "My Role",
          paragraphs: [
            "This was a three-person NYU Deep Learning course project. My contributions focused on implementing and comparing deep learning pipelines for EEG and spectrogram classification, analyzing training and validation behavior across model families, and helping synthesize the results into a coherent experimental narrative.",
            "I co-designed and implemented multiple deep learning pipelines - EfficientNetB0 on custom spectrogram mosaics, EEGNet-ResNet hybrids, and GRU-ResNet architectures - then led the comparative analysis of training and validation behavior to understand generalization under clinically noisy EEG labels.",
          ],
        },
      ],
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
      story: [
        "This project asked a practical model-design question: how much CIFAR-10 accuracy can a residual network deliver while staying under a strict 5 million trainable-parameter ceiling?",
        "The final architecture used compact residual groups, 3 by 3 convolutions, shortcut projections, batch normalization, dropout, and Squeeze-and-Excitation blocks to improve representation quality without inflating model size.",
        "The model reached 93.67% test accuracy with 4.70M parameters, turning the project into a focused study of accuracy, regularization, and parameter efficiency.",
      ],
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
      story: [
        "Food-11 Classification studied the gap between benchmark accuracy and deployment practicality for image classifiers that need to run under memory, CPU, and response-time constraints.",
        "I compared VGG16, MobileNet, and Xception pipelines, fine-tuned the stronger models, and interpreted accuracy alongside Kubernetes-style resource requirements instead of treating deployment as an afterthought.",
        "The best model improved validation accuracy from 0.7621 to 0.8892, while the final recommendation balanced accuracy, response time, CPU, and memory tradeoffs for real-world inference.",
      ],
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
      story: [
        "NYC Job Salary Range Prediction uses public job-posting data to estimate salary bands from structured role metadata and noisy free-form descriptions.",
        "I built the pipeline from data cleaning and text processing through feature engineering, ANOVA-style analysis, model comparison, cross-validation, and tuned Random Forest and XGBoost regressors.",
        "The strongest configuration achieved an R2 of 0.8478 on 6,634 rows with 30 engineered features, making the model useful for job-market analysis and compensation benchmarking.",
      ],
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
  context: "Built as a graduate project at NYU focusing on multimodal systems and responsible AI.",
  story: [
    "Wildlife Trafficking Detection is a multimodal screening system for suspicious wildlife-trade ads, where text, images, prices, and location can each carry partial signals.",
    "I contributed to a Spark-based feature engineering pipeline and a multimodal model that combines EfficientNet image features, DistilBERT text features, and structured metadata through cross-modal fusion.",
    "The system achieved 94.08% accuracy, 93.02% recall, and 85.11% precision, intentionally prioritizing recall so fewer suspicious listings would be missed in a high-stakes screening workflow.",
  ],
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
      story: [
        "The Library Management System is a full-stack application for catalog search, issuing, returns, reservations, inventory management, and administrative oversight.",
        "I designed the workflow around Java, Spring MVC, MySQL, and role-based access control, giving patrons and administrators separate paths through the same relational data model.",
        "The project is intentionally more software-engineering focused, showing the web, database, authentication, and workflow foundations that later carry into AI product delivery.",
      ],
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
    {
      group: "Research And Communication",
      items: ["Experimental design and ablation studies", "Model evaluation and error analysis", "Academic report writing and presentations", "Reproducible ML workflows"],
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
      highlights: [
        "Graduate AI/ML Research and Engineering (Selected Projects): built report-backed ML systems across generative audio, EEG analysis, underwater vision, salary prediction, food classification, and multimodal wildlife-trade detection, focusing on rigorous evaluation and reproducibility.",
      ],
      coursework:
        "Coursework: Machine Learning, Deep Learning, Big Data, Computer Vision, Information Visualization, Machine Listening, Algorithms, Software Engineering, Cognitive Computational Modelling.",
    },
    {
      school: "KL University",
      dates: "Jun 2018 - Apr 2022",
      details:
        "Bachelor of Science in Computer Science and Engineering with Artificial Intelligence, Vijayawada, India.",
      coursework:
        "Relevant coursework: Data Structures, Algorithms, Machine Learning, Artificial Intelligence, Database Systems, Operating Systems.",
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

const projectCategoriesBySlug = {
  intelliquest: ["ai", "systems"],
  "sound-scene-synthesis": ["ai", "data"],
  "fathomnet-visual-categorization": ["ai", "vision", "data"],
  "harmful-brain-activity-classification": ["ai", "vision", "data"],
  "resnet-cifar10-under-5m": ["ai", "vision"],
  "food11-ml-deployment": ["ai", "vision", "systems"],
  "nyc-salary-range-prediction": ["ai", "data"],
  "wildlife-trafficking-ads": ["ai", "data", "vision"],
  "library-management-system": ["systems"],
};

const projectDisplayOrder = [
  "sound-scene-synthesis",
  "wildlife-trafficking-ads",
  "fathomnet-visual-categorization",
  "harmful-brain-activity-classification",
  "nyc-salary-range-prediction",
  "resnet-cifar10-under-5m",
  "food11-ml-deployment",
  "intelliquest",
  "library-management-system",
];

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
  const orderedProjects = projectDisplayOrder
    .map((slug) => portfolio.projects.find((project) => project.slug === slug))
    .filter(Boolean);

  byId("projectGrid").innerHTML = orderedProjects
    .map(
      (project) => {
        const categories = projectCategoriesBySlug[project.slug] || [];
        const story = project.story || [project.summary, project.built, project.impact];
        return `
        <a class="project-card" data-categories="${categories.join(" ")}" href="#project/${project.slug}" aria-label="View detailed case study for ${project.title}">
          ${renderProjectVisual(project.visual)}
          <div class="project-meta">
            <span>${project.type}</span>
            <span>${project.dates}</span>
          </div>
          <h3>${project.title}</h3>
          ${project.context ? `<p class="project-context">${project.context}</p>` : ""}
          <div class="project-story">
            ${story.slice(0, 3).map((paragraph) => `<p>${paragraph}</p>`).join("")}
          </div>
          <div class="project-metrics">
            ${project.metrics.map((metric) => `<span class="project-metric"><strong>${metric.value}</strong><span>${metric.label}</span></span>`).join("")}
          </div>
          <p class="project-tech-line"><strong>Tech:</strong> ${project.stack.slice(0, 6).join(", ")}</p>
          <div class="project-stack">
            ${project.stack.slice(0, 6).map((item) => `<span class="project-tech">${item}</span>`).join("")}
          </div>
          <span class="project-cta">View case study <span>↗</span></span>
        </a>
      `;
      }
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
        const categories = (card.dataset.categories || "").split(" ");
        const visible = filter === "all" || categories.includes(filter);
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
          ${
            item.highlights
              ? `<ul class="education-highlights">${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>`
              : ""
          }
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
  const story = project ? project.story || [project.summary, project.built, project.impact] : [];

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
      <h1>${project.articleTitle || project.title}</h1>
      ${project.articleSubtitle ? `<p class="project-detail-subtitle">${project.articleSubtitle}</p>` : ""}
      ${project.context ? `<p class="project-context project-context-large">${project.context}</p>` : ""}
      <div class="project-story project-story-detail">
        ${story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="project-metrics">
        ${project.metrics.map((metric) => `<span class="project-metric"><strong>${metric.value}</strong><span>${metric.label}</span></span>`).join("")}
      </div>

      <h2>Stack</h2>
      <div class="project-stack">
        ${project.stack.map((item) => `<span class="project-tech">${item}</span>`).join("")}
      </div>

      ${
        project.articleSections
          ? renderArticleSections(project.articleSections)
          : `
              ${renderDetailBlock("Problem", project.details.problem)}
              ${renderDetailBlock("Dataset", project.details.dataset)}
              ${renderDetailList("Approach", project.details.approach)}
              ${renderDetailList("Results", project.details.results)}
              ${renderDetailBlock("My Role", project.details.role)}
              ${renderDetailList("Technical Takeaways", project.details.takeaways)}
            `
      }

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

function renderArticleSections(sections) {
  return sections.map((section) => renderArticleSection(section)).join("");
}

function renderArticleSection(section) {
  return `
    <section class="case-section article-section">
      <h2>${section.title}</h2>
      ${section.image ? renderArticleFigure(section.image) : ""}
      ${section.paragraphs ? section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("") : ""}
      ${section.items ? renderArticleItems(section.items) : ""}
      ${section.table ? renderArticleTable(section.table) : ""}
    </section>
  `;
}

function renderArticleFigure(image) {
  return `
    <figure class="case-figure">
      <img src="${image.src}" alt="${image.alt}" loading="lazy" />
      <figcaption>${image.caption}</figcaption>
    </figure>
  `;
}

function renderArticleItems(items) {
  return `
    <ul class="article-list">
      ${items
        .map((item) =>
          typeof item === "string"
            ? `<li>${item}</li>`
            : `<li><strong>${item.label}:</strong> ${item.text}</li>`
        )
        .join("")}
    </ul>
  `;
}

function renderArticleTable(table) {
  return `
    <div class="case-table-wrap">
      <table class="case-table">
        <thead>
          <tr>${table.columns.map((column) => `<th>${column}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows
            .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
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
