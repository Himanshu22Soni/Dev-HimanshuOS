// Day.js formats the live date/time in a consistent, readable way.
import dayjs from "dayjs";
// Enable UTC and timezone support so we can force a specific zone (Asia/Kolkata).
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
// Navigation data (links + icons) is centralized in constants for reuse.
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";

// Register plugins once so Day.js can handle timezones correctly.
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Navbar Component
 *
 * Purpose: Top navigation bar for the portfolio site.
 * Why this exists: Provides branding, quick navigation links, social icons,
 * and a live timestamp for a polished, dynamic header.
 */
const Navbar = () => {
  const { openWindow } = useWindowStore();

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
            <li
              key={item.id}
              className="nav-link-underline"
              onClick={() => openWindow(item.type)}
            >
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
        {/* Live time stamp for a dynamic, personal touch (forced to Asia/Kolkata). */}
        <time>{dayjs().tz("Asia/Kolkata").format("ddd D MMM h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
