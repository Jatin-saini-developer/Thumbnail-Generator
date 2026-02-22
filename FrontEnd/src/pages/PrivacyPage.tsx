import { Shield, Lock, Eye, Database, Mail, AlertCircle } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account, we collect your name, email address, and password (encrypted). This information is necessary to provide you with our services and manage your account."
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about your thumbnail generations, including prompts, selected styles, color palettes, aspect ratios, and generation timestamps. This helps us improve our service and provide you with a generation history."
        },
        {
          subtitle: "Payment Information",
          text: "When you purchase credits or subscribe, payment information is processed securely through our payment provider (Stripe/Razorpay). We do not store your complete credit card details on our servers."
        }
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to generate thumbnails, manage your account, track your credits, and provide customer support."
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze usage patterns to improve our AI models, optimize prompt engineering, and enhance user experience."
        },
        {
          subtitle: "Communication",
          text: "We may send you service-related emails, such as account verification, credit notifications, and important updates. You can opt out of promotional emails at any time."
        }
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures including password encryption (bcrypt), JWT authentication with httpOnly cookies, and secure HTTPS connections. Your data is stored in encrypted MongoDB databases."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your account information and generated thumbnails as long as your account is active. You can request deletion of your data at any time by contacting us."
        }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Third-Party Services",
      content: [
        {
          subtitle: "Google Gemini AI",
          text: "Your thumbnail generation prompts are sent to Google's Gemini API for image generation. Please review Google's privacy policy for information on how they handle data."
        },
        {
          subtitle: "Payment Processors",
          text: "Payment transactions are processed by third-party providers (Stripe/Razorpay) who have their own privacy policies and security measures."
        }
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        {
          subtitle: "Access & Control",
          text: "You have the right to access, update, or delete your personal information. You can manage most of this through your account settings."
        },
        {
          subtitle: "Data Portability",
          text: "You can request a copy of your data in a machine-readable format. Contact us to exercise this right."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications while still receiving essential service emails."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen mt-3.5 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-center text-lg text-purple-100 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your data.
          </p>
          <p className="text-center text-sm text-purple-200 mt-4">
            Last Updated: February 22, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-purple-600">PromptToThumb</span>. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, store, and protect your information when you use our AI-powered thumbnail generation service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using PromptToThumb, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg mr-4">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
            </div>
            
            <div className="space-y-6">
              {section.content.map((item, idx) => (
                <div key={idx} className="border-l-4 border-purple-300 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.subtitle}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Cookies Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg mr-4">
              <Database className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Cookies and Tracking</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use httpOnly cookies for authentication purposes. These cookies are essential for the service to function and cannot be disabled. We do not use third-party tracking cookies or analytics tools that compromise your privacy.
          </p>
        </div>

        {/* Children's Privacy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg mr-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Children's Privacy</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            ThumbLify is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete it.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg mr-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Changes to This Policy</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-center mb-6">
            <Mail className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <p className="text-purple-100 leading-relaxed mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please don't hesitate to contact us:
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-2">
            <p className="text-white">
              <span className="font-semibold">Email:</span> jatinrsaini@gmail.com
            </p>
            <p className="text-white">
              <span className="font-semibold">Response Time:</span> Within 48 hours
            </p>
          </div>
        </div>

        {/* Data Protection Summary */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <Shield className="w-6 h-6 mr-2" />
            Your Data Protection Summary
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>We never sell your personal data to third parties</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>All passwords are encrypted using industry-standard bcrypt</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>You can delete your account and data at any time</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>We use secure HTTPS connections for all data transmission</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Payment information is processed by certified third-party providers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;