import React from 'react';
import Image from 'next/image';
import Button from '../components/ui/button';
import Card from '../components/ui/card';

const IMAGES: string[] = [
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg'
];

export default function Page(): JSX.Element {
  return (
    <>
      <section className="py-12">
        <div className="container grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <h1 className="text-3xl font-bold">Garber Bros, Inc.</h1>
            <p className="mt-4 text-base leading-relaxed">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
            <div className="mt-6">
              <Button href="/vessels" variant="primary">View Our Fleet of Vessels</Button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <a href="javascript:previousSlide6347994()">Prev</a>
              <span className="mx-2">•</span>
              <a href="javascript:nextSlide6347994()">Next</a>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="hero-image-wrap aspect-16-9">
              <div style={{ position: 'absolute', inset: 0 }}>
                {(() => {
                  const safeSrc = encodeURI(IMAGES[0]);
                  return (
                    <Image
                      src={safeSrc}
                      alt="Our vessels"
                      unoptimized
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="react-image"
                    />
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Featured</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="aspect-4-3 mb-4 hero-image-wrap">
                <div style={{ position: 'absolute', inset: 0 }}>
                  {(() => {
                    const safeSrc = encodeURI(IMAGES[0]);
                    return (
                      <Image src={safeSrc} alt="Vessels overview" unoptimized fill sizes="100vw" className="react-image" />
                    );
                  })()}
                </div>
              </div>
              <h3 className="text-lg font-semibold">Our Vessels</h3>
              <p className="mt-2">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
              <div className="mt-4">
                <a href="/vessels" className="yellow-button">View Our Vessels »</a>
              </div>
            </Card>

            <Card>
              <div className="aspect-4-3 mb-4 hero-image-wrap">
                <div style={{ position: 'absolute', inset: 0 }}>
                  {(() => {
                    const safeSrc = encodeURI(IMAGES[1]);
                    return (
                      <Image src={safeSrc} alt="Employment application" unoptimized fill sizes="100vw" className="react-image" />
                    );
                  })()}
                </div>
              </div>
              <h3 className="text-lg font-semibold">Employment</h3>
              <p className="mt-2">Interested in working at Garber Bros? Download our employment application.</p>
              <div className="mt-4 flex flex-col gap-2">
                <a href="/websites/garberbrosinc/images/application.pdf" className="yellow-button">View Our Employment Application »</a>
                <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-sm text-gray-700">Apply Online</a>
              </div>
            </Card>

            <Card>
              <div className="aspect-4-3 mb-4 hero-image-wrap">
                <div style={{ position: 'absolute', inset: 0 }}>
                  {(() => {
                    const safeSrc = encodeURI(IMAGES[2]);
                    return (
                      <Image src={safeSrc} alt="Contact Garber Bros" unoptimized fill sizes="100vw" className="react-image" />
                    );
                  })()}
                </div>
              </div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="mt-2">To contact Garber Bros Inc regarding vessel availability, click here.</p>
              <div className="mt-4">
                <a href="/contact" className="yellow-button">Contact Garber Bros Inc »</a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.isArray(IMAGES) ? (Array.isArray(IMAGES) ? IMAGES : []).map((src, idx) => {
              const safeSrc = encodeURI(src);
              return (
                <div key={idx} className="card">
                  <div className="aspect-4-3 mb-3 hero-image-wrap">
                    <div style={{ position: 'absolute', inset: 0 }}>
                      <Image src={safeSrc} alt={`Gallery image ${idx + 1}`} unoptimized fill sizes="(max-width: 640px) 100vw, 33vw" className="react-image" />
                    </div>
                  </div>
                </div>
              );
            }) : null}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4">More</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="/about" className="card">About Us</a>
            <a href="/lock-status" className="card">Lock Status</a>
            <a href="/barges" className="card">Barges</a>
            <a href="contact.aspx" className="card">Contact (legacy)</a>
            <a href="#" className="card">Back to top</a>
          </div>
        </div>
      </section>
    </>
  );
}
