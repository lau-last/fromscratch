import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };
  return (
    <div>
      <main>
        <Mouse />
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
          transition={{ duration: 0.4 }}
          className="contact"
        >
          <Navigation />
          <Logo />
          <ContactForm />
          <div className="contact-infos">
            <div className="address">
              <div className="content">
                <h4>adresse</h4>
                <p>Paris 75003</p>
              </div>
            </div>
            <div className="phone">
              <div className="content">
                <h4>téléphone</h4>
                <CopyToClipboard text="0673065220" className="hover">
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Téléphone copié !")}
                  >
                    06 73 06 52 20
                  </p>
                </CopyToClipboard>
              </div>
            </div>
            <div className="email">
              <div className="content">
                <h4>email</h4>
                <CopyToClipboard
                  text="laurent.last7@gmail.com"
                  className="hover"
                >
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Email copié !")}
                  >
                    laurent.last7@gmail.com
                  </p>
                </CopyToClipboard>
              </div>
            </div>
            <SocialNetwork />
            <div className="credits">
              <p>Laurent Last - 2022</p>
            </div>
          </div>
          <Buttons left={"/projet-4"} />
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
