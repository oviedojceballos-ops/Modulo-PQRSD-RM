import React from 'react';
import {
  FileText,
  Activity,
  BookOpen,
  ClipboardCheck,
  ListTodo,
  Download,
  Layers,
  ChevronRight
} from 'lucide-react';
import { APP_METADATA } from '../data/appData';

export type ActiveTab = 'status' | 'technical' | 'manual' | 'deliverable' | 'requirements' | 'downloads';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDocDirect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenDocDirect
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Zone 1: Developer Logo & App Identifier */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); setActiveTab('status'); }}
              className="flex items-center gap-3 group focus:outline-none"
              title="Portal Técnico PQRSD Ruta Magdalena Sierra Mar"
            >
              <div className="h-12 flex items-center bg-white p-1 rounded border border-slate-200 shadow-xs">
                <img
                  src={APP_METADATA.developerLogo}
                  alt="Logo Desarrollador Oviedo Ceballos"
                  className="h-10 w-auto object-contain max-w-[160px] sm:max-w-[200px]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to text initials if remote image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 tracking-tight text-sm">
                    Ruta Magdalena Sierra Mar
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    AppSheet
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  Portal Técnico & Guía de PQRSD
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: Navigation Links (Clean single-line text tabs) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => setActiveTab('status')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'status'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Estado del Proyecto</span>
            </button>

            <button
              onClick={() => setActiveTab('technical')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'technical'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Documentación Técnica</span>
            </button>

            <button
              onClick={() => setActiveTab('manual')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'manual'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Manual de Usuario</span>
            </button>

            <button
              onClick={() => setActiveTab('deliverable')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'deliverable'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ClipboardCheck className="w-4 h-4 text-indigo-600" />
              <span>Entregable & Pruebas</span>
            </button>

            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'requirements'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ListTodo className="w-4 h-4 text-violet-600" />
              <span>Requerimientos</span>
            </button>

            <button
              onClick={() => setActiveTab('downloads')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'downloads'
                  ? 'bg-slate-100 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>Descargas</span>
            </button>
          </nav>

          {/* Zone 3: Direct Access Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenDocDirect}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
              title="Acceso directo a la documentación oficial y manuales"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Ver Documentación</span>
              <span className="sm:hidden">Docs</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2.5 border-t border-slate-100 no-scrollbar">
          <button
            onClick={() => setActiveTab('status')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 ${
              activeTab === 'status' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Estado Proyecto
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 ${
              activeTab === 'technical' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Doc Técnica
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 ${
              activeTab === 'manual' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Manual Usuario
          </button>
          <button
            onClick={() => setActiveTab('deliverable')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 ${
              activeTab === 'deliverable' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Entregable & Pruebas
          </button>
          <button
            onClick={() => setActiveTab('requirements')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 ${
              activeTab === 'requirements' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Requerimientos
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 ${
              activeTab === 'downloads' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Descargas
          </button>
        </div>
      </div>
    </header>
  );
};
