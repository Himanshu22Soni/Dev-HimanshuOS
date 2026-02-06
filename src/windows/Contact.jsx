import React from "react";
import windowWrapper from "#hoc/windowWrapper";
import { WindowControls } from "#components";
import { socials } from "#constants";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="images/Himanshu.webp"
          alt="Himanshu"
          className="w-20 rounded-full"
        />
        <h3>Let's connect!</h3>
        <p>
          Got an idea? A bug to squash? Or just want to say hi? Feel free to
          reach out! I'm always up for a chat about code, cricket, or the latest
          tech trends.
        </p>
        <div className="flex gap-2 items-center">
          <Mail className="icon" />
          <a
            href="mailto:sonihimanshu2210@gmail.com"
            className="text-blue-400 hover:underline"
          >
            sonihimanshu2210@gmail.com
          </a>
        </div>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                className="cursor-pointer"
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = windowWrapper(Contact, "contact");

export default ContactWindow;
