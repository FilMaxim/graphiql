import { GithubLinkProps, linkInfo } from "../../../types/components";
import { NavRoutes } from "../../../utils/router/routes";
import GithubLink from "../../1-atoms/githubLink/GithubLink";
import Logo from "../../1-atoms/logo/Logo";
import SectionWrapper from "../../1-atoms/sectionWrapper/SectionWrapper";
import NavBar from "../../2-molecules/navBar/NavBar";
import classes from "./style.module.scss";
import { FC, ReactElement } from "react";
import RSSLogo from "../../../assets/rss-logo.svg";
import { useLocalization } from "../../../utils/hooks/useLocalization";

const CREATORS: GithubLinkProps[] = [
  {
    name: "ALIAKSEI-sl",
    link: "https://github.com/ALIAKSEI-sl",
  },
  {
    name: "FilMaxim",
    link: "https://github.com/FilMaxim",
  },
  {
    name: "Illia-Sakharau",
    link: "https://github.com/Illia-Sakharau",
  },
];

type Props = unknown;

const Footer: FC<Props> = (): ReactElement => {
  const dictionary = useLocalization();
  const navbarLinks: linkInfo[] = [
    {
      to: NavRoutes.mainPagePath,
      text: dictionary.navigation.home,
    },
    {
      to: NavRoutes.graphiQL,
      text: dictionary.navigation.playground,
    },
  ];

  return (
    <footer className={classes.footer}>
      <SectionWrapper className={classes[`footer__wrapper`]}>
        <div className={classes["top-side"]}>
          <Logo />
          <NavBar linksInBar={navbarLinks} className={classes["nav-bar"]} />
        </div>

        <div className={classes["bottom-side"]}>
          <div className={classes.creators}>
            {dictionary["created-by"]}
            <div className={classes["creators__inner"]}>
              {CREATORS.map((prop) => (
                <GithubLink key={prop.name} {...prop} />
              ))}
            </div>
          </div>
          <div className={classes.right}>
            <a
              href="https://rs.school/"
              target="_blank"
              rel="noreferrer"
              className={classes["rss-logo"]}
            >
              <img src={RSSLogo} alt="RSS Logo" />
            </a>
            <div className={classes.copyright}>© 2023</div>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
