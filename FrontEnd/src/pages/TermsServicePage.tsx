import { FileText, Scale, AlertTriangle, CreditCard, Ban, CheckCircle, Users, Gavel } from 'lucide-react';

const TermsServicePage = () => {
  const sections = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using ThumbLify, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our service."
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 13 years old to use ThumbLify. By using our service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into this agreement."
        },
        {
          subtitle: "Changes to Terms",
          text: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform. Your continued use of ThumbLify after such modifications constitutes acceptance of the updated terms."
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Account Registration and Security",
      content: [
        {
          subtitle: "Account Creation",
          text: "To use ThumbLify, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials."
        },
        {
          subtitle: "Account Responsibility",
          text: "You are solely responsible for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other security breach."
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to suspend or terminate your account at any time for violation of these terms, fraudulent activity, or any other reason we deem necessary to protect our service and users."
        }
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Credits and Payment",
      content: [
        {
          subtitle: "Free Credits",
          text: "New users receive 10 free credits upon registration. Each thumbnail generation consumes 1 credit. Free credits are non-transferable and cannot be exchanged for cash."
        },
        {
          subtitle: "Credit Purchases",
          text: "Additional credits can be purchased through our payment system. All purchases are final and non-refundable unless required by law or in case of a technical error on our part."
        },
        {
          subtitle: "Pricing Changes",
          text: "We reserve the right to modify our pricing at any time. Price changes will not affect credits already purchased but will apply to future purchases."
        },
        {
          subtitle: "Payment Processing",
          text: "Payments are processed securely through third-party providers (Stripe/Razorpay). By making a purchase, you agree to their terms of service and privacy policies."
        }
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Service Usage and Restrictions",
      content: [
        {
          subtitle: "Acceptable Use",
          text: "You may use ThumbLify to generate thumbnails for lawful purposes only. You agree not to use the service to create content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable."
        },
        {
          subtitle: "Prohibited Content",
          text: "You may not generate thumbnails containing: hate speech, violence, adult content, copyrighted material without permission, misleading information, or content that violates any third-party rights."
        },
        {
          subtitle: "Service Abuse",
          text: "You may not attempt to: reverse engineer our service, use automated systems to access the service, create multiple accounts to abuse free credits, or engage in any activity that disrupts or interferes with our service."
        },
        {
          subtitle: "Rate Limits",
          text: "We may impose rate limits on thumbnail generation to ensure fair use and service stability. Excessive use may result in temporary account suspension."
        }
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Intellectual Property Rights",
      content: [
        {
          subtitle: "Your Content",
          text: "You retain all ownership rights to the prompts and inputs you provide. However, by using our service, you grant us a license to process your inputs for the purpose of generating thumbnails."
        },
        {
          subtitle: "Generated Thumbnails",
          text: "You own the thumbnails generated through our service and can use them for commercial or personal purposes. However, thumbnails are generated using Google's Gemini AI, and their terms of service may also apply."
        },
        {
          subtitle: "Our Platform",
          text: "ThumbLify, including all software, code, design, logos, and content (excluding user-generated content), is owned by us and protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "License to Use",
          text: "We grant you a limited, non-exclusive, non-transferable license to access and use ThumbLify for its intended purpose. This license does not include any right to resell or redistribute our service."
        }
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Disclaimers and Limitations",
      content: [
        {
          subtitle: "Service Availability",
          text: "We strive to maintain 99% uptime but do not guarantee uninterrupted access. The service is provided 'as is' without warranties of any kind, either express or implied."
        },
        {
          subtitle: "AI-Generated Content",
          text: "Thumbnails are generated using AI technology and may occasionally produce unexpected or imperfect results. We do not guarantee the quality, accuracy, or suitability of generated thumbnails for any particular purpose."
        },
        {
          subtitle: "Third-Party Services",
          text: "We rely on third-party services (Google Gemini AI, payment processors) and are not responsible for their availability, performance, or any issues arising from their use."
        },
        {
          subtitle: "Limitation of Liability",
          text: "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly."
        }
      ]
    },
    {
      icon: <Ban className="w-6 h-6" />,
      title: "Termination and Suspension",
      content: [
        {
          subtitle: "Termination by User",
          text: "You may terminate your account at any time through your account settings or by contacting us. Upon termination, unused credits will be forfeited unless otherwise required by law."
        },
        {
          subtitle: "Termination by Us",
          text: "We may suspend or terminate your access immediately, without prior notice, for any violation of these terms, illegal activity, or behavior that harms other users or our service."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use the service will immediately cease. We may delete your account data after a reasonable period, as outlined in our Privacy Policy."
        }
      ]
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Dispute Resolution",
      content: [
        {
          subtitle: "Governing Law",
          text: "These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
        },
        {
          subtitle: "Dispute Resolution Process",
          text: "In the event of any dispute, you agree to first contact us to attempt to resolve the issue informally. If we cannot resolve the dispute within 30 days, either party may pursue formal legal action."
        },
        {
          subtitle: "Arbitration",
          text: "Any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act, 1996."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-center text-lg text-indigo-100 max-w-2xl mx-auto">
            Please read these terms carefully before using PromptToThumb
          </p>
          <p className="text-center text-sm text-indigo-200 mt-4">
            Last Updated: February 22, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-indigo-600">PromptToThumb</span>. These Terms of Service ("Terms") govern your access to and use of our AI-powered thumbnail generation platform. Please read these terms carefully.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By creating an account or using our service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use PromptToThumb.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-lg mr-4">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
            </div>
            
            <div className="space-y-6">
              {section.content.map((item, idx) => (
                <div key={idx} className="border-l-4 border-indigo-300 pl-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.subtitle}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Indemnification */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-lg mr-4">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Indemnification</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            You agree to indemnify, defend, and hold harmless ThumbLify, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the service, your violation of these Terms, or your violation of any third-party rights.
          </p>
        </div>

        {/* Severability */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-lg mr-4">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Severability and Waiver</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Severability</h3>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Waiver</h3>
              <p className="text-gray-600 leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. Any waiver of any provision of these Terms will be effective only if in writing and signed by us.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Questions About These Terms?</h2>
          </div>
          <p className="text-indigo-100 leading-relaxed mb-4">
            If you have any questions, concerns, or disputes regarding these Terms of Service, please contact us:
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-2">
            <p className="text-white">
              <span className="font-semibold">Email:</span> jatinrsaini@gmail.com
            </p>
            <p className="text-white">
              <span className="font-semibold">Support:</span> jatinrsaini@gmail.com
            </p>
            <p className="text-white">
              <span className="font-semibold">Response Time:</span> Within 48 hours
            </p>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="mt-8 bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2" />
            Key Points Summary
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>You must be 13+ years old to use ThumbLify</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>You receive 10 free credits; additional credits can be purchased</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>You own the thumbnails you generate and can use them commercially</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Do not use the service for illegal, harmful, or abusive content</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>We may terminate accounts that violate these terms</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Service is provided "as is" with AI-generated content limitations</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Disputes are governed by Indian law and arbitration</span>
            </li>
          </ul>
        </div>

        {/* Acknowledgment */}
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-yellow-900 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Important Notice
          </h3>
          <p className="text-gray-700 leading-relaxed">
            These terms constitute a legally binding agreement. By using PromptToThumb, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. We recommend printing or saving a copy of these terms for your records.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsServicePage;