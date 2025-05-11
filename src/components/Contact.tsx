import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, MapPin, Mail, CheckCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { selectContactData } from "../store/slices/staticDataSlice";
import { sendEmail } from "../services/emailjsHelper";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData]: any = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    sendEmail(
      formRef.current,
      () => {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      () => {
        setFormStatus("error");
      }
    );
    // Simulate form submission
    // setTimeout(() => {
    //   setFormStatus("success");
    //   setFormData({ name: "", email: "", subject: "", message: "" });

    //   setTimeout(() => setFormStatus("idle"), 5000);
    // }, 1500);
  };
  const contactData: any = useSelector(selectContactData);
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-title">{contactData?.title}</h2>
            <p className="text-gray-600 dark:text-slate-light mt-6">
              {contactData?.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10">
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {contactData?.leftHeader}
              </h3>

              <p className="text-gray-600 dark:text-slate-light mb-6">
                {contactData?.info.description}{" "}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-slate-light">
                      {contactData?.info.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Email
                    </h4>
                    <a
                      href={`mailto:${contactData?.info.email}`}
                      className="text-gray-600 dark:text-slate-light hover:text-teal-500 dark:hover:text-teal-default transition-colors"
                    >
                      {contactData?.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-500 dark:text-teal-default flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Phone
                    </h4>
                    <a
                      href={`tel:${contactData?.info.email}`}
                      className="text-gray-600 dark:text-slate-light hover:text-teal-500 dark:hover:text-teal-default transition-colors"
                    >
                      {contactData?.info.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-3">
              <div className="card p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {contactData?.rightHeader}
                </h3>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <CheckCircle size={60} className="text-green-500 mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600 dark:text-slate-light">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-slate-light mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-slate-light mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-slate-light mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-slate-light mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-navy-light focus:border-teal-500 dark:focus:border-teal-default focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-default/20 bg-white dark:bg-navy-default text-gray-800 dark:text-gray resize-none"
                        placeholder="Your Message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="btn-primary w-full justify-center"
                    >
                      {formStatus === "submitting" ? (
                        <span className="inline-flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="inline-flex items-center">
                          Send Message <Send size={16} className="ml-2" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
