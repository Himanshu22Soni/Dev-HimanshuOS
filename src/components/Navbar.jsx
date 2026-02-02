// Day.js formats the live date/time in a consistent, readable way.
import dayjs from "dayjs";
// Navigation data (links + icons) is centralized in constants for reuse.
import { navLinks, navIcons } from "#constants";

/**
 * Navbar Component
 *
 * Purpose: Top navigation bar for the portfolio site.
 * Why this exists: Provides branding, quick navigation links, social icons,
 * and a live timestamp for a polished, dynamic header.
 */
const Navbar = () => {
  return (
    // Semantic <nav> element helps accessibility and SEO.
    <nav>
      <div>
        {/* Brand logo and title keep identity consistent across pages. */}
        <img src="images/logo.svg" alt="logo" className="w-5 h-5" />
        <p className="font-bold">Himanshu's Portfolio</p>

        <ul>
          {/* Render nav links from data to avoid hardcoding and ease updates. */}
          {navLinks.map((item) => (
            <li key={item.id} className="nav-link-underline">
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {/* Social/action icons are also data-driven for consistency. */}
          {navIcons.map((item) => (
            <li key={item.id} className="cursor-pointer">
              <img src={item.img} alt="icon-hover" className="w-4 h-4" />
            </li>
          ))}
        </ul>
        {/* Live time stamp for a dynamic, personal touch. */}
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
