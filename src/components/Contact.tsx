import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  ExternalLink,
  Download,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Shivaji Nagar, Pune",
      href: "https://maps.google.com/?q=Shivaji+Nagar+Pune"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9172237937",
      href: "tel:+919172237937"
    },
    {
      icon: Mail,
      label: "Email",
      value: "itsfahim063@gmail.com",
      href: "mailto:itsfahim063@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "fahim-patel-9abb0b307",
      href: "https://linkedin.com/in/fahim-patel-9abb0b307"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "fahimpatel4",
      href: "https://github.com/fahimpatel4"
    }
  ];

  const handleDownloadResume = () => {
    // Create a more detailed resume file
    const resumeContent = `
FAHIM PATEL
Software Tester | Quality Assurance Professional
================================================

CONTACT INFORMATION
📍 Shivaji Nagar, Pune, Maharashtra, India
📞 +91 9172237937
📧 itsfahim063@gmail.com
🔗 LinkedIn: https://linkedin.com/in/fahim-patel-9abb0b307
🔗 GitHub: https://github.com/fahimpatel4

PROFESSIONAL SUMMARY
====================
Detail-oriented and motivated individual with a strong interest in software testing and quality assurance. 
Eager to apply problem-solving skills to ensure software reliability and performance. 
Committed to learning and contributing effectively as a Junior Software Tester with hands-on experience 
in manual testing, automation frameworks, and defect lifecycle management.

EDUCATION
=========
🎓 ARTIFICIAL INTELLIGENCE & DATA SCIENCE (Present)
   Savitribai Phule Pune University, Pune
   CGPA: 7.5/10

🎓 12th GRADE - HIGHER SECONDARY (2022)
   Higher Secondary School, Narayangoan
   Percentage: 65.01/100

TECHNICAL SKILLS
================
Testing Expertise:
• Manual Testing
• Functional Testing
• Regression Testing
• UAT (User Acceptance Testing)
• Boundary Value Testing
• Negative Testing
• Integration Testing

Automation & Tools:
• Selenium WebDriver
• TestNG Framework
• API Testing
• JIRA (Defect Tracking)
• Excel (Test Documentation)

Programming:
• Java (Object-Oriented Programming)
• Eclipse IDE

Methodologies:
• SDLC (Software Development Life Cycle)
• STLC (Software Testing Life Cycle)
• Defect Life Cycle Management
• Test Case Design & Execution
• Cross-browser Testing
• Requirement Traceability

WORK EXPERIENCE
===============
SOFTWARE TESTING INTERN | CyberSuccess, Pune
• Performed comprehensive manual testing of web applications
• Validated functionality and user experience across multiple browsers
• Designed and executed detailed test cases based on user stories and requirements
• Documented and tracked defects using Excel and JIRA
• Gained hands-on exposure to SDLC, STLC, and defect life cycle management
• Collaborated with development teams in live project environments
• Participated in test planning and strategy discussions

PROJECTS
========
1. E-COMMERCE WEBSITE TESTING
   • Tested core modules: login/authentication, product search, shopping cart, checkout, payment processing
   • Applied functional testing, regression testing, and boundary value analysis
   • Validated cross-browser compatibility and responsive design
   • Performed security testing for payment gateway integration

2. ONLINE BANKING SYSTEM TESTING
   • Validated critical features: fund transfer, account summary, transaction history
   • Conducted extensive login security and session management testing
   • Implemented negative testing scenarios and edge case validation
   • Tested role-based access control and user privilege management

3. LEAVE MANAGEMENT SYSTEM TESTING
   • Tested complete workflow: leave application, approval process, balance tracking
   • Validated notification system and email alerts
   • Applied integration testing between different system modules
   • Ensured requirement traceability and coverage analysis

CERTIFICATIONS
==============
✅ SOFTWARE TESTING CERTIFICATION
   CyberSuccess Training Institute
   • Manual Testing Methodologies
   • Automation Testing with Selenium Java
   • Industry Best Practices
   • Live Project Experience

KEY ACHIEVEMENTS
================
• Successfully completed comprehensive software testing training
• Gained practical experience in live project environments
• Developed expertise in both manual and automation testing
• Strong understanding of QA processes and industry standards
• Proven ability to work collaboratively in team environments

PROFESSIONAL STRENGTHS
======================
• Detail-oriented approach to quality assurance
• Strong analytical and problem-solving skills
• Excellent communication and documentation abilities
• Adaptability to new technologies and testing tools
• Commitment to continuous learning and improvement
• Team collaboration and cross-functional coordination

CAREER OBJECTIVE
================
Seeking opportunities as a Junior Software Tester where I can apply my testing knowledge, 
contribute to quality assurance processes, and continue growing in the field of software testing. 
Eager to work with experienced teams and contribute to delivering high-quality software products.

================================================
Generated on: ${new Date().toLocaleDateString()}
Contact: itsfahim063@gmail.com | +91 9172237937
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Fahim_Patel_Software_Tester_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-card border-primary/20">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to contribute to your testing team. Open to full-time positions, 
              internships, and freelance testing projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Feel free to reach out for testing opportunities, collaborations, or just to discuss 
                  quality assurance best practices.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-gradient-card rounded-xl border border-primary/10 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{contact.label}</div>
                      <div className="text-muted-foreground">{contact.value}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              {/* Quick actions */}
              <div className="mt-8 space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={handleDownloadResume}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Complete Resume
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    onClick={() => window.open('mailto:itsfahim063@gmail.com?subject=Testing Opportunity&body=Hi Fahim, I would like to discuss a testing opportunity with you.', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Email Me
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    onClick={() => window.open('https://linkedin.com/in/fahim-patel-9abb0b307', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Availability and preferences */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl">Current Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="font-medium text-foreground">Available for Opportunities</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently seeking Junior Software Tester positions or internships. 
                    Open to both remote and on-site opportunities in Pune and surrounding areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl">Interested In</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="outline" className="justify-center py-2 border-primary/30">Full-time Roles</Badge>
                    <Badge variant="outline" className="justify-center py-2 border-primary/30">Internships</Badge>
                    <Badge variant="outline" className="justify-center py-2 border-primary/30">Remote Work</Badge>
                    <Badge variant="outline" className="justify-center py-2 border-primary/30">On-site (Pune)</Badge>
                    <Badge variant="outline" className="justify-center py-2 border-primary/30">Manual Testing</Badge>
                    <Badge variant="outline" className="justify-center py-2 border-primary/30">Automation</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-white border-none">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Ready to Start</h3>
                  <p className="text-white/90 mb-4">
                    Eager to contribute to your QA team and ensure software excellence.
                  </p>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Notice Period: Immediate
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;