const portfolio = {
  goals: [
    {
      title: "LLM evaluation & agentic-system testing",
      summary:
        "Execution-based validation, adversarial suites, and guardrails for LLM-driven and agentic features.",
      signals: ["Execution-based validation", "Adversarial test suites", "Guardrail design"],
    },
    {
      title: "Multimodal research turned into usable product",
      summary:
        "Applied work across audio, vision, text, structured data, and cross-attention systems.",
      signals: ["Text-to-audio (DCASE 2024)", "EEG classification (HMS)", "Wildlife ad detection", "Cross-attention fusion"],
    },
    {
      title: "Data systems wired to business outcomes",
      summary:
        "Risk analytics, retention, support automation, and experimentation built from reliable data workflows.",
      signals: ["Credit risk segmentation (Tiger)", "A/B retention testing", "NLP support automation", "ETL pipeline engineering"],
    },
  ],
  experience: [
    {
      role: "AI Research Fellow",
      organization: "Handshake AI",
      place: "New York, NY",
      dates: "Oct 2025 - Present",
      type: "Contract",
      expanded: true,
      paragraphs: [
        "At Handshake AI, I work as an AI Research Fellow on evaluation and reliability for LLM-driven products. I lead the development of execution-based validation pipelines for LLM-generated code, which has raised test pass rates from roughly 60% to over 87% and reduced invalid downstream code in production features. I also co-design latency-optimized inference paths - combining smarter batching, caching, and routing - that have cut end-to-end request latency from about 1.8 seconds to 1.1 seconds while preserving output quality.",
        "A large part of my role involves turning qualitative feedback into measurable evaluation criteria and guardrails. I partner with PMs and engineers to translate user pain points into concrete metrics, run experiments and ablation studies on prompts and routing policies, and build adversarial and edge-case test suites for agentic systems. This work has roughly doubled the distinct failure modes covered by our tests and improved robustness on unseen scenarios by around 20%.",
      ],
      roleMetrics: [
        { value: "87%+", label: "LLM test pass rate", detail: "was 60%" },
        { value: "39%", label: "latency reduced", detail: "1.8s to 1.1s" },
        { value: "2x", label: "failure mode coverage", detail: "doubled" },
      ],
      tech: "Python, PyTorch, internal evaluation frameworks, cloud services.",
    },
    {
      role: "Research Volunteer, Geospatial AI & Urban Analytics",
      organization: "New York University",
      place: "New York, NY",
      dates: "Oct 2023 - Nov 2023",
      type: "Volunteer",
      expanded: true,
      paragraphs: [
        "During my first semester at NYU, I volunteered with PhD researchers at NYU's Built Environment & Informatics Lab (BILAB) on an urban infrastructure analysis project using geospatial satellite imagery of New York City. I processed and classified high-resolution satellite data using ArcGIS Pro and contributed image-classification work that fed into the lab's research on urban infrastructure patterns and environmental analysis across the city.",
        "This experience introduced me to the intersection of computer vision and geospatial data in a real research setting, reinforcing how remote sensing and spatial reasoning complement conventional ML pipelines - a perspective I have carried into my graduate projects in computer vision and multimodal systems.",
      ],
      tech: "ArcGIS Pro, Geospatial Data, Satellite Imagery, Image Classification.",
    },
    {
      role: "Data Analyst",
      organization: "Tiger Analytics",
      place: "Chennai, India",
      dates: "Jun 2022 - May 2023",
      type: "Full-time",
      preview: "Risk analytics, credit forecasting, and NLP chatbot - 1M+ profiles, $4.5M mitigated.",
      paragraphs: [
        "At Tiger Analytics, I worked as a Data Analyst on risk analytics and decision-support systems for enterprise clients. I architected an end-to-end risk pipeline using hierarchical clustering over more than one million customer profiles, helping mitigate an estimated 4.5 million dollars in credit-default and compliance risk. I also built automated time-series forecasting frameworks with RNN architectures for a multi-million-dollar B2B credit portfolio, achieving over 90% prediction accuracy on key risk indicators.",
        "In parallel, I deployed an Azure-hosted chatbot powered by Tiny-RoBERTa and active-learning QnA loops that handles more than ten thousand user queries per day and increased real-time engagement by roughly sixty percent. I regularly collaborated with business stakeholders to translate model outputs into dashboards and decision rules used directly by risk and operations teams, ensuring that analytics translated into concrete changes in credit policy and workflow.",
      ],
      roleMetrics: [
        { value: "1M+", label: "customer profiles", detail: "segmented" },
        { value: "$4.5M", label: "risk mitigated", detail: "credit and compliance" },
        { value: "10K+", label: "daily queries", detail: "chatbot handled" },
      ],
      tech: "Python, scikit-learn, RNNs, Azure Bot Framework, Tiny-RoBERTa, SQL, Tableau.",
    },
    {
      role: "Data Science Intern",
      organization: "Tiger Analytics",
      place: "Chennai, India",
      dates: "Oct 2021 - May 2022",
      type: "Internship",
      preview: "PySpark ETL, forecasting, and experimentation - 500GB+ processed, 90%+ forecast accuracy.",
      paragraphs: [
        "I first joined Tiger Analytics as a Data Science Intern focused on large-scale data processing and experimentation. Using PySpark and advanced SQL, I built ETL pipelines that processed over 500 GB of industrial data and cut model-training and reporting turnaround times by about thirty percent. I ran hypothesis-driven A/B tests with Python, pandas, and SciPy to evaluate product and operations changes, which informed decisions that improved user retention by fifteen percent.",
        "I also developed Tableau dashboards and anomaly-detection models that uncovered more than five hundred thousand dollars in opportunities and reduced processing anomalies by roughly forty percent. This internship converted into a full-time Data Analyst role, based on the ownership I took over key ETL and analytics workflows throughout the engagement.",
      ],
      roleMetrics: [
        { value: "500GB+", label: "data processed", detail: "via PySpark ETL" },
        { value: "90%+", label: "forecast accuracy", detail: "B2B credit portfolio" },
        { value: "$500K+", label: "opportunities", detail: "surfaced" },
      ],
      tech: "PySpark, SQL, Python, SciPy, Tableau, SparkSQL, Hadoop.",
    },
    {
      role: "Full Stack Java Trainee",
      organization: "EPAM Systems",
      place: "Hyderabad, India",
      dates: "Aug 2020 - Jun 2021",
      paragraphs: [
        "Earlier in my career, I worked as a Full Stack Java Trainee at EPAM Systems, building enterprise back-end systems that supported internal data workflows and cross-team integrations. I designed and deployed production REST APIs and microservices using Java, Spring, and Hibernate, and I implemented data ingestion and transformation services that provided reliable, well-structured inputs for downstream analytics consumers.",
        "To improve reliability, I strengthened the codebase with unit and integration tests and contributed to CI/CD improvements that reduced post-release incidents and shortened deployment cycles. This early engineering experience gave me a strong foundation in production software practices that I now apply directly to ML evaluation and data pipeline work.",
      ],
      roleMetrics: [
        { value: "REST APIs", label: "designed and", detail: "deployed" },
        { value: "CI/CD", label: "pipeline", detail: "improved" },
        { value: "Java · Spring", label: "core backend", detail: "stack" },
      ],
      preview: "Backend APIs, CI/CD, and Java/Spring delivery for enterprise data workflows.",
      tech: "Java, Spring Boot, Hibernate, REST APIs, CI/CD, relational databases.",
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
      cardStory: [
        "A full-stack academic paper search engine built for students, researchers, and faculty to move beyond keyword search toward semantically relevant recommendations.",
        "Built with a five-person team using React, Django, and PostgreSQL, with a custom indexing pipeline and GPT-powered semantic ranking layer. Deployed and actively used by students and faculty for literature review workflows.",
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
      cardStory: [
        "Sound scene synthesis for DCASE 2024 Task 7 requires generating realistic 4-second environmental audio clips from text prompts, capturing both foreground events and acoustic backgrounds. We re-implemented the AudioLDM baseline, studied the AudioLDM+Tango2 SOTA pipeline, and then proposed a TangoFlux-based upgrade paired with wavelet scattering representations.",
        "TangoFlux's preference-aligned training (CRPO) and hybrid MMDiT/DiT architecture improved CLAP scores and reduced Frechet Audio Distance from 62.68 to 51.08 on the development set - the best result among our six configurations. We additionally designed a wavelet-conditioned VAE for richer time-frequency conditioning, establishing a foundation for future work when compute resources allow full training.",
      ],
      metrics: [
        { label: "Best dev FAD", value: "51.08" },
        { label: "Baseline dev FAD", value: "62.68" },
        { label: "Compared", value: "6 configs" },
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
      articleTitle: "FathomNet: Fine-Grained Visual Categorization in Underwater Imagery",
      articleSubtitle:
        "A research-driven computer vision study on underwater image enhancement, YOLO detection, and out-of-distribution detection under depth shift.",
      summary:
        "A multi-stage underwater vision project exploring wavelet preprocessing, YOLOv8/YOLOv11 detection, and ResNet50 + Random Forest OOD detection.",
      built:
        "Detection and OOD pipelines with underwater-specific preprocessing, YOLO fine-tuning, ResNet50 feature extraction, Random Forest classification, PCA, and K-Means analysis.",
      impact:
        "Achieved 97.12% OOD accuracy and around 91% sAUC while showing that raw-data YOLOv11 was more reliable than visually enhanced inputs for fine-grained detection.",
      context: "Built as a graduate computer vision project at NYU with a focus on robust underwater recognition under depth-driven domain shift.",
      story: [
        "FathomNet studies underwater object detection in a setting where depth, lighting, turbidity, pose, blur, class imbalance, and incomplete annotations create serious distribution shift.",
        "The work separates three connected experiments: underwater image enhancement, YOLOv8/YOLOv11 object detection, and out-of-sample detection for deeper-water imagery.",
        "The strongest OOD pipeline reached 97.12% accuracy and around 91% sAUC on 5,950 underwater images, while detection experiments showed that preprocessing can make images look cleaner to humans but harder for detectors.",
      ],
      cardStory: [
        "FathomNet 2023 is a fine-grained visual categorization challenge with 290 marine categories and a deliberate depth-based distribution shift: training data covers 0-800m while validation extends to 0-1300m, testing model generalization as underwater visibility degrades. We explored wavelet-based enhancement, YOLOv8/YOLOv11 detection, and a ResNet50 + Random Forest out-of-sample detector.",
        "Wavelet preprocessing improved human-perceived clarity but actually hurt detection performance by removing color cues the model relied on. YOLOv11 on raw images consistently outperformed all preprocessed variants. Our out-of-sample pipeline achieved 97.12% depth-shift detection accuracy and ~91% sAUC - showing that a strong visual backbone can expose distributional drift from depth alone.",
      ],
      metrics: [
        { label: "Marine classes", value: "290" },
        { label: "OOD accuracy", value: "97.12%" },
        { label: "sAUC", value: "~91%" },
      ],
      stack: ["YOLOv8", "YOLOv11", "ResNet50", "Random Forest", "Kymatio", "PyTorch", "OpenCV"],
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
          "Led feature extraction and model-training work, including wavelet-based preprocessing experiments, YOLOv8/YOLOv11 detection training, and the ResNet50 + Random Forest out-of-sample detection pipeline.",
        takeaways: [
          "Depth-aware visual categorization needs both strong detectors and explicit OOD handling.",
          "YOLOv11 was the strongest practical benchmark in this study because of its accuracy, parameter efficiency, and stable learning curves.",
          "A production-ready underwater model should combine detection, uncertainty/OOD scoring, and continuous learning from new marine samples.",
        ],
        sources: ["computer_vision_Final_Report__Copy_.pdf"],
      },
      articleSections: [
        {
          title: "Problem Framing",
          image: {
            src: "assets/projects/fathomnet/sample-image.jpg",
            alt: "Underwater FathomNet sample with marine species on the seafloor",
            caption: "FathomNet underwater imagery combines difficult lighting, partial visibility, class imbalance, and fine-grained marine species labels.",
          },
          paragraphs: [
            "Underwater computer vision is hard because the model is not only recognizing objects; it is recognizing them through depth, turbidity, lighting changes, camera variation, blur, pose shifts, occlusion, and incomplete annotations.",
            "The FathomNet 2023 setting makes that difficulty deliberate. Training data comes from shallower water, while validation data reaches deeper environments, so the benchmark tests whether a model can generalize when the visual domain itself changes.",
            "This project is best understood as three connected experiments: image enhancement, detector comparison, and out-of-sample detection. Together, they ask when preprocessing helps, when modern detector architecture matters, and when the system should recognize that an image is outside the familiar training distribution.",
          ],
        },
        {
          title: "Dataset And Depth Shift",
          image: {
            src: "assets/projects/fathomnet/category-distribution.png",
            alt: "Cumulative distribution of FathomNet categories above and below 800 meters",
            caption: "Training images cover 0-800m while validation images extend to 0-1300m, creating a depth-driven domain shift.",
          },
          paragraphs: [
            "The project uses the FathomNet2023 dataset, a curated underwater image benchmark built from the larger FathomNet repository. It contains 5,950 images, 290 marine categories, and 20 supercategories.",
            "The split is intentionally challenging. Training images are captured at depths between 0 and 800 meters, while validation images span 0 to 1300 meters. That means the validation set is not simply more of the same data; it probes whether the model can handle darker, deeper, and more ambiguous scenes.",
          ],
          items: [
            { label: "Task", text: "Classify and localize marine organisms while handling known and unfamiliar categories." },
            { label: "Training depth", text: "0-800 meters." },
            { label: "Validation depth", text: "0-1300 meters." },
            { label: "Domain shift", text: "Lighting and visibility degrade as depth increases, changing the visual distribution at inference time." },
          ],
        },
        {
          title: "Class Imbalance And Open-Set Pressure",
          image: {
            src: "assets/projects/fathomnet/supercategory-histogram.png",
            alt: "Histogram of FathomNet supercategories in the training set",
            caption: "The 290 classes roll up into 20 supercategories, with strong imbalance across the training set.",
          },
          paragraphs: [
            "The dataset is highly imbalanced, which makes minority-category detection fragile. Some marine groups dominate the training data while other classes appear rarely, and the report notes that some validation classes are absent from training.",
            "That creates a realistic open-set problem. A practical underwater vision system should not always force a confident known-class prediction; it should have a way to flag unfamiliar visual conditions or categories for human review.",
          ],
          items: [
            { label: "Fine-grained labels", text: "290 marine categories create difficult species-level distinctions." },
            { label: "Supercategories", text: "20 broader marine groupings reveal heavy class imbalance." },
            { label: "Absent classes", text: "Some validation categories do not appear in training, adding out-of-distribution pressure." },
          ],
        },
        {
          title: "Preprocessing Survey",
          image: {
            src: "assets/projects/fathomnet/enhancement-comparison.jpg",
            alt: "Comparison of underwater image enhancement methods",
            caption: "The report compared several enhancement approaches before focusing on wavelet-based preprocessing.",
          },
          paragraphs: [
            "Underwater images often suffer from reduced contrast, blur, scattering, and a blue-green color cast because red light attenuates quickly underwater. The project compared both direct enhancement methods and physically motivated color-restoration methods.",
            "Enhancement methods such as CLAHE, gamma correction, histogram equalization, Rayleigh stretching, and wavelet enhancement directly manipulate pixel intensities. Restoration approaches such as DCP, GB-RC, IBLA, LC-DCP, MIP, NOM, RoWS, UDCP, and ULAP attempt to model underwater image formation more explicitly.",
          ],
          items: [
            { label: "Enhancement", text: "Improve contrast and visibility directly from image intensities." },
            { label: "Restoration", text: "Estimate color loss, haze, scattering, or transmission using underwater image models." },
            { label: "Selected path", text: "Wavelet preprocessing because it improved structural visibility while reducing some blue cast." },
          ],
        },
        {
          title: "Wavelet-Based Enhancement",
          image: {
            src: "assets/projects/fathomnet/wavelet-results.jpg",
            alt: "Wavelet preprocessing results on FathomNet underwater images",
            caption: "Wavelet preprocessing reduced blue cast and improved visibility, but also changed color cues that detectors may rely on.",
          },
          paragraphs: [
            "The selected preprocessing method uses a wavelet-based dual-stream strategy. A discrete wavelet transform decomposes the input into low-frequency structure and high-frequency detail bands.",
            "The low-frequency stream handles color correction through multi-color-space fusion, while the high-frequency stream enhances edges and fine visual texture. The processed bands are then reconstructed with an inverse wavelet transform.",
            "This produced an important research lesson: an image can become more visually appealing to humans while becoming less useful to a detector. By removing hue and changing underwater color cues, wavelet preprocessing sometimes made fine-grained object detection harder.",
          ],
        },
        {
          title: "YOLOv8 Baseline",
          image: {
            src: "assets/projects/fathomnet/yolov8-architecture.png",
            alt: "YOLOv8 architecture diagram from the report",
            caption: "YOLOv8 provides the baseline detector with backbone, neck, and head components for multiscale object detection.",
          },
          paragraphs: [
            "The first detection baseline used YOLOv8m on the raw dataset. This established a reference point before testing wavelet preprocessing, different train/validation splits, and newer YOLOv11 variants.",
            "YOLOv8 was useful because it converged quickly and gave a conventional object-detection baseline, but the report shows that its 60/40 split performance was limited by class imbalance and difficult underwater conditions.",
            "Training YOLOv8m on wavelet-preprocessed images created a harder learning problem. Loss curves became less stable and mAP scores were lower, suggesting that the detector lost useful color or context signals when hue information was altered.",
          ],
        },
        {
          title: "YOLOv11 And Model Comparison",
          image: {
            src: "assets/projects/fathomnet/yolo-model-comparison.png",
            alt: "mAP50-95 comparison across YOLOv8 and YOLOv11 model variants",
            caption: "Raw-data YOLOv11 variants produced the strongest and most stable mAP50-95 behavior, while preprocessed variants lagged.",
          },
          paragraphs: [
            "YOLOv11 was the most important detector upgrade in the project. It converged earlier, produced smoother learning curves, and achieved much stronger mAP behavior on the raw dataset.",
            "The comparison also showed that more data helped YOLOv8: moving from a 60/40 split to an 80/20 split improved convergence and mAP50-95. But YOLOv11 reached similar or stronger behavior with fewer parameters and less dependence on extra training data.",
          ],
          table: {
            columns: ["Experiment", "Input", "Main Takeaway"],
            rows: [
              ["YOLOv8m 60/40", "Raw", "Fast convergence, but limited by class imbalance and difficult underwater cues."],
              ["YOLOv8m 60/40", "Wavelet", "Lower and less stable mAP; preprocessing removed cues that helped fine-grained detection."],
              ["YOLOv8m 80/20", "Raw", "Improved convergence and stronger mAP50-95 after increasing training coverage."],
              ["YOLOv11m 60/40", "Raw", "Most reliable practical benchmark with stable convergence and strong detection behavior."],
              ["YOLOv11m", "Wavelet", "Still struggled on preprocessed inputs, reinforcing the color-cue tradeoff."],
              ["YOLOv11L 80/20", "Raw", "Additional complexity did not materially improve over YOLOv11m."],
            ],
          },
        },
        {
          title: "Inference Examples",
          image: {
            src: "assets/projects/fathomnet/raw-predictions.jpg",
            alt: "Annotated YOLOv11 predictions on raw underwater images",
            caption: "YOLOv11 on raw underwater imagery preserved more detector-friendly context than the heavily preprocessed variants.",
          },
          paragraphs: [
            "The inference examples make the tradeoff tangible. Raw underwater images preserve the color, lighting, and contextual cues that the detector learned during training.",
            "Wavelet preprocessing made some image structures cleaner, but the experiments showed that cleaner visuals are not automatically better training data. For object detection, preserving the right discriminative cues mattered more than maximizing human-perceived contrast.",
          ],
          items: [
            { label: "Raw data", text: "Stronger detector behavior because the model kept access to the original underwater color and context distribution." },
            { label: "Processed data", text: "Better visual clarity in some cases, but weaker fine-grained detection after hue and illumination cues changed." },
            { label: "Model choice", text: "YOLOv11m became the preferred detector because it balanced accuracy, stability, and parameter efficiency." },
          ],
        },
        {
          title: "Out-Of-Sample Detection Pipeline",
          image: {
            src: "assets/projects/fathomnet/ood-pipeline.png",
            alt: "ResNet50 and Random Forest out-of-sample detection pipeline",
            caption: "A separate OOD pipeline used ResNet50 embeddings and Random Forest classification to distinguish shallower and deeper depth regimes.",
          },
          paragraphs: [
            "Beyond object detection, the project treated depth shift as an out-of-sample detection problem. The goal was to distinguish in-distribution shallow-water images from deeper images whose visual conditions differ from the training regime.",
            "A pretrained ResNet50 generated 2048-dimensional embeddings for each image after resizing to 224 x 224. Those features were then used to train a Random Forest classifier, while K-Means and PCA helped visualize whether the two depth regimes were naturally separable.",
          ],
          items: [
            { label: "Feature extractor", text: "ResNet50 pretrained on ImageNet, with final classification layers removed." },
            { label: "Classifier", text: "Random Forest over 2048-dimensional image embeddings." },
            { label: "Labels", text: "0 for in-distribution 0-800m images and 1 for deeper 0-1300m out-of-distribution samples." },
            { label: "Evaluation", text: "Accuracy, AUC-ROC, rescaled AUC, confusion matrix, K-Means, and PCA visualization." },
          ],
        },
        {
          title: "OOD Results",
          image: {
            src: "assets/projects/fathomnet/ood-clustering.png",
            alt: "PCA clustering visualization for underwater image OOD detection",
            caption: "PCA visualization showed strong separation between in-distribution and deeper out-of-distribution image embeddings.",
          },
          paragraphs: [
            "The OOD pipeline achieved about 97.12% accuracy and around 91% sAUC, showing that depth creates a detectable feature shift in the embedding space.",
            "This result matters because it gives the detector a safety layer. Instead of forcing a known-category prediction for every deep or unfamiliar sample, the system can flag images whose depth-driven appearance differs from the familiar training distribution.",
          ],
          table: {
            columns: ["Component", "Result"],
            rows: [
              ["OOD accuracy", "97.12%"],
              ["sAUC", "Around 91%"],
              ["Embedding", "2048-dimensional ResNet50 feature vector"],
              ["Split", "70% training / 30% testing for OOD classifier"],
            ],
          },
        },
        {
          title: "Depth Prediction Example",
          image: {
            src: "assets/projects/fathomnet/ood-prediction.png",
            alt: "Example in-distribution and out-of-distribution depth predictions",
            caption: "The darker right-hand sample was predicted as outside the 0-800m training-depth range.",
          },
          paragraphs: [
            "The prediction example shows how depth shift appears visually. The shallower sample preserves more visible green-blue seafloor structure, while the deeper sample is darker and more visually sparse.",
            "The pipeline correctly treated the deeper sample as outside the familiar 0-800m training-depth range. This is exactly the kind of signal an underwater deployment should surface when conditions drift away from the training set.",
          ],
        },
        {
          title: "Results And Research Lessons",
          paragraphs: [
            "The most important takeaway is not that one model won in isolation. The project showed how sensitive underwater object detection is to preprocessing, model architecture, class imbalance, and distribution shift.",
            "YOLOv11 on raw data emerged as the strongest practical detector, while wavelet preprocessing revealed a valuable negative result: improving image appearance for humans can reduce the discriminative cues detectors need.",
            "The OOD pipeline added a second layer of robustness by showing that depth shift can be detected explicitly, not just absorbed silently as lower-confidence classification.",
          ],
          items: [
            { label: "Preprocessing is not automatic gain", text: "Wavelet enhancement improved visibility but did not consistently improve detection." },
            { label: "Modern detectors matter", text: "YOLOv11 was more stable and efficient than YOLOv8 under the same broad task." },
            { label: "OOD detection is essential", text: "Depth alone created measurable distribution drift, making explicit shift detection valuable." },
          ],
        },
        {
          title: "My Role And Future Work",
          paragraphs: [
            "I led the feature extraction and model-training side of the project, including wavelet-based preprocessing experiments, YOLOv8/YOLOv11 detection training, and the out-of-sample detection pipeline based on ResNet50 features and Random Forest classification.",
            "Future work should combine detector confidence, calibrated OOD scores, depth metadata, and active learning so uncertain underwater samples can be routed into a human-in-the-loop labeling process. A production-ready version would also monitor drift over new camera feeds and continuously learn from newly annotated marine samples.",
          ],
        },
      ],
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
      cardStory: [
        "Harmful brain activity classification frames EEG monitoring as a six-class pattern recognition problem in neurocritical care, where detecting seizures and related patterns early is critical. We worked with 50-second EEG windows and 10-minute spectrogram segments from the HMS dataset, annotated under clinically realistic, noisy conditions.",
        "We compared four architectures - EfficientNetB0 on custom spectrogram mosaics, EEGNet-ResNet hybrids, and GRU-ResNet models - studying training and validation loss trajectories across 25 epochs rather than reporting only final accuracy. The GRU model showed the most stable generalization behavior, while EfficientNet on spectrograms remained a consistently strong second, confirming that hybrid convolutional-recurrent designs suit EEG's temporal structure best.",
      ],
      metrics: [
        { label: "EEG window", value: "50 sec" },
        { label: "Spectrogram window", value: "10 min" },
        { label: "Classes", value: "6" },
      ],
      stack: ["PyTorch", "EfficientNetB0", "EEGNet", "GRU", "TensorFlow MirroredStrategy"],
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
      articleTitle: "Food-11: Deploying Deep CNNs Under Resource Constraints",
      articleSubtitle:
        "A deployment-focused ML project comparing VGG16, MobileNet, and Xception under accuracy, CPU, memory, latency, and Kubernetes autoscaling tradeoffs.",
      summary:
        "Deployment-centric CNN study comparing VGG16, MobileNet, and Xception for Food-11 classification under accuracy and resource constraints.",
      built:
        "End-to-end Food-11 web-app deployment with Keras models, Docker-style serving, Kubernetes YAML, HPA configs, and resource-constrained benchmarking.",
      impact:
        "Improved accuracy from 0.7621 to 0.8892 while measuring the cost of that gain across CPU, memory, latency, and autoscaling behavior.",
      story: [
        "Food-11 Classification studies the gap between benchmark accuracy and deployment practicality for image classifiers that need to run under memory, CPU, latency, and autoscaling constraints.",
        "I compared a frozen VGG16 baseline against MobileNet and Xception, fine-tuned the stronger models, deployed them behind Kubernetes-style serving configs, and evaluated them as production inference candidates rather than offline notebooks.",
        "Xception reached the strongest reported accuracy at 0.8892, while MobileNet offered a more cost-effective middle ground. The final recommendation weighs accuracy against CPU, memory, response time, and HorizontalPodAutoscaler behavior.",
      ],
      cardStory: [
        "A deployment-centric CNN study comparing VGG16, MobileNet, and Xception for Food-11 classification, evaluated not just on accuracy but on CPU usage, memory footprint, latency, and Kubernetes autoscaling behavior.",
        "MobileNet reached 87.86% accuracy at moderate resource cost, while Xception hit 88.92% at significantly higher CPU and memory. The project produced concrete deployment recommendations for each architecture under HorizontalPodAutoscaler.",
      ],
      metrics: [
        { label: "Best accuracy", value: "0.8892" },
        { label: "MobileNet accuracy", value: "0.8756" },
        { label: "HPA max pods", value: "5" },
      ],
      stack: ["Keras", "VGG16", "MobileNet", "Xception", "Kubernetes", "Docker", "HPA"],
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
      articleSections: [
        {
          title: "Problem Framing",
          image: {
            src: "assets/projects/food11/model-resource-dashboard.png",
            alt: "Food-11 model accuracy, CPU, memory, and latency comparison dashboard",
            caption: "The project evaluates model quality and serving cost together instead of optimizing accuracy alone.",
          },
          paragraphs: [
            "Food-11 looks like a standard image-classification project at first: take a food image and predict one of 11 classes. The interesting part is the deployment track. The goal was not only to raise validation accuracy, but to understand what each accuracy gain costs in CPU, memory, latency, and autoscaling behavior.",
            "That makes this a practical ML systems problem. A model that is accurate but too heavy can create cost and latency issues, while a model that is cheap but under-accurate creates poor product behavior. The project compares VGG16, MobileNet, and Xception under those tradeoffs.",
          ],
          items: [
            { label: "Task", text: "Food image classification across 11 categories." },
            { label: "Serving context", text: "A web app where users upload an image and receive the predicted class." },
            { label: "Deployment lens", text: "Models are evaluated on accuracy, CPU, memory, response time, and Kubernetes autoscaling behavior." },
          ],
        },
        {
          title: "Dataset And Evaluation Lens",
          paragraphs: [
            "The dataset contains visually similar food categories such as dessert, dairy products, seafood, eggs, bread, meat, fruit, and mixed dishes. These categories create natural ambiguity because food images often contain multiple ingredients or visual cues that overlap across classes.",
            "From the beginning, the project treated the task as a deployment decision. Validation accuracy is important, but the final recommendation also depends on how many resources each model needs to serve predictions reliably.",
          ],
          items: [
            { label: "Input shape", text: "224 x 224 x 3 RGB images." },
            { label: "Metrics", text: "Overall accuracy, CPU cores in millicores, memory usage, and average response time." },
            { label: "Deployment data", text: "Resource usage and load-output CSVs were collected for each model deployment." },
          ],
        },
        {
          title: "Baseline: VGG16",
          image: {
            src: "assets/projects/food11/baseline-misclassification.jpg",
            alt: "Food-11 web app screenshot showing VGG16 misclassifying meat as vegetable or fruit",
            caption: "The baseline VGG16 model was fast, but it could be brittle on visually confusing food images.",
          },
          paragraphs: [
            "The previous model used VGG16 with average pooling, input size 224 x 224 x 3, batch size 32, default parameters, and no additional trainable classification head. It reached 0.7621 accuracy, but struggled with dessert versus dairy products and was not confident enough on classes such as seafood, eggs, and bread.",
            "That baseline was inexpensive to serve, using 517m CPU, 489 MB memory, and 0.45 seconds average response time with a single replica. The problem is that low resource use did not compensate for weak classification behavior.",
          ],
          items: [
            { label: "Accuracy", text: "0.7621." },
            { label: "CPU", text: "517m in the single-replica report table." },
            { label: "Memory", text: "489 MB." },
            { label: "Latency", text: "0.45 seconds average response time." },
          ],
        },
        {
          title: "Model A: MobileNet",
          paragraphs: [
            "Model A replaced VGG16 with MobileNet, an efficient CNN backbone suited to image tasks where inference cost matters. The MobileNet base used average pooling and 224 x 224 inputs, with 3,228,864 parameters frozen initially.",
            "On top of the frozen base, I added dense ReLU layers with sizes 512, 512, 256, and 128, plus dropout at 0.5 for regularization. The model used Adam, sparse categorical cross-entropy, image scaling to the 0-1 range, and data generators with batch size 64.",
            "Initial training reached 0.7982 validation accuracy. Fine-tuning the last five MobileNet layers with Adam learning rate 0.0001, early stopping, and checkpoints raised the reported model accuracy to 0.8756 in the summary table.",
          ],
          items: [
            { label: "Accuracy", text: "0.8756 in the report summary table." },
            { label: "CPU", text: "764m." },
            { label: "Memory", text: "629 MB." },
            { label: "Latency", text: "0.67 seconds average response time." },
          ],
        },
        {
          title: "Model B: Xception",
          image: {
            src: "assets/projects/food11/xception-correct-prediction.jpg",
            alt: "Food-11 web app screenshot showing Xception correctly predicting meat",
            caption: "The Xception model improved difficult qualitative cases, including red sliced meat images that confused the earlier model.",
          },
          paragraphs: [
            "Model B moved to Xception, a stronger backbone for more complex image patterns. The base model used average pooling, 224 x 224 x 3 input, and 20,861,480 parameters, initially frozen before fine-tuning.",
            "Because Xception is much heavier, the batch size was reduced to 32 and the head was kept smaller: dense layers with sizes 256, 256, and 128, ReLU activations, and dropout at 0.5. The initial 15-epoch run reached 0.8420 validation accuracy.",
            "Fine-tuning the last five layers for 6 epochs at learning rate 0.0001 raised validation accuracy to 0.8511 at the final epoch, and the overall model comparison reported Xception as the best model at 0.8892 accuracy.",
          ],
          items: [
            { label: "Accuracy", text: "0.8892." },
            { label: "CPU", text: "1550m." },
            { label: "Memory", text: "800 MB." },
            { label: "Latency", text: "0.72 seconds average response time." },
          ],
        },
        {
          title: "Single-Replica Tradeoffs",
          paragraphs: [
            "The central result is a tradeoff curve: the most accurate model is not the cheapest model. VGG16 is fast and light but under-adapted. MobileNet improves accuracy substantially at moderate additional cost. Xception gives the highest accuracy and strongest qualitative behavior, but demands the most CPU and memory.",
          ],
          table: {
            columns: ["Model", "Accuracy", "CPU", "Memory", "Latency"],
            rows: [
              ["VGG16", "0.7621", "517m", "489 MB", "0.45s"],
              ["MobileNet", "0.8756", "764m", "629 MB", "0.67s"],
              ["Xception", "0.8892", "1550m", "800 MB", "0.72s"],
            ],
          },
        },
        {
          title: "Kubernetes Deployment Design",
          image: {
            src: "assets/projects/food11/kubernetes-deployment-settings.png",
            alt: "Kubernetes HPA and resource requests and limits for Food-11 model deployments",
            caption: "Each model received resource settings that reflected its architecture and expected serving cost.",
          },
          paragraphs: [
            "The project includes Kubernetes deployment YAML for all three models. A HorizontalPodAutoscaler scales between 1 and 5 replicas with target CPU utilization of 40%. The service named ml-service-lb exposes port 6000 and forwards traffic to container port 5000 with nodePort 32000.",
            "The resource requests and limits differ by model. VGG16 uses the smallest envelope, MobileNet raises CPU limits to support the added Keras computation, and Xception raises memory requests because its base model has far more parameters.",
          ],
          table: {
            columns: ["Model", "CPU request", "CPU limit", "Memory request", "Memory limit"],
            rows: [
              ["VGG16", "1", "2", "2Gi", "4Gi"],
              ["MobileNet", "1", "3", "2Gi", "5Gi"],
              ["Xception", "1", "3", "3Gi", "5Gi"],
            ],
          },
        },
        {
          title: "Autoscaling Behavior",
          paragraphs: [
            "The deployment analysis also compared average memory usage, average transition rate, and average response time under Horizontal Dynamic Scaling. The same broad pattern held: more complex models require more memory and compute, but dynamic scaling helps avoid keeping excess replicas alive during lighter traffic.",
            "This is where the project becomes more than a model-comparison notebook. It connects architecture choice to serving behavior, pod transitions, and capacity planning.",
          ],
          items: [
            { label: "Memory trend", text: "Higher-accuracy models used more memory in both single-replica and autoscaled settings." },
            { label: "Transition rate", text: "Lower transition rate did not automatically mean higher accuracy, but heavier accurate models tended to show more stable load patterns." },
            { label: "Response time", text: "More complex models took longer to compute, but the difference between MobileNet and Xception remained manageable in the reported setup." },
          ],
        },
        {
          title: "Model Behavior And Error Analysis",
          paragraphs: [
            "The baseline VGG16 model had difficulty distinguishing dessert, dairy products, seafood, eggs, and bread. It also lacked fine-tuning and a deeper head, so it was not well adapted to the Food-11 domain.",
            "MobileNet overcame many baseline issues and reached a large accuracy gain, but still struggled in rare cases such as sliced red meat being confused with fruit or mixed dishes like chicken-rice where a single label must represent a multi-ingredient image.",
            "Xception handled the observed failure modes best and produced the strongest qualitative behavior. The tradeoff is cost: it is the most expensive model in CPU, memory, and latency.",
          ],
        },
        {
          title: "Deployment Recommendations",
          paragraphs: [
            "The final recommendation depends on the operating constraint. If maximum decision quality matters and resources are available, Xception is the best candidate. If the system needs a cost-effective balance of accuracy and serving efficiency, MobileNet is the stronger practical compromise.",
            "The VGG16 baseline is useful as a low-cost reference point, but its accuracy and error profile make it insufficient for a production-grade image-classification app without fine-tuning and a better classification head.",
          ],
          items: [
            { label: "Maximum accuracy", text: "Deploy Xception with careful resource limits and autoscaling." },
            { label: "Cost-effective serving", text: "Use MobileNet when infrastructure efficiency matters more than the final accuracy gain." },
            { label: "Avoid frozen baselines", text: "A frozen VGG16 feature extractor was fast, but not accurate enough for the target application." },
          ],
        },
        {
          title: "My Role",
          paragraphs: [
            "I designed and trained the three CNN variants used in the project: the VGG16 baseline, MobileNet, and Xception. I also performed fine-tuning experiments, added callbacks such as early stopping, model checkpoints, and learning-rate reduction, and analyzed qualitative failure modes across food categories.",
            "On the deployment side, I authored Kubernetes YAML for the model deployments and autoscaling setup, collected resource_usage and load_output CSVs, and analyzed the tradeoffs among CPU, memory, latency, transition rate, and model accuracy. The final project recommendation was based on accuracy and cost together, not accuracy alone.",
          ],
        },
        {
          title: "Limitations And Future Work",
          paragraphs: [
            "The project establishes a strong deployment-oriented comparison, but a production version would benefit from broader validation across more diverse food images, calibrated confidence thresholds, and a clearer strategy for multi-label or mixed-dish cases.",
            "Future work could add model compression, quantization, TensorFlow Lite or ONNX serving, request batching, GPU-backed inference comparisons, and monitoring for drift in uploaded food images.",
          ],
        },
      ],
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
      cardStory: [
        "A salary prediction system for NYC job listings that combines structured feature engineering with NLP signals from job descriptions.",
        "Built an end-to-end pipeline on 6,634 rows with 30 engineered features, using ANOVA-based feature validation and tuned ensemble regressors. The best configuration achieved R2 of 0.8478, capturing key drivers of salary variation across NYC's public-sector job market.",
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
  articleTitle: "Wildlife Trafficking Detection in Online Marketplaces",
  articleSubtitle:
    "A multimodal Spark-PyTorch pipeline for screening suspicious wildlife-trade ads from images, text, and structured metadata.",
  summary:
    "A graduate big-data project that flags high-risk wildlife-trade listings using EfficientNet image features, DistilBERT text embeddings, and price/location signals.",
  built:
    "Spark-based feature engineering pipeline plus multimodal model with EfficientNet for images, DistilBERT for text, and cross-attention over structured features.",
  impact:
    "Reached 94.08% accuracy, 93.02% recall, and 85.11% precision, prioritizing high recall on a real-world classification problem.",
  context: "Built as a graduate project at NYU focusing on multimodal systems and responsible AI.",
  story: [
    "Wildlife Trafficking Detection is a multimodal screening system for online animal-product listings, where suspicious signals may be spread across images, seller text, prices, countries, and categories.",
    "The project combines Spark-based feature engineering with a PyTorch model that fuses EfficientNet image features, DistilBERT text embeddings, and structured metadata through cross-attention and dense fusion layers.",
    "On held-out testing data, the system reached 94.08% accuracy, 93.02% recall, and 85.11% precision, intentionally prioritizing recall so fewer suspicious listings would be missed.",
  ],
  cardStory: [
    "Wildlife trafficking increasingly exploits online classified ads, where suspicious listings blend with legitimate ones at scale. We built a multimodal classifier that reasons jointly over text descriptions, product images, price, and seller metadata to flag high-risk listings - helping investigators prioritize limited review capacity on the most suspicious content.",
    "The pipeline combines Spark-based feature engineering for structured signals, EfficientNet for visual features, and DistilBERT for text embeddings, fused through cross-attention layers. We intentionally tuned toward high recall to minimize missed suspicious listings, achieving 94.08% accuracy, 93.02% recall, and 85.11% precision - with ablations confirming that no single modality alone was sufficient.",
  ],
  metrics: [
    { label: "Accuracy", value: "94.08%" },
    { label: "Recall", value: "93.02%" },
    { label: "Precision", value: "85.11%" },
  ],
  stack: ["Apache Spark", "EfficientNet", "DistilBERT", "PyTorch", "PySpark MLlib"],
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
      "Co-designed the Spark-based feature engineering pipeline and implemented/evaluated multimodal classification components across image, text, and structured listing features.",
    takeaways: [
      "Multimodal systems can outperform single-modality approaches on noisy listing data.",
      "Structured metadata like price and location adds meaningful predictive value.",
      "More labeled data and calibration would likely improve precision further.",
    ],
    sources: ["Big_Data_Final_Report.pdf"],
  },
  articleSections: [
    {
      title: "Motivation And Problem Framing",
      image: {
        src: "assets/projects/wildlife-trafficking/workflow.png",
        alt: "Workflow diagram for wildlife trafficking detection",
        caption: "The project follows a full big-data workflow: collection, understanding, cleaning, exploration, feature engineering, modeling, tuning, optimization, and evaluation.",
      },
      paragraphs: [
        "The illegal wildlife trade threatens biodiversity, ecosystems, and public health. Online marketplaces make enforcement harder because listings appear at scale, change quickly, and often disappear before investigators can review them.",
        "Animal-related ads can look benign at first glance. A title may be vague, an image may carry the strongest clue, or a price/location combination may reveal risk only when structured metadata is considered alongside text and visuals.",
        "This project frames the problem as a supervised screening task: given an ad's image, description, seller information, country, category, and price, predict whether the listing is suspicious or non-suspicious so human experts can prioritize the highest-risk content.",
      ],
    },
    {
      title: "Dataset And Labeling",
      image: {
        src: "assets/projects/wildlife-trafficking/features-overview.png",
        alt: "Table of dataset attributes for animal-related online ads",
        caption: "The dataset includes listing URLs, titles, page text, product descriptions, domains, images, prices, sellers, locations, countries, zero-shot labels, and image IDs.",
      },
      paragraphs: [
        "The dataset is built from animal-related online advertisements collected from e-commerce sources such as eBay. Each listing combines visual, textual, and structured fields that need to be cleaned and aligned before modeling.",
        "The raw dataset includes noisy descriptions, duplicated or overlapping location fields, inconsistent formatting across countries and currencies, and image URLs that need to be connected back to listing IDs.",
        "Labels are represented as suspicious versus non-suspicious classes. The report also includes zero-shot label and probability fields, which provide additional weak signals during analysis.",
      ],
      items: [
        { label: "Text", text: "Title, page text, and product description." },
        { label: "Image", text: "Listing image URLs and image paths tied to product IDs." },
        { label: "Seller", text: "Seller names/domains and other marketplace identity signals." },
        { label: "Location", text: "Location, country, and coordinate-style fields when available." },
        { label: "Price", text: "Raw price and currency fields that require normalization." },
      ],
    },
    {
      title: "Spark Feature Engineering",
      image: {
        src: "assets/projects/wildlife-trafficking/price-normalization.png",
        alt: "Price violin plots before and after conversion",
        caption: "Price normalization and discretization reduce the effect of inconsistent currencies, extreme values, and marketplace-specific formatting.",
      },
      paragraphs: [
        "Because the data mixes structured and unstructured fields, the project first builds a Spark-based feature engineering pipeline to transform raw listings into model-ready representations.",
        "The report uses Spark MLlib to derive and segment features from product location, price, category, and seller details. Frequent pattern matching helps identify useful itemsets, while quantile discretization bins price into ten ranges.",
        "This structured feature work matters because risk signals are often relational: a product category may not be suspicious alone, but its price range, seller identity, and country of origin can shift the model's interpretation.",
      ],
      items: [
        { label: "Deduplication", text: "Remove duplicate or near-duplicate records and overlapping fields." },
        { label: "Normalization", text: "Standardize inconsistent country, seller, category, and price formats." },
        { label: "Discretization", text: "Use quantile bins to make price features more robust to outliers." },
        { label: "Pattern mining", text: "Use itemsets to study support/confidence relationships among price, seller, country, and category." },
      ],
    },
    {
      title: "Multimodal Model Design",
      image: {
        src: "assets/projects/wildlife-trafficking/multimodal-model.png",
        alt: "Multimodal model diagram using DistilBERT, EfficientNet, cross-attention, price, and country",
        caption: "The classifier combines text, image, price, and country information before making the final suspicious/non-suspicious prediction.",
      },
      paragraphs: [
        "The core classifier fuses three information streams: image features, text features, and structured metadata. This is important because suspicious listings rarely expose all evidence in a single modality.",
        "EfficientNet transforms listing images into visual embeddings that can capture species appearance, product presentation, cages, packaging, or market context. DistilBERT converts noisy ad descriptions into contextual text embeddings.",
        "The model then combines these learned representations with structured signals such as price and country. Cross-attention and dense fusion layers allow the model to reason jointly over visual, textual, and metadata cues.",
      ],
      items: [
        { label: "Image encoder", text: "EfficientNet feature extraction over resized and normalized listing images." },
        { label: "Text encoder", text: "DistilBERT embeddings over seller descriptions and ad text." },
        { label: "Metadata", text: "Normalized price and encoded country/category/seller features." },
        { label: "Fusion", text: "Cross-attention and dense layers combine modalities before classification." },
      ],
    },
    {
      title: "Training And Evaluation Setup",
      paragraphs: [
        "The model was trained for 20 epochs using an 80/20 train-test split. The evaluation emphasizes recall and precision, not just accuracy, because missing suspicious listings is more costly than sending a manageable number of false positives to human review.",
        "For this type of screening workflow, a model with high recall can help investigators find more risky listings, while precision controls how much noise appears in the review queue.",
      ],
      items: [
        { label: "Task", text: "Binary suspicious versus non-suspicious classification." },
        { label: "Split", text: "80/20 train-test split." },
        { label: "Training", text: "20 epochs." },
        { label: "Metrics", text: "Accuracy, recall, precision, and confusion matrices." },
        { label: "Operating goal", text: "Prioritize high recall while keeping precision above 85%." },
      ],
    },
    {
      title: "Results",
      image: {
        src: "assets/projects/wildlife-trafficking/testing-confusion-matrix.png",
        alt: "Testing confusion matrix for wildlife trafficking detection",
        caption: "The held-out test matrix shows 119 true negatives, 40 true positives, 7 false positives, and 3 false negatives.",
      },
      paragraphs: [
        "On held-out testing data, the multimodal model achieved 94.08% accuracy, 93.02% recall, and 85.11% precision.",
        "The high recall is the key result: the model caught 40 of 43 positive cases in the test split, leaving only 3 false negatives. Precision remains above 85%, which keeps the alert stream practical for downstream screening.",
      ],
      table: {
        columns: ["Dataset", "Precision", "Recall", "Accuracy"],
        rows: [
          ["Training", "99.07%", "99.53%", "99.58%"],
          ["Testing", "85.11%", "93.02%", "94.08%"],
        ],
      },
    },
    {
      title: "Train-Test Generalization",
      image: {
        src: "assets/projects/wildlife-trafficking/training-confusion-matrix.png",
        alt: "Training confusion matrix for wildlife trafficking detection",
        caption: "Training performance is near-perfect, while testing performance remains strong with the expected precision/recall drop on unseen data.",
      },
      paragraphs: [
        "The training confusion matrix shows near-perfect behavior, while the testing matrix shows a realistic performance drop. That gap is expected when the model moves from seen examples to unseen listings.",
        "The important point is that recall remains high on testing data. In a screening context, this means the model is still useful for triage even when precision has room to improve.",
      ],
      items: [
        { label: "Training behavior", text: "500 true negatives, 214 true positives, 2 false positives, and 1 false negative." },
        { label: "Testing behavior", text: "119 true negatives, 40 true positives, 7 false positives, and 3 false negatives." },
        { label: "Interpretation", text: "The model generalizes strongly enough for screening, but additional data and tuning could improve precision." },
      ],
    },
    {
      title: "Ablations And Observations",
      paragraphs: [
        "The project shows why multimodal modeling is valuable for online marketplace risk detection. Text alone can miss subtle visual evidence, image alone can miss seller intent, and metadata alone can be ambiguous without context.",
        "Structured features such as price, seller, country, and category improve the model because they give the classifier operational signals that image and text encoders cannot infer reliably on their own.",
      ],
      items: [
        { label: "Multimodal advantage", text: "Combining text, image, and metadata captures more evidence than any single modality." },
        { label: "Price normalization", text: "Currency conversion, log-like behavior, and discretization reduce instability from extreme marketplace prices." },
        { label: "Seller/country/category", text: "Frequent pattern features expose risk patterns across marketplace actors and product groups." },
        { label: "Thresholding", text: "Decision thresholds can be tuned for higher recall when the goal is to avoid missed suspicious listings." },
      ],
    },
    {
      title: "My Role",
      paragraphs: [
        "I co-designed the Spark-based feature engineering pipeline and implemented the multimodal classification model, combining EfficientNet image features, DistilBERT text embeddings, and structured metadata through PyTorch-based fusion layers.",
        "I also led evaluation design around recall-sensitive metrics and confusion-matrix analysis, focusing on how well the model could support screening workflows where missed suspicious listings carry high cost.",
      ],
    },
    {
      title: "Limitations",
      paragraphs: [
        "Despite strong metrics, this project should be understood as a decision-support prototype rather than an automated enforcement system.",
      ],
      items: [
        { label: "Label noise", text: "Weak or heuristic labels can miss some trafficking patterns or over-represent known species and regions." },
        { label: "Domain drift", text: "Sellers can change language, platforms, product presentation, and tactics over time." },
        { label: "False positives", text: "Even with 85.11% precision, some non-suspicious ads will be flagged and need human review." },
        { label: "Ethical use", text: "The model should support expert triage and auditing, not make legal or enforcement decisions automatically." },
      ],
    },
    {
      title: "Future Directions",
      paragraphs: [
        "The next version should improve precision while preserving recall, add stronger calibration, and close the loop between investigator feedback and model updates.",
      ],
      items: [
        { label: "Active learning", text: "Feed investigator feedback on flagged ads back into the training set." },
        { label: "Calibration", text: "Use uncertainty estimation or conformal prediction to rank the most confident high-risk cases." },
        { label: "Network features", text: "Analyze seller networks, routes, and repeated marketplace patterns in addition to listing-level signals." },
        { label: "Multi-label outputs", text: "Predict species category, product type, and risk level for richer investigative workflows." },
      ],
    },
  ],
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
      items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Spark MLlib", "Hugging Face", "MLflow"],
    },
    {
      group: "Data Engineering And ETL",
      items: ["PySpark", "SQL", "Hive", "SparkSQL", "Hadoop", "Distributed pipeline orchestration"],
    },
    {
      group: "Tools And Platforms",
      items: ["Python", "Pandas", "SciPy", "NumPy", "Git", "Docker", "Kubernetes", "AWS", "Azure Bot Framework", "Tableau", "ArcGIS Pro", "Hibernate"],
    },
    {
      group: "Model Families",
      items: ["YOLOv8", "YOLOv11", "EfficientNet", "DistilBERT", "Tiny-RoBERTa", "XGBoost", "Random Forest"],
    },
    {
      group: "Research And Communication",
      items: [
        "Experimental design and ablation studies",
        "Model evaluation and error analysis",
        "Academic report writing and presentations",
        "Reproducible ML workflows (versioned code, data, configs)",
        "Geospatial data analysis (ArcGIS Pro)",
      ],
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
      proof: "5 modalities",
      summary: "Audio, EEG, vision, text, and structured data across cross-attention and deep learning systems.",
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
      dates: "Aug 2023 - May 2025",
      degree: "MS in Computer Science",
      location: "New York, NY",
      highlights: [
        "<strong>Activities:</strong> New York Machine Learning Club.",
      ],
      detailGroups: [
        {
          title: "Coursework",
          body: "Machine Learning, Deep Learning, Big Data, Computer Vision, Information Visualization, Cognitive Computational Modelling, Machine Listening, Design & Analysis of Algorithms, Software Engineering, Foundation of Data Science (Capstone).",
        },
        {
          title: "Graduate Projects",
          body: "Sound Scene Synthesis (DCASE 2024), Harmful Brain Activity Classification, FathomNet Fine-Grained Visual Categorization, Wildlife Trafficking Detection, Food-11 Deployment, NYC Salary Range Prediction, and IntelliQuest Academic Search Engine.",
        },
      ],
    },
    {
      school: "KL University",
      dates: "Jun 2018 - Apr 2022",
      degree: "BSc in Computer Science & Engineering with AI",
      location: "Vijayawada, India",
      highlights: [
        "<strong>Honors:</strong> Selected as one of the top competitive coders at KL University — Competitive Coding Club (2018-2022).",
        "<strong>Activities:</strong> AI/ML Club · Competitive Coding Club.",
      ],
      detailGroups: [
        {
          title: "Relevant Coursework",
          body: "Data Structures, Algorithms, Machine Learning, Artificial Intelligence, Database Systems, Operating Systems.",
        },
      ],
    },
  ],
  certifications: {
    featured: [
      {
        title: "IBM Data Science Specialization",
        issuer: "Coursera",
      },
      {
        title: "Cisco CCNA Routing and Switching",
        issuer: "Cisco Networking Academy",
        date: "Jul 2021",
      },
    ],
    compact: [
      "Java / J2EE Developer — Wipro · Sep 2021",
      "Certified Software Programmer — Infosys",
      "Certified System Administrator — ServiceNow",
      "Introduction to AI — Simplilearn",
      "Problem Solving (Basic) — HackerRank",
    ],
  },
  community: [
    {
      title: "Research Volunteer — NYU Built Environment & Informatics Lab (BILAB)",
      meta: "Oct 2023 - Nov 2023 · New York University · New York, NY",
      summary:
        "Collaborated with PhD researchers on urban infrastructure analysis using geospatial satellite imagery of New York City. Processed and classified high-resolution ArcGIS Pro data, contributing image-classification work to the lab's ongoing research on city-level environmental patterns.",
    },
    {
      title: "Member — New York Machine Learning Club",
      meta: "2023 - 2025 · New York University · New York, NY",
      summary:
        "Participated in the New York Machine Learning Club during the NYU MS CS program, engaging with the local ML research and practitioner community through talks, workshops, and peer discussions on applied machine learning topics.",
    },
    {
      title: "Top Competitive Coder — KL University Competitive Coding Club",
      meta: "2018 - 2022 · KL University · Vijayawada, India",
      summary:
        "Selected as one of the top coders at KL University across university-wide competitive programming challenges and AI/ML initiatives. Participated in coding contests and collaborated on algorithmic problem-solving within the department's CS community.",
    },
    {
      title: "AI/ML Club Member — KL University",
      meta: "2018 - 2022 · KL University · Vijayawada, India",
      summary:
        "Participated in AI/ML Club activities while completing a CSE degree with Artificial Intelligence, strengthening the technical foundation behind later NYU graduate work in machine learning, deep learning, computer vision, big data, and applied AI systems.",
    },
  ],
  footer: {
    copy: "© 2026 Chhatrapathi Sivaji Lakkimsetty. All rights reserved.",
  },
};

const byId = (id) => document.getElementById(id);

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

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

const featuredProjectSlugs = [
  "harmful-brain-activity-classification",
  "sound-scene-synthesis",
  "wildlife-trafficking-ads",
  "fathomnet-visual-categorization",
];

const moreProjectSlugs = [
  "food11-ml-deployment",
  "nyc-salary-range-prediction",
  "intelliquest",
  "resnet-cifar10-under-5m",
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
      (item) =>
        item.expanded
          ? `
              <article class="timeline-item timeline-item-expanded">
                ${renderExperienceContent(item)}
              </article>
            `
          : `
              <details class="timeline-item timeline-accordion">
                <summary>
                  <span class="timeline-date">${item.dates}</span>
                  <span class="timeline-summary-main">
                    <span class="timeline-org">${item.organization} · ${item.role}</span>
                    <span class="timeline-place">${[item.place, item.dates, item.type].filter(Boolean).join(" · ")}</span>
                    ${item.preview ? `<span class="timeline-preview">${item.preview}</span>` : ""}
                  </span>
                  <span class="timeline-toggle">Show details ↓</span>
                </summary>
                ${renderExperienceContent(item, false)}
              </details>
            `
    )
    .join("");
}

