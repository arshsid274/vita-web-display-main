import majinderSandhu from "../assets/Doc/dr-(col)-manjinder-sandhu-11494 (1).png";

const doctors = [
  {
    name: "Dr. Narayan Hulse",
    title: "PRINCIPAL DIRECTOR ORTHOPAEDICS",
    location: "Fortis BG Road",
    specialty: "Orthopaedics | Joint Replacement | Robotic and Computer navigated Joint reconstruction",
    experience: "21 Years",
    
    image: majinderSandhu, // Replace with correct image
  },
  {
    name: "Dr. Naresh Kumar Goyal",
    title: "PRINCIPAL DIRECTOR & HOD CARDIOLOGY & HEART FAILURE PROGRAMME",
    location: "Fortis Shalimar Bagh",
    specialty: "Cardiac Sciences | Interventional Cardiology",
    experience: "18 Years",
   
    image: majinderSandhu,
  },
  {
    name: "Dr. Nishith Chandra",
    title: "PRINCIPAL DIRECTOR CARDIOLOGY",
    location: "Fortis Okhla",
    specialty: "Cardiac Sciences | Interventional Cardiology",
    experience: "30 Years",
   
    image: majinderSandhu,
  },
  {
    name: "Dr. Nishith Chandra",
    title: "PRINCIPAL DIRECTOR CARDIOLOGY",
    location: "Fortis Okhla",
    specialty: "Cardiac Sciences | Interventional Cardiology",
    experience: "30 Years",
   
    image: majinderSandhu,
  },
  {
    name: "Dr. Nishith Chandra",
    title: "PRINCIPAL DIRECTOR CARDIOLOGY",
    location: "Fortis Okhla",
    specialty: "Cardiac Sciences | Interventional Cardiology",
    experience: "30 Years",
   
    image: majinderSandhu,
  },
  {
    name: "Dr. Nishith Chandra",
    title: "PRINCIPAL DIRECTOR CARDIOLOGY",
    location: "Fortis Okhla",
    specialty: "Cardiac Sciences | Interventional Cardiology",
    experience: "30 Years",
   
    image: majinderSandhu,
  },
];

const Doctor = () => {
  return (
    <div className="my-8 px-8 md:px-28 ">
      <div className="bg-gradient-trust rounded-2xl p-8 text-primary-foreground">
        <h2 className="text-center text-2xl font-bold">Our Doctors</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 sm:px-2 md:px-0  py-4 ">
        {doctors.map((doc, idx) => (
          <div key={idx} className="border rounded-lg shadow p-4 flex flex-col items-center bg-white ">
            <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full object-cover mb-4" />
            <h3 className="text-lg font-semibold text-center">{doc.name}</h3>
            <p className="text-sm text-gray-600 text-center">{doc.title}</p>
            <p className="text-sm text-gray-500 mb-2 text-center">{doc.location}</p>
            <p className="text-sm italic text-center">{doc.specialty}</p>
            <div className="mt-2 text-center">
              <p className="font-semibold">{doc.experience}</p>
              
            </div>
            {/* <div className="flex gap-2 mt-4">
              <button className="bg-blue-500 text-white px-4 py-1 rounded">View Profile</button>
              <button className="bg-pink-500 text-white px-4 py-1 rounded">Book Appointment</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor;
