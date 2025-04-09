import PhoneIcon from "../../assets/icons/PhoneIcon"
import MailIcon from "../../assets/icons/MailIcon"

export default function Footer({ sitemap }) {
  return (
    <footer className="bg-primary font-body text-sm md:p-12.5 md:pb-25 p-7.5 pb-15 relative absolute bottom-0 flex md:flex-row flex-col w-full md:gap-7 gap-12.5">
      {sitemap.map(link =>
        <div className="flex flex-col gap-3 px-2.5">
          <h1 className="text-white/50 text-sm/6 font-semibold uppercase">{link.heading}</h1>
          <ul className="text-white flex md:flex-col flex-row md:gap-4.5 gap-8">
            {link.sublinks.map(sublink =>
              <li><a href={sublink.href}>{sublink.name}</a></li>
            )}
          </ul>
        </div>
      )}
      <div className="flex flex-col gap-3 px-2.5">
        <h1 className="text-white/50 text-sm/6 font-semibold uppercase">Contact</h1>
        <ul className="text-white flex flex-col md:gap-4.5 gap-3">
          <li className="flex items-center gap-1.5">
            <PhoneIcon className="stroke-white fill-none h-4" />
            (+63) 915 560 6578
          </li>
          <li className="flex items-center gap-1.5">
            <MailIcon className="stroke-white fill-none h-4" />
            <a href="mailto:acquasuisseparfums@gmail.com">acquasuisseparfums@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}