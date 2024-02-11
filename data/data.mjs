export const data = {
"HEALTH_&_LIFESTYLE": {
  "pillar": "Health & Lifestyle",
  "questions": [
    {
      "id": "HEALTH_&_LIFESTYLE-q1",
      "preMessage": "Your health and lifestyle are crucial to your well-being. Let's identify your concerns.",
      "text": "What are your primary health and lifestyle concerns?",
      "options": [
        {
          "text": "Physical health",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q2"
        },
        {
          "text": "Mental health",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q3"
        },
        {
          "text": "Diet/nutrition",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q4"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q2",
      "preMessage": "Facing physical health challenges can be tough. Identifying them helps us find the right support.",
      "text": "What type of physical health issues are you facing?",
      "options": [
        {
          "text": "Chronic conditions",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q6"
        },
        {
          "text": "Acute issues",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q6"
        },
        {
          "text": "General health",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q6"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q3",
      "preMessage": "Mental health is crucial. Let's talk about what you're experiencing.",
      "text": "What aspects of mental health are you struggling with?",
      "options": [
        {
          "text": "Stress/anxiety",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q7"
        },
        {
          "text": "Depression/mood",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q7"
        },
        {
          "text": "Sleep issues",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q7"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q4",
      "preMessage": "Nutrition plays a role. Let's pinpoint challenges for healthier choices.",
      "text": "What challenges are you facing regarding diet and nutrition?",
      "options": [
        {
          "text": "Healthy planning",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q8"
        },
        {
          "text": "Dietary restrictions",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q8"
        },
        {
          "text": "Weight management",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q8"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q5",
      "preMessage": "Exercise is vital. Identifying obstacles is the first step to an active life.",
      "text": "What are your main challenges with exercise and physical activity?",
      "options": [
        {
          "text": "Time/motivation",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q9"
        },
        {
          "text": "Physical limitations",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q9"
        },
        {
          "text": "Lack of knowledge",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q9"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q6",
      "preMessage": "Physical health issues impact daily life. Understanding this helps us find solutions.",
      "text": "How do these physical health issues affect your daily life?",
      "options": [
        {
          "text": "Limiting activities",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q10"
        },
        {
          "text": "Pain/discomfort",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q10"
        },
        {
          "text": "Impact on mood",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q10"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q7",
      "preMessage": "Seeking support for mental health is brave. Let's find the right kind of help for you.",
      "text": "What kind of support are you seeking for your mental health?",
      "options": [
        {
          "text": "Counseling/therapy",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q11"
        },
        {
          "text": "Stress reduction",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q11"
        },
        {
          "text": "Support groups",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q11"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q8",
      "preMessage": "Improving diet is key. Let's explore resources that can assist you.",
      "text": "What resources would assist you in improving your diet and nutrition?",
      "options": [
        {
          "text": "Nutritions",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q12"
        },
        {
          "text": "Meal planning tools",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q12"
        },
        {
          "text": "Health education",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q12"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q9",
      "preMessage": "Overcoming exercise challenges is about finding the right approach for you. Let's see what would help you get moving.",
       "text": "What would help you overcome your exercise challenges?",
      "options": [
        {
          "text": "Fitness coaching",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q13"
        },
        {
          "text": "Accessible programs",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q13"
        },
        {
          "text": "Guidance on exercise",
          "nextQuestionId": "HEALTH_&_LIFESTYLE-q13"
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q10",
      "preMessage": "Navigating healthcare is complex. Identifying the type of support you need is crucial for effective care.",
      "text": "What kind of healthcare or medical support do you need?",
      "options": [
        {
          "text": "Regular check-ups",
          "resources": ["General healthcare", "Routine check-ups"]
        },
        {
          "text": "Specialist care",
          "resources": ["Specialized care", "Referral to specialists"]
        },
        {
          "text": "Pain management",
          "resources": ["Pain management", "Physical therapy"]
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q11",
      "preMessage": "Mental health support comes in many forms. Finding the right one for you can make all the difference.",
      "text": "How often do you feel you need mental health support?",
      "options": [
        {
          "text": "Regular ongoing",
          "resources": ["Continuous counseling", "Long-term therapy"]
        },
        {
          "text": "Specific times/situations",
          "resources": ["Situational therapy", "Stress management"]
        },
        {
          "text": "Occasional as issues arise",
          "resources": ["On-demand counseling", "Short-term therapy"]
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q12",
      "preMessage": "Setting goals for your diet can guide you towards healthier choices. Let's define those goals.",
      "text": "What are your goals regarding diet and nutrition?",
      "options": [
        {
          "text": "Improve overall health",
          "resources": ["General nutrition", "Healthy eating workshops"]
        },
        {
          "text": "Weight management/loss",
          "resources": ["Weight management programs", "Dietitian services"]
        },
        {
          "text": "Address specific conditions",
          "resources": ["Dietary management", "Nutritionist consultations"]
        }
      ]
    },
    {
      "id": "HEALTH_&_LIFESTYLE-q13",
      "preMessage": "Your commitment to improving physical activity is commendable. Let's find the support that matches your commitment level.",
      "text": "How committed are you to improving your physical activity?",
      "options": [
        {
          "text": "Very committed, need guidance",
          "resources": ["Fitness coaching", "Structured programs"]
        },
        {
          "text": "Somewhat committed, need motivation",
          "resources": ["Motivational groups", "Activity tracking tools"]
        },
        {
          "text": "Interested, with physical limitations",
          "resources": ["Adaptive programs", "Physical therapy"]
        }
      ]
    }
  ]
},
  "WORK_CHALLENGES":{
  "pillar": "I am facing challenges at work",
  "questions": [
    {
      "id": "WORK_CHALLENGES-q1",
      "preMessage": "Work challenges can impact well-being. Let's narrow down what you're experiencing.",
      "text": "What challenges at work?",
      "options": [
        {
          "text": "Workload & time",
          "nextQuestionId": "WORK_CHALLENGES-q2"
        },
        {
          "text": "Relationships",
          "nextQuestionId": "WORK_CHALLENGES-q3"
        },
        {
          "text": "Career growth",
          "nextQuestionId": "WORK_CHALLENGES-q4"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q2",
      "preMessage": "A heavy workload can be daunting. Understanding its impact can help us find a way to manage it.",
      "text": "How's workload affecting daily life?",
      "options": [
        {
          "text": "Long hours",
          "nextQuestionId": "WORK_CHALLENGES-q6"
        },
        {
          "text": "Overwhelmed",
          "nextQuestionId": "WORK_CHALLENGES-q6"
        },
        {
          "text": "Struggling",
          "nextQuestionId": "WORK_CHALLENGES-q6"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q3",
      "preMessage": "Navigating relationships at work can be complex. Identifying issues is the first step to improving them.",
      "text": "Issues with colleagues?",
      "options": [
        {
          "text": "Communication",
          "nextQuestionId": "WORK_CHALLENGES-q7"
        },
        {
          "text": "Conflict",
          "nextQuestionId": "WORK_CHALLENGES-q7"
        },
        {
          "text": "Undervalued",
          "nextQuestionId": "WORK_CHALLENGES-q7"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q4",
      "preMessage": "Thinking about career growth is important. Let's explore what concerns you have in this area.",
      "text": "Career growth concerns?",
      "options": [
        {
          "text": "Advancement",
          "nextQuestionId": "WORK_CHALLENGES-q8"
        },
        {
          "text": "Training needed",
          "nextQuestionId": "WORK_CHALLENGES-q8"
        },
        {
          "text": "Uncertain path",
          "nextQuestionId": "WORK_CHALLENGES-q8"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q5",
      "preMessage": "The work environment and culture play a big role in job satisfaction. Let's get into the details.",
      "text": "Workplace challenges?",
      "options": [
        {
          "text": "High-stress",
          "nextQuestionId": "WORK_CHALLENGES-q9"
        },
        {
          "text": "Lack of support",
          "nextQuestionId": "WORK_CHALLENGES-q9"
        },
        {
          "text": "Work-life balance",
          "nextQuestionId": "WORK_CHALLENGES-q9"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q6",
      "preMessage": "Stress from work can affect all aspects of life. Recognizing how often you feel this way is key to addressing it.",
      "text": "How often stressed by workload?",
      "options": [
        {
          "text": "Every day",
          "nextQuestionId": "WORK_CHALLENGES-q10"
        },
        {
          "text": "Several times/week",
          "nextQuestionId": "WORK_CHALLENGES-q10"
        },
        {
          "text": "Occasionally",
          "nextQuestionId": "WORK_CHALLENGES-q10"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q7",
      "preMessage": "Work issues can impact more than just job performance. Understanding this impact can help us find solutions.",
      "text": "How impact on performance ?",
      "options": [
        {
          "text": "Affecting perf",
          "nextQuestionId": "WORK_CHALLENGES-q11"
        },
        {
          "text": "Causing dissat",
          "nextQuestionId": "WORK_CHALLENGES-q11"
        },
        {
          "text": "Creating tension",
          "nextQuestionId": "WORK_CHALLENGES-q11"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q8",
      "preMessage": "Career development is a journey. Pinpointing the support you need can help guide your path forward.",
       "text": "Support for career development?",
      "options": [
        {
          "text": "Mentorship",
          "nextQuestionId": "WORK_CHALLENGES-q12"
        },
        {
          "text": "Skill development",
          "nextQuestionId": "WORK_CHALLENGES-q12"
        },
        {
          "text": "Career counseling",
          "nextQuestionId": "WORK_CHALLENGES-q12"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q9",
      "preMessage": "Creating a positive workplace is crucial for everyone's well-being. Let's think about what changes could make a difference.",
       "text": "Changes for better workplace?",
      "options": [
        {
          "text": "Work-life balance",
          "nextQuestionId": "WORK_CHALLENGES-q13"
        },
        {
          "text": "More support",
          "nextQuestionId": "WORK_CHALLENGES-q13"
        },
        {
          "text": "Healthier culture",
          "nextQuestionId": "WORK_CHALLENGES-q13"
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q10",
      "preMessage": "Managing workload effectively can significantly reduce stress. Let's explore what might help you.",
       "text": "Help for managing workload?",
      "options": [
        {
          "text": "Time management",
          "resources": ["Time management workshop", "Online courses"]
        },
        {
          "text": "Delegation strats",
          "resources": ["Teamwork development", "Leadership workshops"]
        },
        {
          "text": "Stress management",
          "resources": ["Stress management courses", "Wellness programs"]
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q11",
      "preMessage": "Improving work relationships can enhance job satisfaction and performance. Let's find the right resources for you.",
      "text": "Resources for better relationships?",
      "options": [
        {
          "text": "Comm skills",
          "resources": ["Communication workshops", "Interpersonal skills courses"]
        },
        {
          "text": "Conflict res",
          "resources": ["Conflict management seminars", "Mediation services"]
        },
        {
          "text": "Workplace counseling",
          "resources": ["Employee assistance programs", "Mental health support"]
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q12",
      "preMessage": "Commitment to your career development is a significant step. Identifying your level of commitment helps us tailor the support.",
      "text": "Commitment to career development?",
      "options": [
        {
          "text": "Very committed",
          "resources": ["Career development programs", "Professional training"]
        },
        {
          "text": "Somewhat committed",
          "resources": ["Career counseling", "Informational workshops"]
        },
        {
          "text": "Uncertain commit",
          "resources": ["Exploratory career coaching", "Motivational seminars"]
        }
      ]
    },
    {
      "id": "WORK_CHALLENGES-q13",
      "preMessage": "Taking steps to address workplace issues is brave. Reflecting on your actions so far can help guide us to next steps.",
      "text": "Steps taken for workplace issues?",
      "options": [
        {
          "text": "Discuss with mgmt",
          "resources": ["Workplace mediation services", "HR policy consultation"]
        },
        {
          "text": "Peer advice",
          "resources": ["Peer support groups", "Mentorship programs"]
        },
        {
          "text": "External resources",
          "resources": ["External advisory services", "Professional networking groups"]
        }
      ]
    }

  ]
},
"STUDIES": {
  "pillar": "Feeling overwhelmed by studies",
  "questions": [
    {
      "id": "STUDIES-q1",
      "preMessage": "Feeling swamped by studies is something many students experience. Let's pinpoint the main source of your stress.",
      "text": "What's overwhelming you most in studies?",
      "options": [
        {
          "text": "Course workload",
          "nextQuestionId": "STUDIES-q2"
        },
        {
          "text": "Exam preparation",
          "nextQuestionId": "STUDIES-q3"
        },
        {
          "text": "Balancing studies",
          "nextQuestionId": "STUDIES-q4"
        }
      ]
    },
    {
      "id": "STUDIES-q2",
      "preMessage": "A heavy workload can certainly stretch your limits. Let's explore how it's impacting your routine.",
      "text": "How does workload affect your routine?",
      "options": [
        {
          "text": "Feeling behind",
          "nextQuestionId": "STUDIES-q6"
        },
        {
          "text": "Understanding tasks",
          "nextQuestionId": "STUDIES-q6"
        },
        {
          "text": "No time for activities",
          "nextQuestionId": "STUDIES-q6"
        }
      ]
    },
    {
      "id": "STUDIES-q3",
      "preMessage": "Exam challenges are tough but surmountable. Identifying your hurdles is the first step towards overcoming them.",
      "text": "Challenges with exams?",
      "options": [
        {
          "text": "Test anxiety",
          "nextQuestionId": "STUDIES-q7"
        },
        {
          "text": "Difficulty studying",
          "nextQuestionId": "STUDIES-q7"
        },
        {
          "text": "Time management",
          "nextQuestionId": "STUDIES-q7"
        }
      ]
    },
      {
      "id": "STUDIES-q4",
      "preMessage": "Juggling studies and life's other duties is no small feat. Let's look at what's keeping the scales tipped.",
      "text": "Obstacles in balancing?",
      "options": [
        {
          "text": "Part-time work",
          "nextQuestionId": "STUDIES-q8"
        },
        {
          "text": "Family duties",
          "nextQuestionId": "STUDIES-q8"
        },
        {
          "text": "Limited relaxation",
          "nextQuestionId": "STUDIES-q8"
        }
      ]
    },
    {
      "id": "STUDIES-q5",
      "preMessage": "Connecting with course material is crucial for academic success. Let's delve into the difficulties you're facing.",
      "text": "Difficulties with course material?",
      "options": [
        {
          "text": "Lack of interest",
          "nextQuestionId": "STUDIES-q9"
        },
        {
          "text": "Difficult concepts",
          "nextQuestionId": "STUDIES-q9"
        },
        {
          "text": "Inadequate resources",
          "nextQuestionId": "STUDIES-q9"
        }
      ]
    },
    {
      "id": "STUDIES-q6",
      "preMessage": "Feeling overwhelmed is a sign it's time for some changes. Let's see how frequent this feeling occurs.",
      "text": "How often do you feel overwhelmed?",
      "options": [
        {
          "text": "Almost always",
          "nextQuestionId": "STUDIES-q10"
        },
        {
          "text": "Frequently",
          "nextQuestionId": "STUDIES-q10"
        },
        {
          "text": "Sometimes",
          "nextQuestionId": "STUDIES-q10"
        }
      ]
    },
    {
      "id": "STUDIES-q7",
      "preMessage": "Improving exam performance starts with finding the right strategies. Let's explore what you've tried.",
      "text": "Strategies to improve exams?",
      "options": [
        {
          "text": "Standard methods",
          "nextQuestionId": "STUDIES-q11"
        },
        {
          "text": "Group study",
          "nextQuestionId": "STUDIES-q11"
        },
        {
          "text": "Use of tech/apps",
          "nextQuestionId": "STUDIES-q11"
        }
      ]
    },
    {
      "id": "STUDIES-q8",
      "preMessage": "Seeking a better balance is key to your well-being. Let's identify supports that could ease the juggle.",
      "text": "Support for study-life balance?",
       "options": [
        {
          "text": "Time management",
          "nextQuestionId": "STUDIES-q12"
        },
        {
          "text": "Stress reduction",
          "nextQuestionId": "STUDIES-q12"
        },
        {
          "text": "Task prioritization",
          "nextQuestionId": "STUDIES-q12"
        }
      ]
    },
    {
      "id": "STUDIES-q9",
      "preMessage": "Enhancing your learning experience can reignite your academic passion. Let's find out how.",
      "text": "How to improve learning experience?",
      "options": [
        {
          "text": "Engaging material",
          "nextQuestionId": "STUDIES-q13"
        },
        {
          "text": "Additional support",
          "nextQuestionId": "STUDIES-q13"
        },
        {
          "text": "Instructor guidance",
          "nextQuestionId": "STUDIES-q13"
        }
      ]
    },
    {
      "id": "STUDIES-q10",
      "preMessage": "The right resources can make managing coursework feel more manageable. Let's look at options.",
      "text": "Resources to manage coursework?",
      "options": [
        {
          "text": "Organizational tools",
          "resources": ["Academic planners", "Time management apps"]
        },
        {
          "text": "Study techniques",
          "resources": ["Study skills seminars", "Online courses"]
        },
        {
          "text": "Counseling for stress",
          "resources": ["Student counseling", "Stress workshops"]
        }
      ]
    },
    {
      "id": "STUDIES-q11",
      "preMessage": "Finding effective study methods can transform your exam prep. Let's consider some supportive strategies.",
      "text": "Support for exam preparation?",
      "options": [
        {
          "text": "Personalized tutoring",
          "resources": ["Tutoring services", "Academic coaching"]
        },
        {
          "text": "Exam strategy courses",
          "resources": ["Exam prep workshops", "Strategy sessions"]
        },
        {
          "text": "Manage test anxiety",
          "resources": ["Anxiety management", "Mindfulness programs"]
        }
      ]
    },
    {
      "id": "STUDIES-q12",
      "preMessage": "You've made strides in balancing your studies and life. Let's explore what strategies have been effective for you.",
      "text": "Effective strategies for study-life balance?",
      "options": [
        {
          "text": "Setting boundaries",
          "resources": ["Balance seminars", "Time management tools"]
        },
        {
          "text": "Support from family",
          "resources": ["Family counseling", "Support groups"]
        },
        {
          "text": "Productivity tools",
          "resources": ["Productivity apps", "Organizational workshops"]
        }
      ]
    },
    {
      "id": "STUDIES-q13",
      "preMessage": "A supportive learning environment is key to academic success. Let's identify what additional support could look like for you.",
      "text": "Additional support for learning?",
      "options": [
        {
          "text": "Interactive methods",
          "resources": ["Interactive materials", "Tech tools"]
        },
        {
          "text": "Personalized support",
          "resources": ["One-on-one counseling", "Personalized plans"]
        },
        {
          "text": "Mentoring from instructors",
          "resources": ["Mentorship programs", "Office hours"]
        }
      ]
    }
  ]
 }
}
