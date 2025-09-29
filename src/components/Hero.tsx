import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, Code, Bug } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a downloadable resume file
    const resumeContent = `
FAHIM PATEL
Software Tester | Quality Assurance Professional

Contact Information:
📍 Shivaji Nagar, Pune
📞 +919172237937
📧 itsfahim063@gmail.com
🔗 LinkedIn: fahim-patel-9abb0b307
🔗 GitHub: github.com/fahimpatel4

SUMMARY
Detail-oriented and motivated individual with a strong interest in software testing and quality assurance. 
Eager to apply problem-solving skills to ensure software reliability and performance. 
Committed to learning and contributing effectively as a Junior Software Tester.

EDUCATION
• ARTIFICIAL INTELLIGENCE & DATA SCIENCE
  Savitribai Phule Pune University, Pune (Present)
  CGPA: 7.5

• 12th, Higher Secondary School, Narayangoan (2022)
  Percentage: 65.01/100

TECHNICAL SKILLS
• Manual Testing
• Automation Testing
• API Testing
• Java
• Selenium WebDriver, TestNG, Eclipse
• SDLC, STLC
• Functional, Regression & UAT Testing

WORK EXPERIENCE
Internship - CyberSuccess, Pune
• Performed manual testing of web applications, validating functionality and user experience across browsers
• Designed and executed test cases based on user stories
• Documented defects using Excel and JIRA
• Gained hands-on exposure to SDLC, STLC, and defect life cycle management in live project environments

PROJECTS
E-Commerce Website Testing
• Test modules like login, product search, cart, checkout, and payment
• Focus on functional, regression, and boundary value testing

Online Banking System
• Validate fund transfer, account summary, transaction history, and login security
• Include negative testing and role-based access control

Leave Management System
• Test leave application, approval workflow, balance tracking, and notifications
• Apply integration testing and requirement traceability

CERTIFICATION
• Completed Software Testing CyberSuccess Training (Manual & Automation – Selenium Java)
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Fahim_Patel_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-success/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <Code className="absolute top-32 right-40 w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <Bug className="absolute bottom-32 right-32 w-6 h-6 text-accent/30 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-2 bg-gradient-card border-primary/20">
              <CheckCircle className="w-4 h-4 mr-2 text-success" />
              Available for Testing Opportunities
            </Badge>
          </div>

          {/* Main title */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">FAHIM</span>
              <br />
              <span className="text-foreground">PATEL</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
              Software Tester & QA Specialist
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about ensuring software quality through innovative testing methodologies. 
              Combining manual expertise with automation skills to deliver flawless user experiences.
            </p>
          </div>

          {/* Key highlights */}
          <div className="animate-scale-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-sm px-3 py-1 border-primary/30 text-primary">Manual Testing</Badge>
              <Badge variant="outline" className="text-sm px-3 py-1 border-primary/30 text-primary">Selenium Automation</Badge>
              <Badge variant="outline" className="text-sm px-3 py-1 border-primary/30 text-primary">API Testing</Badge>
              <Badge variant="outline" className="text-sm px-3 py-1 border-primary/30 text-primary">SDLC/STLC</Badge>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-scale-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-full"
                onClick={handleDownloadResume}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 rounded-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Contact info preview */}
          <div className="animate-fade-in opacity-0 mt-12" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <p className="text-muted-foreground text-sm">
              📍 Shivaji Nagar, Pune | 📞 +919172237937 | 📧 itsfahim063@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;