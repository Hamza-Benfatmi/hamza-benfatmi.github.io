// ==========================================================================
//   1. INITIALISATION (Animations & Particules)
// ==========================================================================
AOS.init({ duration: 800, once: true, offset: 100 });

function updateParticlesColor(color) {
    if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.particles.color.value = color;
        window.pJSDom[0].pJS.particles.line_linked.color = color;
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

particlesJS('particles-js', {
    particles: {
        number: { value: 60 },
        color: { value: '#6366f1' },
        shape: { type: 'circle' },
        opacity: { value: 0.3 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150, color: '#6366f1', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 1.5 }
    }
});

// ==========================================================================
//   2. DONNÉES DU PORTFOLIO (Version complète avec tous les textes et projets)
// ==========================================================================
const portfolioData = {
    education: [
        {
            id: "m2-isas",
            year: "2025 - 2026",
            degree: { 
                fr: "Master 2 — Ingénierie des Systèmes Aéronautiques et Spatiaux (ISAS)", 
                en: "Master 2 — Aerospace Systems Engineering (ISAS)" 
            },
            school: "Université Paris-Saclay / Évry",
            isCurrent: true
        },
        {
            id: "m1-e3a",
            year: "2024 - 2025",
            degree: { 
                fr: "Master 1 — Électronique, Énergie Électrique et Automatique (E3A)", 
                en: "Master 1 — Electronics, Electrical Energy and Automation (E3A)" 
            },
            school: "Université Paris-Saclay / Évry"
        },
        {
            id: "l3-eati",
            year: "2023 - 2024",
            degree: { 
                fr: "Licence 3 — Électronique, Automatique et Traitement de l'Information", 
                en: "Bachelor 3 — Electronics, Automation and Information Processing" 
            },
            school: "Université d'Évry Paris-Saclay"
        },
        {
            id: "dut-se",
            year: "2021 - 2023",
            degree: { 
                fr: "DUT — Systèmes Embarqués", 
                en: "University Diploma — Embedded Systems" 
            },
            school: "EST Fès, Univ. Sidi Mohamed Ben Abdellah"
        }
    ],
    projects: {
        electronics: [
            // --- PROJET STAR : SMART AGRI-DRONE ---
            {
                id: "agri-drone",
                title: { fr: "Smart Agri-Drone IoT", en: "Smart Agri-Drone IoT" },
                shortDescription: { fr: "Système d'agriculture de précision fusionnant données aériennes et terrestres.", en: "Precision farming system merging aerial and terrestrial data." },
                technologies: ['Raspberry Pi + Navio2', 'Matlab Simulation', 'IoT Protocol', 'Web Dashboard'],
                details: {
                    intro: {
                        fr: "Conception d'un système intelligent d'agriculture de précision combinant des données aériennes collectées par drone et des mesures issues de capteurs terrestres. Basé sur Raspberry Pi et Navio2, le système vise à améliorer la surveillance des cultures, l'analyse des conditions agricoles et l'aide à la décision grâce à l'exploitation des données et aux technologies IoT. L'objectif est de créer une architecture permettant de connecter les systèmes embarqués, les capteurs et les outils d'analyse afin d'optimiser le suivi des parcelles et la gestion des ressources agricoles.",
                        en: "Designed an intelligent precision agriculture system combining aerial data collected by a drone with measurements from ground-based sensors. Based on Raspberry Pi and Navio2, the system aims to improve crop monitoring, agricultural condition analysis, and decision-making through data processing and IoT technologies. The objective is to develop an architecture connecting embedded systems, sensors, and analysis tools to optimize field monitoring and agricultural resource management."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                            text: {
                                fr: "<ul><li>Conception d'une architecture d'agriculture de précision associant une plateforme drone et des capteurs terrestres pour collecter des données complémentaires sur les parcelles agricoles.</li><li>Intégration d'une architecture embarquée reposant sur Raspberry Pi et Navio2 pour exploiter les capacités de la plateforme aérienne.</li><li>Étude de la collecte et de la centralisation des données issues des différents équipements afin de faciliter leur exploitation.</li><li>Utilisation de MATLAB pour l'analyse, le traitement et la représentation des données collectées.</li><li>Exploration des technologies IoT pour assurer la communication entre les équipements et permettre le suivi des informations agricoles.</li><li>Étude de la complémentarité entre les observations aériennes et les mesures au sol pour améliorer la surveillance des cultures et l'aide à la décision.</li></ul>",
                                en: "<ul><li>Designed a precision agriculture architecture combining a drone platform and ground-based sensors to collect complementary data from agricultural fields.</li><li>Integrated an embedded architecture based on Raspberry Pi and Navio2 to leverage the capabilities of the aerial platform.</li><li>Investigated the collection and centralization of data from different devices to facilitate further analysis.</li><li>Used MATLAB for data analysis, processing, and visualization.</li><li>Explored IoT technologies to enable communication between devices and support agricultural data monitoring.</li><li>Investigated how aerial observations and ground measurements could complement each other to improve crop monitoring and decision-making.</li></ul>"
                            },
                            image: [
                                "images/drone-hardware.jpg",
                                "images/drone-architecture.jpg", 
                                "images/drone-dashboard.jpg"
                            ] 
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : Raspberry Pi, Navio2, systèmes drones, MATLAB, IoT, capteurs terrestres, acquisition et traitement de données. Le principal défi résidait dans la coordination de sources de données hétérogènes provenant de plateformes aériennes et de capteurs au sol. La conception devait prendre en compte la communication entre les équipements, la cohérence des informations collectées et leur exploitation pour produire des indicateurs utiles à l'agriculture de précision. Ce projet mobilise des compétences transversales en systèmes embarqués, acquisition de données, traitement du signal et intégration de systèmes connectés.",
                                en: "Technical environment: Raspberry Pi, Navio2, drone systems, MATLAB, IoT, ground-based sensors, data acquisition, and data processing. The main challenge was coordinating heterogeneous data sources from aerial platforms and ground sensors. The architecture needed to account for device communication, consistency of collected information, and data processing to produce useful precision agriculture indicators. This project brings together skills in embedded systems, data acquisition, signal processing, and connected system integration."
                            },
                            image: [
                                "images/drone-matlab.png", 
                                "images/drone-matlab-2.png"
                            ] 
                        }
                    ]
                }
            },
            // --- VÉHICULE AUTONOME ---
            {
                id: "auto-vehicle",
                title: { fr: "Autonomous Mini-Vehicle", en: "Autonomous Mini-Vehicle" },
                shortDescription: { fr: "Véhicule miniature autonome utilisant l'IA (YOLOv8) et LiDAR pour la navigation.", en: "Miniature autonomous vehicle using AI (YOLOv8) and LiDAR." },
                technologies: ['Raspberry Pi 4', 'YOLOv8', 'OpenCV', 'LiDAR LD19'],
                details: {
                    intro: {
                        fr: "Développement d'un véhicule miniature autonome capable de percevoir son environnement et de prendre des décisions de navigation à partir de données issues de capteurs et de systèmes de vision. Le projet combine la détection d'objets par intelligence artificielle avec YOLOv8, le traitement d'images via OpenCV et la perception de distance par LiDAR. L'objectif est de concevoir une chaîne de perception permettant au véhicule d'identifier les éléments de son environnement et de contribuer à une navigation plus autonome et plus sûre.",
                        en: "Developed an autonomous miniature vehicle capable of perceiving its surroundings and making navigation decisions using sensor data and computer vision. The project combines AI-based object detection with YOLOv8, image processing using OpenCV, and distance perception through LiDAR. The objective is to build a perception pipeline that enables the vehicle to identify elements in its environment and support safer, more autonomous navigation."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                            text: {
                                fr: "<ul><li>Conception d'un système de navigation autonome pour un véhicule miniature intégrant des fonctions de perception de l'environnement.</li><li>Exploitation de YOLOv8 pour détecter et identifier des objets dans les images acquises par une caméra.</li><li>Utilisation d'OpenCV pour le traitement des images et leur préparation en vue de l'analyse visuelle.</li><li>Intégration du LiDAR dans la chaîne de perception afin d'obtenir des informations de distance sur l'environnement du véhicule.</li><li>Étude de la complémentarité entre la vision par ordinateur et les mesures LiDAR pour améliorer la compréhension de l'environnement.</li><li>Contribution à la réflexion sur l'exploitation des données de perception pour assister les décisions de déplacement et éviter les obstacles.</li></ul>",
                                en: "<ul><li>Designed an autonomous navigation system for a miniature vehicle incorporating environmental perception capabilities.</li><li>Used YOLOv8 to detect and identify objects in camera images.</li><li>Applied OpenCV for image processing and preparation for visual analysis.</li><li>Integrated LiDAR into the perception pipeline to obtain distance information about the vehicle's surroundings.</li><li>Investigated how computer vision and LiDAR measurements could complement each other to improve environmental awareness.</li><li>Contributed to the design of methods for using perception data to support movement decisions and obstacle avoidance.</li></ul>"
                            },
                            image: "images/picar-architecture.jpg"
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : YOLOv8, intelligence artificielle, vision par ordinateur, OpenCV, caméra, LiDAR, perception robotique et navigation autonome. Le principal défi consistait à exploiter conjointement les informations visuelles et les mesures de distance pour obtenir une représentation plus fiable de l'environnement. La qualité de la détection, la précision des distances et la cohérence des données constituent des facteurs importants pour la prise de décision embarquée. Ce projet illustre l'application de l'IA et de la fusion de données capteurs à un système robotique mobile.",
                                en: "Technical environment: YOLOv8, artificial intelligence, computer vision, OpenCV, camera, LiDAR, robotic perception, and autonomous navigation. The main challenge was to combine visual information and distance measurements to obtain a more reliable representation of the environment. Detection quality, distance accuracy, and data consistency are important factors for onboard decision-making. This project demonstrates the application of AI and sensor data fusion to a mobile robotic system."
                            },
                            image: "images/picar-vision.jpg"
                        }
                    ]
                }
            },
            // --- ROBOT MULTIFONCTION (MYSTERY MACHINE) ---
            {
                id: "robot-mystery-machine",
                title: { fr: "Robot Autonome Multifonction", en: "Autonomous Multifunction Robot" },
                shortDescription: { 
                    fr: "Robot 'Mystery Machine' : suivi de ligne, évitement, détection de couleurs et tir de balle.", 
                    en: "'Mystery Machine' robot: line tracking, avoidance, color detection, and ball throwing." 
                },
                technologies: ['C/C++', 'Algorithmique embarquée', 'Capteurs US/IR', 'Travail en équipe'],
                details: {
                    intro: {
                        fr: "Projet académique réalisé en équipe à l'Université d'Évry. Nous avons conçu un robot autonome multifonction arborant le design unique de la 'Mystery Machine' de Scooby-Doo. En tant que responsable de la partie informatique, j'ai piloté l'architecture logicielle et programmé l'ensemble des comportements intelligents du robot, de la navigation complexe à l'interaction physique avec son environnement.",
                        en: "Academic team project completed at the University of Evry. We designed a multifunctional autonomous robot featuring the unique design of Scooby-Doo's 'Mystery Machine'. As the lead software developer, I managed the software architecture and programmed all the robot's intelligent behaviors, from complex navigation to physical interaction with its environment."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations (Lead Software)", en: "Missions & Achievements (Lead Software)" },
                            text: {
                                fr: "<ul><li><strong>Architecture logicielle :</strong> Développement de la structure du code (machines à états) pour gérer les transitions fluides entre les différents modes du robot.</li><li><strong>Navigation avancée :</strong> Programmation des algorithmes de suivi de ligne et de détection/évitement d'obstacles en temps réel.</li><li><strong>Logique de récupération :</strong> Conception d'un algorithme complexe combinant la détection de perte de ligne et le suivi de mur autonome pour retrouver le chemin.</li><li><strong>Interaction & Actionneurs :</strong> Intégration de la détection de couleurs et programmation de la séquence automatisée déclenchant le tir d'une balle dans un panier.</li><li><strong>Leadership technique :</strong> Coordination de l'équipe sur les aspects logiciels, débogage et tests continus pour synchroniser le code avec les contraintes mécaniques du châssis.</li></ul>",
                                en: "<ul><li><strong>Software Architecture:</strong> Developed the code structure (state machines) to manage smooth transitions between different robot modes.</li><li><strong>Advanced Navigation:</strong> Programmed algorithms for line tracking and real-time obstacle detection/avoidance.</li><li><strong>Recovery Logic:</strong> Designed a complex algorithm combining line-loss detection and autonomous wall tracking to recover the path.</li><li><strong>Interaction & Actuators:</strong> Integrated color detection and programmed the automated sequence to shoot a ball into a basket.</li><li><strong>Technical Leadership:</strong> Coordinated the team on software aspects, debugging, and continuous testing to synchronize the code with the chassis's mechanical constraints.</li></ul>"
                            },
                            image: [
                                "images/robot-l3.png", 
                                "images/robot-l3-2.png"
                            ] 
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : Microcontrôleur, programmation C/C++, capteurs à ultrasons, capteurs infrarouges/couleurs, moteurs DC et actionneurs pour le lanceur. Le défi majeur de ce projet était de garantir la <strong>réactivité en temps réel</strong> : le robot devait lire ses multiples capteurs, ajuster ses moteurs (PID) et préparer son tir simultanément sans bloquer la boucle principale du programme. La fonctionnalité de 'récupération de ligne par suivi de mur' a exigé un réglage algorithmique très fin pour gérer les angles morts. Cette expérience a fortement consolidé mon leadership technique, ma maîtrise de l'algorithmique embarquée et ma capacité à fusionner logiciel et mécanique.",
                                en: "Technical environment: Microcontroller, C/C++ programming, ultrasonic sensors, infrared/color sensors, DC motors, and launcher actuators. The major challenge was ensuring <strong>real-time responsiveness</strong>: the robot had to read multiple sensors, adjust its motors (PID), and prepare its shot simultaneously without blocking the main program loop. The 'line recovery via wall tracking' feature required fine algorithmic tuning to handle blind spots. This experience greatly strengthened my technical leadership, mastery of embedded algorithms, and ability to merge software with mechanics."
                            },
                            image: ""
                        }
                    ]
                }
            },
            // --- ROBOT POMPIER ---
            {
                id: "fire-robot",
                title: { fr: "Robot Pompier Intelligent", en: "Smart Firefighter Robot" },
                shortDescription: { fr: "Robot ESP32 capable de détecter et d'éteindre les incendies via UV/IR.", en: "ESP32 robot designed to detect and extinguish fires using UV/IR sensors." },
                technologies: ['ESP32', 'UV/IR Sensors', 'Water Pump', 'Java Android'],
                details: {
                    intro: {
                        fr: "Conception d'un robot pompier intelligent capable de détecter une source potentielle d'incendie et d'intervenir automatiquement en activant une pompe à eau. Basé sur un microcontrôleur ESP32 et des capteurs UV/IR, le système associe acquisition de données, logique de commande et actionnement. Une application Android développée en Java complète le dispositif pour permettre le contrôle à distance et l'interaction avec le robot. Ce projet met en œuvre les principes des systèmes embarqués, de la robotique mobile et de la supervision via une interface mobile.",
                        en: "Designed an intelligent firefighting robot capable of detecting a potential fire source and responding by activating a water pump. Based on an ESP32 microcontroller and UV/IR sensors, the system combines data acquisition, control logic, and actuation. An Android application developed in Java complements the system by enabling remote control and interaction with the robot. This project applies embedded systems, mobile robotics, and smartphone-based supervision concepts."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                            text: {
                                fr: "<ul><li>Conception d'un système robotique embarqué destiné à la détection et à l'extinction de sources potentielles d'incendie.</li><li>Intégration d'un ESP32 pour assurer l'acquisition des signaux des capteurs, l'exécution de la logique de commande et le pilotage des actionneurs.</li><li>Utilisation de capteurs UV/IR pour détecter des indices caractéristiques d'une source de flamme.</li><li>Développement de la commande d'une pompe à eau afin de déclencher une action d'extinction en réponse à une détection.</li><li>Développement d'une application Android en Java pour permettre le contrôle du robot et faciliter l'interaction avec le système embarqué.</li><li>Organisation des échanges entre l'interface mobile et le robot afin de relier les commandes utilisateur aux fonctions embarquées.</li><li>Participation aux essais de fonctionnement et à la vérification de la cohérence entre détection, commande et actionnement.</li></ul>",
                                en: "<ul><li>Designed an embedded robotic system intended to detect and extinguish potential fire sources.</li><li>Integrated an ESP32 to acquire sensor signals, execute control logic, and drive actuators.</li><li>Used UV/IR sensors to detect characteristic indicators of a flame source.</li><li>Implemented water pump control to trigger an extinguishing response following detection.</li><li>Developed an Android application in Java to control the robot and facilitate interaction with the embedded system.</li><li>Organized communication between the mobile interface and the robot, linking user commands to embedded functions.</li><li>Contributed to functional testing and verification of the interaction between detection, control, and actuation.</li></ul>"
                            },
                            image: "images/robot-pompier.jpg"
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : ESP32, programmation de microcontrôleurs, capteurs UV/IR, pompe à eau, commande d'actionneurs, Android, Java, communication entre systèmes et robotique. Le principal défi consistait à coordonner la détection, le traitement des signaux et le déclenchement de l'action mécanique tout en permettant une interaction via une application mobile. La fiabilité de la détection et la cohérence de la logique de commande sont essentielles pour limiter les déclenchements intempestifs. Ce projet permet de démontrer des compétences en programmation embarquée, intégration de capteurs, pilotage d'actionneurs et développement logiciel mobile.",
                                en: "Technical environment: ESP32, microcontroller programming, UV/IR sensors, water pump, actuator control, Android, Java, inter-system communication, and robotics. The main challenge was coordinating detection, signal processing, and mechanical actuation while supporting interaction through a mobile application. Reliable detection and consistent control logic are essential to reduce false triggers. This project demonstrates skills in embedded programming, sensor integration, actuator control, and mobile software development."
                            },
                            image: ""
                        }
                    ]
                }
            },
            // --- SYSTÈME AGRICOLE TERRESTRE ---
            {
                id: "agri-sys",
                title: { fr: "Surveillance Agricole IoT", en: "IoT Agricultural Monitoring" },
                shortDescription: { fr: "Optimisation des ressources en eau via capteurs capacitifs.", en: "Water resource optimization using capacitive sensors." },
                technologies: ['Arduino', 'Deep Sleep', 'Soil Sensors'],
                details: {
                    intro: {
                        fr: "Développement d'une station de surveillance agricole connectée destinée à mesurer les conditions environnementales et l'humidité du sol afin d'aider à optimiser l'irrigation et la consommation d'eau. Basé sur Arduino et des capteurs capacitifs, le système acquiert des données utiles au suivi des parcelles tout en intégrant un mode Deep Sleep pour réduire la consommation énergétique. Le projet vise à associer instrumentation, systèmes embarqués basse consommation et principes de l'IoT au service d'une agriculture plus efficace.",
                        en: "Developed a connected agricultural monitoring station designed to measure environmental conditions and soil moisture to help optimize irrigation and water consumption. Based on Arduino and capacitive sensors, the system acquires useful field monitoring data while incorporating a Deep Sleep mode to reduce power consumption. The project combines instrumentation, low-power embedded systems, and IoT concepts to support more efficient agriculture."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                            text: {
                                fr: "<ul><li>Conception d'une station de surveillance agricole pour suivre des paramètres environnementaux et l'humidité du sol.</li><li>Intégration de capteurs capacitifs pour mesurer l'humidité du sol et fournir des données utiles à l'évaluation des besoins en irrigation.</li><li>Développement du programme embarqué sur Arduino pour acquérir et traiter les mesures des capteurs.</li><li>Étude de l'exploitation des données collectées afin de faciliter le suivi des conditions agricoles et l'optimisation des ressources en eau.</li><li>Mise en œuvre d'une stratégie de réduction de la consommation énergétique reposant sur un mode Deep Sleep, lorsque la plateforme utilisée le permet.</li><li>Structuration du cycle de fonctionnement autour des phases d'acquisition, de traitement et de mise en veille afin de limiter les périodes de consommation inutile.</li><li>Vérification du fonctionnement des capteurs et du comportement général du système lors des cycles de mesure.</li></ul>",
                                en: "<ul><li>Designed an agricultural monitoring station to track environmental parameters and soil moisture.</li><li>Integrated capacitive sensors to measure soil moisture and provide data useful for assessing irrigation needs.</li><li>Developed embedded software on Arduino to acquire and process sensor measurements.</li><li>Investigated how collected data could support agricultural condition monitoring and water resource optimization.</li><li>Implemented a power-saving strategy based on Deep Sleep mode where supported by the selected platform.</li><li>Structured the operating cycle around data acquisition, processing, and sleep phases to reduce unnecessary power consumption.</li><li>Verified sensor operation and overall system behavior during measurement cycles.</li></ul>"
                            },
                            image: ""
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : Arduino, programmation embarquée en C/C++, capteurs capacitifs d'humidité du sol, acquisition analogique, gestion de l'énergie et mode Deep Sleep. Le principal défi consistait à concilier la disponibilité de mesures suffisamment régulières avec une consommation électrique réduite. Le choix des intervalles d'acquisition, la gestion des phases de veille et la stabilité des mesures sont des éléments déterminants pour un dispositif agricole autonome. Ce projet met en évidence des compétences en instrumentation, microcontrôleurs, optimisation énergétique et conception de systèmes connectés.",
                                en: "Technical environment: Arduino, embedded C/C++ programming, capacitive soil moisture sensors, analog acquisition, power management, and Deep Sleep mode. The main challenge was balancing sufficiently frequent measurements with reduced power consumption. Selecting acquisition intervals, managing sleep periods, and maintaining measurement stability are key considerations for an autonomous agricultural device. This project highlights skills in instrumentation, microcontrollers, power optimization, and connected system design."
                            },
                            image: ""
                        }
                    ]
                }
            },
            // --- CONCEPTION PCB ---
            {
                id: "pcb-design",
                title: { fr: "Conception de Carte PCB", en: "PCB Board Design" },
                shortDescription: { fr: "Design industriel d'une carte de gestion sous Proteus ARES.", en: "Industrial PCB design and routing using Proteus ARES." },
                technologies: ['Proteus', 'LDO Regulators', 'SMD'],
                details: {
                    intro: {
                        fr: "Conception et réalisation d'une carte électronique en suivant les principales étapes du développement matériel, de la préparation du schéma électronique au routage du circuit imprimé. Le projet s'appuie sur Proteus et son module ARES pour concevoir l'implantation des composants et optimiser le routage des pistes. La réalisation comprend également l'assemblage et la soudure de composants CMS, permettant de confronter la conception numérique aux contraintes pratiques de fabrication et de montage électronique.",
                        en: "Designed and assembled an electronic printed circuit board, following the main stages of hardware development from schematic preparation to PCB routing. The project uses Proteus and its ARES module to arrange components and optimize trace routing. The implementation also includes SMD component assembly and soldering, connecting digital design work with the practical constraints of electronic manufacturing and assembly."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                            text: {
                                fr: "<ul><li>Participation à la conception d'une carte électronique, depuis la préparation du schéma jusqu'à la réalisation du circuit imprimé.</li><li>Utilisation de Proteus pour modéliser le schéma électronique et vérifier la cohérence des connexions entre les composants.</li><li>Conception du PCB sous Proteus ARES, avec placement des composants et routage des pistes électriques.</li><li>Prise en compte des contraintes d'implantation, de lisibilité et d'encombrement lors de la disposition des composants.</li><li>Préparation de la carte pour la fabrication et le montage en tenant compte des contraintes propres aux composants CMS.</li><li>Réalisation d'opérations de soudure de composants montés en surface (CMS).</li><li>Inspection visuelle de l'assemblage et vérification de la qualité du montage électronique.</li></ul>",
                                en: "<ul><li>Contributed to electronic board design, from schematic preparation to printed circuit board implementation.</li><li>Used Proteus to model the electronic schematic and verify the consistency of component connections.</li><li>Designed the PCB using Proteus ARES, including component placement and electrical trace routing.</li><li>Considered layout constraints, readability, and board size when arranging components.</li><li>Prepared the board for fabrication and assembly, taking into account the specific constraints of SMD components.</li><li>Performed soldering operations on surface-mount device (SMD) components.</li><li>Visually inspected the assembly and checked the quality of the electronic mounting.</li></ul>"
                            },
                            image: ""
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : électronique analogique et numérique, schémas électroniques, Proteus, Proteus ARES, conception de PCB, placement de composants, routage de pistes, composants CMS et soudure électronique. Le principal défi consistait à traduire le schéma électrique en un circuit imprimé réalisable, en respectant la connectivité, l'organisation des composants et les contraintes physiques du routage. L'assemblage CMS demande également précision et attention afin de limiter les défauts de soudure et de garantir une bonne qualité de montage. Ce projet renforce les compétences en conception matérielle, prototypage électronique et réalisation pratique de cartes électroniques.",
                                en: "Technical environment: analog and digital electronics, electronic schematics, Proteus, Proteus ARES, PCB design, component placement, trace routing, SMD components, and electronic soldering. The main challenge was translating the electrical schematic into a manufacturable printed circuit board while preserving connectivity, component organization, and physical routing constraints. SMD assembly also requires precision and care to minimize soldering defects and ensure good assembly quality. This project strengthens skills in hardware design, electronic prototyping, and practical PCB implementation."
                            },
                            image: ""
                        }
                    ]
                }
            }
        ],
        software: [
            // --- PLATEFORME E-LEARNING ---
            {
                id: "elearning-platform",
                title: { fr: "Plateforme E-learning", en: "E-learning Platform" },
                shortDescription: { 
                    fr: "Écosystème complet Laravel & Flutter.", 
                    en: "Complete Laravel & Flutter ecosystem." 
                },
                technologies: ['Laravel', 'Flutter', 'PostgreSQL', 'API REST'],
                details: {
                    intro: {
                        fr: "Conception et développement d'une plateforme d'apprentissage en ligne complète, de la base de données à l'application mobile. Le projet repose sur une architecture backend robuste en Laravel (PHP) couplée à une base de données PostgreSQL, fournissant une API RESTful à une application mobile multiplateforme développée en Flutter.",
                        en: "Design and development of a complete e-learning platform, from the database to the mobile application. The project relies on a robust Laravel (PHP) backend coupled with a PostgreSQL database, providing a RESTful API to a cross-platform mobile application developed in Flutter."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                            text: {
                                fr: "<ul><li>Modélisation et administration de la base de données relationnelle sous PostgreSQL.</li><li>Développement du backend avec le framework Laravel, incluant la gestion de l'authentification et de la sécurité des utilisateurs.</li><li>Création d'une API REST pour assurer la communication fluide entre le serveur et l'application cliente.</li><li>Développement de l'interface mobile en Flutter, garantissant une expérience utilisateur (UX) fluide et réactive sur iOS et Android.</li><li>Intégration de fonctionnalités clés : gestion des cours, suivi de la progression et interfaces dédiées.</li></ul>",
                                en: "<ul><li>Modeled and managed the relational database using PostgreSQL.</li><li>Developed the backend using the Laravel framework, including user authentication and security management.</li><li>Created a RESTful API to ensure smooth communication between the server and client application.</li><li>Developed the mobile interface in Flutter, ensuring a smooth and responsive user experience (UX) on iOS and Android.</li><li>Integrated key features: course management, progress tracking, and dedicated user interfaces.</li></ul>"
                            },
                            image: ["images/elearning-app.jpg"] 
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : Laravel (PHP), Flutter (Dart), PostgreSQL, API REST, Git. Le principal défi a été d'assurer la communication et la synchronisation des données entre le backend web et l'application mobile de manière sécurisée et performante. Ce projet m'a permis de maîtriser le développement 'Full-Stack' orienté mobile, d'optimiser les requêtes SQL et de structurer un code propre et maintenable selon l'architecture MVC.",
                                en: "Technical environment: Laravel (PHP), Flutter (Dart), PostgreSQL, REST API, Git. The main challenge was ensuring secure and high-performance data communication and synchronization between the web backend and the mobile application. This project allowed me to master mobile-oriented Full-Stack development, optimize SQL queries, and structure clean, maintainable code following the MVC architecture."
                            },
                            image: ""
                        }
                    ]
                }
            },
            // --- JEU VIDÉO JAVA ---
            {
                id: "java-game",
                title: { fr: "Jeu d'Action-Aventure 2D", en: "2D Action-Adventure Game" },
                shortDescription: { 
                    fr: "Développement d'un jeu vidéo rétro en Java (Programmation Orientée Objet).", 
                    en: "Development of a retro video game in Java (Object-Oriented Programming)." 
                },
                technologies: ['Java', 'Swing / AWT', 'POO', 'Algorithmique'],
                details: {
                    intro: {
                        fr: "Conception et développement de A à Z d'un jeu vidéo 2D en Java natif. Ce projet académique avait pour but de mettre en pratique les concepts avancés de la Programmation Orientée Objet (POO), la gestion des événements utilisateurs, et la création de moteurs physiques basiques (collisions, gravité).",
                        en: "Design and development from scratch of a 2D video game in native Java. This academic project aimed to apply advanced concepts of Object-Oriented Programming (OOP), user event management, and the creation of basic physics engines (collisions, gravity)."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                            text: {
                                fr: "<ul><li>Modélisation de l'architecture du jeu en utilisant les principes de la POO (Héritage, Polymorphisme, Encapsulation).</li><li>Développement de la boucle de jeu (Game Loop) pour assurer un rendu fluide à 60 FPS.</li><li>Implémentation d'un système de gestion de collisions entre le joueur, les ennemis et le décor.</li><li>Création des interfaces graphiques (menus, HUD) avec les bibliothèques Java Swing et AWT.</li><li>Intégration d'animations par sprites (feuilles d'images) pour rendre les mouvements des personnages réalistes.</li></ul>",
                                en: "<ul><li>Modeled the game architecture using OOP principles (Inheritance, Polymorphism, Encapsulation).</li><li>Developed the game loop to ensure a smooth 60 FPS rendering.</li><li>Implemented a collision management system between the player, enemies, and the environment.</li><li>Created graphical interfaces (menus, HUD) using Java Swing and AWT libraries.</li><li>Integrated sprite sheet animations to make character movements realistic.</li></ul>"
                            },
                            image: ["images/jeu-java.jpg"] 
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : Java (JDK), Swing, AWT, Eclipse/IntelliJ. Le plus grand défi de ce projet a été la gestion de la mémoire et de l'optimisation : il a fallu s'assurer que le rafraîchissement constant des images ne surcharge pas le processeur (fuites de mémoire). Cela m'a poussé à optimiser mes algorithmes de détection de hitbox et à structurer mon code de manière extrêmement rigoureuse.",
                                en: "Technical environment: Java (JDK), Swing, AWT, Eclipse/IntelliJ. The biggest challenge of this project was memory management and optimization: ensuring that constant image redrawing didn't overload the processor (memory leaks). This pushed me to optimize my hitbox detection algorithms and structure my code extremely rigorously."
                            },
                            image: ""
                        }
                    ]
                }
            },
            // --- SITE E-COMMERCE ---
            {
                id: "ecommerce-site",
                title: { fr: "Site E-commerce 'TechWave'", en: "'TechWave' E-commerce Website" },
                shortDescription: { 
                    fr: "Boutique en ligne dynamique développée en HTML/CSS, JS, PHP et MySQL.", 
                    en: "Dynamic online store developed in HTML/CSS, JS, PHP, and MySQL." 
                },
                technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
                details: {
                    intro: {
                        fr: "Réalisation d'un site e-commerce complet dédié à la vente de matériel informatique. L'objectif était de concevoir une plateforme fonctionnelle intégrant un catalogue de produits dynamique, un système de panier d'achat, et un back-office sécurisé pour la gestion des stocks et des commandes.",
                        en: "Development of a complete e-commerce website dedicated to selling computer hardware. The objective was to design a functional platform integrating a dynamic product catalog, a shopping cart system, and a secure back-office for inventory and order management."
                    },
                    sections: [
                        {
                            title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                            text: {
                                fr: "<ul><li>Conception de l'interface utilisateur (Front-end) en HTML5, CSS3 et JavaScript pour une navigation intuitive et responsive.</li><li>Création du schéma de base de données relationnelle sous MySQL pour stocker les produits, les utilisateurs et les commandes.</li><li>Développement de la logique serveur (Back-end) en PHP natif pour traiter les requêtes, gérer les sessions utilisateurs et le panier d'achat.</li><li>Mise en place d'un panel d'administration permettant l'ajout, la modification et la suppression d'articles (CRUD).</li><li>Sécurisation des données via le hachage des mots de passe et la protection contre les failles d'injection SQL.</li></ul>",
                                en: "<ul><li>Designed the user interface (Front-end) in HTML5, CSS3, and JavaScript for intuitive and responsive navigation.</li><li>Created the relational database schema in MySQL to store products, users, and orders.</li><li>Developed the server logic (Back-end) in native PHP to process requests, manage user sessions, and the shopping cart.</li><li>Implemented an admin panel allowing the addition, modification, and deletion of items (CRUD).</li><li>Secured data via password hashing and protection against SQL injection vulnerabilities.</li></ul>"
                            },
                            image: ["images/ecommerce.jpg"] 
                        },
                        {
                            title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                            text: {
                                fr: "Environnement technique : PHP, MySQL, JavaScript, HTML/CSS, XAMPP/WAMP. Le défi principal a été de gérer la persistance des données du panier d'achat, même lorsque l'utilisateur quitte la page, en utilisant les variables de session PHP de manière sécurisée. Ce projet m'a donné une vision globale de l'architecture Web classique (Client-Serveur) et de la gestion des bases de données en production.",
                                en: "Technical environment: PHP, MySQL, JavaScript, HTML/CSS, XAMPP/WAMP. The main challenge was managing the persistence of shopping cart data, even when the user leaves the page, by securely using PHP session variables. This project gave me a comprehensive view of classic Web architecture (Client-Server) and database management in production."
                            },
                            image: ""
                        }
                    ]
                }
            }
        ]
    },
    certificates: [
        {
            id: "cert-drone",
            icon: "fa-solid fa-plane-up",
            title: { fr: "Télépilote de Drone (Catégories A1 & A3)", en: "Drone Remote Pilot (A1 & A3)" },
            issuer: "EASA",
            date: "",
            category: { fr: "Réglementation", en: "Regulation" }
        },
        {
            id: "cert-sst",
            icon: "fa-solid fa-notes-medical",
            title: { fr: "Sauveteur Secouriste du Travail (SST)", en: "Occupational First Aider (SST)" },
            issuer: "",
            date: "2026",
            category: { fr: "Sécurité", en: "Safety" }
        },
        {
            id: "cert-arduino",
            icon: "fa-solid fa-microchip",
            title: { fr: "Programmation en Arduino et C++", en: "Arduino and C++ Programming" },
            issuer: "OpenClassrooms",
            date: "",
            category: { fr: "Embarqué", en: "Embedded" }
        },
        {
            id: "cert-avionique",
            icon: "fa-solid fa-jet-fighter",
            title: { fr: "Développer un système embarqué critique pour l'avionique", en: "Develop a critical embedded system for avionics" },
            issuer: "OpenClassrooms",
            date: "",
            category: { fr: "Aéronautique", en: "Aeronautics" }
        },
        {
            id: "cert-iot",
            icon: "fa-solid fa-wifi",
            title: { fr: "Certificat de présence — Microcontrôleurs et IoT", en: "Attendance Certificate — Microcontrollers and IoT" },
            issuer: "Orange Digital Center, Rabat",
            date: "",
            category: { fr: "IoT", en: "IoT" }
        }
    ],
    experience: [
        { 
            id: "exp-parrot",
            title: { fr: 'Certification et réglementation des drones', en: 'Drone Certification and Regulation' }, 
            company: 'Parrot - Stage', 
            period: { fr: 'Avr. 2026 - Sept. 2026', en: 'Apr 2026 - Sept 2026' }, 
            technologies: ['ANAFI UKR', 'Tests Indoor/Outdoor', 'Marquage C1/C2', 'Jira', 'Conformité'],
            details: {
                intro: {
                    fr: "Stage de fin d’études en qualification, de la conformité réglementaire et de la certification des systèmes drones chez Parrot, dans le cadre du projet ANAFI UKR. L’objectif était de contribuer à la démonstration de conformité du drone aux exigences européennes applicables, notamment au règlement délégué (UE) 2019/945 et aux normes de la série EN 4709, en vue de sa classification C2. Cette expérience m’a permis de mettre en pratique mes compétences en validation système, analyse technique, gestion des essais et suivi des exigences réglementaires dans un environnement industriel aéronautique.",
                    en: "Final-year engineering internship in drone qualification, regulatory compliance, and certification at Parrot, as part of the ANAFI UKR project. The objective was to contribute to demonstrating the drone's compliance with applicable European requirements, particularly Delegated Regulation (EU) 2019/945 and the EN 4709 series of standards, in preparation for C2 classification. This experience allowed me to apply my skills in system validation, technical analysis, test management, and regulatory requirements tracking in an aerospace industrial environment."
                },
                sections: [
                    {
                        title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                        text: {
                            fr: "<ul><li>Analyse et investigation des exigences réglementaires applicables aux drones de classe C2, conformément au règlement délégué (UE) 2019/945 et aux normes EN 4709.</li><li>Élaboration et mise à jour de matrices de conformité afin d'assurer la traçabilité entre les exigences réglementaires, les méthodes de vérification, les critères d'acceptation et les preuves associées.</li><li>Préparation, planification et réalisation de campagnes d'essais en laboratoire et sur le terrain pour vérifier les caractéristiques techniques et fonctionnelles du drone.</li><li>Participation aux essais acoustiques en chambre semi-anéchoïque et analyse des résultats au regard des limites réglementaires applicables.</li><li>Suivi des essais de conformité avec un laboratoire partenaire, analyse des rapports d'essais et identification des écarts par rapport aux exigences applicables.</li><li>Documentation des résultats, rédaction et consolidation de rapports de validation, avec conservation des éléments de preuve nécessaires au dossier de conformité.</li><li>Suivi des anomalies et des non-conformités dans Jira, coordination des investigations techniques et contribution à la traçabilité des actions correctives.</li><li>Contribution au suivi de la campagne de qualification et de certification du projet ANAFI UKR, en collaboration avec les équipes internes et les partenaires externes.</li></ul>",
                            en: "<ul><li>Analyzed and investigated regulatory requirements applicable to C2-class drones in accordance with Delegated Regulation (EU) 2019/945 and the EN 4709 series of standards.</li><li>Developed and maintained compliance matrices to ensure traceability between regulatory requirements, verification methods, acceptance criteria, and supporting evidence.</li><li>Prepared, planned, and conducted laboratory and field test campaigns to verify the drone's technical and functional characteristics.</li><li>Participated in acoustic testing in a semi-anechoic chamber and analyzed results against applicable regulatory limits.</li><li>Supported compliance testing with an external laboratory, reviewed test reports, and identified deviations from applicable requirements.</li><li>Documented test results and prepared and consolidated validation reports, maintaining the evidence required for the compliance documentation.</li><li>Tracked anomalies and non-conformities in Jira, coordinated technical investigations, and contributed to the traceability of corrective actions.</li><li>Contributed to monitoring the ANAFI UKR qualification and certification campaign in collaboration with internal teams and external partners.</li></ul>"
                        },
                        image: ""
                    },
                    {
                        title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                        text: {
                            fr: "Environnement technique : drones professionnels, ANAFI UKR, règlement délégué (UE) 2019/945, normes EN 4709-001 à EN 4709-004, qualification système, validation fonctionnelle, essais acoustiques, identification directe à distance, géosensibilisation, liaison de données, analyse de conformité, matrices d'exigences, plans d'essais, rapports de validation et Jira. Le principal défi consistait à traduire des exigences réglementaires parfois complexes en méthodes de vérification concrètes, mesurables et traçables. Il fallait analyser les résultats des essais, distinguer les écarts techniques des problèmes de preuve documentaire et assurer la cohérence entre les exigences, les critères d'acceptation et les résultats obtenus. Cette démarche a renforcé ma rigueur dans la validation système, l'investigation technique et la gestion de non-conformités, ainsi que ma capacité à travailler à l'interface entre les équipes techniques, la qualité et la certification.",
                            en: "Technical environment: professional drones, ANAFI UKR, Delegated Regulation (EU) 2019/945, EN 4709-001 to EN 4709-004 standards, system qualification, functional validation, acoustic testing, Direct Remote Identification, Geo-awareness, data links, compliance analysis, requirements matrices, test plans, validation reports, and Jira. The main challenge was to translate sometimes complex regulatory requirements into concrete, measurable, and traceable verification methods. This involved analyzing test results, distinguishing technical deviations from documentation gaps, and ensuring consistency between requirements, acceptance criteria, and actual results. This approach strengthened my rigor in system validation, technical investigation, and non-conformity management, as well as my ability to work at the interface between engineering, quality, and certification teams."
                        },
                        image: ""
                    }
                ]
            }
        },
        { 
            id: "exp-geeknerd",
            title: { fr: 'Développeur IA', en: 'AI Developer' }, 
            company: 'GEEK & NERD LTD - Stage', 
            period: { fr: 'Avr. 2023 - Sept. 2023', en: 'Apr 2023 - Sept 2023' },
            technologies: ['Android', 'Kotlin', 'API GPT', 'IA'],
            details: {
                intro: {
                    fr: "Stage en développement d'applications mobiles chez GEEK & NERD LTD, à Londres, consacré à la conception et au développement d'une application Android intelligente de recommandation de recettes. L'objectif était de proposer une expérience utilisateur personnalisée en intégrant des fonctionnalités basées sur l'intelligence artificielle et l'API GPT, afin de générer des suggestions culinaires adaptées aux besoins des utilisateurs. Ce projet m'a permis de renforcer mes compétences en développement mobile, intégration d'API et conception d'applications interactives.",
                    en: "Internship in mobile application development at GEEK & NERD LTD in London, focused on designing and developing an intelligent Android recipe recommendation application. The objective was to deliver a personalized user experience by integrating artificial intelligence features and the GPT API to generate recipe suggestions tailored to users' needs. This project strengthened my skills in mobile development, API integration, and interactive application design."
                },
                sections: [
                    {
                        title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                        text: {
                            fr: "<ul><li>Conception et développement d'une application Android dédiée à la recherche et à la recommandation de recettes culinaires.</li><li>Développement de l'interface utilisateur avec Kotlin afin de proposer une navigation intuitive et une expérience mobile fluide.</li><li>Intégration de l'API GPT pour exploiter les capacités de l'intelligence artificielle dans la génération de suggestions et de contenus culinaires.</li><li>Mise en place de fonctionnalités interactives permettant aux utilisateurs d'obtenir des idées de recettes en fonction de leurs besoins.</li><li>Participation à la structuration de l'application et à l'organisation du code pour faciliter sa maintenance et son évolution.</li><li>Tests fonctionnels et vérification du comportement de l'application afin d'améliorer sa fiabilité et la qualité de l'expérience utilisateur.</li></ul>",
                            en: "<ul><li>Designed and developed an Android application dedicated to searching for and recommending recipes.</li><li>Built the user interface using Kotlin to provide intuitive navigation and a smooth mobile experience.</li><li>Integrated the GPT API to leverage artificial intelligence for generating culinary suggestions and content.</li><li>Implemented interactive features allowing users to obtain recipe ideas tailored to their needs.</li><li>Contributed to the application's structure and code organization to facilitate maintenance and future development.</li><li>Performed functional testing and verified application behavior to improve reliability and user experience.</li></ul>"
                        },
                        image: ""
                    },
                    {
                        title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                        text: {
                            fr: "Environnement technique : Android, Kotlin, API GPT, développement mobile, interfaces utilisateur, intégration de services externes et tests fonctionnels. Le principal défi consistait à intégrer un service d'intelligence artificielle dans une application mobile tout en conservant une expérience utilisateur simple et cohérente. Ce projet m'a permis d'approfondir la programmation orientée objet, la communication avec une API externe et la structuration d'une application Android, tout en découvrant les possibilités offertes par l'IA générative pour enrichir les fonctionnalités d'un produit logiciel.",
                            en: "Technical environment: Android, Kotlin, GPT API, mobile development, user interfaces, external service integration, and functional testing. The main challenge was integrating an artificial intelligence service into a mobile application while maintaining a simple and consistent user experience. This project helped me deepen my understanding of object-oriented programming, external API communication, and Android application architecture, while exploring how generative AI can enhance software product functionality."
                        },
                        image: ""
                    }
                ]
            }
        },
        { 
            id: "exp-icon",
            title: { fr: 'Développeur Web embarqué', en: 'Embedded Web Developer' }, 
            company: 'Icon Solutions - Stage', 
            period: { fr: 'Juin 2022 - Nov. 2022', en: 'June 2022 - Nov 2022' }, 
            technologies: ['HTML/CSS', 'JavaScript', 'Interface UI', 'Contrôle'],
            details: {
                intro: {
                    fr: "Stage en développement logiciel chez iCon Solutions, à Meknès, consacré à la réalisation d'une interface web de contrôle et de supervision d'un drone. L'objectif était de développer une interface permettant à l'utilisateur d'interagir avec le système drone et d'accéder à ses principales fonctionnalités de commande. Ce projet m'a permis de mettre en pratique mes compétences en développement web, en conception d'interfaces interactives et en structuration d'applications destinées au pilotage de systèmes techniques.",
                    en: "Software development internship at iCon Solutions in Meknes, focused on building a web interface for drone control and monitoring. The objective was to develop an interface enabling users to interact with the drone system and access its main control functions. This project allowed me to apply my skills in web development, interactive interface design, and the structuring of applications intended to control technical systems."
                },
                sections: [
                    {
                        title: { fr: "Missions & Réalisations", en: "Missions & Achievements" },
                        text: {
                            fr: "<ul><li>Participation à la conception et au développement d'une interface web dédiée au contrôle d'un drone.</li><li>Développement des composants de l'interface utilisateur pour faciliter l'accès aux commandes et aux fonctionnalités de supervision.</li><li>Organisation des informations et des éléments de commande afin de proposer une navigation claire et une interaction intuitive.</li><li>Contribution à la structuration du code et à l'intégration des différents éléments de l'interface.</li><li>Vérification du fonctionnement des composants développés et ajustement de l'interface en fonction des besoins du projet.</li><li>Découverte des enjeux liés à l'interaction entre une interface logicielle et un système physique piloté à distance.</li></ul>",
                            en: "<ul><li>Contributed to the design and development of a web interface dedicated to drone control.</li><li>Developed user interface components to provide easier access to control commands and monitoring features.</li><li>Organized information and control elements to deliver clear navigation and intuitive interaction.</li><li>Contributed to code structuring and the integration of the interface components.</li><li>Verified the behavior of the developed components and adjusted the interface according to project requirements.</li><li>Explored the challenges involved in connecting a software interface with a remotely controlled physical system.</li></ul>"
                        },
                        image: ""
                    },
                    {
                        title: { fr: "Environnement Technique & Défis", en: "Technical Environment & Challenges" },
                        text: {
                            fr: "Environnement technique : développement web, technologies JavaScript et interfaces utilisateur, conception d'interfaces de commande et supervision de systèmes drones. Le principal défi consistait à organiser les commandes et les informations du drone dans une interface compréhensible et facile à utiliser. Le projet m'a permis de développer une approche orientée utilisateur tout en prenant en compte les contraintes propres aux interfaces de pilotage : clarté des informations, cohérence des interactions et accessibilité des fonctionnalités. Cette expérience a également renforcé mon intérêt pour les systèmes embarqués et les applications logicielles interagissant avec des systèmes physiques.",
                            en: "Technical environment: web development, JavaScript technologies and user interfaces, control interface design, and drone system monitoring. The main challenge was to organize drone commands and information within an interface that was clear and easy to use. The project helped me develop a user-oriented approach while considering the constraints of control interfaces, including information clarity, interaction consistency, and feature accessibility. This experience also strengthened my interest in embedded systems and software applications interacting with physical systems."
                        },
                        image: ""
                    }
                ]
            }
        }
    ]
};