function renderExperienceContent(item, includeDate = true) {
  return `
    ${includeDate ? `<div class="timeline-date">${item.dates}</div>` : ""}
    <div class="timeline-content">
      <p class="timeline-org">${item.organization} · ${item.role}</p>
      <p class="timeline-place">${[item.place, item.dates, item.type].filter(Boolean).join(" · ")}</p>
      <div class="timeline-prose">
        ${(item.paragraphs || item.details || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      ${item.roleMetrics ? renderRoleMetrics(item.roleMetrics) : ""}
      ${item.tech ? `<p class="timeline-tech"><strong>Tech:</strong> ${item.tech}</p>` : ""}
    </div>
  `;
}

function renderRoleMetrics(metrics) {
  return `
    <div class="role-metrics">
      ${metrics
        .map(
          (metric) => `
            <span class="role-metric-item">
              <span class="metric-value">${metric.value}</span>
              <span class="metric-label">${metric.label}</span>
              ${metric.detail ? `<span class="metric-detail">${metric.detail}</span>` : ""}
            </span>
          `
        )
        .join("")}
    </div>
  `;
}

function renderProjectVisual(kind) {
  const visualMap = {
    audio: `
      <div class="project-visual audio-visual" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <i></i><i></i><i></i><i></i><i></i>
      </div>
    `,
    vision: `
      <div class="project-visual vision-visual" aria-hidden="true">
        <span class="vision-box large"></span><span class="vision-box small"></span><span class="vision-depth"></span>
      </div>
    `,
    eeg: `
      <div class="project-visual eeg-visual" aria-hidden="true">
        <span class="eeg-orb"></span>
        <span class="eeg-trace trace-a"></span>
        <span class="eeg-trace trace-b"></span>
        <span class="eeg-node node-a"></span>
        <span class="eeg-node node-b"></span>
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
  const featuredProjects = featuredProjectSlugs
    .map((slug) => portfolio.projects.find((project) => project.slug === slug))
    .filter(Boolean);
  const moreProjects = moreProjectSlugs
    .map((slug) => portfolio.projects.find((project) => project.slug === slug))
    .filter(Boolean);

  byId("projectGrid").innerHTML = featuredProjects
    .map((project) => renderProjectCard(project, "featured"))
    .join("");

  byId("moreProjectGrid").innerHTML = moreProjects
    .map((project) => renderProjectCard(project, "compact"))
    .join("");

  setProjectsExpanded(window.location.hash === "#projects/all");
}

function renderProjectCard(project, variant = "featured") {
  const categories = projectCategoriesBySlug[project.slug] || [];
  const story = project.cardStory || project.story || [project.summary, project.built, project.impact];
  const techItems = project.stack.slice(0, variant === "compact" ? 6 : 7);

  return `
    <a class="project-card ${variant === "compact" ? "project-card-compact" : ""}" data-categories="${categories.join(" ")}" href="#project/${project.slug}" aria-label="View detailed case study for ${project.title}">
      ${variant === "featured" ? renderProjectVisual(project.visual) : ""}
      <div class="project-meta">
        <span>${project.type}</span>
        <span>${project.dates}</span>
      </div>
      <h3>${project.title}</h3>
      ${project.context && variant === "featured" ? `<p class="project-context">${project.context}</p>` : ""}
      <div class="project-story">
        ${story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="project-metrics">
        ${project.metrics.map((metric) => `<span class="project-metric"><strong>${metric.value}</strong><span>${metric.label}</span></span>`).join("")}
      </div>
      <p class="project-tech-line"><strong>Tech:</strong> ${techItems.join(", ")}</p>
      <div class="project-stack">
        ${techItems.map((item) => `<span class="project-tech">${item}</span>`).join("")}
      </div>
      <span class="project-cta">View case study <span>↗</span></span>
    </a>
  `;
}

function setProjectsExpanded(expanded) {
  const moreProjects = byId("moreProjects");
  const button = byId("viewAllProjects");
  const featuredLabel = byId("featuredProjectsLabel");

  if (!moreProjects || !button) {
    return;
  }

  moreProjects.hidden = !expanded;
  button.hidden = expanded;
  if (featuredLabel) {
    featuredLabel.hidden = !expanded;
  }
}

function bindProjectReveal() {
  const button = byId("viewAllProjects");

  if (!button) {
    return;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.hash = "#projects/all";
    setProjectsExpanded(true);
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
        <article class="edu-card">
          <div class="edu-header">
            <div class="edu-left">
              <span class="edu-date">${item.dates}</span>
              <h3 class="edu-school">${item.school}</h3>
            </div>
            <div class="edu-right">
              <span class="edu-degree">${item.degree}</span>
              <span class="edu-location">${item.location}</span>
            </div>
          </div>
          <div class="edu-body">
            ${
              item.highlights
                ? item.highlights.map((highlight) => `<p class="edu-activities">${highlight}</p>`).join("")
                : ""
            }
            ${
              item.detailGroups
                ? item.detailGroups
                    .map(
                      (group) => `
                        <details class="edu-details">
                          <summary>${group.title}</summary>
                          <p>${group.body}</p>
                        </details>
                      `
                    )
                    .join("")
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");
}

function renderCertifications() {
  byId("certificationList").innerHTML = `
    <li class="cert-featured-wrap">
      <div class="cert-featured-grid">
        ${portfolio.certifications.featured
          .map(
            (certification) => `
              <article class="cert-featured">
                <h3>${certification.title}</h3>
                <p>${[certification.issuer, certification.date].filter(Boolean).join(" · ")}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </li>
    ${portfolio.certifications.compact
      .map((certification) => `<li class="cert-compact">${certification}</li>`)
      .join("")}
  `;
}

function renderCommunity() {
  byId("communityGrid").innerHTML = portfolio.community
    .map(
      (item) => `
        <article class="community-card">
          <h3>${item.title}</h3>
          ${item.meta ? `<p class="community-meta">${item.meta}</p>` : ""}
          <p>${item.summary}</p>
        </article>
      `
    )
    .join("");
}

function bindEmailReveal() {
  document.querySelectorAll(".email-reveal-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const address = `${button.dataset.user}@${button.dataset.domain}`;
      const link = document.createElement("a");

      link.href = `mailto:${address}`;
      link.className = "contact-link";
      link.textContent = address;
      button.replaceWith(link);
    });
  });
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
  setProjectsExpanded(hash === "#projects/all");
}

renderGoals();
renderExperience();
renderProjects();
bindProjectReveal();
renderSkillStories();
renderSkills();
renderEducation();
renderCertifications();
renderCommunity();
bindEmailReveal();
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
