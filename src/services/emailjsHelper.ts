import emailjs from "@emailjs/browser";
const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

export const sendEmail = async (formRef: any, callback: any = null, errCallback: any = null) => {
    emailjs
        .sendForm(serviceId, templateId, formRef, {
            publicKey: publicKey,
        })
        .then(
            () => {
                if (callback) callback();
                console.log("SUCCESS!");
            },
            (error) => {
                debugger
                alert(
                    "There was an error sending your message. Please try again later."
                );
                errCallback()
                console.log("FAILED...", error.message);
            }
        );
}