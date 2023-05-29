import KotakTeks from "./KotakTeks";
import Tombol from "./Tombol";

export default function Login(){
    return(
        <>
            <KotakTeks kolom="email" ph="Email"/>
            <KotakTeks kolom="password" ph="Password"/>
            <Tombol>Login</Tombol>
        </>
    )
}