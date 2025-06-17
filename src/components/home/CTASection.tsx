export default function CTASection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-800 dark:to-teal-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para economizar em suas compras?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Baixe agora o B-Market e transforme sua experiência de compras.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition-colors">
            Download App
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
            Ver demonstração
          </button>
        </div>
      </div>
    </section>
  );
}
