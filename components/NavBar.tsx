import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <span>Home</span>
      </Link>
      <Link href="/about" legacyBehavior>
        About
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
