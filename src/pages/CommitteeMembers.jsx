import React from "react";

const committeeData = [
  {
    title: "Chief Patron",
    members: ["Prof. S.W. Akhtar, Founder and Hon’ble Chancellor, IU Lucknow"],
  },
  {
    title: "Patrons",
    members: [
      "Dr. Syed Nadeem Akhtar, Pro-Chancellor, IU, Lucknow",
      "Dr. Syed Mohammad Fauzan Akhtar, Additional Pro Chancellor (IIMSR), IU, Lucknow",
      "Mr. Syed Adnan Akhtar, Additional Pro Chancellor – IIPSR, IU, Lucknow",
      "Dr. Nida Fatima, Additional Pro Chancellor – ISF-CIED, IU, Lucknow",
      "Prof. Furqan Qamar, Vice Chancellor, IU, Lucknow",
      "Prof. Mohd. Haris Siddiqui, Registrar, IU, Lucknow",
      "Prof. Sri Niwas Singh, Director ABV-IIIT, Gwalior",
    ],
  },
  {
    title: "Co-Patrons",
    members: [
      "Prof. Abdul Rahman Khan, COE, IU, Lucknow",
      "Prof. Sunil Kumar, (Dean Faculty of Engineering & IT), IU, Lucknow",
      "Prof. Wahajul Haq, Dean, Doctoral Studies, IU, Lucknow",
      "Prof. Syed Aqeel Ahmad, Director HRDC, IU, Lucknow",
      "Mr. Ahmad Raza, Treasurer, Integral University",
      "Dr. Atif Siddiqui, Dy. Director Academics & Admission, IU, Lucknow",
      "Er. Mohd Sufiyan Abbasi, Director of Procurement, Integral University",
      "Prof. (Dr.) Yogesh Chauhan, IIT Kanpur, Chairman IEEE UP Section",
      "Prof. (Dr.) Asheesh Kumar Singh, Ex-Chairman IEEE UP Section",
    ],
  },
  {
    title: "Convener(s)",
    members: [
      "Prof. (Dr.) Shish Ahmad, HoD Deptt. of CSE, IU, Lucknow",
      "Prof. (Dr.) Hassan Saeed, HoD Deptt. of ECE, IU, Lucknow",
    ],
  },
  {
    title: "Conference General Chair",
    members: [
      "Dr. Imran Ullah Khan, Deptt. of ECE, IU, Lucknow",
      "Dr. Halima Sadia, Deptt. of CSE, IU, Lucknow",
      "Dr. Satish Kumar Singh, Ex-Chairman, IEEE UP Section",
    ],
  },
  {
    title: "Organizing Secretary",
    members: [
      "Dr. Faiyaz Ahmad, Deptt. of CSE, IU, Lucknow",
      "Prof. Ashish Kumar Singh, IIIT, Allahabad",
      "Dr. Manish Madhav Tripathi, Deptt. of CSE, IU, Lucknow",
      "Dr. Archana Yadav, Deptt. of ECE, IU, Lucknow",
    ],
  },
  {
    title: "Conference Chair(s)",
    members: [
      "Dr. Mohd Haroon, Deptt. of CSE, IU, Lucknow",
      "Dr. Nupur Mittal, Deptt. of ECE, IU, Lucknow",
      "Prof. (Dr.) Md. Rihan, AMU, India, Chair Elect IEEE UP Section",
      "Prof. (Dr.) Rajeev Kumar Singh, IIT BHU, India",
      "Prof. Rafik Ahmad, Chapter Chair, IEEE UP Section",
    ],
    chair: [
      "Dr. Mohd Haroon, Deptt. of CSE, IU, Lucknow",
      "Dr. Nupur Mittal, Deptt. of ECE, IU, Lucknow",
    ],
  },
  {
    title: "Organizing Chair",
    members: [
      "Ms. Kavita Agrawal, Deptt. of CSE, IU, Lucknow",
      "Dr. Zohaib Hasan Khan, Deptt. of ECE, IU, Lucknow",
      "Dr. Varun Kumar Kakar, BTKIT Dwarahat",
    ],
    chair: [
      "Ms. Kavita Agrawal, Deptt. of CSE, IU, Lucknow",
      "Dr. Zohaib Hasan Khan, Deptt. of ECE, IU, Lucknow",
    ],
  },
  {
    title: "Technical Program Chair",
    members: [
      "Dr. Sheeba Praveen, Deptt. of CSE, IU, Lucknow",
      "Dr Mohd Suaib, Deptt. of CSE, IU, Lucknow",
      "Dr. Ayan Mustafa Khan, Deptt. of ECE, IU, Lucknow",
      "Dr. Mohd Haroon, Deptt. of CSE, IU, Lucknow",
      "Mrs. Kavita Agrawal, Deptt. of CSE, IU, Lucknow",
      "Dr. Mohd. Akbar,  Deptt. of CSE, IU, Lucknow",
      "Dr. Shrish Bajpai, Deptt. of ECE, IU, Lucknow",
      "Dr. Mohd. Javed Khan, Deptt. of ECE, IU, Lucknow",
      "Dr. Akhilesh Tiwari, IIIT Allahabad, India",
      "Prof. (Dr.) Rajat Kumar Singh, IIIT Allahabad, India",
      // "Dr. Faiyaz Ahmad, Deptt. of CSE, IU, Lucknow",
      // "Dr. Archana Yadav, Deptt. of ECE, IU, Lucknow",
      // "Dr. Manish Madhav Tripathi, Deptt. of CSE, IU, Lucknow",
      // "Dr. Monauwer Alam, Deptt. of EC, IU, Lucknow",
      // "Dr. Shailendra Kumar, Deptt. of ECE, IU, Lucknow",
      // "Dr. Nupur Mittal, Deptt. of ECE, IU, Lucknow",
      // "Dr. Mohd. Javed Khan, Deptt. of ECE, IU, Lucknow",
    ],
    chair: [
      "Dr. Sheeba Praveen, Deptt. of CSE, IU, Lucknow",
      "Dr. Mohd Suaib, Deptt. of CSE, IU, Lucknow",
      "Dr. Ayan Mustafa Khan, Deptt. of ECE, IU, Lucknow",
    ],
  },
  {
    title: "Publications Chair",
    members: [
      "Dr. Mohd. Suhaib Kidwai, Deptt. of ECE, IU, Lucknow",
      "Dr. Nudrat Fatima, Deptt. of CSE, IU, Lucknow",
      "Dr. Mohd. Akbar,  Deptt. of CSE, IU, Lucknow",
      "Prof. Rafik Ahmad, Chapter Chair, IEEE UP Section",
      "Dr S.H. Abbas Rizvi, Deptt. of CSE, IU, Lucknow",
      "Ms Falak Alam, Deptt. of CSE, IU, Lucknow",
      // "Dr. Roshan Jahan, Deptt. of CSE, IU, Lucknow",
      // "Dr. Archana Yadav, Deptt. of ECE, IU, Lucknow",
      // "Mr Rahul Ranjan Tiwari, Deptt. of CSE, IU, Lucknow",
      // "Dr. Saima Beg, Deptt. of ECE, IU, Lucknow",
    ],
    chair: [
      "Dr. Mohd. Suhaib Kidwai, Deptt. of ECE, IU, Lucknow",
      "Dr. Nudrat Fatima, Deptt. of CSE, IU, Lucknow",
    ],
  },
  {
    title: "Promotional Activities & Sponsorship",
    members: [
      "Dr. Zohaib Hasan Khan, Deptt. of ECE, IU, Lucknow",
      "Dr. Mohd Usman Khan, Deptt. of CSE, IU, Lucknow",
      "Dr. Raziqa Masood, Deptt. of CSE, IU, Lucknow",
      "Dr. Tarana Afrin Chandel, Deptt. of ECE, IU, Lucknow",
      "Mr Shakir Ali, Deptt. of CSE, IU, Lucknow",
      "Ms Ummay Habiba, Deptt. of CSE, IU, Lucknow",
      "Dr S.H. Abbas Rizvi, Deptt. of CSE, IU, Lucknow",

      // "Dr. Mohammed Suaib, Deptt. of CSE, IU, Lucknow",
      // "Dr. Shrish Bajpai, Deptt. of ECE, IU, Lucknow",
      // "Mr Faizan Ahmad, Deptt. of CSE, IU, Lucknow",
      // "Dr. Archana Yadav, Deptt. of ECE, IU, Lucknow",
    ],
    chair: [
      "Dr. Zohaib Hasan Khan, Deptt. of ECE, IU, Lucknow",
      "Dr. Usman Khan,  Deptt. of CSE, IU, Lucknow",
    ],
  },
  {
    title: "Stage, Bouquet & Memento",
    members: [
      "Dr. Anum Kamal, Deptt. of CSE, IU, Lucknow",
      "Dr. Saima Beg, Deptt. of ECE, IU, Lucknow",
      "Dr S.H. Abbas Rizvi, Deptt. of CSE, IU, Lucknow",
      "Ms Hina Parveen, Deptt. of CSE, IU, Lucknow",
      "Mr.Faizan Ahmad, Deptt. of CSE, IU, Lucknow",
      "Ms Saman Khan, Deptt. of CSE, IU, Lucknow",
      // "Mr. Mohd. Amir Ansari, Deptt. of ECE, IU, Lucknow",
      "Ms Falak Khursheed, Deptt. of CSE, IU, Lucknow",
    ],
    chair: [
      "Dr. Anum Kamal,  Deptt. of CSE, IU, Lucknow",
      "Dr. Saima Beg, Deptt. of ECE, IU, Lucknow",
    ],
  },
  {
    title: "Banner, Posters & Standee",
    members: [
      "Dr. Mohd. Suaib, Deptt. of CSE, IU, Lucknow",
      "Dr. Roshan Jahan, Deptt. of CSE, IU, Lucknow",
      "Mr Saif Ahmad, Deptt. of ECE, IU, Lucknow",
      "Ms Nida Khan, Deptt. of CSE, IU, Lucknow",
      "Ms Shaba Irram,  Deptt. of CSE, IU, Lucknow",
      "Ms. Aqsa Fatima, Deptt. of CSE, IU, Lucknow",
      // "Dr. Mohd Akbar, Deptt. of CSE, IU, Lucknow",
      // "Ms Mariyam Fatima, Deptt. of CSE, IU, Lucknow",
    ],
    chair: [
      "Dr. Mohd. Suaib, Deptt. of CSE, IU, Lucknow",
      "Dr. Roshan Jahan, Deptt. of CSE, IU, Lucknow",
    ],
  },
  {
    title: "Food & Refreshment",
    members: [
      "Mr Ajaz Hussain Warsi, Deptt. of CSE, IU, Lucknow",
      "Mr.Parveez Rauf Khan,  Deptt. of CSE, IU, Lucknow",
      "Mr Rahul Ranjan Tiwari,  Deptt. of CSE, IU, Lucknow",
      "Mr Balmukund Maurya,  Deptt. of CSE, IU, Lucknow",
      "Dr. Qazi Saeed Ahmad, Deptt. of ECE, IU, Lucknow",
      "Mr Obaidullah, Deptt. of CSE, IU, Lucknow",
      "Ms Noorishta Hasmi,  Deptt. of CSE, IU, Lucknow",
      "Mr Omar Badar Shafeeque, Deptt. of CSE, IU, Lucknow",
      // "Mr Anas Habib Zuberi, Deptt. of CSE, IU, Lucknow",
      // "Mr Saif Ahmad, Deptt. of ECE, IU, Lucknow",
      // "Dr. Saima Beg, Deptt. of ECE, IU, Lucknow",
    ],
    chair: [
      "Mr.Ajaz Hussain Warsi, Deptt. of CSE, IU, Lucknow",
      "Dr. Qazi Saeed Ahmad, Deptt. of ECE, IU, Lucknow",
    ],
  },
  {
    title: "Transport & Accommodation",
    members: [
      "Dr. Mohd. Akbar,  Deptt. of CSE, IU, Lucknow",
      "Mr.Anas Habib Zuberi,  Deptt. of CSE, IU, Lucknow",
      "Mr.Ehtesham hussain,  Deptt. of CSE, IU, Lucknow",
      "Ms Mariyam Fatima,  Deptt. of CSE, IU, Lucknow",
      "Ms.Tabassum ,Deptt. of CSE, IU, Lucknow",
      "Dr Sifatullah Siddiqui, Deptt. of CSE, IU, Lucknow",
      "Mr Minhajul Arfeen, Deptt. of CSE, IU, Lucknow",
      "Dr. Mohd Suhaib Kidwai, Deptt. of ECE, IU, Lucknow",
      // "Mr Danish Ahmad, Deptt. of CSE, IU, Lucknow",
      // "Ms Shaba Irram, Deptt. of CSE, IU, Lucknow",
      // "Mr Syed Arshad Ahmad, Deptt. of ECE, IU, Lucknow",
    ],
    chair: [
      "Dr. Mohd. Akbar,  Deptt. of CSE, IU, Lucknow",
      "Mr.Anas Habib Zuberi,  Deptt. of CSE, IU, Lucknow",
    ],
  },
  // {
  //   title: "Accommodation",
  //   members: [
  //     "Dr S.H. Abbas Rizvi, Deptt. of CSE, IU, Lucknow",
  //     "Dr Mohd Akbar, Deptt. of CSE, IU, Lucknow",
  //     "Mr Minhajul Arfeen, Deptt. of CSE, IU, Lucknow",
  //   ],
  // },

  {
    title: "Registration (For Participation), KIT & Certificate Distribution",
    members: [
      "Dr.Qazi Saeed Ahmad, Deptt. of ECE, IU, Lucknow",
      "Mr Aftab Alam, Deptt. of CSE, IU, Lucknow",
      "Ms.Saman Khan, Deptt. of CSE, IU, Lucknow",
      "Ms Shra Fatima, Deptt. of CSE, IU, Lucknow",
      "Ms Huma Ameen, Deptt. of ECE, IU, Lucknow",
      // "Dr Sheeba Praveen, Deptt. of CSE, IU, Lucknow",
      // "Mr Saif Ahmad, Deptt. of ECE, IU, Lucknow",
    ],
    chair: [
      "Dr.Qazi Saeed Ahmad, Deptt. of ECE, IU, Lucknow",
      "Mr Aftab Alam, Deptt. of CSE, IU, Lucknow",
    ],
  },
  {
    title: "Treasurer",
    members: [
      "Dr Jameel Ahmad, Deptt. of CSE, IU, Lucknow",
      "Dr. Mohd. Amir Ansari, Deptt. of ECE, IU, Lucknow",
      "Ms Ambreen Anees, Deptt. of CSE, IU, Lucknow",
      "Mr Mohammad Alam Khan, Deptt. of CSE, IU, Lucknow",
      "Ms Tabassum, Deptt. of CSE, IU, Lucknow",
      // "Mr Mohd Amir Ansari, Deptt. of ECE, IU, Lucknow",
    ],
    chair: [
      "Dr Jameel Ahmad, Deptt. of CSE, IU, Lucknow",
      "Ms Ambreen Anees, Deptt. of CSE, IU, Lucknow",
    ],
  },
  {
    title: "Media",
    members: [
      "Dr.Raziqa Masood,  Deptt. of CSE, IU, Lucknow",
      "Mr Abrarul Haq Siddiqui, Deptt. of CSE, IU, Lucknow",
      "Mr Omar Badar Shafeeque,  Deptt. of CSE, IU, Lucknow",
      "Mr Danish Ahmad,  Deptt. of CSE, IU, Lucknow",
      // "Dr Mohd Usman Khan, Deptt. of CSE, IU, Lucknow",
      // "Mr Saif Ahmad, Deptt. of ECE, IU, Lucknow",
    ],
    chair: ["Dr.Raziqa Masood,  Deptt. of CSE, IU, Lucknow"],
  },
  {
    title: "Web Administrator",
    members: [
      "Ms Saleha Mariyam, Deptt. of CSE, IU, Lucknow",
      // "Dr Shrish Bajpai, Deptt. of ECE, IU, Lucknow",
      "Ms Nazia Anjum, Deptt. of CSE, IU, Lucknow",
      // "Mr Naseer Ahmad, Deptt. of ECE, IU",
    ],
    chair: ["Ms Saleha Mariyam, Deptt. of CSE, IU, Lucknow"],
  },
  {
    title: "Draft for News Paper/Report",
    members: [
      "Dr Ankita Srivastava, Deptt. of CSE, IU, Lucknow",
      "Mr. Naseer Ahmad, Deptt. of ECE, IU",
      "Ms Yusra Beg, Deptt. of CSE, IU, Lucknow",
      "Ms Shaba Irram,  Deptt. of CSE, IU, Lucknow",
      // "Dr. Archana Yadav, Deptt. of ECE, IU, Lucknow",
      // "Ms Yusra Beg, Deptt. of CSE, IU, Lucknow",
      // "Mr Ajaz Hussain Warsi, Deptt. of CSE, IU, Lucknow",
      // "Mr Ehteshaam Hussain, Deptt. of CSE, IU, Lucknow",
    ],
    chair: ["Dr Ankita Srivastava, Deptt. of CSE, IU, Lucknow"],
  },
  {
    title: "Hospitality",
    members: [
      "Ms Noorishta Hashmi, Deptt. of CSE, IU, Lucknow",
      "Mr.Ehteshaam Hussain, Deptt. of CSE, IU, Lucknow",
      "Mr Parvez Rauf, Deptt. of CSE, IU, Lucknow",
      "Ms Hina Praveen, Deptt. of CSE, IU, Lucknow",
      "Mr. Mohd. Alam,  Deptt. of CSE, IU, Lucknow",
      "Ms Mariyam Kidwai, Deptt. of CSE, IU, Lucknow",
      "Ms.Mariyam Fatima, Deptt. of CSE, IU, Lucknow",
      "Ms Aqsa Fatima, Deptt. of CSE, IU, Lucknow",
      "Ms.Falak Khursheed, Deptt. of CSE, IU, Lucknow ",
      // "Dr. Zohaib Hasan Khan, Deptt. of ECE, IU, Lucknow",
      // "Dr Nudrat Fatima, Deptt. of CSE, IU, Lucknow",
      // "Dr. Zohaib Hasan Khan, Deptt. of ECE, IU, Lucknow",
      // "Ms Amina Bano, Deptt. of CSE, IU, Lucknow",
      // "Dr. Tarana Afrin Chandel, Deptt. of ECE, IU, Lucknow",
      // "Ms Ambreen Anees, Deptt. of CSE, IU, Lucknow",
      // "Dr. Shrish Bajpai, Deptt. of ECE, IU, Lucknow",
      // "Dr. Nupur Mittal, Deptt. of ECE, IU, Lucknow",
      // "Dr. Archana Yadav, Deptt. of ECE, IU, Lucknow",
    ],
    chair: [
      "Ms Noorishta Hashmi, Deptt. of CSE, IU, Lucknow",
      "Mr.Ehteshaam Hussain, Deptt. of CSE, IU, Lucknow",
    ],
  },
];

function CommitteeMembers() {
  return (
    <section className=" mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Committee Members
        </h1>

        <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-300 rounded-lg overflow-hidden">
          <thead className="bg-slate-200">
            <tr>
              <th className="text-left p-3 font-semibold w-1/4">Role</th>
              <th className="text-left p-3 font-semibold">Members</th>
              <th className="text-left p-3 font-semibold">Chair</th>
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
                <td className="p-3">
                  {section.chair ? (
                    <ul className="space-y-1 text-sm text-gray-700">
                      {section.chair.map((chair, i) => (
                        <li key={i}>• {chair}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-500 italic"></span>
                  )}
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
