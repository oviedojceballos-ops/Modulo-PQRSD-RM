/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { ProjectStatusView } from './components/ProjectStatusView';
import { TechnicalDocView } from './components/TechnicalDocView';
import { UserManualView } from './components/UserManualView';
import { DeliverablesView } from './components/DeliverablesView';
import { RequirementsManagerView } from './components/RequirementsManagerView';
import { DownloadsView } from './components/DownloadsView';
import { APP_METADATA } from './data/appData';
import {
  FileText,
  Activity,
  Layers,
  BookOpen,
  ClipboardCheck,
  ListTodo,
  Download,
  ExternalLink,
  ShieldCheck,
  Heart
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('status');

  const handleOpenDocDirect = () => {
    setActiveTab('technical');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-500 selection:text-white">
      
      {/* Top Navigation Bar with Developer Logo and Direct Access */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDocDirect={handleOpenDocDirect}
      />

      {/* Main Container Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {activeTab === 'status' && (
          <ProjectStatusView
            onGoToDocumentation={() => setActiveTab('technical')}
            onGoToManual={() => setActiveTab('manual')}
            onGoToDeliverables={() => setActiveTab('deliverable')}
          />
        )}

        {activeTab === 'technical' && <TechnicalDocView />}

        {activeTab === 'manual' && <UserManualView />}

        {activeTab === 'deliverable' && <DeliverablesView />}

        {activeTab === 'requirements' && <RequirementsManagerView />}

        {activeTab === 'downloads' && <DownloadsView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <img
              src={APP_METADATA.developerLogo}
              alt="Logo Desarrollador"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-800">
                {APP_METADATA.concessionName}
              </span>
              <span className="block text-[11px] text-slate-400">
                Sistema PQRSD desarrollado en AppSheet · Versión {APP_METADATA.version}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <button
              onClick={() => setActiveTab('technical')}
              className="hover:text-slate-900 transition-colors"
            >
              Doc Técnica
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('manual')}
              className="hover:text-slate-900 transition-colors"
            >
              Manual Usuario
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('requirements')}
              className="hover:text-slate-900 transition-colors"
            >
              Requerimientos
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('downloads')}
              className="hover:text-slate-900 transition-colors font-semibold text-emerald-700"
            >
              Descargas
            </button>
          </div>

          <div className="text-xs text-slate-400 text-center md:text-right font-mono text-[11px]">
            © {new Date().getFullYear()} Concesión Vial Ruta Magdalena Sierra Mar
          </div>

        </div>
      </footer>

    </div>
  );
}
