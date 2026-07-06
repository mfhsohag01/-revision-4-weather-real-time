import { useEffect, useRef, useState } from "react";
import Favorite from "./Favorite";
import FavoriteListModal from "./FavoriteListModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showFevModal, setShowFevModal] = useState(false);
  const favoriteWrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        favoriteWrapperRef.current &&
        !favoriteWrapperRef.current.contains(event.target)
      ) {
        setShowFevModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <Search />
          <div ref={favoriteWrapperRef} className="relative">
            <Favorite onShow={() => setShowFevModal(!showFevModal)} />
            {showFevModal && <FavoriteListModal />}
          </div>
        </div>
      </nav>
    </header>
  );
}
