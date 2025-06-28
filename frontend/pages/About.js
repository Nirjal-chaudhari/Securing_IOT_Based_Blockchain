import React from 'react';
import Layout from '../components/Layout';
import { Github, Mail, Linkedin } from 'lucide-react';
import './about.css'; // Import the custom CSS

const About = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 animate-fade-in">
        {/* Header */}
        <div className="text-left md:text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Our Project</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Learn more about our mission to secure IoT data with blockchain technology
            and the team working to make it happen.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-slate-800 rounded-xl p-8 mb-12 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-white mb-6">
            We believe that the future of IoT data management lies in decentralization and 
            cryptographic security. Our mission is to create a platform that combines the 
            best of blockchain technology with the needs of IoT deployments, providing a 
            solution that is secure, scalable, and easy to use.
          </p>
          <p className="text-white">
            By leveraging the Ethereum blockchain and IPFS, we're building a system where 
            data integrity is guaranteed, privacy is respected, and trust is built into 
            the architecture. Our goal is to empower organizations to deploy IoT solutions 
            with confidence, knowing that their data is protected by the most advanced 
            cryptographic techniques available today.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-slate-600 my-12" />

        {/* Technology Stack */}
        <div className="bg-slate-800 rounded-xl p-8 mb-12 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Backend</h3>
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Ethereum Blockchain</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Smart Contracts (Solidity)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>IPFS Distributed Storage</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Node.js & Express</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>WebSockets for Real-time Updates</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">Frontend</h3>
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span>React with TypeScript</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span>Web3.js for Blockchain Interaction</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span>Responsive Design for All Devices</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span>Animation Libraries for Smooth UI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-600 my-12" />

        {/* Team Section */}
        <div className="bg-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 hover:shadow-xl transition duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">NC</span>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Nirjal Chaudhari</h3>
              <p className="text-white text-center mb-4">Blockchain Developer</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors icon-hover">
                  <Github size={20} />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors icon-hover">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors icon-hover">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 hover:shadow-xl transition duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SS</span>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Shahana Sayyed</h3>
              <p className="text-white text-center mb-4">IoT Specialist</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white hover:text-purple-400 transition-colors icon-hover">
                  <Github size={20} />
                </a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors icon-hover">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-purple-400 transition-colors icon-hover">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 hover:shadow-xl transition duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-500 to-red-500 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">DD</span>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">Dhrumill Dholakia</h3>
              <p className="text-white text-center mb-4">Frontend Developer</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white hover:text-amber-400 transition-colors icon-hover">
                  <Github size={20} />
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition-colors icon-hover">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition-colors icon-hover">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
