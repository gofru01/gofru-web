import Link from 'next/link'


export default function Header() {
    return(
        <div>
        <ul className='navbar'>
          <li> <Link href="/"><a className="active" >Gofru</a></Link></li>
          <ul style={{float:"right"}}>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/contact"><a >Contact</a></Link></li>
          </ul>
        </ul>
      </div>
    )
  }