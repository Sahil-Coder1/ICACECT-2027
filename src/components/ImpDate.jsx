import { useEffect, useRef, useState } from "react";

function ImpDate() {
  const dates = [
    {
      date: "1 May, 2026",
      event: "Paper Submission Starts",
    },
    {
      date: "15 September, 2026",
      event: "Paper Submission Last Date",
    },
    {
      date: "15 October, 2026",
      event: "Notification of Acceptance",
    },
    {
      date: "20 November, 2026",
      event: "Final Camera Ready Paper Submission",
    },
    {
      date: "10 December, 2026",
      event: "Registration Deadline",
    },
  ];

  const extendedDates = [...dates, ...dates.slice(0, 3)];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (index === dates.length) {
      setTimeout(() => {
        setIndex(0);
      }, 700);
    }
  }, [index, dates.length]);

  return (
    <div className="max-w-sm bg-white border rounded-xl shadow-sm p-5 overflow-hidden">
      <div className="bg-red-600 text-white rounded-md py-3 mb-4 text-center">
        <h2 className="text-lg font-semibold">Important Dates</h2>
      </div>

      <div className="h-[180px] overflow-hidden">
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${index * 60}px)`,
          }}
        >
          {extendedDates.map((item, i) => (
            <div
              key={i}
              className="h-[60px] flex flex-col justify-center border-b border-dashed border-gray-300"
            >
              <p className="text-red-500 font-semibold text-sm">{item.date}</p>
              <p className="text-gray-700 text-sm">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpDate;
