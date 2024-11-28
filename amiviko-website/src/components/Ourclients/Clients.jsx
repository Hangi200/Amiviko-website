import React from 'react'
import "./clients.scss";
import { RiHotelLine } from "react-icons/ri";
import { SiEventbrite } from "react-icons/si";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { FaUsersLine } from "react-icons/fa6";

const Clients = () => {
  return (
    <section className="clients">
      <div className="secTitle">
        <h3 className="title">Our Clients</h3>
        <p>Events for Every Community</p>
      </div>

      <div className="secContent flex">
        <div className="client">
          <RiHotelLine className="icon" />
          <h6 className="client_name">Hotels</h6>
        </div>

        <div className="client">
          <SiEventbrite className="icon" />
          <h6 className="client_name">Event Organizers</h6>
        </div>

        <div className="client">
          <HiMiniUserGroup className="icon" />
          <h6 className="client_name">Attendees</h6>
        </div>

        <div className="client">
          <FaUserTie className="icon" />
          <h6 className="client_name">Sponsors</h6>
        </div>

        <div className="client">
          <FaUsersLine className="icon" />
          <h6 className="client_name">Vendors</h6>
        </div>
      </div>
    </section>
  );
}

export default Clients
