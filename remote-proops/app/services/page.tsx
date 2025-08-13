"use client"

import Navigation from "@/components/navigation"

export default function ServicesPage() {
  const services = [
    {
      title: "Virtual Assistant Services",
      description: "Dedicated professionals to handle your daily administrative tasks with precision and efficiency",
      features: [
        "Email management and organization",
        "Calendar scheduling and coordination",
        "Customer support via multiple channels",
        "Data entry and database management",
        "Research and market analysis",
        "Social media management",
        "Travel planning and booking",
        "Document preparation and formatting",
      ],
      pricing: "Starting at $1,200/month",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "CRM Management",
      description: "Complete customer relationship management and sales pipeline optimization",
      features: [
        "CRM setup and configuration",
        "Lead qualification and scoring",
        "Pipeline management and tracking",
        "Automated follow-up sequences",
        "Sales reporting and analytics",
        "Contact database management",
        "Integration with existing tools",
        "Performance monitoring and optimization",
      ],
      pricing: "Included in Growth+ packages",
      gradient: "from-purple-500 to-cyan-600",
    },
    {
      title: "Operations Automation",
      description: "Streamline your business processes with intelligent automation and workflow optimization",
      features: [
        "Workflow analysis and optimization",
        "Process documentation and SOPs",
        "Tool integration and setup",
        "Automated reporting systems",
        "Quality assurance protocols",
        "Performance monitoring dashboards",
        "Continuous improvement initiatives",
        "Training and knowledge transfer",
      ],
      pricing: "Custom pricing based on complexity",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Content Creation",
      description: "Professional content for all your marketing and communication needs",
      features: [
        "Blog posts and articles",
        "Social media content and scheduling",
        "Email marketing campaigns",
        "Website copy and landing pages",
        "Marketing materials and brochures",
        "Press releases and announcements",
        "Video scripts and presentations",
        "SEO optimization and keyword research",
      ],
      pricing: "Starting at $800/month",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Financial Management",
      description: "Keep your finances organized, compliant, and growth-ready with expert oversight",
      features: [
        "Bookkeeping and accounting",
        "Invoice creation and management",
        "Expense tracking and categorization",
        "Financial reporting and analysis",
        "Tax preparation support",
        "Budget planning and forecasting",
        "Vendor management and payments",
        "Compliance monitoring",
      ],
      pricing: "Starting at $600/month",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination and delivery management with proven methodologies",
      features: [
        "Project planning and timeline creation",
        "Team coordination and communication",
        "Progress tracking and reporting",
        "Risk management and mitigation",
        "Resource allocation and optimization",
        "Stakeholder communication",
        "Quality assurance and testing",
        "Post-project analysis and improvement",
      ],
      pricing: "Included in ProOps package",
      gradient: "from-purple-500 to-blue-600",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6 animate-slide-up">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive remote operations solutions designed to scale with your business needs and drive sustainable
            growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-2xl card-hover border-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 animate-pulse-glow`}
                >
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">What's Included:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-600 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <span className="text-gradient font-bold text-lg">{service.pricing}</span>
                  <button
                    onClick={() => (window.location.href = "/consultation")}
                    className="btn-primary text-white px-6 py-2 rounded-lg font-semibold ripple hover:scale-105 transition-transform duration-300"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">How We Deliver Excellence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven methodology ensures consistent, high-quality results through systematic approach and continuous
              optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Discovery & Analysis",
                desc: "We analyze your current processes and identify optimization opportunities through comprehensive assessment.",
              },
              {
                step: 2,
                title: "Custom Strategy",
                desc: "We develop a tailored approach that fits your specific business needs and growth objectives.",
              },
              {
                step: 3,
                title: "Implementation",
                desc: "Our expert team executes the plan with precision, attention to detail, and proven methodologies.",
              },
              {
                step: 4,
                title: "Monitoring & Optimization",
                desc: "We continuously monitor performance metrics and optimize processes for better results.",
              },
              {
                step: 5,
                title: "Scaling & Growth",
                desc: "As your business grows, we scale our services seamlessly to match your evolving needs.",
              },
              {
                step: 6,
                title: "Ongoing Support",
                desc: "We provide continuous support and strategic guidance for long-term success and sustainability.",
              },
            ].map((item, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl card-hover text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss which services are the perfect fit for your business goals and growth trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/consultation")}
              className="btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold ripple hover:scale-105 transition-transform duration-300"
            >
              Start Your Free Audit
            </button>
            <button
              onClick={() => (window.location.href = "/consultation")}
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
