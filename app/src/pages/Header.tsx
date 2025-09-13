import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <Shield className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Gold Auditoria em Saúde</h1>
          </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-gray-600 hover:text-amber-600 transition-colors">Sobre Nós</a>
              <a href="#servicos" className="text-gray-600 hover:text-amber-600 transition-colors">Serviços</a>
              <a href="#contato" className="text-gray-600 hover:text-amber-600 transition-colors">Contato</a>
            </nav>
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 mt-3">
              <Link to="#sobre" className="text-gray-600 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
              <Link to="#servicos" className="text-gray-600 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
              <Link to="#contato" className="text-gray-600 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}