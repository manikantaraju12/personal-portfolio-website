import {
  Braces,
  Compass,
  GitBranch,
  Laptop2,
  Layers3,
  Mail,
  Palette,
  PhoneCall,
  Sparkles,
  Stars,
} from 'lucide-react'

export const profile = {
  name: 'Sai Ganesh Manikantaraju Nagulapalli',
  role: 'Computer Science Undergraduate | AWS-Focused Developer',
  tagline:
    'I build cloud-based systems with AWS, CI/CD pipelines, and serverless architectures, backed by problem solving and teamwork.',
  bio:
    'I am a computer science undergraduate with hands-on experience in cloud services, CI/CD pipelines, and serverless architectures. I focus on building and deploying scalable cloud-based systems with clear problem solving and strong collaboration habits.',
  learning:
    'I am currently sharpening cloud architecture, DevOps automation, and scalable deployment workflows.',
  email: 'manikantaraj36@gmail.com',
  github: 'https://github.com/manikantaraju12',
  linkedin: 'https://www.linkedin.com/in/manikantaraj-nagulapalli-30836629a/',
  location: 'Kakinada, Andhra Pradesh',
  phone: '+91 9014554461',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
]

export const highlights = [
  'AWS serverless systems',
  'CI/CD pipelines and automation',
  'Problem solving and teamwork',
]

export const stats = [
  { value: '02+', label: 'GitHub-linked projects' },
  { value: '06+', label: 'technical certifications earned' },
  { value: '01', label: 'cloud internship completed' },
]

export const skills = [
  {
    icon: Braces,
    title: 'Programming Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    icon: Laptop2,
    title: 'Core Languages',
    items: ['C', 'C++', 'Java', 'Python'],
  },
  {
    icon: Compass,
    title: 'AWS Cloud & AI Services',
    items: ['EC2', 'S3', 'IAM', 'VPC', 'Load Balancers', 'Auto Scaling', 'CloudWatch', 'Lambda', 'DynamoDB', 'SNS', 'CloudFormation', 'Kinesis', 'AWS Fraud Detector'],
  },
  {
    icon: Palette,
    title: 'DevOps Tools',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Git', 'GitHub', 'Jenkins', 'CI/CD Pipelines'],
  },
  {
    icon: Layers3,
    title: 'Databases & Web',
    items: ['MySQL', 'PL/SQL', 'REST APIs', 'VS Code', 'Linux'],
  },
  {
    icon: Sparkles,
    title: 'Core Competencies',
    items: ['Data Structures & Algorithms', 'Problem Solving', 'Analytical Thinking', 'Teamwork', 'Communication'],
  },
]

export const processSteps = [
  {
    icon: Sparkles,
    title: 'Learn',
    description: 'Build a strong foundation in computer science, cloud services, and practical engineering habits.',
  },
  {
    icon: Layers3,
    title: 'Build',
    description: 'Apply AWS, DevOps tools, and scripting to ship serverless and deployment-focused projects.',
  },
  {
    icon: Stars,
    title: 'Validate',
    description: 'Use certifications, internships, and project work to prove the system works in practice.',
  },
]

export const projects = [
  {
    title: 'Real-Time Fraud Detection in Online Transactions using AWS',
    description:
      'Real-time fraud detection system for online transactions using AWS Fraud Detector, Lambda, Kinesis, DynamoDB, SNS, S3, and CloudWatch.',
    stack: ['AWS Fraud Detector', 'Lambda', 'Kinesis', 'DynamoDB', 'SNS', 'S3', 'CloudWatch'],
    repo: 'https://github.com/manikantaraju12/Fraud-Detection-in-Online-Transcation',
    demo: 'https://github.com/manikantaraju12/Fraud-Detection-in-Online-Transcation',
    accent: 'linear-gradient(135deg, #8ef6d1 0%, #4cc9f0 48%, #4361ee 100%)',
  },
  {
    title: 'Jenkins-GitHub CI Pipeline on AWS',
    description:
      'A CI/CD pipeline that triggers Jenkins builds from GitHub webhooks and automates build and deployment workflows on AWS.',
    stack: ['Jenkins', 'Git', 'GitHub', 'OpenJDK 17', 'Jenkinsfile', 'AWS'],
    repo: 'https://github.com/manikantaraju12/jenkins-github-ci-pipeline.git',
    demo: 'https://github.com/manikantaraju12/jenkins-github-ci-pipeline.git',
    accent: 'linear-gradient(135deg, #ffd166 0%, #ff8fab 48%, #9b5de5 100%)',
  },
]

export const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    href: profile.github,
    value: 'github.com/manikantaraju12',
  },
  {
    icon: Compass,
    label: 'LinkedIn',
    href: profile.linkedin,
    value: 'linkedin.com/in/manikantaraj-nagulapalli-30836629a',
  },
  {
    icon: PhoneCall,
    label: 'Phone',
    href: 'tel:+919014554461',
    value: '+91 9014554461',
  },
]

export const aboutPoints = [
  'Computer Science undergraduate at Aditya College of Engineering and Technology, with a CGPA of 8.49/10.',
  'Hands-on experience with AWS-based application deployment and scalable cloud environments through internship work at Technical Hub Pvt. Ltd.',
  'Certified in AWS, Google Cloud, HTML and CSS, C, and Python basics, with a focus on practical problem solving and delivery.',
]

export const certifications = [
  'AWS Certified Developer - Associate (Mar 2026)',
  'AWS Cloud Developing - AWS Academy (Aug 2025)',
  'AWS Cloud Foundations - AWS Academy (June 2025)',
  'Google Cloud Engineering - Google Cloud (Sep 2025)',
  'Programming Essentials in C - Cisco NetAcad (Mar 2024)',
  'IT Specialist - HTML & CSS - Certiport (Aug 2024)',
  'Python (Basic) - HackerRank (May 2025)',
]

export const education = [
  {
    institution: 'Aditya College of Engineering and Technology',
    credential: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    period: 'Aug 2023 - Present',
    detail: 'CGPA: 8.49/10',
  },
  {
    institution: 'Aditya Junior College',
    credential: 'Board of Intermediate Education',
    period: 'Sep 2021 - Mar 2023',
    detail: 'Percentage: 93.7',
  },
]

export const avatarPalette = [
  'linear-gradient(135deg, #8ef6d1 0%, #4cc9f0 48%, #4361ee 100%)',
  'linear-gradient(135deg, #ffd166 0%, #ff8fab 48%, #9b5de5 100%)',
  'linear-gradient(135deg, #ffe29a 0%, #ffafcc 48%, #bde0fe 100%)',
  'linear-gradient(135deg, #9bf6ff 0%, #a0c4ff 48%, #bdb2ff 100%)',
  'linear-gradient(135deg, #caffbf 0%, #fdffb6 48%, #ffd6a5 100%)',
  'linear-gradient(135deg, #a7c7ff 0%, #7c83ff 48%, #b084f5 100%)',
  'linear-gradient(135deg, #f1fa8c 0%, #ffb703 48%, #fb8500 100%)',
  'linear-gradient(135deg, #ffadad 0%, #ffd6a5 48%, #fdffb6 100%)',
]

export const footerNotes = [
  'AWS-focused developer',
  'Cloud, DevOps, and deployment workflows',
  'Computer science undergraduate',
]

export const sectionLabels = {
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  credentials: 'Credentials',
  contact: 'Contact',
}