// ==========================================================================
//   3. LOGIQUE GLOBALE (Langue, Thème, Navigation)
// ==========================================================================
let currentLang = 'fr';
const langToggle = document.getElementById('langToggle');
const body = document.body;

const translations = {
    fr: {
        navHome: "Accueil", navProjects: "Projets", navEdu: "Formation", navExp: "Expérience", navContact: "Contact",
        heroWelcome: 'Bonjour, je suis <span class="highlight">Hamza</span>',
        elecTitle: "Électronique & Systèmes Embarqués", elecDesc: "Spécialiste en conception de systèmes embarqués. Je donne vie au matériel.",
        softTitle: "Développement Logiciel", softDesc: "Expert en solutions logicielles complètes.",
        btnProjects: "Voir mes projets", btnContact: "Me contacter",
        sectionProjects: "Mes Projets", sectionEdu: "Formation", sectionCert: "Certificats",
        sectionExp: "Expérience Professionnelle", sectionContact: "Discutons de votre projet",
        formName: "Votre Nom", formEmail: "Votre Email", formMsg: "Votre Message", formBtn: 'Envoyer le message <i class="fa-solid fa-paper-plane"></i>',
        toggleElec: '<i class="fa-solid fa-microchip"></i> Électronique', toggleSoft: '<i class="fa-solid fa-code"></i> Informatique',
        modalBack: "Retour aux projets", modalDetails: "Voir les détails ➔"
    },
    en: {
        navHome: "Home", navProjects: "Projects", navEdu: "Education", navExp: "Experience", navContact: "Contact",
        heroWelcome: 'Hello, I am <span class="highlight">Hamza</span>',
        elecTitle: "Electronics & Embedded Systems", elecDesc: "Specialist in embedded systems design. I bring hardware to life.",
        softTitle: "Software Development", softDesc: "Expert in full software solutions.",
        btnProjects: "View my projects", btnContact: "Contact me",
        sectionProjects: "My Projects", sectionEdu: "Education", sectionCert: "Certificates",
        sectionExp: "Professional Experience", sectionContact: "Let's discuss your project",
        formName: "Your Name", formEmail: "Your Email", formMsg: "Your Message", formBtn: 'Send message <i class="fa-solid fa-paper-plane"></i>',
        toggleElec: '<i class="fa-solid fa-microchip"></i> Electronics', toggleSoft: '<i class="fa-solid fa-code"></i> Software',
        modalBack: "Back to projects", modalDetails: "View details ➔"
    }
};

