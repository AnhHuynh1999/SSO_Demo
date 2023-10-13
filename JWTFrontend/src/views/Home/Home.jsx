import { useState } from "react";
import "./Home.scss";
import CVFile from "./Huynh-Bao-Anh.pdf";
import { useEffect } from "react";
import { toast } from "react-toastify";
import skillService from "../../sevices/skillService";

const Home = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    loadSkill();
  }, []);

  const loadSkill = async () => {
    try {
      let res = await skillService.getSkill();
      setSkills(res.DT);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id="home">
      <div className="promo-block">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="promo-block-divider">
                <h1 className="promo-block-title">Bảo Anh</h1>
                <p className="promo-block-text">
                  Back-end Developer &amp; Front-end Developer
                </p>
              </div>
              <ul className="list-inline">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100007501807287"
                    target="_blank"
                    className="social-icons"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/anhhuynhhhhhh/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@anhhuynh101199?_t=8gCDmvuhAp8&_r=1"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons"
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href={CVFile} className="social-icons" download>
                    <i className="fas fa-file-download"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container content-lg">
          <div className="row">
            <div className="col-sm-3 sm-margin-b-30">
              <div className="text-right sm-text-left">
                <h2 className="margin-b-0">Intro</h2>
                <p>What I am all about.</p>
              </div>
            </div>
            <div className="col-sm-8 col-sm-offset-1">
              <div className="margin-b-60">
                <p>
                  I&apos;m Bao Anh, a front-end developer and back-end developer
                  with 2 years of programming experience. I am a person who is
                  eager to learn and learn new technologies that serve my work
                  well.
                </p>
                <p>
                  Desire to find a stable job, stay with the company for a long
                  time, a sociable, fun environment, colleagues who help each
                  other overcome difficulties.
                </p>
              </div>
              {skills?.map((skill, index) => (
                <div key={`skill-${index}`} className="progress-box">
                  <h5>
                    {skill.name}{" "}
                    <span className="color-heading pull-right">{skill.proficiency}%</span>
                  </h5>
                  <div className="progress" style={{ opacity: 1, left: "0px" }}>
                    <div
                      className="progress-bar bg-color-base"
                      role="progressbar"
                      data-width={skill.proficiency}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="experience"></div>
      <div id="work"></div>
      <div id="contact">
        <div className="bg-color-sky-light">
          <div className="container content-lg">
            <div className="row">
              <div className="col-sm-2 sm-margin-b-30">
                <div className="text-right sm-text-left">
                  <h2 className="margin-b-0">Contacts</h2>
                  <p>Hire me.</p>
                </div>
              </div>
              <div className="col-sm-10 col-sm-offset-1">
                <div className="row">
                  <div className="col-md-3 col-xs-6 md-margin-b-30">
                    <h5>Location</h5>
                    <a href="#">Tan Phu, Ho Chi Minh</a>
                  </div>
                  <div className="col-md-3 col-xs-6 md-margin-b-30">
                    <h5>Phone</h5>
                    <a href="tel:0708405127">0708405127</a>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <h5>Email</h5>
                    <a href="mailto:#">huynhbaoanh1011@gmail.com</a>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <h5>Web</h5>
                    <a
                      target="_blank"
                      href="http://baoanh.io.vn/"
                      rel="noreferrer"
                    >
                      baoanh.io.vn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
