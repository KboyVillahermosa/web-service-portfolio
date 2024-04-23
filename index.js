const express = require('express');
const app = express();
const port = 3000;

//routes
app.use(cors({origin: 'https://render-portfolio-b4s4.onrender.com'}))
app.get('/', (req, res) => {
    const resume = 
    {
        Personal_Information: 
        [
            {
                name: "Kboy Villahermosa",
                Address: "Lahug Cebu City",
                ContactNo: "09564635763",
                Email: "rairaicindylou@gmail.com",
                Birthdate: "March 25 2003",
                Gender: "Male"
    
            }
        ],

        About_Me: 
        [
            { 
                Description: "Join me on this exhilarating journey of creativity and let my work inspire and motivate you. Together, let's redefine the boundaries of what is possible and celebrate the artistry that lies at the intersection of innovation and passion. Welcome to a world where each click is an invitation to explore, discover, and be inspired."
            }
        ],
        
        Skills: 
        [
            {
                SkillName: "Proficiency in front-end web technologies: HTML, CSS, JavaScript",
                SkillName: "Experience with responsive web design and cross-browser compatibility",
                SkillName: "Basic understanding of version control systems, such as Git",
                SkillName: "Strong teamwork and communication skills through collaborative project work"
            }
        ],
        
        Work_Experience:
        [
            {
                Description: "Utilized version control with Git to manage and track changes to the project, enhancing collaboration and workflow efficiency.",
                Description: "Demonstrated strong problem-solving skills to troubleshoot and resolve technical issues, ensuring seamless website functionality across different browsers and devices.",
                Description: "Collaborated with a team of developers to design and implement a responsive website for a university event, utilizing HTML, CSS, and JavaScript."
            }
        ],

        Education:
        [
            {
                Level: "College",
                Degree: "Bachelor of Science in Information Technology (BSIT)y",
                School: "University of Southern Philippines Foundation (USPF)",
                Year: "nd Year Student (2023-2024)"
            }
        ],

        Awards_and_Achievements: 
        [
            {
                Description: "Dean's List, USPF",
                Description: "3rd place in CCS Hackathon",

            },
        ]
    };

    res.json(resume);
});

//start
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});
