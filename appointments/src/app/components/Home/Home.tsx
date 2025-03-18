import Image from "next/image";
import saludDental from "@/../public/salud-dental.png"

const Homepage = () => {
    return (
        <div className="flex justify-center mt-[40px] ml-[300px] mr-[300px] p-[30px] bg-[#5a7856]">
            <Image
                src={saludDental}
                alt="Diente"
                width={25}
                height={20}
            />
            <h1 className="text-2xl text-white ml-1">Juárez Odontología</h1>

        </div>
    )
}

export default Homepage;