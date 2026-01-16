import Cards from "./Cards";

const App = () =>{

  const arr = [
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_logo.svg",
    "companyName": "Google",
    "datePosted": "1 day ago",
    "post": "Software Engineer III, Technical Infrastructure",
    "tag1": "Full-time",
    "tag2": "Mid-Level",
    "pay": "$95.00/hr",
    "location": "Mountain View, CA"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    "companyName": "Meta",
    "datePosted": "22 hours ago",
    "post": "Software Engineer, Machine Learning",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": "$115.00/hr",
    "location": "London, UK"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "companyName": "Amazon (AWS)",
    "datePosted": "3 days ago",
    "post": "Cloud Support Associate",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "pay": "$45.00/hr",
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "companyName": "Apple",
    "datePosted": "5 days ago",
    "post": "Systems Software Engineer (Kernel)",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": "$125.00/hr",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "companyName": "Microsoft",
    "datePosted": "4 days ago",
    "post": "Senior Product Manager (Edge)",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "pay": "$105.00/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "companyName": "Netflix",
    "datePosted": "1 week ago",
    "post": "UI Engineer (L5)",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "pay": "$85.00/hr",
    "location": "Los Gatos, CA"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    "companyName": "Google Cloud",
    "datePosted": "2 days ago",
    "post": "Application Engineer (Java/Python)",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "pay": "$55.00/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    "companyName": "Meta",
    "datePosted": "1 month ago",
    "post": "Software Engineer (University Grad)",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "pay": "$60.00/hr",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "companyName": "Amazon",
    "datePosted": "2 weeks ago",
    "post": "Software Development Engineer II",
    "tag1": "Full-time",
    "tag2": "Mid-Level",
    "pay": "$98.00/hr",
    "location": "Seattle, WA"
  },
  {
    "brandLogo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "companyName": "Apple",
    "datePosted": "10 days ago",
    "post": "Field Services Engineer",
    "tag1": "Full-time",
    "tag2": "Mid-Level",
    "pay": "$52.00/hr",
    "location": "Mumbai, India"
  }
];

  return(
    <>
      <div className="parent">
        {
          arr.map((el,i)=>{
            <div></div>
            return <Cards key={i} company={el.companyName} image={el.brandLogo} date={el.datePosted} post={el.post} t1={el.tag1} t2={el.tag2} pay={el.pay} location={el.location}  />
          })
        }
      </div>
    </>
  )
}

export default App
