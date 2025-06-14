import { Poppins, Montserrat } from "next/font/google";
import "../styles/globals.css";
import {  Toaster } from "react-hot-toast";

// Cấu hình phông chữ Poppins
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"], // Chọn các trọng lượng cần thiết
    variable: "--font-poppins", // Tạo biến CSS để sử dụng
});

// Cấu hình phông chữ Montserrat
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"], // Chọn các trọng lượng cần thiết
    variable: "--font-montserrat", // Tạo biến CSS để sử dụng
});

export const metadata = {
    title: "BadmintonGear",
    description: "BadmintonGear Store",
    icons: {
        icon: "/images/logo.ico",
        shortcut: "/images/logo.ico",
        apple: "/images/logo.ico",
    },

};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
            <body className="antialiased ">
                {children}
                <Toaster position="top-right" />
            </body>
        </html>
    );
}
