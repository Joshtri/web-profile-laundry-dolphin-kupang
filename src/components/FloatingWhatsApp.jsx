// FloatingWhatsApp.jsx
import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleWhatsAppClick = (phoneNumber) => {
    window.open(`https://wa.me/${phoneNumber}?text=Halo%20Dolphin%20Laundry,%20saya%20ingin%20memesan%20layanan%20laundry`, '_blank');
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl transition-transform"
        aria-label="Hubungi kami via WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>
      
      {/* Modal Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl font-bold mb-4">Pilih Nomor WhatsApp</h2>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full mb-2 flex items-center justify-center"
                onClick={() => handleWhatsAppClick('+6281529500130')}
              >
                <FaWhatsapp className="mr-2 text-lg" />
                Hubungi Nomor Pertama
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full flex items-center justify-center"
                onClick={() => handleWhatsAppClick('+6282144500030')}
              >
                <FaWhatsapp className="mr-2 text-lg" />
                Hubungi Nomor Kedua
              </button>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center justify-center w-full transition duration-300"
                onClick={closeModal}
              >
                <FaTimes className="mr-2 text-lg" />
                Batal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingWhatsApp;