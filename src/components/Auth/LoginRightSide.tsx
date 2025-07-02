import logo from "../../assets/logos/meerusVR-logo.png";
import layer1 from "../../assets/logos/layer1.png";
import later2 from "../../assets/logos/layer2.png";

const LoginRightSide = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6  overflow-hidden">
      <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] ">
        <div
          style={{ transform: "rotate(-20.86deg)" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Shape 1 */}
          <img
            src={layer1}
            alt="3D Shape Layer 1"
            className="absolute inset-0 w-full h-full object-contain z-20 scale-[2.4] -translate-x-3"
          />

          {/* Shape 2 */}
          <img
            src={later2}
            alt="3D Shape Layer 2"
            className="absolute inset-0 w-full h-full object-contain z-10"
          />
        </div>
      </div>

      <div className="text-center items-center -mt-24">
        <img src={logo} alt="MeetusVR Logo" className="mx-auto w-[350px] h-[100px] mb-2 drop-shadow-lg" />
      </div>
    </div>
  );
};

export default LoginRightSide;

