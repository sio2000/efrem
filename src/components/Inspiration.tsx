const gallery = [
  {
    title: 'Ποδηλάτες',
    image: '/assets/cyclists.jpg',
  },
  {
    title: 'Άνδρας στο γυμναστήριο',
    image: '/assets/manatgym.jpg',
  },
  {
    title: 'Προπόνηση',
    image: '/assets/training.jpg',
  },
  {
    title: 'Γυναίκα δρομέας',
    image: '/assets/womanrunner.jpg',
  },
  {
    title: 'Γυναίκα σε προπόνηση',
    image: '/assets/womantraining.jpg',
  },
  {
    title: 'Γυναίκα προπονείται έξω',
    image: '/assets/womantrainningoutside.jpg',
  },
];

const Inspiration = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold gradient-text mb-10 drop-shadow-lg text-center">Inspiration Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gallery.map((item, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-2xl group h-64">
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[4000ms] ease-in-out animate-zoom-gallery"
                  style={{ animationDelay: `${idx * 1.2}s` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex items-end">
                <h3 className="text-white text-2xl font-bold drop-shadow-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration; 