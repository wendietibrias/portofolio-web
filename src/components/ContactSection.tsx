
const ContactSection = () => {
    return (
        <div className="w-[600px] sm:w-full sm:px-5 mx-auto">
            <div className="text-center">
                <h5 className="text-blue-500 text-sm font-semibold">Feedback</h5>
                <h2 className="text-2xl font-bold mt-1 text-gray-800 uppercase">Your Feedback</h2>
            </div>
            <form className="mt-10 flex flex-col gap-y-2">
                <input type="text" name="name" placeholder="Username" className="w-full border outline-none border-gray-200 py-2 px-2 rounded-md text-sm"/>
                <input type="Email" name="email" placeholder="Email" className="w-full border outline-none border-gray-200 py-2 px-2 rounded-md text-sm"/>
                <textarea name="feedback" placeholder="Your Feedback" className="w-full border outline-none resize-none h-[200px] border-gray-200 py-2 px-2 rounded-md text-sm"></textarea>
                <button className="mt-4 text-white text-[13px] py-2 font-semibold bg-blue-500 rounded-full">Submit</button>
            </form>
        </div>
    )
}

export default ContactSection;