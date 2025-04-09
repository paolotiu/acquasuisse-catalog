import PhoneIcon from "../../assets/icons/PhoneIcon"
import MailIcon from "../../assets/icons/MailIcon"

export default function Footer({ sitemap }) {
  return (
    <footer className="bg-primary font-body text-sm p-12.5 pb-25 relative absolute bottom-0 flex w-full gap-7">
      {sitemap.map(link =>
        <div className="flex flex-col gap-3 px-2.5">
          <h1 className="text-white/50 text-sm/6 font-semibold uppercase">{link.heading}</h1>
          <ul className="text-white flex flex-col gap-4.5">
            {link.sublinks.map(sublink =>
              <li><a href={sublink.href}>{sublink.name}</a></li>
            )}
          </ul>
        </div>
      )}
      <div className="flex flex-col gap-3 px-2.5">
        <h1 className="text-white/50 font-semibold uppercase">Contact</h1>
        <ul className="text-white flex flex-col gap-4.5">
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