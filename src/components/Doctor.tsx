import manishnigam from "../assets/Doc/dr-(col)-manjinder-sandhu-11494 (1).png";
import rajivkakkad from "../assets/Doc/dr-ajit-singh-narula-1066.jpg";
import suhasan from "../assets/Doc/dr-ajay-kaul-6323.jpg";
import vinaygupta from "../assets/Doc/dr-ajay-kumar-kriplani-1299.png";
import asifaijaz from "../assets/Doc/dr-anil-saxena-27.jpg";
import shalinisrivastava from "../assets/Doc/dr-anil-mandhani-4722.jpg";
import rahulmishra from "../assets/Doc/dr-ajay-kaul-6323.jpg";
import mohitkhatri from "../assets/Doc/dr-ajay-kaul-6323.jpg";
import faizalzubair from "../assets/Doc/dr-ajay-kaul-6323.jpg";
import sunita from "../assets/Doc/dr-ajay-kaul-6323.jpg";
import raptitrivadei from "../assets/Doc/dr-ajay-kaul-6323.jpg";


const doctors = [
  {
    name: "Dr. Manish Nigam",
    title: "Psychiatrist",
    location: "Kanpur",
    specialty: "Mental Health",
    experience: "21 Years",
    image: manishnigam, // Replace with correct image
  },
  {
    name: "Dr. Rajeev Kakkad",
    title: "Dermatologist",
    location: "Kanpur/Noida",
    specialty: "Dermatology | Skin & Hair Treatments",
    experience: "18 Years",
    image: rajivkakkad,
  },
  {
    name: "Dr. Su Hasan",
    title: "General Physician",
    location: "Kanpur",
    specialty: "Internal Medicine",
    experience: "30 Years",
    image: suhasan,
  },
  {
    name: "Dr. Asif Aijaz",
    title: "Eye Specialist",
    location: "Kanpur",
    specialty: "Ophthalmology | Eye Care",
    experience: "30 Years",
    image: asifaijaz,
  },
  {
    name: "Dr. Shalini Srivastava",
    title: "Gynecologist & Obstetrician",
    location: "Lucknow | Noida",
    specialty: "Gynecology | Obstetrics",
    experience: "30 Years",
    image: shalinisrivastava,
  },
  {
    name: "Dr. Rahul Mishra",
    title: "Dermatologist",
    location: "Noida",
    specialty: "Skin Care",
    experience: "30 Years",
    image: rahulmishra,
  }
];

const Doctor = () => {
  return (
    <div id="doctors" className="my-8 px-8 container mx-auto px-4 ">
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
              {/* <p className="font-semibold">{doc.experience}</p> */}
              
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
