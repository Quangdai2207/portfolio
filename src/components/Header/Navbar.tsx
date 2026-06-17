import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import burgerAnimation from "../../assets/burger-menu-animation.json";

const cvLinks = "https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=4a3090f502&attid=0.1&permmsgid=msg-a:r1338123176172733559&th=19ed4f9806be49f3&view=att&disp=inline&realattid=19ed4f69d2aa6d1e1f21&zw&saddbat=ANGjdJ9L0kVSW4Ofys_VnHypZOZdhIOXaaAd8a2rnObEIisaxZRoNbjN58hhpKbFnEnSlKeB69IPNU5H3SJ4WHxsqo1ujLyclRSifI8SMLpHv9OxHSW7vpZvwXq5ICeEdrtOYzNd1TQfkTEyXzzrBIAzT8NGOBO-7AA4-W8oJEDP5sK_ey1MF5kHGxjf0mRhTdGYDmmTqN02W71sgEHH4H6nl_l8cw2JfZNLf9W136icfG5xZvv-yXNGh7Zo6qkpoJYUNVZux2ICCCFke6TnwvJIslxrXh2r2y0nMWzW95bxCU5wTgLfuZq7j9NMrt4lVLerM7hPYq4Er5wvOdWDqPgm0Oh7p1HdRruqBLLIlUB3--Khol-qxmV-PH8FBz-ixJ9N8Vamucy32OhrRq_m0QB0OJhdOgGLuIOuU7jXGfRL7tY_rz2oAgZHOOZ-XLRUmt0XFZIj2vEUOHnazbp9N3zQE5T6oJtGK3IOp1Rpjjx5EVedqWul7NWw6fs9luBRKjN78ynHUgKCifveTitWp6hYifraPdnq24mX2hh1fpv_nGvB71--Mv8dpXkUOt3NVLCq2GdDpvc4_rR4xlD6GWzaAwCvMUeMmVn8tVFukwMUqqVnRIgz4gXxULxjFtOpg7BkwjVtbM-iI8jHKfXH_29_LEXZmHJpdykXP7AxWkBT_379tB4gflGiTME3QJdFgcJsW-Mx5NPm8xW-LjakcOZRDrv3MT3CHqXgzJ_EYjgR2cXzS0e4iM66hkU_Z2zBBx7ptBM1QYt3fBUgJeRUqxKsi3MF3l5e5k-G1D50E7qfiwCVmTC3R7xF3QASV-wxCMzLvqDHIYGjBMCvacGhFnKofPFkVkQsNCKX0FyyOP3eDLAgrp4O_j2txBebl4-jSDT8vBAKlOu-KlfvFn18qolxrvv2D_VaS1YsZh_8Zyn-729F_pQdTa9VImRt_lJqpBjEnDB-tBqMBBmsrn0soukaqt86aaVrFYHBcPJF5yIPeJkrxD6yu8XeMspOu6M";
const navLinks = [
  { title: "About", link: "about", id: 0 },
  { title: "Skills", link: "skills", id: 1 },
  { title: "Projects", link: "projects", id: 2 },
  { title: "Favorite Sports", link: "sports", id: 3 },
  { title: "Contact", link: "contact", id: 4 },
  {
    title: "My CV",
    link: `${cvLinks}`,
    id: 5,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    isOpen
      ? lottieRef.current?.playSegments([60, 25], true)
      : lottieRef.current?.playSegments([25, 60], true);
  };

  return (
    <nav className="justify-between md:items-center md:flex max-w-3xl md:max-w-5xl mx-auto">
      <div className="flex items-center justify-between py-3 md:py-3 md:block">
        <div className="md:py-3 md:block">
          <h2 className="text-2xl font-bold">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <span>Trần Quang Đại</span>
            </ScrollLink>
          </h2>
        </div>
        <button
          className="p-2 text-gray-700 rounded-md outline-none md:hidden"
          onClick={toggleMenu}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={burgerAnimation}
            style={{ height: 30 }}
            loop={false}
            autoplay={false}
          />
        </button>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 overflow-hidden transition-all duration-700 md:max-h-screen  ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="md:flex md:space-x-6 md:space-y-0 pb-4 md:pb-0">
            {navLinks.map((item) => {
              if (item.title === "My CV") {
                return (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <ScrollLink
                    to={item.link}
                    className={
                      "block lg:inline-block text-gray-200  hover:text-gray-400 cursor-pointer transition p-2 md:p-0"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
