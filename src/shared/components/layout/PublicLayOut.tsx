import Footer from "../organsims/Footer";
import NavBar from "../organsims/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function PublicLayOut({ children }: Props) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
