import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Invalid email address";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", email: "", projectType: "Website Design", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validate({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field as keyof FormErrors] }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length > 0) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    toast({
      title: "Message sent! 🎉",
      description: `Thanks ${form.name}, we'll get back to you within 24 hours.`,
    });
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-transparent border-b-2 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/50 ${
      errors[field] && touched[field as string]
        ? "border-destructive focus:border-destructive"
        : "border-border focus:border-primary"
    }`;

  return (
    <section id="contact" className="section-padding">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's Build
              <br />
              <span className="text-gradient">Something Great</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Ready to transform your digital presence? We'd love to hear about your project and explore how we can help.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "hello@nexus.agency" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "San Francisco, CA" },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <item.icon size={18} className="text-primary" />
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex items-center justify-center text-center p-8 rounded-2xl bg-card border border-border"
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm mb-6">We'll get back to you within 24 hours.</p>
                    <Button
                      variant="heroOutline"
                      size="lg"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", projectType: "Website Design", message: "" });
                        setTouched({});
                        setErrors({});
                      }}
                    >
                      Send Another
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={inputClass("name")}
                        placeholder="Your name"
                      />
                      {errors.name && touched.name && (
                        <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={inputClass("email")}
                        placeholder="you@company.com"
                      />
                      {errors.email && touched.email && (
                        <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      value={form.projectType}
                      onChange={(e) => handleChange("projectType", e.target.value)}
                      className="w-full bg-transparent border-b-2 border-border py-3 text-sm outline-none focus:border-primary transition-colors text-foreground"
                    >
                      <option>Website Design</option>
                      <option>SEO & Content</option>
                      <option>Brand Identity</option>
                      <option>E-Commerce</option>
                      <option>Performance Optimization</option>
                      <option>Consulting & Strategy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      rows={4}
                      className={`${inputClass("message")} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && touched.message && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
