import React, { useEffect, useRef } from "react";
import { useTheme } from "../../ThemeContext";

export default function Contact() {
  const { darkMode } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 100 };

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 2;
        this.color = darkMode
          ? `hsl(${Math.random() * 60 + 200}, 50%, 50%)`
          : `hsl(${Math.random() * 60 + 270}, 70%, 70%)`;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.baseX - this.x;
            this.x += dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.baseY - this.y;
            this.y += dy / 10;
          }
        }
      }
    }

    // Initialize particles
    function init() {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 9000);

      for (let i = 0; i < particleCount; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }

      connect();
      animationFrameId = requestAnimationFrame(animate);
    }

    // Connect nearby particles
    function connect() {
      let opacity = darkMode ? 0.2 : 0.1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = darkMode
              ? `rgba(150, 150, 255, ${opacity})`
              : `rgba(200, 100, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    // Initialize and start animation
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 w-full h-full z-0 ${
          darkMode ? "opacity-100" : "opacity-100"
        }`}
      />
  
      {/* Content - Improved responsive classes */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-0 overflow-hidden shadow-2xl sm:rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side - Contact Info */}
              <div
                className={`p-6 sm:p-8 ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-700 to-gray-800"
                    : "bg-gradient-to-r from-pink-600 to-purple-600"
                } text-white sm:rounded-l-lg`}
              >
                <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight">
                  Have a Question? Contact Us
                </h1>
                <p className="mt-2 text-sm font-medium">
                  Fill out the form to get in touch with our team. We're here to help!
                </p>
  
                <div className="mt-4 space-y-4">
                  {/* WhatsApp Button */}
                  <div
                    className="flex items-center p-2 rounded-2xl transition-all duration-300 group cursor-pointer"
                    onClick={() => window.open("https://chat.whatsapp.com/INdHcEdh3ieGE5eHDg4vea", "_blank", "noopener,noreferrer")}
                  >
                    <div className="flex items-center w-full">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="100%"
                          height="100%"
                        >
                          <path
                            fill="#fff"
                            d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                          ></path>
                          <path
                            fill="#cfd8dc"
                            d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                          ></path>
                          <path
                            fill="#40c351"
                            d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                          ></path>
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-3 text-white text-xs sm:text-sm tracking-wide font-medium transition-all duration-300 group-hover:text-base group-hover:font-semibold">
                        Join Our WhatsApp Community
                      </div>
                    </div>
                  </div>
  
                  {/* Discord Button */}
                  <div
                    className="flex items-center p-2 rounded-2xl transition-all duration-300 group cursor-pointer"
                    onClick={() => window.open("https://discord.gg/THjTwd3r9m", "_blank", "noopener,noreferrer")}
                  >
                    <div className="flex items-center w-full">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="100%"
                          height="100%"
                        >
                          <path
                            fill="#5865F2"
                            d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4s1.567-4,3.5-4s3.5,1.791,3.5,4S19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4s1.567-4,3.5-4s3.5,1.791,3.5,4S32.433,30,30.5,30z"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-3 text-white text-xs sm:text-sm tracking-wide font-medium transition-all duration-300 group-hover:text-base group-hover:font-semibold">
                        Join Our Discord Community
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Right Side - Contact Form - SMALLER SIZE */}
              <form
                className={`p-4 sm:p-6 ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                } sm:rounded-r-lg`}
              >
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  {/* Full Name - Smaller size */}
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Full Name"
                      className={`w-full px-3 py-1.5 text-xs sm:text-sm border ${
                        darkMode
                          ? "border-gray-600 bg-gray-800"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300`}
                    />
                  </div>
  
                  {/* Email - Smaller size */}
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className={`w-full px-3 py-1.5 text-xs sm:text-sm border ${
                        darkMode
                          ? "border-gray-600 bg-gray-800"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300`}
                    />
                  </div>
  
                  {/* Mobile Number - Smaller size */}
                  <div>
                    <label htmlFor="tel" className="sr-only">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="tel"
                      placeholder="Mobile Number"
                      className={`w-full px-3 py-1.5 text-xs sm:text-sm border ${
                        darkMode
                          ? "border-gray-600 bg-gray-800"
                          : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300`}
                    />
                  </div>
  
                  {/* Submit Button - Smaller size */}
                  <button
                    type="submit"
                    className={`w-full ${
                      darkMode
                        ? "bg-pink-700 hover:bg-pink-800"
                        : "bg-pink-600 hover:bg-red-700"
                    } text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 transform hover:scale-105 text-xs sm:text-sm`}
                  >
                    Submit Your Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}