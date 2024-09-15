import Link from "next/link";
import Image from "next/image";
import cclogo from "./assets/cclogo.png";
import cchub from "./assets/cchub.png";
import background from "./assets/background.png";
import bike from "./assets/bike.png";
import rect from "./assets/rect.png"




export default function Home() {
  return (
    <>
      <div className="login">
        <Image
          src={cclogo}
          width={58}
          height={58}
          alt="cchub-logo"
          style={{
            position: "absolute",
            top: "67px",
            left: "276px"
          }}
        />

        <p style={{
          position: "absolute",
          top: "277px",
          left: "153px",
          fontSize: "20px",
          fontWeight: "500",
          fontFamily: "Gilroy",
          color: "rgba(42, 42, 42, 1)"

        }} >Sign in to continue</p>
        <form>
          <input type="text" className="login-email" placeholder="Email Address" />
          <input type="password" className="login-pword" placeholder="Password" />
          <p className="show">SHOW</p>
          <div className="remember">
            <input type="checkBox" placeholder="Remember me" style={{
              border: "1px solid rgba(66, 66, 66, 1)",
              backgroundColor: "rgba(66, 66, 66, 1)"

            }} /><p style={{
              marginLeft: "8px",
              fontSize: "14px"
            }}> Remember me</p>
            <p style={{
              fontSize: "14px",
              marginLeft: "100px",
              color: "rgba(1, 72, 255, 1)",
              fontWeight: "700"

            }}> Forgot Password?</p>
          </div>
        </form>

      </div>
      <Link href={"/patients"}>
        <button type="button" className="home button" style={{
          position: "absolute",
          width: "340px",
          height: "60px",
          top: "520px",
          left: "153px",
          gap: "0px",
          opacity: "0px",

        }}>Login
        </button></Link>
      <div className="bottom">
        <p>Powered by</p><Image
          src={cchub}
          alt="cchub logo"
          width={95}
          height={23} />
      </div>
      <div className="right-side">
        <Image
          src={rect}
          alt="background"
          width={835}
          height={580}
          style={{
            position: "absolute",
            left: "644px",
            top: "-80px",
            zIndex: "0"
          }}
        />
        <Image
          src={background}
          alt="background-image"
          width={885}
          height={580}
          style={{
            position: "absolute",
            left: "582px",
            top: "4px",
            zIndex: "2"
          }}
        />
        <Image
          src={bike}
          alt="bike"
          width={433}
          height={320}
          style={{
            position: "absolute",
            left: "782px",
            top: "257px",
            zIndex: "10"
          }}
        />
      </div>
      <p style={{
        color: "white",
        position: "absolute", fontWeight: "700", fontSize: "28px", top: "600px", left: "751px", zIndex: "11"
      }}>Serving Patients During a Pandemic<br />
        <span className="front" style={{
          fontSize: "16px", fontWeight: "400", marginTop: "0px"
        }}>Deliving essential medication to NIMR patients with adherence<br />
          to quality of service, care and confidentiality.
        </span></p>
    </>);
}