function updateLanguage(lang) {
    document.querySelector('a[href="#home"]').textContent = translations[lang].navHome;
    document.querySelector('a[href="#projects"]').textContent = translations[lang].navProjects;
    document.querySelector('a[href="#education"]').textContent = translations[lang].navEdu;
    document.querySelector('a[href="#experience"]').textContent = translations[lang].navExp;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].navContact;
    document.getElementById('electronicsBtn').innerHTML = translations[lang].toggleElec;
    document.getElementById('softwareBtn').innerHTML = translations[lang].toggleSoft;
    document.querySelector('.welcome-text').innerHTML = translations[lang].heroWelcome;
    document.querySelector('#electronics-desc h3').textContent = translations[lang].elecTitle;
    document.querySelector('#electronics-desc p').textContent = translations[lang].elecDesc;
    document.querySelector('#software-desc h3').textContent = translations[lang].softTitle;
    document.querySelector('#software-desc p').textContent = translations[lang].softDesc;
    document.querySelector('a[href="#projects"].btn-primary').textContent = translations[lang].btnProjects;
    document.querySelector('a[href="#contact"].btn-secondary').textContent = translations[lang].btnContact;
    document.querySelector('#projects .section-title').textContent = translations[lang].sectionProjects;
    
    const parcoursTitles = document.querySelectorAll('#parcours .section-title');
    if(parcoursTitles.length >= 2) {
        parcoursTitles[0].querySelector('span').textContent = translations[lang].sectionEdu;
        parcoursTitles[1].querySelector('span').textContent = translations[lang].sectionCert;
    }
    
    document.querySelector('#experience .section-title').textContent = translations[lang].sectionExp;
    document.querySelector('#contact .section-title').textContent = translations[lang].sectionContact;
    document.getElementById('name').placeholder = translations[lang].formName;
    document.getElementById('email').placeholder = translations[lang].formEmail;
    document.getElementById('message').placeholder = translations[lang].formMsg;
    document.querySelector('#contact-form button').innerHTML = translations[lang].formBtn;
    const bt = document.getElementById('back-text'); if(bt) bt.textContent = translations[lang].modalBack;
}

