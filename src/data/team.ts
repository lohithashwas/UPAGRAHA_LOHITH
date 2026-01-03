export interface TeamMember {
    name: string;
    role: string;
    image: string;
    category: "ECEA" | "IETE-SF" | "RACE";
}

export const teamData: TeamMember[] = [
    // ECEA Members
    { name: "M Raeef", role: "President", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/MOHAMMED%20RAEEF%20ECE.jpeg", category: "ECEA" },
    { name: "Harinee V T", role: "Vice-President", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/HARINEE%20V%20T%20ECE.jpg", category: "ECEA" },
    { name: "Balaji S", role: "Secretary", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/BALAJI%20S%20ECE.jpg", category: "ECEA" },
    { name: "Surya K", role: "Treasurer", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/SURYA%20K%20ECE.jpg", category: "ECEA" },
    { name: "Anushri V", role: "Executive Member", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/ANUSHRI%20V%20ECE.jpg", category: "ECEA" },
    { name: "Preethika R", role: "Executive Member", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/PREETHIKA%20R%20ECE.jpg", category: "ECEA" },
    { name: "Sudesh Pillai", role: "Executive Member", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/SUDESH%20SHRIKANT%20PILLAI%20ECE.jpg", category: "ECEA" },
    { name: "Lavanya P", role: "Executive Member", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/LAVANYA%20P%20ECE.jpg", category: "ECEA" },
    { name: "N.Yaazhinii", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/N%20YAAZHINII%20ECE.jpg", category: "ECEA" },
    { name: "Abhimanyu Singh Bhati", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/ABHIMANYU%20SINGH%20BHATI%20ECE.jpg", category: "ECEA" },
    { name: "Prathiba MSK", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/ECEA-MEMBERS/PRATHIBA%20S.png", category: "ECEA" },

    // IETE-SF Members
    { name: "Yaaminy S K", role: "Chairwoman", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/YAAMINY%20S%20K%20ECE.JPG", category: "IETE-SF" },
    { name: "Roobuck Ganeshwara Rao C", role: "Vice-Chairman", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/Roobuck%20ganeshwara%20rao%20C.jpg", category: "IETE-SF" },
    { name: "Harini Chinnasamy", role: "Honorary Secretary", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/HARINI%20C%20ECE.jpeg", category: "IETE-SF" },
    { name: "Bawadharani Sree R", role: "Honorary Treasurer", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/BAWADHARANI.jpg", category: "IETE-SF" },
    { name: "Tejaswi S", role: "Executive Member", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/TEJASWI%20S%20ECE.jpeg", category: "IETE-SF" },
    { name: "Rohith Kanna S", role: "Executive Member", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/ROHITH%20KANNA%20S%20ECE.JPG", category: "IETE-SF" },
    { name: "Karunya D", role: "Executive Member", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/KARUNYA%20D%20ECE.jpg", category: "IETE-SF" },
    { name: "Sanjana Praveen", role: "Executive Member", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/SANJANA%20PRAVEEN%20KUMAR%20ECE.jpg", category: "IETE-SF" },
    { name: "A Aadhithya Narayanan", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/A%20AADHITHYA%20NARAYANAN%20ECE.jpg", category: "IETE-SF" },
    { name: "Mahalakshmi L", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/MAHALAKSHMI%20L%20ECE.jpg", category: "IETE-SF" },
    { name: "Viswanathan L", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/IETE-MEMBERS/VISWANATHAN%20L%20ECE.jpg", category: "IETE-SF" },

    // RACE Members
    { name: "Roshan M", role: "President", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/ROSHAN.JPG", category: "RACE" },
    { name: "Adarsh S", role: "Vice-President", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/ADARSH%20S.jpg", category: "RACE" },
    { name: "Lakshanaa A M", role: "Secretary", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/LAKSHANA%20ECE.jpg", category: "RACE" },
    { name: "B.S.Aarti", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/B%20S%20AARTI%20ECE.jpg", category: "RACE" },
    { name: "Preethika R", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/PREETHIKA%20R%20ECE.jpg", category: "RACE" },
    { name: "Sanjai P", role: "Joint Secretary", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/SANJAI%20P%20ECE.jpg", category: "RACE" },
    { name: "Balasaraswathy B", role: "Lead Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/BALASARASWATHY%20B%20ECE.jpg", category: "RACE" },
    { name: "Aswin Kumar K", role: "Lead Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/ASWIN%20KUMAR%20K.jpg", category: "RACE" },
    { name: "Vikash S K", role: "Lead Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/vikash%20Krishnakumar.jpg", category: "RACE" },
    { name: "Lohith Ashwa S", role: "Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/LOHITH%20ASHWA%20S%20ECE.jpg", category: "RACE" },
    { name: "Muhilan S", role: "Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/MUHILAN%20S%20ECE.jpg", category: "RACE" },
    { name: "Srivatsan S P", role: "Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/SRIVATSAN%20S%20P%20ECE.jpg", category: "RACE" },
    { name: "Shriram Kumar V", role: "Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/SHRIRAM%20KUMAR%20V%20ECE.jpg", category: "RACE" },
    { name: "Vinayagamurthi E", role: "Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/VINAYAGAMURTHI%20E%20ECE.jpg", category: "RACE" },
    { name: "Sudhan S", role: "Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/SUDHAN%20S%20ECE.png", category: "RACE" },
    { name: "Rithvik R", role: "Mentor", image: "https://ecea-iete-sf-race.vercel.app/RACE-MEMBERS/RITHVIK%20R%20ECE.jpg", category: "RACE" },
];

export const categories = ["ECEA", "IETE-SF", "RACE"] as const;
