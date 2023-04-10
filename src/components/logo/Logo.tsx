import Image from "next/image"
import LogoPic from '/public/logo/logo-gym.jpg'
import { useStyles } from "./styles"
import Link from "next/link";



function Logo() {
  const {classes} = useStyles();
  return(
    <>
    <div>
      <Link href="/main">
        <Image
          src={LogoPic}
          alt="The gym fitness studio"
          className={classes.logo}
          priority
      />
      </Link>
    </div>
  </>
  )
}

export default Logo