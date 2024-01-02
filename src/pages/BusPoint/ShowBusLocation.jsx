import Navbar from "../../components/Header/Navbar";

const ShowBusLocation = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 mb-10">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.764383146985!2d90.56445329615939!3d23.829464714045596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cb0a4c65ef27%3A0xf54f56affbffdc99!2sGreen%20University%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1704193913861!5m2!1sen!2sbd`}
          width="1280"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ShowBusLocation;
