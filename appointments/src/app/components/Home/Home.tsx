import Image from "next/image";
import saludDental from "@/../public/salud-dental.png"
import Link from "next/link";

const Homepage = () => {
    return (
        <section className="mt-[40px] mx-[300px] p-[30px] bg-[#5a7856]">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center text-black hover:opacity-80 transition duration-300">
                    <Image src={saludDental} alt="Diente" width={25} height={20} />
                    <h1 className="text-2xl text-white ml-2 font-semibold">
                        Juárez Odontología
                    </h1>
                </Link>
                <Link href="/appointment" className="text-white text-xl hover:text-gray-300 transition duration-300">
                    Ver Turnos
                </Link>
            </div>
        </section>

    )
}

export default Homepage;