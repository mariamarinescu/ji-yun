import { SocialMediaContactRow, getNavLinkCollection } from '.';
import { footerAndHeaderSharedClassName } from './utils';

export const Footer = () => {
  const footerNavLinkCollection = getNavLinkCollection({
    id: 'footer',
    className: 'inline-block',
  });

  return (
    <footer className={footerAndHeaderSharedClassName}>
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-xl font-semibold">Contact</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="w-fit">
            <h3 className="mb-2 text-xl font-semibold">Quick Links</h3>
            {footerNavLinkCollection.map((link) => link)}
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex-1" />
          <div className="flex w-fit flex-col content-end align-bottom">
            <h3 className="mb-2 text-xl font-semibold">Follow</h3>
            <SocialMediaContactRow baseId="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
