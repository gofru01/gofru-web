import Link from 'next/link';



export default function Header() {
  return (
    
    <header class="header">
      <ul>
        <li> <Link href="/"><a>Gofru</a></Link></li>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
        <ul className="menu"  style={{ float: "right" }}>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Services</a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li><Link href="/contact"><a >Contact</a></Link></li>
        </ul>
      </ul>
      </header>

   
  )
}