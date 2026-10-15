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
      "Prof. Ameer Azam, ZHCET, AMU Aligarh",
      "Prof. R. Manohar, Vice-Chancellor, DSPMU, Jharkhand ",
      "Dr. Isht Vibhu, YDPG College, Lakhimpur",
      "Prof. P.K. Bharti, IU, Lucknow",
      "Prof. Manoj Singh, Central University Harayana, Harayana",
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
      "Prof. G.R. Mishra, Former Vice Chancellor, Avadh University, Ayodhya",
      "Prof. Manoj Kumar Shukla, Director REC Kannauj",
      "Ms. Poonam Pathak, BBD University, Lucknow",
      "Prof. Brajesh Varshney, Director, KIT Kanpur",
      "Dr Rajender Kumar, NIT Kurukshetra",
      "Dr. Soumya K. Ghosh Professor, Department of Computer Science and Engineering , Indian Institute of Technology Kharagpur",
      "Prof. B Yegnanarayana, AE JASA, FNAE, FNA, FASc, FIEEE, FISCA, FAPAS, Life Fellow, IIT Kharagpur, Adjunct Faculty, IIT Tirupati, Distinguished Professor, IIT Hyderabad, INSA Hon Scientist and Emeritus Professor, International Institute of Information Technology",
      "Prof. S Venkatesan, Professor , Dept. of IT, IIIT Allahabad",
      "Prof. Bhabatosh Chanda, FIAPR, FNASc., FIETE, FNAE, FAAIA , ECS Unit, Indian Statistical Institute, Kolkata (Retd.)",
      "Dr. B. K. TripathyProfessor (HAG), School of Computer Science Engineering and Information Systems, VIT, Vellore-632014, Tamil Nadu, India",
      "S. N. Omkar, Chief Research Scientist Guidance & Control, Department of Aerospace Engineering, Indian Institute of Science, Bangalore",
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
      "Prof. Harsh Vikram Singh, KNIT, Sultanpur",
      "Dr. Anurag K Srivastava, Washington State University, Pullman, Washington",
      "Prof. Elias Randjbaran, Faculty of Engineering, University Putra Malaysia, Malaysia",
      "Dr. Abhishek Kumar Srivastava, HKUST, Hong Kong",
      "Dr. E. Altuntas, Gaziosmanpasa University, Tokat",
      "Dimitrios A. Karras, Assoc. Professor at NKUA, School of Science",
      "Dr. Shailendra Kumar, Republic of Korea",
      "Ashutosh Dutta, Ph.D,Senior Scientist/5G Chief Strategist,Director, JHU Doctor of Engineering Program,Lawrence R. Hafstad Sabbatical Fellow at JHU",
      "Sajal K. Das, Ph.D., Fellow of IEEE, NAI, AAIA, Daniel St. Clair Endowed Chair, Curators' Distinguished Professor, Department of Computer ScienceMissouri University of Science and Technology",
      "Sanjay Madria, Ph.D., Curators’ Distinguished Professor, Computer Science Department, Missouri University of Science and Technology, Rolla",
    ],
  },
];

function AdvisoryCommittee() {
  return (
    <section className=" mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Advisory Committee
        </h1>

        <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
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
