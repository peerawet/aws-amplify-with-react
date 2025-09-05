import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import PageTwo from "./PageTwo";
import Modal from "./Modal";

const Resume = () => {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center py-4">
      {/* Resume Container */}
      <div className="flex flex-col gap-20 items-center">
        {/* Page 1 */}
        <div className="a4 text-slate-900 overflow-hidden flex flex-col relative rounded-2xl shadow-2xl border border-slate-200">
          <Header />
          <div className="flex-1 flex flex-row gap-6 px-6 py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            <Sidebar />
            <MainContent onOpenModal={openModal} />
          </div>
        </div>

        {/* Page 2 */}
        <PageTwo onOpenModal={openModal} />
      </div>

      {modalImage && (
        <Modal src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />
      )}
    </div>
  );
};

export default Resume;
