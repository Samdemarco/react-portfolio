import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Resume.css";


export default function Resume() {
  return (
    <div className="resume">
   
      <div className="skills">
      <button type="submit">Download My Resume</button>
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <p>
          ReactJS, HTML, CSS, JavaScript, JQuery, Responsive Design, Handlebars, BootStrap
          </p>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <p>
            APIs, Node, Express, MySQL/Sequelize, MongoDB/Mongoose, REST, GraphQL, MERN
          </p>
        </li>
        <li className="item">
          <h2>Programming Languages</h2>
          <p>
            JavaScript, Java, C, C++, Verilog, Python
          </p>
        </li>
  

      </ol>
      </div>

      <div className="experience">
        <h1>Experience</h1>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement className="vertical-timeline-element-education"
          date="2001 - 2006"
          iconStyle={{background: "white", color: "black"}}
            icon={<SchoolIcon/>}>
            <h4>Carleton University</h4>
            <p>Bachelor Electrical Engineering</p>
             
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2011"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Digital Designer - Nortel/Ciena Networks
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Ottawa, ON
          </h5>
          <p>Worked on a series of digital circuit designs using FPGAs for optical switching network equipment.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - 2015"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Field Application Engineer - Arrow 
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Toronto, ON
          </h5>
          <p>Providing comprehensive technical and sales support for customer circuit design and system development, focusing
            primarily on IoT/Wireless applications using Bluetooth, ISM Band, and WiFi. 
            Role involves customer presentations, semiconductor product introductions, and technical sales training 
            for the local sales team. Consistently working with field sales management and marketing managers to help 
            develop and execute successful demand creation strategies for Arrow and our digital and analog semiconductor suppliers.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2016"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Field Application engineer - QNX
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Eastern Canada
          </h5>
          <p>Offering technical, consultative, pre-sales support to Sales team including analyzing customer 
             design requirements, in offering feasibility/scope assessments to customer requests, and other activities as
             required. Also involved in managing customer’s technical requirements (through various support and engineering departments) 
             through development phase to commercial release. In addition to this also actively engaged in conducting pre-sales software 
             development work (demos, benchmarking, high-level customer design assistance, initial environment set-up).

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Sales Manager - Laird Connectivity
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Eastern North America
          </h5>
          <p>Continuously developing new business relationships by personally presenting the capabilities of Laird to major accounts
             within Eastern North America. Responsible for managing and providing direct sales support for Laird’s wireless 
             products (WiFi, Bluetooth, LoRa, ISM), services, technical and engineering information by answering questions and requests.
             Also, growing and maintaining sales by exploring and qualifying existing accounts as well as following up on leads resulting
              from marketing prospecting efforts and our Distribution partners.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Account Manager - MMB Networks
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Global
          </h5>
          <p>At MMB I helped customers build resilient IoT strategies that matched their product vision and business goals with the right technologies. 
            I was responsible for driving revenue growth by both identifying and qualifying new customers who will benefit from our products or services. 

            Key strategies implemented in ensuring success for both new and existing customers included delivering best-in-class support and an intimate understanding
            of both technical and business needs for their IoT application(s). 

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Field Application Engineer - Arrow 
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Toronto, ON
          </h5>
          <p>Provided comprehensive technical and sales support for customer circuit design and system development, focusing
            primarily on IoT/Wireless applications using Bluetooth, ISM Band, and WiFi. 
            Role involved delivering customer presentations, semiconductor product introductions, and technical sales training 
            for the local sales team. Consistently worked with field sales management and marketing managers to help 
            develop and execute successful demand creation strategies for Arrow and their digital and analog semiconductor suppliers.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - Present"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Sales Manager - Laird Connectivity
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Eastern North America
          </h5>
          <p>Continuously developing new business relationships by personally presenting the capabilities of Laird to major accounts
             within Eastern North America. Responsible for managing and providing direct sales support for Laird’s SOM/SBC and wireless 
             products (WiFi, Bluetooth, LoRa, ISM), services, technical and engineering information by answering questions and requests.
             Also, growing and maintaining sales by exploring and qualifying existing accounts as well as following up on leads resulting
            from marketing prospecting efforts and our Distribution partners.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element-education"
          date="2022 - 2023"
          iconStyle={{background: "white", color: "black"}}
            icon={<SchoolIcon/>}>
            <h4>University of Toronto</h4>
            <p>Certificate - Full-Stack Dev</p>
             
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>

    </div>
  );
}
