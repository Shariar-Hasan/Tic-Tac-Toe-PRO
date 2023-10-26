
const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-back text-site p-8">
            <div className="max-w-lg text-center">
                <h2 className="text-4xl font-bold mb-4">About Us</h2>
                <p className="text-lg mb-6">
                    Welcome to our Tic Tac Toe application! This application was created to provide a fun and interactive gaming experience for players of all ages.
                </p>
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-lg mb-6">
                    Our mission is to create simple and enjoyable games that bring people together, foster friendly competition, and create memorable moments.
                </p>
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <ul className="text-lg mb-6">
                    <li>Email: contact@example.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                </ul>
            </div>
        </div>
    )
}

export default About