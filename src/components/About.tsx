import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Meticulous attention to detail in identifying bugs and ensuring quality"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to QA processes and cross-functional teamwork"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative thinking to find edge cases and improve testing strategies"
    },
    {
      icon: Award,
      title: "Certified",
      description: "CyberSuccess Training in Manual & Automation Testing"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-card border-primary/20">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About <span className="gradient-text">Quality</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Currently pursuing AI & Data Science while building expertise in software testing. 
              I bring fresh perspectives to quality assurance with a strong foundation in both manual and automation testing.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Summary */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Summary</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Detail-oriented and motivated individual with a strong interest in software testing and quality assurance. 
                Eager to apply problem-solving skills to ensure software reliability and performance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Committed to learning and contributing effectively as a Junior Software Tester with hands-on experience 
                in manual testing, automation frameworks, and defect lifecycle management.
              </p>
              
              {/* Education highlight */}
              <div className="bg-gradient-card rounded-xl p-6 border border-primary/10">
                <h4 className="font-semibold text-foreground mb-2">Current Education</h4>
                <p className="text-muted-foreground">
                  <strong>Artificial Intelligence & Data Science</strong><br />
                  Savitribai Phule Pune University • CGPA: 7.5
                </p>
              </div>
            </div>

            {/* Right: Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-primary/10 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-card rounded-xl p-6 border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">7.5</div>
              <div className="text-sm text-muted-foreground">Current CGPA</div>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Testing Projects</div>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Internship</div>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-primary/10">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-sm text-muted-foreground">Certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;