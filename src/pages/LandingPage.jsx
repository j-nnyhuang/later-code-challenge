import React, { Component } from "react";

// Custom Components
import CustomerFeedback from "../components/CustomerFeedbackComponent";
import Feature from "../components/FeatureComponent";

//SCSS
import "../assets/scss/fonts.scss";

// Assets
import colors from "../assets/config/colors";
import Ryan from "../assets/imgs/ryan-babenzien-188b1ec5.png";
import Olivia from "../assets/imgs/olivia-desantos-39b7b4c7.png";
import MeUndies from "../assets/imgs/me-undies-423a19b1.png";
import HPVisual from "../assets/imgs/Hp--visual--planner-f0bab8b1.png";

function FeaturesSection() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #faf8f5, #ffffff)",
        padding: "2vw",
      }}
    >
      <h2 style={{ margin: "0 15vw", textAlign: "center" }}>
        A social media marketing platform that <b>actually</b> helps you grow
      </h2>
      <Feature
        color={colors.salmon}
        img={HPVisual}
        name="Visual Planner"
        oneLiner="Plan a month's worth of social media posts in minutes"
        blurb="Scheduling your social media content is as simple as dragging-and-dropping. No, seriously. Later will tell you your unique Best Time to Post, so you can schedule in batches and publish without a hitch."
      />
    </div>
  );
}

function CustomerFeedbackSection() {
  return (
    <div style={{ backgroundColor: colors.landingBackground, padding: "2vw" }}>
      <h6 style={{ textAlign: "center" }}>What our customers say</h6>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CustomerFeedback
          comment="We've been using Later for a little over 2 years. The visual planner is one of the tools that has helped us become more efficient and it's an important part of our marketing toolkit."
          customerName="Ryan Babenzien"
          customerTitle="Founder and CEO of GREATS"
          customerImage={Ryan}
        />
        <CustomerFeedback
          comment="Later's powerful automation tools and helpful trainings have helped drive my business forward. My business has grown with the platform, taking my brand from a lowly wedding blog to a successful destination wedding business."
          customerName="Olivia DeSantos"
          customerTitle="Wedding Planner, Nulyweds"
          customerImage={Olivia}
        />
        <CustomerFeedback
          comment="Later has enabled our team to focus on producing quality, engaging content by freeing up time that would have been spent on collecting user-generated assets, planning, and scheduling."
          customerName="Social Media Team"
          customerTitle="MeUndies"
          customerImage={MeUndies}
        />
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div>
      <FeaturesSection />
      <CustomerFeedbackSection />
    </div>
  );
}
