import NewsLetterBox from "../Components/NewsLetterBox";
import Title from "../Components/Title";
import demo from "../assets/demo.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-8">
        <img
          src={demo}
          alt="About Us"
          className="w-full md:w-1/2 lg:w-1/3 object-cover"
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 lg:w-2/3 text-gray-600">
          <p>
            Welcome to our company! We are dedicated to providing top-notch
            services and products to our customers. With years of experience and
            a passion for excellence, we strive to exceed expectations and
            deliver outstanding results.
          </p>
          <p>
            Our team of experts is committed to innovation and quality, ensuring
            that every project we undertake meets the highest standards. We
            believe in building long-lasting relationships with our clients
            through transparency, trust, and exceptional service.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower individuals and businesses by providing
            reliable and efficient solutions. We aim to create value and make a
            positive impact on the communities we serve. Through continuous
            improvement and a customer-centric approach, we work tirelessly to
            achieve excellence in all our endeavors.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 md:gap-4 lg:gap-8">
        <div className="border p-6 md:p-8 lg:p-10 flex flex-col gap-5 flex-1">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We prioritize quality in everything we do. Our rigorous quality
            control processes ensure that our products and services meet the
            highest standards. We are committed to continuous improvement and
            strive to exceed our customers expectations.
          </p>
        </div>
        <div className="border p-6 md:p-8 lg:p-10 flex flex-col gap-5 flex-1">
          <b>Convenience:</b>
          <p className="text-gray-600">
            {`We understand the importance of convenience in today's fast-paced
            world. Our services are designed to be accessible and user-friendly,
            making it easy for our customers to get what they need when they
            need it. From seamless online experiences to efficient customer
            support, we prioritize your convenience.`}
          </p>
        </div>
        <div className="border p-6 md:p-8 lg:p-10 flex flex-col gap-5 flex-1">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our customers are at the heart of everything we do. We are dedicated
            to providing exceptional customer service, with a focus on
            understanding and meeting your unique needs. Our friendly and
            knowledgeable team is always here to assist you, ensuring a positive
            experience every time.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
