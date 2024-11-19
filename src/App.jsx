import { useEffect, useState } from "react";
import { createClient } from "pexels";
import "./App.css";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import Not from "./component/Not";
import Footer from "./component/Footer";
import Shimmer from "./component/Shimmer";
import Offnet from "./component/Offnet";

function App() {

  // internet logic
  const [net,setnet]=useState(navigator.onLine)
  console.log("LLL",net);

  function internet(){
    if(navigator.onLine){
      setnet(true)
    }
     else{
      setnet(false)
     }
  }
 
  window.addEventListener('online',internet)
  window.addEventListener('offline',internet)
  
  const [data, setdata] = useState([]);
  const [cat, setcat] = useState("Nature");
  const [shimmer, setshimmer] = useState(true);


  function getvalue(d) {
    setcat(d);
  }

  // Pexels API key
  const client = createClient(
    "slyBv76iGiJH0vM6Fds5VvgqlOkIJCLmpBouH8GLSVPXoStTlpJb0QKO"
  );
  const query = cat;

  useEffect(() => {
    setshimmer(true);
    client.photos.search({ query, per_page: 200 }).then((photos) => {
      
      setdata(photos.photos);
      console.log(photos);
      
      setshimmer(false);
    });
  }, [cat]);

  return (
    <>
    { !net ? <Offnet/>
    :
    <>
      <Navbar getvalue={getvalue} />
      {shimmer ? (
        <Shimmer />
      ) : (
        <>
          <div className="w-full h-[70px]"></div>
          {data.length > 0 ? <Main data={data} /> : <Not />}
          <div className="flex items-center w-full justify-center flex-col">
            <h1 className="text-2xl font-semibold mb-3 mt-2 text-white">
              All About Me
            </h1>
            {/* animation */}
            <div
              className="w-[76%] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                backgroundSize: "200% 100%", // Makes the gradient stretch for a longer distance
                animation: "slide 2s linear infinite", // Uses the CSS animation defined above
              }}
            ></div>
          </div>
          <Footer />
        </>
      )}
    </>
}
    </>
  );
}

export default App;
