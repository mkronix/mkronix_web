import React from 'react';

const Footer = () => {
    return (
        <footer id='contact' className="bg-white text-black">
            <div className="max-w-screen-xl h-96 flex justify-center items-center flex-col mx-auto px-4 py-12 text-center">
                <div className="flex justify-center items-center space-x-2">
                    <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3636 0L24.0714 10.0865C24.8 14.3902 28.4834 17.7666 33.1783 18.4346L44.1818 20L33.1783 21.5654C28.4834 22.2334 24.8 25.6098 24.0714 29.9135L22.3636 40L20.6558 29.9135C19.9272 25.6098 16.2438 22.2334 11.5489 21.5654L0.54541 20L11.5489 18.4346C16.2438 17.7666 19.9272 14.3902 20.6558 10.0865L22.3636 0Z" fill="currentColor" />
                    </svg>
                    <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3636 0L24.0714 10.0865C24.8 14.3902 28.4834 17.7666 33.1783 18.4346L44.1818 20L33.1783 21.5654C28.4834 22.2334 24.8 25.6098 24.0714 29.9135L22.3636 40L20.6558 29.9135C19.9272 25.6098 16.2438 22.2334 11.5489 21.5654L0.54541 20L11.5489 18.4346C16.2438 17.7666 19.9272 14.3902 20.6558 10.0865L22.3636 0Z" fill="currentColor" />
                    </svg>
                    <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3636 0L24.0714 10.0865C24.8 14.3902 28.4834 17.7666 33.1783 18.4346L44.1818 20L33.1783 21.5654C28.4834 22.2334 24.8 25.6098 24.0714 29.9135L22.3636 40L20.6558 29.9135C19.9272 25.6098 16.2438 22.2334 11.5489 21.5654L0.54541 20L11.5489 18.4346C16.2438 17.7666 19.9272 14.3902 20.6558 10.0865L22.3636 0Z" fill="currentColor" />
                    </svg>

                </div>
                <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">LET'S DISCUSS YOUR IDEAS</h1>
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="bg-black text-off-white px-6 py-2 rounded-full font-medium hover:bg-gray-800">Connect Now</button>
                </div>
            </div>
            <div className="bg-black text-off-white py-6">
                <div className="max-w-screen-xl mx-auto px-4 md:text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Mkronix</h1>
                    <nav className="max-md:mt-4 text-xl md:text-2xl flex md:justify-center items-baseline max-md:flex-wrap gap-4 md:space-y-4 ">
                        <a to="/#home" className="">Home</a>
                        <a to="/#service" className="">Services</a>
                        <a to="/#project" className="">Project</a>
                        <a to="/#contact" className="">Contact Us</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
