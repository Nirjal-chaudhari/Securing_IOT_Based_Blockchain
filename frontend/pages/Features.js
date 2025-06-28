import React from 'react';
import Layout from '../components/Layout';
import { Shield, Database, Clock, Server, Lock, Globe } from 'lucide-react';

const Features = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Platform Features</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our platform combines blockchain technology with IoT data management 
            to create a secure, transparent, and reliable solution.
          </p>
        </div>
        
        {/* Main Feature */}
        <div className="bg-gradient-to-r from-blue-900/50 to-slate-900 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI2MmMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTEwaDJ2MTBoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Blockchain-Backed Security</h2>
              <p className="text-gray-300 mb-6">
                Every piece of IoT data collected by our platform is cryptographically secured on the 
                Ethereum blockchain. This creates an immutable record that cannot be altered or tampered 
                with, providing unprecedented levels of data integrity and trust. Our solution uses smart 
                contracts to automate verification and ensure compliance with your security protocols.
              </p>
              <a 
                href="/about" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
              >
                Learn more about our security approach
                <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="bg-blue-600/20 p-3 rounded-full w-fit mb-4">
              <Database className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Decentralized Storage</h3>
            <p className="text-gray-400">
              All data is stored on IPFS (InterPlanetary File System), ensuring that your information 
              is distributed across a global network rather than residing on centralized servers. 
              This enhances availability and censorship resistance.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="bg-emerald-600/20 p-3 rounded-full w-fit mb-4">
              <Clock className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-400">
              Monitor your IoT devices in real-time with our responsive dashboard. Set up alerts 
              and notifications for critical events, and track historical data with powerful 
              analytics tools.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
            <div className="bg-amber-600/20 p-3 rounded-full w-fit mb-4">
              <Server className="text-amber-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
            <p className="text-gray-400">
              Our platform provides simple APIs and SDKs that make it easy to integrate with your 
              existing IoT infrastructure. Support for common protocols and devices ensures a 
              smooth transition.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="bg-purple-600/20 p-3 rounded-full w-fit mb-4">
              <Lock className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">End-to-End Encryption</h3>
            <p className="text-gray-400">
              All data transmitted through our platform is protected with industry-standard 
              encryption, ensuring that sensitive information remains private and secure from 
              end to end.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10">
            <div className="bg-rose-600/20 p-3 rounded-full w-fit mb-4">
              <svg className="w-6 h-6 text-rose-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Audit Trails</h3>
            <p className="text-gray-400">
              Every action and data point is logged with cryptographic proof, creating immutable 
              audit trails. This makes it easy to verify the history of your data and comply with 
              regulatory requirements.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="bg-cyan-600/20 p-3 rounded-full w-fit mb-4">
              <Globe className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Scalability</h3>
            <p className="text-gray-400">
              Our infrastructure is designed to scale seamlessly, from a handful of devices to 
              thousands or millions. Deploy globally with consistent performance and reliability.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
