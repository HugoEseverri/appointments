import DateSelector from "./components/Calendar/Calendario";
import Homepage from "./components/Home/Home";
import { ToastContainer } from "react-toastify"; 

export default function Home() {
  return (
    <div>
      <ToastContainer/>
      <main>
        <Homepage/>
        <DateSelector/>

      </main>
      
    </div>
  );
}