// ==========================================================================
//   4. INJECTION DYNAMIQUE
// ==========================================================================
function initializeContent(lang) {
    const eduContainer = document.getElementById('education-timeline');
    if (eduContainer && portfolioData.education) {
        eduContainer.innerHTML = portfolioData.education.map(edu => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-header">
                    <span class="timeline-date">${edu.year}</span>
                    ${edu.isCurrent ? `<span class="badge-diploma"><i class="fa-solid fa-award"></i> ${lang === 'fr' ? 'Diplômé / En cours' : 'Current / Graduated'}</span>` : ''}
                </div>
                <h3 class="timeline-title">${edu.degree[lang]}</h3>
                <p class="timeline-school"><i class="fa-solid fa-building-columns"></i> ${edu.school}</p>
            </div>
        `).join('');
    }

    const certContainer = document.getElementById('certificates-grid');
    if (certContainer && portfolioData.certificates) {
        certContainer.innerHTML = portfolioData.certificates.map(cert => `
            <div class="cert-card">
                <div style="display: flex; gap: 1rem; align-items: flex-start;">
                    <div class="cert-icon-wrapper">
                        <i class="${cert.icon}"></i>
                    </div>
                    <div class="cert-content">
                        <h3 class="cert-title">${cert.title[lang]}</h3>
                        ${cert.issuer ? `<p class="cert-issuer"><i class="fa-solid fa-certificate"></i> ${cert.issuer}</p>` : ''}
                    </div>
                </div>
                <div class="cert-footer">
                    <span class="cert-badge">${cert.category[lang]}</span>
                    <span class="cert-date">${cert.date}</span>
                </div>
            </div>
        `).join('');
    }

    const createCard = (proj, l, cat) => {
        const isC = !!proj.id;
        return `<div class="project-item" style="${isC?'cursor:pointer':''}" ${isC?`onclick="openProjectModal('${proj.id}','${cat}')"`:''}>
            <h3>${proj.title[l]}</h3><p style="color:var(--text-muted); font-size:0.9rem; flex-grow:1;">${proj.shortDescription[l]}</p>
            <div class="technologies">${proj.technologies.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
            ${isC?`<div style="margin-top:1rem; color:var(--primary); font-weight:bold;">${translations[l].modalDetails}</div>`:''}
        </div>`;
    };

    const elecContent = document.querySelector('.electronics-content');
    if(elecContent) elecContent.innerHTML = portfolioData.projects.electronics.map(p=>createCard(p,lang,'electronics')).join('');
    
    const softContent = document.querySelector('.software-content');
    if(softContent) softContent.innerHTML = portfolioData.projects.software.map(p=>createCard(p,lang,'software')).join('');

    const expGrid = document.querySelector('.experience-grid');
    if(expGrid) {
        expGrid.innerHTML = '';
        portfolioData.experience.forEach(exp => {
            const div = document.createElement('div');
            div.className = 'project-item';
            div.style.cursor = 'pointer';
            div.onclick = () => openProjectModal(exp.id, 'experience');
            
            div.innerHTML = `
                <h4 style="color:var(--primary); font-size:0.9rem;">${exp.period[lang]}</h4>
                <h3>${exp.title[lang]}</h3>
                <p style="color:var(--text-main); font-weight:bold; flex-grow:1;">${exp.company}</p>
                <div style="margin-top:1rem; color:var(--primary); font-weight:bold;">${translations[lang].modalDetails}</div>
            `;
            expGrid.appendChild(div);
        });
    }
}

// ==========================================================================
//   5. MODALE INTELLIGENTE & GESTION DE L'HISTORIQUE (BOUTON RETOUR)
// ==========================================================================
if (!document.getElementById('project-modal')) {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'project-modal';
    modalDiv.className = 'project-modal';
    modalDiv.innerHTML = `
        <div class="modal-content">
            <button id="close-modal" class="back-btn"><i class="fa-solid fa-arrow-left"></i> <span id="back-text"></span></button>
            <div id="modal-body" class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modalDiv);
}

const pm = document.getElementById('project-modal');
const cbm = document.getElementById('close-modal');
const mb = document.getElementById('modal-body');

window.openProjectModal = function(pid, cat) {
    let p;
    if (cat === 'experience') {
        p = portfolioData.experience.find(x => x.id === pid);
    } else {
        p = portfolioData.projects[cat].find(x => x.id === pid);
    }
    
    if(!p || !p.details) return;

    // Ajout dans l'historique du navigateur pour gérer le bouton "Précédent"
    history.pushState({ modalOpen: true, pid: pid }, "", "#projet-" + pid);

    const words = p.title[currentLang].split(' ');
    let h = `<div class="modal-header"><h1>${words[0]} <span class="glow-text">${words.slice(1).join(' ')}</span></h1>
             <p class="modal-intro">${p.details.intro[currentLang]}</p>
             <div class="modal-tags">${(p.technologies || []).map(t=>`<span class="modal-tag">${t}</span>`).join('')}</div></div>`;

    p.details.sections.forEach(s => {
        let imagesHtml = '';
        let hasI = false;
        
        if (Array.isArray(s.image) && s.image.length > 0) {
            hasI = true;
            imagesHtml = `<div class="section-image project-img-container multiple-images">` + 
                         s.image.map(img => `<img src="${img}" alt="" tabindex="0">`).join('') + 
                         `</div>`;
        } else if (typeof s.image === 'string' && s.image.trim() !== "") {
            hasI = true;
            imagesHtml = `<div class="section-image project-img-container"><img src="${s.image}" alt="" tabindex="0"></div>`;
        }

        h += `<div class="project-section ${hasI?'':'no-image'}">
                <div class="section-text"><h2>${s.title[currentLang]}</h2><div>${s.text[currentLang]}</div></div>
                ${imagesHtml}
              </div>`;
    });
    mb.innerHTML = h; pm.classList.add('active'); document.body.style.overflow = 'hidden';
};

// Fermeture de la modale via le bouton interne (simule le retour arrière du navigateur)
if(cbm) {
    cbm.addEventListener('click', () => { 
        window.history.back(); 
    });
}

// Écoute du bouton "Retour" / "Précédent" du navigateur pour fermer la modale
window.addEventListener('popstate', (event) => {
    if (pm.classList.contains('active')) {
        pm.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ==========================================================================
//   6. BOUTONS (Thème, Filtres)
// ==========================================================================
const themeToggleBtn = document.getElementById('themeToggle');
if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const d = body.classList.contains('dark-theme');
        localStorage.setItem('theme', d ? 'dark' : 'light');
        themeToggleBtn.innerHTML = d ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        updateParticlesColor(d ? '#38bdf8' : '#6366f1');
    });
}

const elecBtn = document.getElementById('electronicsBtn');
const softBtn = document.getElementById('softwareBtn');

if(elecBtn && softBtn) {
    elecBtn.addEventListener('click', () => {
        elecBtn.classList.add('active'); softBtn.classList.remove('active');
        document.querySelector('.electronics-content').classList.add('active'); document.querySelector('.software-content').classList.remove('active');
        document.getElementById('electronics-desc').classList.add('active'); document.getElementById('software-desc').classList.remove('active');
    });

    softBtn.addEventListener('click', () => {
        softBtn.classList.add('active'); elecBtn.classList.remove('active');
        document.querySelector('.software-content').classList.add('active'); document.querySelector('.electronics-content').classList.remove('active');
        document.getElementById('software-desc').classList.add('active'); document.getElementById('electronics-desc').classList.remove('active');
    });
}

// ==========================================================================
//   7. LANGUE, TYPING & START
// ==========================================================================
const typingElement = document.getElementById('typing-text');
const typingTexts = {
    fr: [
        "Jeune diplômé en Ingénierie des Systèmes Aéronautiques et Spatiaux",
        "Développeur Logiciel",
        "Passionné par l'IA et le Code",
        "À la recherche d’une opportunité professionnelle"
    ],
    en: [
        "Recent Graduate in Aeronautical and Space Systems",
        "Software Developer",
        "Passionate about AI and Coding",
        "Seeking professional opportunities"
    ]
};

let tI = 0; 
let cI = 0;

function type() {
    if(!typingElement) return;
    const currentTexts = typingTexts[currentLang];
    
    if (cI < currentTexts[tI].length) { 
        typingElement.textContent += currentTexts[tI].charAt(cI); 
        cI++; 
        setTimeout(type, 80); 
    } else { 
        setTimeout(erase, 2000); 
    }
}

function erase() {
    if(!typingElement) return;
    const currentTexts = typingTexts[currentLang];
    
    if (cI > 0) { 
        typingElement.textContent = currentTexts[tI].substring(0, cI - 1); 
        cI--; 
        setTimeout(erase, 40); 
    } else { 
        tI = (tI + 1) % currentTexts.length; 
        setTimeout(type, 80); 
    }
}

if(langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        langToggle.textContent = currentLang.toUpperCase();
        
        updateLanguage(currentLang); 
        initializeContent(currentLang);
        
        if(typingElement) {
            typingElement.textContent = "";
            cI = 0;
            tI = 0;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang); 
    initializeContent(currentLang);
    if(typingElement) setTimeout(type, 1000);
});

// ==========================================================================
//   8. LIGHTBOX POUR LES IMAGES
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg && closeLightbox) {
        document.body.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG' && e.target.closest('.project-img-container')) {
                lightbox.classList.add('active');
                lightboxImg.src = e.target.src;
            }
        });

        closeLightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }
});