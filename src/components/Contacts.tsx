import React, { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

interface IFormData {
    name: string;
    email: string;
    message: string;
}

const Contacts: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<IFormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .send(
                'service_lcv0hj9',
                'template_2eyzg54',
                {
                    from_name: form.name,
                    to_name: 'Svyat',
                    from_email: form.email,
                    to_email: 'svyatoslavtsykaliuk@gmail.com',
                    message: form.message,
                },
                'B-sysgSttekrBJqHU',
            )
            .then(
                () => {
                    setIsLoading(false);
                    alert('Thanks for your message, I will contact you)');
                    setForm({ name: '', email: '', message: '' });
                },
                (error) => {
                    setIsLoading(false);
                    console.log(error);
                    alert('Something went wrong!');
                },
            );
    };
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            //@ts-ignore
                            onChange={handleChange}
                            placeholder="What is your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your E-mail</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            //@ts-ignore
                            onChange={handleChange}
                            placeholder="What is your e-mail?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            type="text"
                            name="message"
                            value={form.message}
                            //@ts-ignore
                            onChange={handleChange}
                            placeholder="What is your message?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="mx-auto px-8 py-2 bg-tertiary outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-slate-700 transition-all ">
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                variants={slideIn('right', 'tween', 0.2, 1)}>
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contacts, 'contact');
