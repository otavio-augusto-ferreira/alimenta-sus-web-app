"use client"
import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { X, Download, FileText } from 'lucide-react';

// Definimos o que o componente pode fazer (abrir o modal)
export interface HubRecursosHandle {
  openModal: () => void;
}

const HubRecursos = forwardRef<HubRecursosHandle, {}>((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const pdfUrl = "/guias/guia-alimentar.pdf";

  useImperativeHandle(ref, () => ({
    openModal: () => setShowModal(true)
  }));

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl h-[90vh] rounded-[30px] overflow-hidden flex flex-col shadow-2xl">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-[#004D33]">Guia Alimentar Infantil</h3>
          <div className="flex gap-2 text-gray-600">
            <a href={pdfUrl} download className="p-2 hover:bg-gray-200 rounded-full"><Download size={20} /></a>
            <button onClick={() => setShowModal(false)} className="p-2 hover:bg-red-100 rounded-full text-red-500"><X size={20} /></button>
          </div>
        </div>
        <div className="flex-1 bg-gray-200">
          <iframe src={`${pdfUrl}#toolbar=0`} className="w-full h-full border-none" title="Guia" />
        </div>
        <div className="p-4 text-center bg-white">
          <button onClick={() => setShowModal(false)} className="px-8 py-2 bg-[#004D33] text-white rounded-full font-medium">Fechar</button>
        </div>
      </div>
    </div>
  );
});

HubRecursos.displayName = "HubRecursos";
export default HubRecursos;