import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TestTube, 
  Code, 
  Database, 
  Cog, 
  FileCheck, 
  Bug,
  Monitor,
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Expertise",
      icon: TestTube,
      skills: [
        { name: "Manual Testing", level: 90, description: "Web application testing across browsers" },
        { name: "Functional Testing", level: 85, description: "Feature validation and requirement testing" },
        { name: "Regression Testing", level: 80, description: "Ensuring new changes don't break existing features" },
        { name: "UAT Testing", level: 75, description: "User acceptance and end-to-end testing" }
      ]
    },
    {
      title: "Automation & Tools",
      icon: Cog,
      skills: [
        { name: "Selenium WebDriver", level: 80, description: "Automated web testing framework" },
        { name: "TestNG", level: 75, description: "Testing framework and test organization" },
        { name: "API Testing", level: 70, description: "REST API validation and testing" },
        { name: "JIRA", level: 85, description: "Defect tracking and project management" }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Java", level: 75, description: "Object-oriented programming for automation" },
        { name: "Eclipse IDE", level: 80, description: "Development environment proficiency" },
        { name: "Git", level: 70, description: "Version control and collaboration" }
      ]
    },
    {
      title: "Methodologies",
      icon: FileCheck,
      skills: [
        { name: "SDLC", level: 85, description: "Software Development Life Cycle" },
        { name: "STLC", level: 90, description: "Software Testing Life Cycle" },
        { name: "Defect Life Cycle", level: 85, description: "Bug tracking and resolution process" },
        { name: "Test Case Design", level: 80, description: "Creating comprehensive test scenarios" }
      ]
    }
  ];

  const quickSkills = [
    "Manual Testing",
    "Automation Testing", 
    "API Testing",
    "Java",
    "Selenium WebDriver",
    "TestNG",
    "Eclipse",
    "SDLC",
    "STLC",
    "Functional Testing",
    "Regression Testing",
    "UAT Testing",
    "JIRA",
    "Excel",
    "Cross-browser Testing"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-card border-primary/20">
              Technical Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Testing</span> Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill set covering manual testing methodologies, automation frameworks, 
              and quality assurance best practices.
            </p>
          </div>

          {/* Quick skills overview */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {quickSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Detailed skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-primary/10 hover:shadow-soft transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-foreground">{skill.name}</h4>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification highlight */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-primary text-white border-none shadow-glow inline-block">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Certified Professional</h3>
                    <p className="text-white/90">CyberSuccess Training - Manual & Automation Testing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;