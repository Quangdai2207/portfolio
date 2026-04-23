function Contact() {
  return (
    <section id="contact" className="py-16">
      <div
        className="animate-fadeIn animation-delay-2 mx-auto max-w-4xl p-6 md:px-10 py-14
		  bg-gradient-to-tr from-[#0B1D2F] to-[#134E48]
		  rounded-tl-[20px] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] contact-shadow"
      >
        {/* Title */}
        <div className="text-center mb-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact Me
          </h2>
          <div className="w-12 md:w-14 h-1 bg-teal-500 mx-auto mt-2 rounded"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 md:flex-row md:justify-between text-gray-200">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-400">Tên liên hệ</span>
            <span className="text-lg font-semibold">Trần Quang Đại</span>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-400">Email</span>
            <span className="text-lg font-semibold">
              daitran.inbox@gmail.com
            </span>
          </div>

		  <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-400">Phone</span>
            <span className="text-lg font-semibold">
              0819099931
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
