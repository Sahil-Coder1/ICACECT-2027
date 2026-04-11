import React from "react";

const committeeData = [
  {
    title: "Chief Patron",
    members: ["Fr. Dr. Augustine George – Vice Chancellor"],
  },
  {
    title: "Patrons",
    members: [
      "Fr. Dr. Lijo P Thomas – Pro Vice-Chancellor",
      "Fr. Dr. Jais V Thomas – Financial Officer Incharge",
    ],
  },
  {
    title: "Directors",
    members: [
      "Fr. Joshy Mathew – CHRO, Director School of Humanities and Social Sciences",
      "Fr. Som Zacharia – Director, Infrastructure Planning & Development",
      "Fr. Emmanuel P J – Director, School of Law",
      "Fr. Dr. Marialal Joseph – Director, Research & Development",
      "Fr. Deepu Parayil – Director, Student Welfare Office",
    ],
  },
  {
    title: "Chair",
    members: [
      "Dr. Kumar R – Dean, School of Computational and Physical Sciences",
    ],
  },
  {
    title: "Co-Chair",
    members: ["Dr. Muruganantham A – Head, Dept. of Computer Science [PG]"],
  },
  {
    title: "Chief Convenor",
    members: ["Dr. Thomas Robinson L – Associate Professor"],
  },
  {
    title: "Co-Convenor",
    members: ["Dr. Subramaniakumar M – Assistant Professor"],
  },
  {
    title: "Technical Programme Chairs",
    members: [
      "Dr. Velmurugan R – Coordinator, Dept. of Computer Science (PG)",
      "Dr. Chengappa M R – Hewlett Packard Enterprise, IEEE Bangalore Section",
      "Dr. Uma Shama – Bridgewater State University, USA",
      "Mr. Srinivasan Sairam – Accenture, USA",
    ],
  },
  {
    title: "Organizing Chair",
    members: ["Dr. Vinothina V – Associate Professor, IEEE Branch Counselor"],
  },
  {
    title: "Finance Chair",
    members: ["Dr. Karthik S – Associate Professor"],
  },
  {
    title: "Publication Chair",
    members: [
      "Dr. Seyed Mohammad Buhari – King Abdulaziz University, Saudi Arabia",
      "Dr. Ayshwarya B – Assistant Professor",
      "Dr. Gokila D – Assistant Professor",
    ],
  },
  {
    title: "Organizing Committee Members",
    members: [
      "Dr. Bharathi",
      "Mr. Jibin Jacob Mani",
      "Dr. Vimala Roselin J",
      "Dr. Anju Pavithran",
      "Dr. Princess Maria John",
      "Dr. Gayathri R",
      "Dr. Angeline Prasanna G",
      "Dr. Sangeetha V",
      "Dr. Ebinesar T",
      "Dr. Libin Thomas",
      "Mr. Shankar R",
      "Ms. Abinaya S",
      "Dr. Fizhan Kausar",
    ],
  },
];

function CommitteeMembers() {
  return (
    <section className=" mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold">Committee Members</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-300 rounded-lg overflow-hidden">
          <thead className="bg-slate-200">
            <tr>
              <th className="text-left p-3 font-semibold w-1/4">Role</th>
              <th className="text-left p-3 font-semibold">Members</th>
            </tr>
          </thead>

          <tbody>
            {committeeData.map((section, index) => (
              <tr key={index} className="border-t hover:bg-slate-50 transition">
                <td className="p-3 font-semibold text-blue-600 align-top">
                  {section.title}
                </td>

                <td className="p-3">
                  <ul className="space-y-1 text-sm text-gray-700">
                    {section.members.map((member, i) => (
                      <li key={i}>• {member}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CommitteeMembers;
