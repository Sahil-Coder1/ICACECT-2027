function ImpDate() {
  const dates = [
    {
      date: "15 September, 2026",
      event: "Notification of Acceptance",
    },
    {
      date: "30 September, 2026",
      event: "Final Camera Ready Paper",
    },
    {
      date: "15 October, 2026",
      event: "Registration Deadline",
    },
  ];

  return (
    <div className="max-w-sm bg-white border rounded-xl shadow-sm p-5">
      {/* Heading */}
      <div className="bg-slate-900 text-white rounded-md py-3 mb-4 text-center">
        <h2 className="text-lg font-semibold">Important Dates</h2>
      </div>

      {/* Dates List */}
      <div className="space-y-4">
        {dates.map((item, index) => (
          <div key={index}>
            <p className="text-slate-900 font-semibold text-sm">{item.date}</p>

            <p className="text-gray-700 text-sm">{item.event}</p>

            {/* Divider */}
            {index !== dates.length - 1 && (
              <div className="border-t border-dashed border-gray-300 mt-3"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImpDate;
