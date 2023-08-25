import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  // faStackOverflow,
  // faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";
import "./styles/skill.css";

const Homepage = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === "home");

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta
          name="keywords"
          content={currentSEO.keywords.join(", ")}
        />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <section className="Section1">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                      <h4>Experience Skill</h4>
                        <div id="SkillBox">
                          <div><label> React Native</label></div>
                          <div className="SkillBar">
                            <div id="Skill-Cplus">
                              <span className="Skill-Area iconify" data-icon="logos:c-plusplus" data-inline="false" data-width="35" data-height="35" />
                            </div>
                          </div>
                          <div><label> Node Js</label></div>
                          <div className="SkillBar">
                            <div id="Skill-C">
                              <span className="Skill-Area iconify" data-icon="logos:c" data-inline="false" data-width="35" data-height="35" />
                            </div>
                          </div>
                          <div><label> React Js</label></div>
                          <div className="SkillBar">
                            <div id="Skill-Python">
                              <span className="Skill-Area iconify" data-icon="logos:python" data-inline="false" data-width="35" data-height="35" />
                            </div>
                          </div>
                          <div><label> HTML-5</label></div>
                          <div className="SkillBar">
                            <div id="Skill-HTML">
                              <span className="Skill-Area iconify" data-icon="logos:html-5" data-inline="false" data-width="35" data-height="35" />
                            </div>
                          </div>
                          <div><label> CSS3</label></div>
                          <div className="SkillBar">
                            <div id="Skill-CSS">
                              <span className="Skill-Area iconify" data-icon="logos:css-3" data-inline="false" data-width="35" data-height="35" />
                            </div>
                          </div>
                          <div><label> Mongo db</label></div>
                          <div className="SkillBar">
                            <div id="Skill-JS">
                              <span className="Skill-Area iconify" data-icon="logos:javascript" data-inline="false" data-width="35" data-height="35" />
                            </div>
                          </div>
                          <div><label> Blockchain</label></div>
                          <div className="SkillBar">
                            <div id="Skill-SQL">
                              <span className="Skill-Area iconify" data-icon="dashicons:database" data-inline="false" style={{ color: 'black' }} data-width="35" data-height="35" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="homepage-socials">
              <a
                href={INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="homepage-social-icon"
                />
              </a>
              {/* <a
								href={INFO.socials.stackoverflow}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faStackOverflow}
									className="homepage-social-icon"
								/>
							</a> */}
              {/* <a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a> */}
              <a
                href={`mailto:${INFO.main.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="homepage-social-icon"
                />
              </a>
            </div>

            <div className="homepage-projects">
              <AllProjects />
            </div>

            <div className="homepage-after-title">
              <div className="homepage-articles">
                {myArticles.map((article, index) => (
                  <div
                    className="homepage-article"
                    key={(index + 1).toString()}
                  >
                    <Article
                      key={(index + 1).toString()}
                      date={article().date}
                      title={article().title}
                      description={article().description}
                      link={"/article/" + (index + 1)}
                    />
                  </div>
                ))}
              </div>

              <div className="homepage-works">
                <Works />
              </div>
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
