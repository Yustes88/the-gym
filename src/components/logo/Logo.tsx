import Image from "next/image"
import LogoPic from '/public/logo/logo-gym.jpg'
import { useStyles } from "./styles"



function Logo() {
  const {classes} = useStyles();
  return(
    <>
    <div>
      <a href="!/">
        <Image
          src={LogoPic}
          alt="The gym fitness studio"
          className={classes.logo}
          priority
      />
      </a>
    </div>
  </>
  )
}

export default Logo