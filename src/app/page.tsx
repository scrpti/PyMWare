"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">PyMWare</h1>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className={`space-x-4 md:flex ${menuOpen ? "block" : "hidden"}`}>
            <a onClick={() => scrollTo("hero")} className="cursor-pointer hover:text-indigo-600">Inicio</a>
            <a onClick={() => scrollTo("about")} className="cursor-pointer hover:text-indigo-600">Qué es</a>
            <a onClick={() => scrollTo("features")} className="cursor-pointer hover:text-indigo-600">Características</a>
            <a onClick={() => scrollTo("how")} className="cursor-pointer hover:text-indigo-600">Cómo funciona</a>
            <a onClick={() => scrollTo("projects")} className="cursor-pointer hover:text-indigo-600">Proyectos</a>
            <a onClick={() => scrollTo("cta")} className="cursor-pointer hover:text-indigo-600">Empieza</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col items-center justify-center py-32 px-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Automatiza. <span className="text-indigo-600">Conecta.</span> Escala.
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10 text-gray-700">
          PyMWare es tu plataforma para integrar <span className="font-semibold">IA</span>,
          automatizaciones y herramientas como <span className="font-semibold">Notion</span> y <span className="font-semibold">WhatsApp</span> de forma fácil y poderosa.
        </p>
        <a
          onClick={() => scrollTo("cta")}
          className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-indigo-700 transition duration-300 cursor-pointer"
        >
          🚀 Probar PyMWare
        </a>
      </motion.section>
      
      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">¿Qué es PyMWare?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          PyMWare es una plataforma modular que conecta herramientas, automatiza tareas y potencia tus flujos de trabajo con inteligencia artificial. Diseñada para developers, freelancers y pequeñas empresas que quieren crecer sin fricción.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Características principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Integraciones rápidas</h3>
            <p className="text-gray-600">Conecta fácilmente con Notion, WhatsApp, Discord, Google Sheets y más.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Automatización inteligente</h3>
            <p className="text-gray-600">Configura flujos personalizados y deja que PyMWare trabaje por vos.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Fácil de usar</h3>
            <p className="text-gray-600">Una interfaz clara, con lógica sencilla y pensada para todos los niveles.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">¿Cómo funciona?</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12">
          PyMWare se basa en módulos conectables que interactúan con APIs populares. Elegís las herramientas, definís reglas, y PyMWare se encarga del resto.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">1. Seleccioná tus herramientas</h3>
            <p className="text-gray-600">Notion, WhatsApp, bases de datos, IA y más.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">2. Definí tu flujo</h3>
            <p className="text-gray-600">Crea automatizaciones simples o complejas sin complicaciones.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">3. Ejecutalo y olvidate</h3>
            <p className="text-gray-600">PyMWare trabaja en segundo plano por vos.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 px-6 bg-white text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Proyectos realizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Gestión de stock para panadería</h3>
            <p className="text-gray-600">Integración con Notion y WhatsApp para controlar inventario en tiempo real.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Bot de soporte en Discord</h3>
            <p className="text-gray-600">Un asistente automatizado que responde consultas técnicas usando IA y documentación interna.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Dashboard para analítica educativa</h3>
            <p className="text-gray-600">Visualización de datos académicos conectando APIs de Google Sheets y Notion.</p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para empezar?</h2>
        <p className="text-xl mb-8">Unite a la comunidad de creadores que están automatizando el futuro con PyMWare.</p>
        <a
          href="https://wa.me/34644451595?text=Hola%20PyMWare,%20quiero%20probar%20la%20plataforma!"
          className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium shadow hover:bg-gray-100 transition duration-300"
        >
          🌟 Probar gratis
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PyMWare. Todos los derechos reservados.
        <br />
        Hecho con ❤️ por <a href="https://github.com/scrpti">scrpti</a>.
      </footer>
    </main>
  );
}