import React from "react";
import "./Social.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";
export const Social = () => {
  const icons = [
    {
      id: 1,
      icon: <AiFillGithub />,
      socialLink: "https://github.com/Sharmaryan",
    },
    {
      id: 2,
      icon: <AiFillLinkedin />,
      socialLink: "https://www.linkedin.com/in/aryan-sharma-704848168/",
    },
    {
      id: 3,
      icon: <AiFillTwitterCircle />,
      socialLink: "https://twitter.com/aryan_developer",
    },
  ];

  const {theme} = useSelector((state) => state.theme);

  return (
    <div className={`social ${theme}`}>
      <p className={`social-heading text-sm text-center ${theme}`}>connect with me</p>
      <ul className={`social-icons ${theme}`}>
        {icons.map(({ id, icon, socialLink }) => {
          return (
            <div key={id}>
              <li className={`social-icon text-m ${theme}`}>
                <a href={socialLink} className={`icon-color ${theme}`}>
                  {icon}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
