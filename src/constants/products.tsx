import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import WhatsappImage from "public/images/products/whatsapp-auto-reply.png";
import SchedulerImage from "public/images/products/scheduler-1.png";
import SchedulerImage2 from "public/images/products/scheduler-2.png";
import SchedulerImage3 from "public/images/products/scheduler-3.png";

import MeduniverseImage1 from "public/images/products/meduniverse-1.jpg";
import MeduniverseImage2 from "public/images/products/meduniverse-2.jpg";
import MeduniverseImage3 from "public/images/products/meduniverse-3.jpg";
import MeduniverseImage4 from "public/images/products/meduniverse-4.jpg";
import MeduniverseHome from "public/images/products/meduniverse-home.png";

import PhysioPlusTech1 from "public/images/products/physioplustech-1.png";
import PhysioPlusTech2 from "public/images/products/physioplustech-2.png";
import AIPhysio1 from "public/images/products/ai-physio-1.webp";


export const products = [
  {
    href: "https://ai.physio",
    title: "🚀 AI.Physio (formerly Physio Plus Tech)", 
    description: "Enterprise-Scale Healthcare Platform | 1M+ Monthly Transactions",
    thumbnail: PhysioPlusTech1,
    images: [PhysioPlusTech1, PhysioPlusTech2, AIPhysio1],
    stack: ["Node.js", "Java", "Python", "React Native", "Kafka", "Redis", "MongoDB", "Kubernetes", "AWS","PHP"],
    slug: "ai-physio",
    content: (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
        <p className="text-lg leading-relaxed mb-6">
          The distributed healthcare platform processes <span className="font-bold text-blue-800">1M+ monthly transactions</span>. The architecture leverages <span className="font-bold text-blue-800">Node.js microservices</span> with <span className="font-bold text-blue-800">Java backend services</span> for high-performance data processing, alongside <span className="font-bold text-blue-800">Python</span> services for ML operations and data analytics.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The innovative <span className="font-bold text-blue-800">AI-powered physiotherapy mobile app</span> (<a href="https://play.google.com/store/apps/details?id=com.ai.physio.app" className="text-blue-600 underline">available on Google Play</a>) serves as a virtual assistant, providing real-time guidance and audio feedback to patients during exercises, ensuring correct form and technique. The app utilizes <span className="font-bold text-blue-800">WebRTC</span> for seamless real-time communication between patients and physiotherapists. The web-based clinic management software (<a href="https://physioplustech.in" target="_blank" className="text-blue-600 underline">physioplustech.in</a>) provides comprehensive practice management tools for healthcare providers.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The sophisticated <span className="font-bold text-blue-800">event-driven architecture</span> uses <span className="font-bold text-blue-800">Apache Kafka</span> for real-time data streaming and processing. Performance optimization through <span className="font-bold text-blue-800">Redis</span> enables distributed caching, achieving <span className="font-bold text-blue-800">sub-100ms latency</span> across services. The scalable data models in <span className="font-bold text-blue-800">MongoDB</span> provide flexible healthcare data storage.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The deployment infrastructure utilizes <span className="font-bold text-blue-800">Kubernetes</span> on <span className="font-bold text-blue-800">AWS EKS</span>, implementing auto-scaling and self-healing capabilities. Robust CI/CD pipelines with <span className="font-bold text-blue-800">Jenkins</span> and <span className="font-bold text-blue-800">ArgoCD</span> enable rapid deployment cycles. Comprehensive monitoring is implemented using <span className="font-bold text-blue-800">Prometheus</span> and <span className="font-bold text-blue-800">Grafana</span>.
        </p>
        <p className="text-lg leading-relaxed">
          The system design and implementation achieved <span className="font-bold text-blue-800">40% cost reduction</span> through efficient resource utilization and strategic caching, while maintaining <span className="font-bold text-blue-800">99.99% uptime</span>.
        </p>
      </div>
    ),
  },
  {
    href: "https://meduniverse.in",
    title: "🎓 MedUniverse",
    description: "Next-Gen EdTech Platform | 100+ Students | AI-Powered Learning & Assessment",
    thumbnail: MeduniverseHome,
    images: [MeduniverseHome, MeduniverseImage1],
    stack: ["Node.js", "Python", "React", "React Native", "Redis", "AWS", "RabbitMQ", "Jitsi", "OpenAI", "Text-to-Speech"],
    slug: "meduniverse",
    content: (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
        <p className="text-lg leading-relaxed mb-6">
          I <span className="font-bold text-purple-800">led the development of a full-stack educational platform</span>, managing a junior developer while architecting and implementing core features. Using <span className="font-bold text-purple-800">Node.js</span> and <span className="font-bold text-purple-800">Express.js</span> for the backend API layer, we implemented real-time features with <span className="font-bold text-purple-800">WebSocket</span> technology and <span className="font-bold text-purple-800">RabbitMQ</span> for message queuing.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The platform features <span className="font-bold text-purple-800">Jitsi</span> integration for video conferencing, optimized to support <span className="font-bold text-purple-800">100+ concurrent users</span> with HD quality. I mentored team members on best practices while implementing key infrastructure components.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The platform includes an <span className="font-bold text-purple-800">AI-powered assessment system</span> using <span className="font-bold text-purple-800">Node.js</span> and <span className="font-bold text-purple-800">OpenAI&apos;s GPT models</span> for automated grading. We utilized <span className="font-bold text-purple-800">Redis</span> for caching and real-time analytics, reducing database load by <span className="font-bold text-purple-800">70%</span>.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The deployment infrastructure on <span className="font-bold text-purple-800">AWS EC2 instances</span> includes <span className="font-bold text-purple-800">Docker</span> containerization and comprehensive monitoring using <span className="font-bold text-purple-800">CloudWatch</span> and <span className="font-bold text-purple-800">ELK stack</span>. The system maintains <span className="font-bold text-purple-800">99.99% uptime</span> through robust architecture and automated failover mechanisms.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The platform features an advanced <span className="font-bold text-purple-800">AI question generation system</span> using <span className="font-bold text-purple-800">OpenAI&apos;s GPT models</span>, generating <span className="font-bold text-purple-800">1000+ unique questions daily</span> across multiple formats with <span className="font-bold text-purple-800">95% accuracy</span> and appropriate difficulty levels.
        </p>
        <p className="text-lg leading-relaxed">
          The sophisticated <span className="font-bold text-purple-800">audio content generation system</span> leverages advanced <span className="font-bold text-purple-800">text-to-speech APIs</span> for creating high-quality listening modules. Supporting multiple accents and languages, the system uses <span className="font-bold text-purple-800">adaptive streaming</span> and efficient caching, reducing audio generation costs by <span className="font-bold text-purple-800">60%</span>.
        </p>
      </div>
    ),
  },
  {
    href: "https://cal.ai.physio",
    title: "📆 Advanced Scheduling Engine",
    description: "Enterprise-grade Scheduling System | High-Performance Calendar Engine | Real-time Sync",
    thumbnail: SchedulerImage,
    images: [SchedulerImage, SchedulerImage2, SchedulerImage3],
    stack: ["Node.js", "TypeScript", "MySQL", "OAuth", "Google Calendar", "Stripe", "Twilio", "Redis", "WebSockets"],
    slug: "physio-appointment",
    content: (
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
        <p className="text-lg leading-relaxed mb-6">
          Built with <span className="font-bold text-teal-800">Node.js</span> and <span className="font-bold text-teal-800">TypeScript</span>, this enterprise-grade scheduling engine mirrors Calendly&apos;s functionality while adding powerful customizations. The system features a sophisticated <span className="font-bold text-teal-800">event-sourcing architecture</span> for robust conflict resolution, leveraging advanced <span className="font-bold text-teal-800">caching strategies</span> and <span className="font-bold text-teal-800">optimized data structures</span> for lightning-fast performance.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Core features include seamless <span className="font-bold text-teal-800">real-time bi-directional sync</span> with <span className="font-bold text-teal-800">Google Calendar API</span>, instant updates through <span className="font-bold text-teal-800">WebSocket</span> integration, and intelligent <span className="font-bold text-teal-800">Redis-based caching</span>. The enterprise-level security implements <span className="font-bold text-teal-800">OAuth 2.0</span> with JWT tokens and refresh token rotation, ensuring maximum data protection.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The platform revolutionizes appointment booking with an advanced <span className="font-bold text-teal-800">Twilio and VAPI-powered calling system</span>, handling incoming appointment requests through MCP servers with automated routing and intelligent call queuing. The <span className="font-bold text-teal-800">Redis-backed scheduling engine</span> manages high-volume concurrent requests while maintaining exceptional performance.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Additional enterprise features include <span className="font-bold text-teal-800">Stripe payment processing</span> with real-time webhook integration, customizable booking rules, automated reminders, and group event scheduling. The robust architecture ensures consistent high availability and rapid response times, making it a complete solution for enterprise scheduling needs.
        </p>
        <p className="text-lg leading-relaxed">
          Each registered user receives their own personalized subdomain (e.g., <span className="font-bold text-teal-800">username.ai.physio</span>) for a customized booking experience. Check out a demo at <a href="https://bala.ai.physio" target="_blank" rel="noopener noreferrer" className="text-teal-800 hover:underline">bala.ai.physio</a> to see the platform in action.
        </p>
      </div>
    ),
  },
  {
    href: "#",
    title: "🤖 AI-Powered Business Assistant",
    description: "Intelligent WhatsApp Automation | 90% Response Accuracy | Enterprise-grade Security",
    thumbnail: WhatsappImage,
    stack: ["Node.js", "TypeScript", "React Native", "WhatsApp Cloud API", "MySQL", "OpenAI", "Socket.io"],
    slug: "whatsapp-platform",
    content: (
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100">
        <p className="text-lg leading-relaxed mb-6">
          I <span className="font-bold text-emerald-800">single-handedly built an AI-powered messaging platform</span> using <span className="font-bold text-emerald-800">Node.js</span> and <span className="font-bold text-emerald-800">TypeScript</span>. I integrated <span className="font-bold text-emerald-800">WhatsApp Cloud API</span> for message handling and implemented real-time updates using <span className="font-bold text-emerald-800">Socket.io</span>.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I developed a sophisticated AI response system using <span className="font-bold text-emerald-800">OpenAI&apos;s GPT models</span>, implementing custom training pipelines and context management. I created efficient data storage solutions with <span className="font-bold text-emerald-800">MySQL</span> and implemented caching strategies for faster response times.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Through my system architecture and implementation, I achieved <span className="font-bold text-emerald-800">90% reduction</span> in manual responses through intelligent automation and context-aware processing.
        </p>
        <p className="text-sm text-emerald-600 italic">
          Note: Internal enterprise tool - Not publicly accessible
        </p>
      </div>
    ),
  },
];
