import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import EndScripts from '../components/EndScripts';
import ScrollUp from '../components/ScrollUp';
import Breatcam from '../components/Breatcam';

export default function Donate() {
  return (
    <>
      <Navbar />
      <Breatcam breadcrumbs={["Donations", "Online"]}>
      Give Back <span>Dignity</span> to the Homeless.
      </Breatcam>
    </>
  );
}
