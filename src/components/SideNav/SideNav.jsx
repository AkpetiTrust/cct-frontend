import React from "react";
import Logo from "../Logo/Logo";
import style from "./index.module.css";
import NavItem from "../NavItem/NavItem";
import BottomNav from "../BottomNav/BottomNav";
import { useParams } from "react-router-dom";

function SideNav({ owner }) {
  const navItems = {
    student: [
      {
        name: "Home",
        to: "/dashboard/home",
        icon: "home",
      },
      {
        name: "CBT",
        to: "/dashboard/cbt",
        icon: "cbt",
      },
      {
        name: "Results",
        to: "/dashboard/results",
        icon: "results",
      },
      {
        name: "Certification",
        to: "/dashboard/certification",
        icon: "certification",
      },
      {
        name: "Feedback",
        to: "/dashboard/feedback",
        icon: "feedback",
      },
    ],
    admin: [
      {
        name: "Home",
        to: "/dashboard/home",
        icon: "home",
      },
      {
        name: "Courses",
        to: "/dashboard/courses",
        icon: "courses",
      },
      {
        name: "Students",
        to: "/dashboard/students",
        icon: "students",
      },
      {
        name: "Faculties",
        to: "/dashboard/faculties",
        icon: "faculties",
      },
      {
        name: "Messages",
        to: "/dashboard/messages",
        icon: "feedback",
      },
    ],
    faculty: [
      {
        name: "Home",
        to: "/dashboard/home",
        icon: "home",
      },
      {
        name: "Exam Batches",
        to: "/dashboard/exam-batches",
        icon: "cbt",
      },
      {
        name: "Student Results",
        to: "/dashboard/students-results",
        icon: "courses",
      },
    ],
  };

  const { component } = useParams();

  return (
    <aside className={style.sidenav}>
      <Logo />
      <nav>
        <ul>
          {navItems[owner].map(({ icon, to, name }) => {
            let active;
            if (!component) {
              active = name === "Home";
            } else {
              active = `/dashboard/${component}` === to;
            }

            return (
              <NavItem
                icon={icon}
                to={to}
                active={active}
                name={name}
                key={owner + to}
              />
            );
          })}
        </ul>
      </nav>
      <BottomNav />
    </aside>
  );
}

export default SideNav;
