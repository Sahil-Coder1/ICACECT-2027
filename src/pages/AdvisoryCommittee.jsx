import React from "react";

const advisoryData = [
  {
    category: "National Advisory Committee",
    members: [
      "Prof. J. Ramkumar, IIT, Kanpur",
      "Prof. Ekram Khan, A.M.U., Aligarh",
      "Dr. Faizan Ullah Khan, BARC, Kalpakkam",
      "Dr. Aseem Chandel, REC, Mainpuri",
      "Prof. Prabhakar Tiwari, MMTU, Gorakhpur",
      "Dr. C.S. Azad, Hony. Secretary – SEEM, DGM, BSNL",
      "Dr. Yusuf Yasin, IU, Deptt. of ECE, Lucknow",
      "Dr. Puneet Mishra, Lucknow University, Lucknow",
      "Dr. Maroof A. Siddiqui, Deptt. of ECE, Saudi Arabia",
      "Dr. Piyush Charan, Deptt. of ECE, MRU, Faridabad",
      "Dr. S.P. Singh, Amity University, Noida",
      "Dr. Savita Maurya, Intel, Bangalore",
      "Dr. Vinay Rishiwal, IIT, Kanpur",
      "Prof. Yatindra Nath Singh, IIT, Kanpur",
      "Dr. Jay Singh, GL Bajaj ITM Greater Noida",
      "Prof. K.L. Yadav, IIT Roorkee",
      "Prof. R.K. Singh, BHU, Varanasi",
      "Prof. Raees Ahmad Khan, Professor & Head, Department of IT, Babasaheb Bhimrao Ambedkar University",
      "Prof. Ashok Kumar, HBTI, Kanpur",
      "Prof. Ameer Azam, ZHCET, AMU Aligarh",
      "Prof. R. Manohar, Lucknow University, Lucknow",
      "Dr. Isht Vibhu, YDPG College, Lakhimpur",
      "Prof. P.K. Bharti, IU, Lucknow",
      "Dr. Manoj Singh, University of Aveiro, Portugal",
      "Dr. Deepam Maurya, VISU, Virginia, United States",
      "Dr. Mahendra Agnihotri, Lucknow University, Lucknow",
      "Dr. Arun Prakash, NIT, Allahabad",
      "Mr. Rajan Mishra, MMMTU, Gorakhpur",
      "Mr. A.K. Srivastava, SRMCEM, Lucknow",
      "Dr. S.K. Nayak, BBAU, Lucknow",
      "Dr. Md. Faisal, IU, Lucknow",
      "Mr. Manish Gupta, BBDNIIT, Lucknow",
      "Dr. A.K. Singh, Amity, Lucknow",
      "Dr. K.K. Singh, Amity University, Lucknow",
      "Dr. Deependra Pandey, Amity University, Lucknow",
      "Dr. G.R. Mishra, Faizabad University, Faizabad",
      "Dr. Manoj Kumar Shukla, HBTU, Kanpur",
      "Ms. Poonam Pathak, BBD University, Lucknow",
      "Prof. Brajesh Varshney, Director, KIT Kanpur",
      "Dr Rajender Kumar, NIT Kurukshetra",
    ],
  },
  {
    category: "International Advisory Committee",
    members: [
      "Prof. Danila Parygin, Volgograd State Technical University, Russia",
      "Dr. Fakhrul Hazman Yusoff, Universiti Teknologi",
      "Dr. Sapuan Salit, Universiti Putra Malaysia",
      "Dr. Zubair Khan, Taibah University, Madina",
      "Prof. M.A. Badar, Indiana State University, USA",
      "Prof. Ahmad Harb, Jordan University, Jordan",
      "Prof. Abu Bakar Abdul Hamid, University Putra Malaysia, Malaysia",
      "Dr. Harsh Vikram Singh, KNIT, Sultanpur",
      "Dr. Anurag K Srivastava, Washington State University, Pullman, Washington",
      "Prof. Elias Randjbaran, Faculty of Engineering, University Putra Malaysia, Malaysia",
      "Dr. Abhishek Kumar Srivastava, HKUST, Hong Kong",
      "Dr. E. Altuntas, Gaziosmanpasa University, Tokat",
      "Dimitrios A. Karras, Assoc. Professor at NKUA, School of Science",
      "Dr. Shailendra Kumar, Republic of Korea",
    ],
  },
];

function AdvisoryCommittee() {
  return (
    <section className=" mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div className="text-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold">Advisory Committee</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-slate-300 rounded-lg overflow-hidden">
          <thead className="bg-slate-200">
            <tr>
              <th className="text-left p-3 font-semibold w-1/4">Category</th>
              <th className="text-left p-3 font-semibold">Members</th>
            </tr>
          </thead>

          <tbody>
            {advisoryData.map((section, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 font-bold text-blue-600 align-top">
                  {section.category}
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

export default AdvisoryCommittee;
