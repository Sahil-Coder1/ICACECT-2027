import React from "react";

function Objectives() {
  return (
    <div className=" lg:px-8 px-4 mx-auto pb-8 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
      <div className="mb-6">
        <h2 className="inline-block relative text-2xl font-bold leading-relaxed pb-3">
          Objectives
          <span className="absolute left-0 bottom-0 w-16 h-1 bg-red-500 rounded-full"></span>
        </h2>
      </div>{" "}
      <p className="mb-4 text-gray-700 leading-relaxed">
        The International Conference on Advancement in Computer Engineering and
        Communication Technology (ICACECT-2027) aims to move beyond passive
        listening and create an active incubator for the technologies that will
        define the next decade. Our mission is to transform theoretical
        breakthroughs into real-world applications through a multi-faceted
        exchange of ideas.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The conference is structured around the following core objectives:
      </p>
      <ul className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
        <li>
          To provide a rigorous platform for the presentation of Keynote
          Speeches, Invited Talks, and Peer-Reviewed Research Papers.
        </li>
        <li>
          To facilitate high-level Panel Discussions featuring global experts.
        </li>
        <li>
          To host Special Sessions on Selected Topics that allow for granular
          exploration of emerging niches, ensuring the conference remains at the
          cutting edge of innovation.
        </li>
        <li>
          To nurture a global ecosystem where Technical Sessions act as a
          catalyst for future partnerships, joint research ventures, and
          interdisciplinary projects between research and industry.
        </li>
        <li>
          To bridge the gap between theoretical research and industrial
          implementation.
        </li>
      </ul>
    </div>
  );
}

export default Objectives;
