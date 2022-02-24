import { FaCircleNotch, FaEye, FaClock } from "react-icons/fa"

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="contain">
        <div className="col-md-4">
          <span>
            <FaCircleNotch />
          </span>
          <p>
            Memory Mint NFTs are specially designed spherical meshes with
            360-video images baked in.
          </p>
        </div>
        <div className="col-md-4">
          <span>
            <FaEye />
          </span>
          <p>
            Mesmerizing and hypnotic just to look at, the real magic happens
            when you click on the nameplate.
          </p>
        </div>
        <div className="col-md-4">
          <span>
            <FaClock />
          </span>
          <p>
            A simple click transports you into the sphere, where you can
            experience the memory in all 360-degrees.
          </p>
        </div>
      </div>
    </div>
  )
}
