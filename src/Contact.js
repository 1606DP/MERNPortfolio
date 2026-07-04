import React from "react";
import SectionTitle from "../../components/SectionTitle";
import contactImg from "../../resources/contact_img.png";

function Contact() {
  const user = {
    name: "Deepika Pal",
    age: null,
    gender: "Female",
    email: "paldeepika639471@gmail.com",
    mobile: "9005770867",
    country: "India",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p key={key} className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="flex h-[400px] ">
          <img
            src={contactImg}
            alt="Contact illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
