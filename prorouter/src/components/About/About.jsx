import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../ThemeContext";

export default function About() {
  const { darkMode } = useTheme();
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 80;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: darkMode
            ? `rgba(192, 132, 252, ${Math.random() * 0.5 + 0.1})`
            : `rgba(249, 115, 22, ${Math.random() * 0.5 + 0.1})`,
        });
      }
    };

    // Mouse interaction
    let mouseX = null;
    let mouseY = null;

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse attraction
        if (mouseX !== null && mouseY !== null) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (100 - distance) / 100;

            p.x -= forceDirectionX * force * 2;
            p.y -= forceDirectionY * force * 2;
          }
        }

        // Movement
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = darkMode
              ? `rgba(192, 132, 252, ${1 - distance / 100})`
              : `rgba(249, 115, 22, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    // Setup
    resizeCanvas();
    initParticles();
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [darkMode]);

  // Feature cards data
  const features = [
    {
      title: "DSA Resources",
      description: "Simplified explanations with problem sets",
      icon: "📚",
    },
    {
      title: "Career Roadmaps",
      description: "Guides for skills and projects",
      icon: "🗺️",
    },
    {
      title: "Expert Insights",
      description: "Tips for coding interviews",
      icon: "💡",
    },
    {
      title: "Community",
      description: "Connect with peers and mentors",
      icon: "👥",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden py-16 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-500`}
    >
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Content */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Center container with max-width to leave space on sides */}
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Header Section - reduced vertical spacing */}
          <div className="text-center mb-10">
            <h1
              className={`text-3xl pb-4 font-extrabold md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r ${
                darkMode
                  ? "from-purple-400 via-pink-500 to-purple-600"
                  : "from-orange-500 via-red-500 to-purple-600"
              } mb-3`}
            >
              Welcome to All About Coding
            </h1>
            <p
              className={`max-w-2xl mx-auto text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Mastering DSA and building a strong foundation for your tech
              career.
            </p>
          </div>

          <div className="md:flex md:gap-8 lg:items-center">
            {/* Image Section */}
            <div className="image-container md:w-2/5 transform transition duration-500 hover:scale-105 mb-8 md:mb-0 mx-auto md:mx-0 max-w-xs">
              <div className="flip-container">
                <div
                  className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 ${
                    darkMode ? "border-purple-500" : "border-orange-500"
                  } image-flip`} // Added image-flip class here
                >
                  <img
                    src={"./aac2.jpg"}
                    alt="All About Coding"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 ${
                      darkMode ? "bg-purple-900" : "bg-orange-600"
                    } opacity-20 mix-blend-overlay`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-3/5">
              {/* Mission Statement */}
              <div
                className={`mb-6 p-4 rounded-2xl ${
                  darkMode ? "bg-gray-800/50" : "bg-white/70"
                } backdrop-blur-sm shadow-lg`}
              >
                <h2
                  className={`text-xl font-bold mb-2 ${
                    darkMode ? "text-purple-400" : "text-orange-500"
                  }`}
                >
                  Our Mission
                </h2>
                <p
                  className={`text-base leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  We help you master Data Structures and Algorithms while
                  building a strong foundation for a successful tech career with
                  expertly curated resources.
                </p>
              </div>

              {/* What We Offer Section - further downscaled */}
              <h3
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                What We Offer:
              </h3>

              {/* Feature Cards - more compact layout */}
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      darkMode
                        ? "bg-gray-800/70 hover:bg-gray-700/90"
                        : "bg-white/80 hover:bg-white"
                    } backdrop-blur-sm shadow-md`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span
                        className={`flex w-8 h-8 rounded-full items-center justify-center text-base ${
                          darkMode
                            ? "bg-purple-500/30 text-purple-300"
                            : "bg-orange-500/30 text-orange-600"
                        }`}
                      >
                        {feature.icon}
                      </span>
                      <h4
                        className={`text-base font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {feature.title}
                      </h4>
                    </div>
                    <p
                      className={`text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-700"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call-to-Action Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href="https://chat.whatsapp.com/INdHcEdh3ieGE5eHDg4vea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden inline-block px-5 py-2 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "bg-gradient-to-r from-orange-500 to-purple-600"
                  }`}
                  aria-label="Join Our WhatsApp Community"
                >
                  <span className="relative z-10">Join Our Community</span>
                  <span
                    className={`absolute top-0 left-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ${
                      darkMode
                        ? "bg-gradient-to-r from-pink-600 to-purple-600"
                        : "bg-gradient-to-r from-purple-600 to-orange-500"
                    }`}
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
