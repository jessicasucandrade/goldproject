import { Shield, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <Shield className="text-white" size={18} />
              </div>
              <h3 className="text-xl font-bold">Gold Auditoria em Saúde</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Qualidade, transparência e eficiência em gestão de saúde.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-gray-400 hover:text-amber-400 transition-colors">Auditoria Concorrente</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-amber-400 transition-colors">Auditoria Retrospectiva</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-amber-400 transition-colors">Auditoria Técnica</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-amber-400 transition-colors">Consultoria em Gestão</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-gray-400 hover:text-amber-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-amber-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-amber-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <span className="text-gray-400">(XX) XXXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" size={16} />
                <span className="text-gray-400">contato@goldauditoria.com.br</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <span className="text-gray-400">Av. Exemplo, 123, Centro</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Gold Auditoria em Saúde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}