import React, { createContext, useContext, ReactNode } from 'react';

export interface BrandStore {
  brand: {
    name: string;
    phone: string;
    email: string;
    address: string;
    whatsappNumber: string;
  };
  services: Array<{
    id: string;
    name: string;
    description: string;
    materials: string[];
  }>;
}

const defaultStore: BrandStore = {
  brand: {
    name: "JJGans Metais e Serviços",
    phone: "+55 41 98851-1192",
    email: "jjgans@hotmail.com", 
    address: "BR 277, KM 105, 8751 – Vila Nova – Campo Largo – PR",
    whatsappNumber: "5541988511192",
  },
  services: [
    {
      id: "laser-cutting",
      name: "Corte a Laser",
      description: "Corte de precisão em diversos materiais metálicos com tecnologia laser de última geração.",
      materials: ["Inox", "Aço Carbono", "Alumínio"],
    },
    {
      id: "welding-bending", 
      name: "Solda & Dobra",
      description: "Serviços de soldagem e dobra para fabricação de peças e estruturas metálicas.",
      materials: ["Inox", "Aço Carbono", "Alumínio"],
    },
    {
      id: "fabrication",
      name: "Fabricação de Peças",
      description: "Fabricação customizada de peças metálicas sob medida para diversos segmentos industriais.",
      materials: ["Inox", "Aço Carbono", "Alumínio"],
    },
  ],
};

const StoreContext = createContext<BrandStore>(defaultStore);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={defaultStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const getWhatsAppLink = (service: string = "corte a laser") => {
  return `https://wa.me/${defaultStore.brand.whatsappNumber}?text=${encodeURIComponent(
    `Olá, gostaria de solicitar um orçamento para ${service}.`
  )}`;
};

export const formatBRL = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};