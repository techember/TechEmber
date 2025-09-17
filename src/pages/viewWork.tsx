import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Calendar, User, Code, Smartphone, Globe, Video, Palette, TrendingUp } from 'lucide-react';
import * as THREE from 'three';

// Import project images
import ecommerceImage from '../assets/project-ecommerce.jpg';
import bankingImage from '../assets/project-banking.jpg';
import brandingImage from '../assets/project-branding.jpg';
import corporateImage from '../assets/project-corporate.jpeg';
import videoImage from '../assets/project-video.jpeg';
import dashboardImage from '../assets/project-dashboard.jpeg';

const viewWork = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: ecommerceImage,
      date: '2025',
      client: 'RetailCorp',
      liveUrl: '#',
      githubUrl: '#',
      icon: Globe
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'app',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: bankingImage,
      date: '2025',
      client: 'FinanceBank',
      liveUrl: '#',
      githubUrl: '#',
      icon: Smartphone
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'design',
      description: 'Complete brand identity and design system for a tech startup.',
      image: brandingImage,
      date: '2025',
      client: 'StartupTech',
      liveUrl: '#',
      githubUrl: '#',
      icon: Palette
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'web',
      description: 'Professional corporate website with advanced animations and CMS integration.',
      image: corporateImage,
      date: '2025',
      client: 'CorporateInc',
      liveUrl: '#',
      githubUrl: '#',
      icon: Globe
    },
    {
      id: 5,
      title: 'Marketing Campaign Video',
      category: 'video',
      description: 'High-impact marketing video with motion graphics and professional editing.',
      image: videoImage,
      date: '2025',
      client: 'MarketingPro',
      liveUrl: '#',
      githubUrl: '#',
      icon: Video
    },
    {
      id: 6,
      title: 'Digital Marketing Dashboard',
      category: 'web',
      description: 'Analytics dashboard for digital marketing campaigns with real-time data visualization.',
      image: dashboardImage,
      date: '2025',
      client: 'DigitalAgency',
      liveUrl: '#',
      githubUrl: '#',
      icon: TrendingUp
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'app', label: 'Mobile Apps', icon: Smartphone },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'video', label: 'Video', icon: Video },
  ];

  // Three.js setup
  useEffect(() => {
    if (!threeContainerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    threeContainerRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.7, 1.4, 32),
      new THREE.OctahedronGeometry(0.8),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff6b35, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xff4444, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }),
    ];

    const meshes: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = (Math.random() - 0.5) * 20;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 10;
    sceneRef.current = { scene, camera, renderer, meshes };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.01 * (index % 3 === 0 ? 1 : -1);
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (threeContainerRef.current && renderer.domElement) {
        threeContainerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Custom styles for gradient animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient-x {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
      .animate-gradient-x {
        animation: gradient-x 3s ease infinite;
      }
      .bg-gradient-brand {
        background: linear-gradient(135deg, #ff6b35, #ff4444);
      }
      .text-gradient-brand {
        background: linear-gradient(135deg, #ff6b35, #ff4444);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .shadow-brand {
        box-shadow: 0 25px 50px -12px rgba(255, 107, 53, 0.4);
      }
      .shadow-card {
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Three.js Background */}
      <div 
        ref={threeContainerRef} 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            View Our <span className="text-gradient-brand">Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of innovative projects that showcase our expertise in web development, mobile apps, design, and digital marketing.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="relative z-10 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gray-900 text-white shadow-brand scale-105'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const isVisible = visibleProjects.has(project.id);
              const isHovered = hoveredProject === project.id;

              return (
                <div
                  key={project.id}
                  data-project-id={project.id}
                  className={`group transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden h-[500px] group-hover:scale-105 transition-all duration-500 shadow-card">
                    {/* Animated Border Gradient */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_200%] animate-gradient-x p-0.5">
                        <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative z-10 h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Category Icon */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="relative z-10 p-6 h-[calc(100%-12rem)] flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{project.client}</span>
                        <Calendar className="w-4 h-4 text-gray-400 ml-auto" />
                        <span className="text-sm text-gray-400">{project.date}</span>
                      </div>

                      <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-orange-400' : 'text-white'}`}>
                        {project.title}
                      </h3>

                      <p className="text-gray-300 mb-4 flex-1">
                        {project.description}
                      </p>

                      

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-gradient-brand">Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate and bring your vision to life with cutting-edge technology and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-brand text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-brand">
              Start Your Project
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewWork;