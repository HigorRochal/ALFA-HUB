import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Users, Layers, ShieldCheck, Zap, ArrowLeft, Play, Shield, Trophy } from 'lucide-react';
import { CATEGORIES, Category, Video } from './constants';
import { ChatAssistant } from './components/ChatAssistant';
import { cn } from './lib/utils';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="min-h-screen bg-black flex flex-col font-sans selection:bg-alpha-red selection:text-white overflow-x-hidden radial-gradient-bg">
      {/* Visual Overlays */}
      <div className="noise-overlay" />
      <div className="grid-overlay" />
      <div 
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 0, 0, 0.05), transparent 80%)`
        }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => { setSelectedCategory(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="text-alpha-red font-black text-2xl italic">A</span>
            <span className="text-white/20 font-light text-xl">|</span>
            <span className="text-white font-black text-xl italic tracking-tighter">ALPHA HUB</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-white">
            <button onClick={() => { setSelectedCategory(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-alpha-red transition-all duration-300 relative group">
              INÍCIO
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-alpha-red transition-all duration-300 group-hover:w-full" />
            </button>
            <span className="text-white/20">·</span>
            <button onClick={scrollToCategories} className="hover:text-alpha-red transition-all duration-300 relative group">
              PILARES
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-alpha-red transition-all duration-300 group-hover:w-full" />
            </button>
            <span className="text-white/20">·</span>
            <button onClick={() => alert('Comunidade Alpha em breve!')} className="hover:text-alpha-red transition-all duration-300 relative group">
              COMUNIDADE
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-alpha-red transition-all duration-300 group-hover:w-full" />
            </button>
          </div>

          {/* Action Button */}
          <button onClick={() => alert('Área VIP restrita a membros convidados.')} className="px-6 py-2 border border-white rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-alpha-red hover:border-alpha-red transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]">
            Área VIP
          </button>
        </div>
      </nav>

      <main className="flex-1 flex flex-col pt-20 relative z-10">
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col"
            >
              <div className="max-w-5xl mx-auto px-6 py-20 text-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block px-4 py-1.5 bg-red-950/30 border border-alpha-red/20 rounded-full mb-8 backdrop-blur-sm"
                >
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase flex items-center gap-2">
                    <span className="w-1 h-1 bg-alpha-red rounded-full animate-pulse" />
                    PERFORMANCE MASCULINA DE ELITE
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="text-7xl md:text-9xl font-black italic uppercase leading-[0.85] mb-10 tracking-tighter"
                >
                  <span className="text-white block">ELEVE SUA</span>
                  <span className="bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent block">
                    TESTOSTERONA
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="text-lg md:text-xl text-white/60 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                  Método científico para aumentar testosterona naturalmente, transformar sua aparência e desenvolver a mentalidade de um homem de alto valor em 90 dias.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
                >
                  <button onClick={scrollToCategories} className="group w-full sm:w-auto px-10 py-5 bg-alpha-red text-white font-black uppercase italic tracking-widest rounded-xl flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 red-glow-strong">
                    Começar Agora <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                  </button>
                  <button onClick={scrollToCategories} className="w-full sm:w-auto px-10 py-5 bg-black border border-white/20 text-white font-black uppercase italic tracking-widest rounded-xl hover:bg-white hover:text-black transition-all duration-500">
                    Ver os Pilares
                  </button>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'HOMENS TRANSFORMADOS', value: '47k+', icon: <Users className="w-5 h-5" /> },
                    { label: 'PILARES DE EVOLUÇÃO', value: '8', icon: <Layers className="w-5 h-5" /> },
                    { label: 'MÉTODO NATURAL', value: '100%', icon: <ShieldCheck className="w-5 h-5" /> },
                    { label: 'HORMÔNIO BASE', value: 'Testosterona', icon: <Zap className="w-5 h-5" /> },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center group hover:border-alpha-red/30 hover:bg-white/[0.05] transition-all duration-500"
                    >
                      <div className="text-alpha-red mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)] transition-all duration-500">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-black text-white italic uppercase tracking-tighter mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Categories Section */}
              <div ref={categoriesRef} className="max-w-7xl mx-auto px-6 py-24 w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between mb-12"
                >
                  <h2 className="text-4xl font-black italic uppercase">Pilares de Evolução</h2>
                  <div className="h-px flex-1 bg-white/10 mx-8 hidden md:block"></div>
                  <span className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">Protocolo Alpha Hub</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {CATEGORIES.map((category, i) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      onClick={() => {
                        setSelectedCategory(category);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-alpha-red/40 transition-all duration-700 shadow-2xl"
                    >
                      <img
                        src={category.image}
                        alt={category.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <motion.div 
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 + (0.1 * i) }}
                          className={cn("text-5xl mb-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]", category.color)}
                        >
                          {category.icon}
                        </motion.div>
                        <h3 className="text-2xl font-black italic uppercase leading-tight mb-2 group-hover:text-alpha-red transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-xs text-white/50 font-medium uppercase tracking-wider group-hover:text-white/80 transition-colors">
                          {category.subtitle}
                        </p>
                        
                        <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-all duration-300">
                          Ver Conteúdo <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="category-detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="px-6 py-12 max-w-7xl mx-auto"
            >
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setActiveVideo(null);
                }}
                className="group flex items-center gap-2 text-white/50 hover:text-white mb-10 transition-colors uppercase text-[10px] font-bold tracking-widest"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Voltar para Início
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left: Info & Video List */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="lg:col-span-1"
                >
                  <div className="mb-10">
                    <div className={cn("text-6xl mb-6 animate-float", selectedCategory.color)}>{selectedCategory.icon}</div>
                    <h2 className="text-5xl font-black italic uppercase mb-4 leading-none tracking-tighter">{selectedCategory.title}</h2>
                    <p className="text-white/60 font-light leading-relaxed">{selectedCategory.subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-6">Aulas Disponíveis</h4>
                    {selectedCategory.videos.map((video, idx) => (
                      <motion.button
                        key={video.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setActiveVideo(video)}
                        className={cn(
                          "w-full p-4 rounded-xl border flex items-center gap-4 transition-all duration-500 text-left group",
                          activeVideo?.id === video.id
                            ? "bg-alpha-red border-alpha-red text-white shadow-[0_0_20px_rgba(255,0,0,0.2)]"
                            : "bg-white/[0.02] border-white/5 text-white/60 hover:bg-white/[0.05] hover:border-white/20"
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                          activeVideo?.id === video.id ? "bg-white/20" : "bg-black/40 group-hover:bg-black/60"
                        )}>
                          <Play className={cn("w-4 h-4 transition-all", activeVideo?.id === video.id ? "fill-white scale-110" : "fill-white/40 group-hover:fill-white/60")} />
                        </div>
                        <div>
                          <div className="text-sm font-bold uppercase italic tracking-tight">{video.title}</div>
                          <div className="text-[10px] opacity-60 font-medium tracking-wider">MÓDULO COMPLETO</div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Player */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  {activeVideo ? (
                    <div className="space-y-8">
                      <div className="aspect-video rounded-3xl overflow-hidden bg-black border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group">
                        <div className="absolute inset-0 bg-alpha-red/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                        <iframe
                          src={getEmbedUrl(activeVideo.url)}
                          className="w-full h-full relative z-10"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-8 border-white/5"
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-alpha-red/10 flex items-center justify-center border border-alpha-red/20">
                            <Shield className="w-6 h-6 text-alpha-red" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black italic uppercase tracking-tight">{activeVideo.title}</h3>
                            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Protocolo Alpha Hub v2.0</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-white/70 leading-relaxed font-light">
                          <div className="space-y-4">
                            <p className="font-bold text-white uppercase tracking-wider text-xs">O que você vai aprender:</p>
                            <ul className="space-y-3">
                              {[
                                "Mecanismos hormonais específicos para este pilar.",
                                "Ações práticas imediatas para aplicar hoje.",
                                "Erros comuns que destroem seu progresso."
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-alpha-red rounded-full mt-1.5 shadow-[0_0_5px_rgba(255,0,0,0.5)]" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-alpha-red/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-alpha-red/10 transition-colors" />
                            <p className="font-bold text-white uppercase tracking-wider mb-4 text-xs">Impacto Hormonal:</p>
                            <p className="italic text-white/80">"A consistência neste protocolo pode elevar seus níveis basais de testosterona livre em até 30% em 90 dias."</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="aspect-video rounded-3xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center p-12 bg-white/[0.01]">
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/5"
                      >
                        <Play className="w-8 h-8 text-white/10" />
                      </motion.div>
                      <h3 className="text-2xl font-black italic uppercase mb-2">Selecione uma Aula</h3>
                      <p className="text-white/30 max-w-xs text-sm font-light">Escolha um dos vídeos ao lado para iniciar seu treinamento de alta performance.</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-alpha-red rounded-lg flex items-center justify-center font-display font-black text-lg italic text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]">A</div>
              <span className="font-display font-black text-xl tracking-tighter italic text-white">ALPHA HUB</span>
            </div>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] text-center md:text-left">
              A maior plataforma de performance masculina do Brasil.
            </p>
          </div>
          
          <div className="flex justify-center gap-8">
            {[Zap, Shield, Trophy].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, color: "#ff0000" }}
                className="text-white/20 cursor-pointer transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            ))}
          </div>

          <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] text-center md:text-right">
            © 2026 ALPHA HUB — CIÊNCIA E PERFORMANCE MASCULINA.
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
}
