import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-green-50 min-h-[calc(100vh-394px)]">
      <div>
        <h1
          data-aos-duration="3000"
          data-aos="fade-down"
          className="text-center font-bold px-5 py-8 bg-green-100 rounded-lg text-3xl lg:text-5xl text-green-500 mt-10"
        >
          {" "}
          CONTACT US{" "}
        </h1>
      </div>

      <div className=" space-y-3 mt-10 container p-3 mx-auto">
        <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" className="text-lg lg:text-xl leading-normal">
          Thank you for visiting Homely Haven! We value your feedback, inquiries, and suggestions. Whether you have questions about our
          services, need assistance with your account, or simply want to reach out, we're here to help.
        </p>

        <h3 data-aos="fade-right" data-aos-duration="1500" className="text-xl lg:text-2xl font-bold underline">
          Customer Support:
        </h3>

        <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" className="text-lg lg:text-xl leading-normal">
          Our dedicated customer support team is available to assist you with any issues or concerns you may have. Please feel free to reach
          out to us via email or phone:
        </p>

        <ul data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" className="list-disc ml-7">
          <li className="text-lg lg:text-xl font-semibold">Email: sadekcric4@gmail.com</li>
          <li className="text-lg lg:text-xl font-semibold">Phone: +880 1933 287870</li>
        </ul>

        <p data-aos="fade-right" data-aos-delay="800" data-aos-duration="1500" className="text-lg lg:text-xl leading-normal">
          We strive to respond to all inquiries promptly, typically within 24-48 hours during regular business hours.
        </p>

        <h3 data-aos="fade-right" data-aos-duration="1500" className="text-xl lg:text-2xl font-bold underline">
          Technical Support:
        </h3>

        <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" className="text-lg lg:text-xl leading-normal">
          Encountering technical difficulties? Our technical support team is ready to troubleshoot and resolve any issues you may encounter
          while using our website. Get in touch with us at:
        </p>

        <ul className="list-disc ml-7">
          <li data-aos="fade-right" data-aos-duration="1500" className="text-lg lg:text-xl font-semibold">
            Email: sadekcric4@gmail.com
          </li>
          <li data-aos="fade-right" data-aos-delay="500" data-aos-duration="3000" className="text-lg lg:text-xl font-semibold">
            Phone: +880 1933 287870
          </li>
        </ul>

        <h3 data-aos="fade-right" data-aos-duration="1500" className="text-xl lg:text-2xl font-bold underline">
          Feedback and Suggestions:
        </h3>

        <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" className="text-lg lg:text-xl leading-normal">
          We're always looking for ways to improve and enhance your experience on Homely Haven. If you have any feedback, suggestions, or
          feature requests, we'd love to hear from you! Send us an email at feedback@example.com and let us know how we can serve you
          better.
        </p>

        <h3 data-aos="fade-right" data-aos-duration="1500" className="text-xl lg:text-2xl font-bold underline">
          Media Inquiries:
        </h3>

        <p data-aos="fade-right" data-aos-delay="800" data-aos-duration="1500" className="text-lg lg:text-xl leading-normal">
          For media inquiries, partnership opportunities, or press-related matters, please contact our PR team at pr@example.com.
        </p>

        <h3 data-aos="fade-right" data-aos-duration="1500" className="text-xl lg:text-2xl font-bold underline">
          Business Inquiries:
        </h3>

        <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" className="text-lg lg:text-xl leading-normal">
          Interested in partnering with Homely Haven or exploring business opportunities? Reach out to our business development team at
          bizdev@example.com.
        </p>

        <h3 data-aos="fade-right" data-aos-duration="1500" className="text-xl lg:text-2xl font-bold underline">
          Social Media:
        </h3>

        <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" className="text-lg lg:text-xl leading-normal">
          Stay connected with us on social media for updates, announcements, and exclusive content:
        </p>

        <ul className="list-disc ml-7">
          <li data-aos="fade-right" data-aos-delay="700" data-aos-duration="1500" className="text-lg lg:text-xl font-semibold">
            Facebook: MD Sadekur Rahman
          </li>
          <li data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500" className="text-lg lg:text-xl font-semibold">
            Twitter: @sadekcric
          </li>
          <li data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1500" className="text-lg lg:text-xl font-semibold">
            Instagram: @sadekcric4
          </li>
        </ul>

        <address data-aos="fade-left" data-aos-delay="500" data-aos-duration="1500" className="mt-5 text-right">
          <h2 className="text-lg lg:text-xl font-semibold">Homely Haven</h2>

          <p className="text-lg lg:text-xl leading-normal">7410 model para</p>
          <p className="text-lg lg:text-xl leading-normal">Chowgacha, Jessore, Bangladesh.</p>
        </address>
      </div>
    </div>
  );
};

export default Contact;
