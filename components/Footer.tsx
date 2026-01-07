import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t mt-12">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© Copyright 2015 by <span>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="flex items-center gap-6">
          <a href="/transparency-in-coverage" className="footer-link">Transparency in Coverage</a>
          <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="footer-link">Employment Portal</a>
          <a href="contact.aspx" className="footer-link">Contact (legacy)</a>
        </div>
      </div>
    </footer>
  );
}
