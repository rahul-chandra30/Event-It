import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (

        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href=" /">
                    <Image src="/assets/images/logo.jpg" alt="logo footer" height={38} width={128} />
                </Link>
                <p>2024 Evnt-It ● All Rights reserved</p>

            </div>
        </footer >
    )
}

export default Footer
