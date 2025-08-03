import ClassesHeader from "./ClassesHeader";
import ClassesTabs from "./ClassesTabs";
import ClassesContents from "./ClassesContents";
import { useState } from "react";

import yogaImg from "../../assets/img/yoga.jpg";
import groupImg from "../../assets/img/group.webp";
import soloImg from "../../assets/img/solo.jpg";
import stretchingImg from "../../assets/img/stret.webp";

// Tüm class içerikleri (veri olarak)
const classContents = [
  {
    key: "yoga",
    title: "Yoga",
    heading: "Why are your Yoga?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam repellendus id quod! Deserunt sunt veniam...",
    subheading: "When Comes Yoga Your Time.",
    times: [
      "Saturday–Sunday: 8:00am – 10:00am",
      "Monday–Tuesday: 10:00am – 12:00pm",
      "Wednesday–Friday: 3:00pm – 6:00pm",
    ],
    img: yogaImg,
  },
  {
    key: "group",
    title: "Group",
    heading: "Why are your Group?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam repellendus id quod! Deserunt sunt veniam...",
    subheading: "When Comes Group Your Time.",
    times: [
      "Saturday–Sunday: 8:00am – 10:00am",
      "Monday–Tuesday: 10:00am – 12:00pm",
      "Wednesday–Friday: 3:00pm – 6:00pm",
    ],
    img: groupImg,
  },
  {
    key: "solo",
    title: "Solo",
    heading: "Why are your Solo?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam repellendus id quod! Deserunt sunt veniam...",
    subheading: "When Comes Solo Your Time.",
    times: [
      "Saturday–Sunday: 8:00am – 10:00am",
      "Monday–Tuesday: 10:00am – 12:00pm",
      "Wednesday–Friday: 3:00pm – 6:00pm",
    ],
    img: soloImg,
  },
  {
    key: "stretching",
    title: "Stretching",
    heading: "Why are your Stretching?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam repellendus id quod! Deserunt sunt veniam...",
    subheading: "When Comes Stretching Your Time.",
    times: [
      "Saturday–Sunday: 8:00am – 10:00am",
      "Monday–Tuesday: 10:00am – 12:00pm",
      "Wednesday–Friday: 3:00pm – 6:00pm",
    ],
    img: stretchingImg,
  },
];

function Classes() {
  const [activeTab, setActiveTab] = useState("yoga");

  const activeContent = classContents.find((c) => c.key === activeTab);

  return (
    <section id="classes">
      <div className="classes-bg container">
        <ClassesHeader />
        <ClassesTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ClassesContents content={activeContent} />
      </div>
    </section>
  );
}

export default Classes;
