"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "Web Application",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDemoSubmission, setIsDemoSubmission] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");
    setIsDemoSubmission(false);

    try {
      const publicWeb3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      
      let response;
      let data;

      // If we have a public Web3Forms key, submit directly from browser to avoid server-side Cloudflare blocks
      if (publicWeb3FormsKey) {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: publicWeb3FormsKey,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            subject: `New Inquiry: ${formData.projectType} from ${formData.firstName}`,
            message: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`,
          }),
        });

        data = await response.json();
      } else {
        // Fallback to local Next.js API route
        response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        data = await response.json();
      }

      if (response.ok && (data.success || data.isDemo)) {
        setIsDemoSubmission(!!data.isDemo);
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          projectType: "Web Application",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || data.error || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="label-sm text-accent mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent"></span> Let's Talk
            </p>
            <h1 className="headline-xl text-primary mb-8">
              Start your next digital project with us.
            </h1>
            <p className="text-lg text-text-muted font-body leading-relaxed mb-16 max-w-md">
              Whether you need a massive enterprise web app or a premium corporate website, our team is ready to deliver excellence.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary text-surface flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary mb-1 text-xl">Email Us</h4>
                  <p className="text-text-muted font-body">madhurmane81@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary text-surface flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary mb-1 text-xl">Call Us</h4>
                  <p className="text-text-muted font-body">+91 8788038106</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-dim p-8 md:p-12 border border-outline shadow-xl relative min-h-[500px] flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center my-auto py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <CheckCircle className="w-20 h-20 text-accent mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                    Inquiry Sent!
                  </h3>
                  <p className="text-text-muted font-body max-w-sm mb-6">
                    Thank you for reaching out. We have received your message and our team will get back to you shortly.
                  </p>

                  {isDemoSubmission && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-accent/10 border border-accent/30 text-primary p-4 mb-8 text-left max-w-md w-full"
                    >
                      <h5 className="font-heading font-bold text-accent mb-1 text-sm">💡 Developer Demo Mode Active</h5>
                      <p className="text-xs text-text-muted leading-relaxed font-body">
                        The submission was logged to the server console! To receive real emails inside your actual mailbox (<strong>madhurmane81@gmail.com</strong>), please configure your <strong>WEB3FORMS_ACCESS_KEY</strong> or <strong>RESEND_API_KEY</strong> inside your <strong>.env.local</strong> file.
                      </p>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-primary text-surface font-bold px-8 py-3 hover:bg-accent hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-heading font-bold text-primary mb-8">Send a Message</h3>
                  
                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 mb-6 flex items-start gap-3"
                    >
                      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-sm font-body">{errorMessage}</span>
                    </motion.div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={status === "submitting"}
                          className={`w-full bg-surface border ${
                            errors.firstName ? "border-red-500" : "border-outline"
                          } px-4 py-3 focus:outline-none focus:border-accent transition-colors text-primary font-body`}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1 font-body">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={status === "submitting"}
                          className={`w-full bg-surface border ${
                            errors.lastName ? "border-red-500" : "border-outline"
                          } px-4 py-3 focus:outline-none focus:border-accent transition-colors text-primary font-body`}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1 font-body">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className={`w-full bg-surface border ${
                          errors.email ? "border-red-500" : "border-outline"
                        } px-4 py-3 focus:outline-none focus:border-accent transition-colors text-primary font-body`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Project Type</label>
                      <div className="relative">
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          disabled={status === "submitting"}
                          className="w-full bg-surface border border-outline px-4 py-3 focus:outline-none focus:border-accent transition-colors text-primary font-body appearance-none"
                        >
                          <option value="Web Application">Web Application</option>
                          <option value="Corporate Website">Corporate Website</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Message</label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        className={`w-full bg-surface border ${
                          errors.message ? "border-red-500" : "border-outline"
                        } px-4 py-3 focus:outline-none focus:border-accent transition-colors text-primary font-body resize-none`}
                        placeholder="Tell us about your project..."
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1 font-body">{errors.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-primary text-surface font-bold py-4 hover:bg-accent hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Inquiry"
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

