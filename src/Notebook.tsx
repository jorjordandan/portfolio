import { useStore } from "./state.js";

export default function Notebook() {
  const notebook = useStore((state) => state.notebook);
  const hideNotebook = useStore((state) => state.hideNotebook);

  return (
    <>
      {notebook.visible && (
        <div className="notebook">
          <div className="page left">
            {" "}
            <div className="notebook-dismiss" onClick={hideNotebook}>
              Close X
            </div>
            <div className="screen-title">ULTRA SECRET NOTES</div>
            <div>Computer password (Missy Elliot encrypted):</div>
            <div className="missy">12345drowssap</div>

            <div>In case I get amnesia and forget who I am: <br/>I'm Jordan Davis, a full stack react/react-native developer.
              I mostly work in react native, but I also like to build things with react-three-fiber, vite, zustand, react-spring, use-sound, drei, and typescript.
               </div>
            <div>
            <div>
              My email address:
              <a href="mailto:jordan@jordandavis.ca?subject=I want to give you money for no reason!">
                {" "}
                jordan@jordandavis.ca
              </a>
            </div>
              My tweeter:<a href="https://twitter.com/jrdndvs">@jrdndvs</a>
              <div>Remember: You can do it!</div>
            </div>
          </div>
          <div className="pageMiddle"></div>
          <div className="page right">
            Asset credits.
           {licenses.map((license, idx) => {
             const title = Object.keys(license);
              return (
                <div key={title.name}>
                  <div className="license-title">{license.name}</div>
                  <div className="license-text">
                  <a href={license.link}>Model link</a> <br/>
                  <a href={license.authLink}> {license.author} </a> <br/> License: <a href={license.licLink}>{license.lic}</a>
                  </div>
                </div>
              );
            
           })}
           <div className="license-title">Things by me:</div>
           <div className="license-text">
       Music and sound effects built on an OP-1. Autonomous chair, autonomous desk, speakers, puzzle box, shelves, room, deskmat, etc. modeled in blender, I will post some of them to sketchfab at some point.
           </div>
          </div>
        </div>
      )}
    </>
  );
}

const licenses = [
 { name: "Wooden Owl",
   link: "https://sketchfab.com/3d-models/wooden-owl-rawscan-ca1f7d67dda34644a50729b95fe17d18",
   author: " Andrea Spognetta (Spogna)",
   authLink: "https://sketchfab.com/spogna",
   lic: "CC-BY-NC-4.0",
   licLink: "http://creativecommons.org/licenses/by-nc/4.0/"
},

  { name: "3D Printer",
    link: "https://sketchfab.com/3d-models/3d-printer-0e825a8d48b14bee883a131fe029d4fc",
    author: "Gregsterius",
    authLink: "https://sketchfab.com/Gregsterius" ,
    lic: "CC-BY-4.0",
    licLink: "http://creativecommons.org/licenses/by/4.0/" ,

  },

 { 
  name:  "IKEA desk-lamp",
  link: "https://sketchfab.com/3d-models/ikea-desk-lamp-4809e04a904044adb4e690980f155d9e",
  author: "szymon.burek",
  authLink: "https://sketchfab.com/szymon.burek" ,
  lic: " CC-BY-4.0",
  licLink: "http://creativecommons.org/licenses/by/4.0/" ,
 },

  {
    name: "Outlet",
    link: "https://sketchfab.com/3d-models/outlet-0e5e674706974836bf792c7f4ab0bb76",
    author: "Brandon Funk",
    authLink: "https://sketchfab.com/texasfunk101" ,
    lic: "CC-BY-4.0",
    licLink: "http://creativecommons.org/licenses/by/4.0/" ,
    },

  { name:  "Lowpoly 65% Mechanical Keyboard",
  link: "https://sketchfab.com/3d-models/lowpoly-65-mechanical-keyboard-0cdd429eb08549ac954352169de5c8f8",
  author: "sleepyjoshua" ,
  authLink:"https://sketchfab.com/sleepyjoshua",
  lic: "CC-BY-4.0",
  licLink: "http://creativecommons.org/licenses/by/4.0/",
},
  {
    name:  "Home Office | Blender Asset Pack",
    link: "https://sketchfab.com/3d-models/home-office-blender-asset-pack-9abf2f407b2945dd9fbdf918ce6e10ff",
    author: "Benji Labs" ,
    authLink:  "https://sketchfab.com/benjilabs",
    lic: "CC-BY-4.0",
    licLink: "http://creativecommons.org/licenses/by/4.0/",
},
{
  name:  "OP1 by Teenage Engineering",
  link: "https://sketchfab.com/3d-models/op1-by-teenage-engineering-a33b339ba10043dab98c527b1f0a113d",
  author: "farty" ,
  authLink:  "https://sketchfab.com/farty",
  lic: "CC-BY-4.0",
  licLink: "http://creativecommons.org/licenses/by/4.0/",
},
   
];
