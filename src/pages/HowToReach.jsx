import { Plane, Train, Bus, Car } from "lucide-react";

function HowToReach() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">How To Reach</h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Lucknow is well connected by road, rail, and air from every part of the
        country. Integral University is located on Kursi Road, making it easily
        accessible.
      </p>

      <div className="space-y-6">
        <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-2">
            <Plane className="text-blue-500" />
            <h2 className="text-xl font-semibold">
              Airport to Integral University
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Participants arriving by air can take a taxi from Chaudhary Charan
            Singh International Airport to the university. The distance is
            approximately
            <strong> 30 km</strong> and takes around{" "}
            <strong>35–45 minutes</strong>. Ola and Uber are easily available
            with fares around ₹250–₹400.
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-2">
            <Train className="text-green-500" />
            <h2 className="text-xl font-semibold">Charbagh Railway Station</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            From Charbagh Railway Station, you can take a taxi (Ola/Uber) or a
            shared auto. The distance is about <strong>18–20 km</strong> and
            travel time is
            <strong> 35–45 minutes</strong> depending on traffic.
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-2">
            <Bus className="text-yellow-500" />
            <h2 className="text-xl font-semibold">Alambagh Bus Station</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            From Alambagh Bus Station, taxis and shared autos are available. The
            distance is around <strong>20–22 km</strong> and takes
            <strong> 35–45 minutes</strong> to reach the university.
          </p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-2">
            <Car className="text-red-500" />
            <h2 className="text-xl font-semibold">By Personal Vehicle</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Participants traveling by their own vehicle can easily navigate
            using Google Maps. The campus is located on Kursi Road and is
            well-marked.
          </p>

          <a
            href="https://maps.app.goo.gl/yA2mayz6YhafCnZT9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-600 hover:underline text-sm"
          >
            Open in Google Maps →
          </a>
          <div className="mt-8 rounded-full w-fit">
            <div className="rounded-[30px] overflow-hidden hover:shadow-2xl transition">
              <iframe
                title="Integral University Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.14444033886!2d80.99531160582937!3d26.95814978595655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff2addd9b239%3A0xc21a9bbd557936ec!2sIntegral%20University!5e1!3m2!1sen!2sus!4v1775848730485!5m2!1sen!2sus"
                className="sm:h-80 md:h-96 sm:w-80 md:w-96 object-cover border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToReach;
