import Image from "next/image"
import LogoPic from '/public/logo/logo-gym.jpg'



function Logo() {
  return(
    <>
    <div>
      <a href="!/">
        <Image
          src={LogoPic}
          alt="The gym fitness studio"
          width={60}
          height={60}
          style={{borderRadius: '50%'}}
      />
      </a>
    </div>
  </>
  )
}

export default Logo